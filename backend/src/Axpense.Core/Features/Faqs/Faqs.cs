using System.Linq.Expressions;
using Axpense.Core.Abstractions;
using Axpense.Core.Common.Cqrs;
using Axpense.Core.Common.Results;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;
using FluentValidation;

namespace Axpense.Core.Features.Faqs;

// ===== Models =====
public sealed record FaqDto(Guid Id, string Page, ContentLanguage Language, string Question, string Answer, bool IsPublished, int SortOrder);

public sealed record FaqModel
{
    public string Page { get; init; } = "home";
    public ContentLanguage Language { get; init; } = ContentLanguage.En;
    public string Question { get; init; } = string.Empty;
    public string Answer { get; init; } = string.Empty;
    public bool IsPublished { get; init; } = true;
}

public static class FaqMappings
{
    public static readonly Expression<Func<Faq, FaqDto>> ToDto = f =>
        new FaqDto(f.Id, f.Page, f.Language, f.Question, f.Answer, f.IsPublished, f.SortOrder);
    private static readonly Func<Faq, FaqDto> Compiled = ToDto.Compile();
    public static FaqDto Map(Faq f) => Compiled(f);
}

// ===== Commands =====
public sealed record CreateFaqCommand(FaqModel Model) : CreateCommand<FaqModel, FaqDto>(Model);

public sealed class CreateFaqHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : CreateCommandHandler<CreateFaqCommand, FaqModel, Faq, FaqDto>(uow)
{
    private int _nextOrder;

    protected override async Task<Error?> CheckAsync(FaqModel m, CancellationToken ct)
    {
        // New questions go to the end of their page list.
        var orders = await executor.ToListAsync(Uow.Repository<Faq>().Query()
            .Where(f => f.Page == m.Page && f.Language == m.Language).Select(f => f.SortOrder), ct);
        _nextOrder = orders.Count == 0 ? 0 : orders.Max() + 1;
        return null;
    }

    protected override Faq Map(FaqModel m) => new()
    {
        Page = m.Page.Trim().ToLowerInvariant(),
        Language = m.Language,
        Question = m.Question.Trim(),
        Answer = m.Answer.Trim(),
        IsPublished = m.IsPublished,
        SortOrder = _nextOrder,
    };

    protected override FaqDto ToDto(Faq entity) => FaqMappings.Map(entity);
}

public sealed record UpdateFaqCommand(Guid Id, FaqModel Model) : UpdateCommand<FaqModel, FaqDto>(Id, Model);

public sealed class UpdateFaqHandler(IUnitOfWork uow) : UpdateCommandHandler<UpdateFaqCommand, FaqModel, Faq, FaqDto>(uow)
{
    protected override void Apply(Faq f, FaqModel m)
    {
        f.Page = m.Page.Trim().ToLowerInvariant();
        f.Language = m.Language;
        f.Question = m.Question.Trim();
        f.Answer = m.Answer.Trim();
        f.IsPublished = m.IsPublished;
    }

    protected override FaqDto ToDto(Faq entity) => FaqMappings.Map(entity);
}

public sealed record DeleteFaqCommand(Guid Id) : DeleteCommand(Id);
public sealed class DeleteFaqHandler(IUnitOfWork uow) : DeleteCommandHandler<DeleteFaqCommand, Faq>(uow);

/// <summary>Moves a question one place up (-1) or down (+1) within its page.</summary>
public sealed record MoveFaqCommand(Guid Id, int Direction) : ICommand<bool>;

public sealed class MoveFaqHandler(IUnitOfWork uow, IQueryableExecutor executor) : ICommandHandler<MoveFaqCommand, bool>
{
    public async Task<Result<bool>> Handle(MoveFaqCommand request, CancellationToken ct)
    {
        var repo = uow.Repository<Faq>();
        var faq = await repo.GetByIdAsync(request.Id, ct);
        if (faq is null) return Error.NotFound(nameof(Faq), request.Id);

        var group = await executor.ToListAsync(repo.QueryTracked()
            .Where(f => f.Page == faq.Page && f.Language == faq.Language)
            .OrderBy(f => f.SortOrder).ThenBy(f => f.CreatedAt), ct);

        // Normalise orders first (0..n-1) so gaps or duplicates never break moving.
        for (var i = 0; i < group.Count; i++) group[i].SortOrder = i;
        var index = group.FindIndex(f => f.Id == faq.Id);
        var target = index + Math.Sign(request.Direction);
        if (index < 0 || target < 0 || target >= group.Count) return false;

        (group[index].SortOrder, group[target].SortOrder) = (group[target].SortOrder, group[index].SortOrder);
        await uow.SaveChangesAsync(ct);
        return true;
    }
}

// ===== Queries =====
public sealed record GetFaqsQuery(string? Page = null, ContentLanguage? Language = null, string? Search = null) : IQuery<List<FaqDto>>;

public sealed class GetFaqsHandler(IUnitOfWork uow, IQueryableExecutor executor) : IQueryHandler<GetFaqsQuery, List<FaqDto>>
{
    public async Task<Result<List<FaqDto>>> Handle(GetFaqsQuery r, CancellationToken ct)
    {
        var q = uow.Repository<Faq>().Query();
        if (!string.IsNullOrWhiteSpace(r.Page)) q = q.Where(f => f.Page == r.Page);
        if (r.Language.HasValue) q = q.Where(f => f.Language == r.Language);
        if (!string.IsNullOrWhiteSpace(r.Search))
        {
            var s = r.Search.Trim().ToLower();
            q = q.Where(f => f.Question.ToLower().Contains(s) || f.Answer.ToLower().Contains(s));
        }
        return await executor.ToListAsync(q.OrderBy(f => f.Page).ThenBy(f => f.SortOrder).Select(FaqMappings.ToDto), ct);
    }
}

/// <summary>Public: published FAQs for one page, in display order.</summary>
public sealed record GetPublicFaqsQuery(string Page, ContentLanguage Language) : IQuery<List<FaqDto>>;

public sealed class GetPublicFaqsHandler(IUnitOfWork uow, IQueryableExecutor executor) : IQueryHandler<GetPublicFaqsQuery, List<FaqDto>>
{
    public async Task<Result<List<FaqDto>>> Handle(GetPublicFaqsQuery r, CancellationToken ct) =>
        await executor.ToListAsync(uow.Repository<Faq>().Query()
            .Where(f => f.Page == r.Page && f.Language == r.Language && f.IsPublished)
            .OrderBy(f => f.SortOrder)
            .Select(FaqMappings.ToDto), ct);
}

// ===== Validation =====
public sealed class FaqModelValidator : AbstractValidator<FaqModel>
{
    public FaqModelValidator()
    {
        RuleFor(x => x.Page).NotEmpty().MaximumLength(50).Matches("^[a-zA-Z0-9-]+$").WithMessage("Page must be a slug like 'home' or 'en-eg'.");
        RuleFor(x => x.Language).IsInEnum();
        RuleFor(x => x.Question).NotEmpty().MaximumLength(300);
        RuleFor(x => x.Answer).NotEmpty().MaximumLength(2000);
    }
}

public sealed class CreateFaqValidator : AbstractValidator<CreateFaqCommand>
{
    public CreateFaqValidator() => RuleFor(x => x.Model).NotNull().SetValidator(new FaqModelValidator());
}

public sealed class UpdateFaqValidator : AbstractValidator<UpdateFaqCommand>
{
    public UpdateFaqValidator()
    {
        RuleFor(x => x.Id).NotEmpty();
        RuleFor(x => x.Model).NotNull().SetValidator(new FaqModelValidator());
    }
}

public sealed class MoveFaqValidator : AbstractValidator<MoveFaqCommand>
{
    public MoveFaqValidator() => RuleFor(x => x.Direction).Must(d => d is -1 or 1).WithMessage("Direction must be -1 or 1.");
}
