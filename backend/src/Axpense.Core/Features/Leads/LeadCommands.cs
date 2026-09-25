using Axpense.Core.Abstractions;
using Axpense.Core.Common.Cqrs;
using Axpense.Core.Common.Results;
using Axpense.Core.Common.Security;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;

namespace Axpense.Core.Features.Leads;

// ---------- Submit (public website form) ----------
public sealed record SubmitLeadCommand(SubmitLeadModel Model) : CreateCommand<SubmitLeadModel, LeadDto>(Model);

public sealed class SubmitLeadHandler(IUnitOfWork uow) : CreateCommandHandler<SubmitLeadCommand, SubmitLeadModel, Lead, LeadDto>(uow)
{
    protected override Lead Map(SubmitLeadModel m) => new()
    {
        Name = m.Name.Trim(),
        Company = m.Company.Trim(),
        Email = m.Email.Trim().ToLowerInvariant(),
        Phone = m.Phone?.Trim(),
        CompanySize = m.CompanySize?.Trim(),
        AssetCount = m.AssetCount,
        Industry = string.IsNullOrWhiteSpace(m.Industry) ? "Other" : m.Industry.Trim(),
        Country = LeadMappings.InferCountry(m),
        Message = m.Message?.Trim(),
        SourcePage = string.IsNullOrWhiteSpace(m.SourcePage) ? "/" : m.SourcePage.Trim(),
        Channel = LeadMappings.InferChannel(m),
        Language = string.Equals(m.Lang, "ar", StringComparison.OrdinalIgnoreCase) ? ContentLanguage.Ar : ContentLanguage.En,
        Status = LeadStatus.New,
    };

    protected override LeadDto ToDto(Lead entity) => LeadMappings.Map(entity);
}

// ---------- Update status / owner ----------
public sealed record UpdateLeadCommand(Guid Id, UpdateLeadModel Model) : UpdateCommand<UpdateLeadModel, LeadDto>(Id, Model);

public sealed class UpdateLeadHandler(IUnitOfWork uow, IIdentityService identity)
    : UpdateCommandHandler<UpdateLeadCommand, UpdateLeadModel, Lead, LeadDto>(uow)
{
    protected override async Task<Error?> CheckAsync(Guid id, UpdateLeadModel model, CancellationToken ct)
    {
        if (model.OwnerId is not { } ownerId || model.ClearOwner) return null;
        var owner = await identity.FindByIdAsync(ownerId, ct);
        if (owner is null) return Error.NotFound("User", ownerId);
        if (owner.Role is not (Roles.Admin or Roles.Sales)) return Error.Validation("Leads can only be assigned to Admin or Sales users.");
        return null;
    }

    protected override void Apply(Lead lead, UpdateLeadModel model)
    {
        if (model.ClearOwner) lead.AssignTo(null);
        else if (model.OwnerId.HasValue) lead.AssignTo(model.OwnerId);
        if (model.Status.HasValue) lead.ChangeStatus(model.Status.Value);
    }

    protected override LeadDto ToDto(Lead entity) => LeadMappings.Map(entity);
}

// ---------- Notes ----------
public sealed record AddLeadNoteCommand(Guid LeadId, string Text) : ICommand<LeadNoteDto>;

public sealed class AddLeadNoteHandler(IUnitOfWork uow, IQueryableExecutor executor, ICurrentUser user)
    : ICommandHandler<AddLeadNoteCommand, LeadNoteDto>
{
    public async Task<Result<LeadNoteDto>> Handle(AddLeadNoteCommand request, CancellationToken ct)
    {
        var exists = await executor.AnyAsync(uow.Repository<Lead>().Query().Where(l => l.Id == request.LeadId), ct);
        if (!exists) return Error.NotFound(nameof(Lead), request.LeadId);

        var note = new LeadNote
        {
            LeadId = request.LeadId,
            Text = request.Text.Trim(),
            AuthorId = user.UserId,
            AuthorName = user.Name ?? "Team",
        };
        await uow.Repository<LeadNote>().AddAsync(note, ct);
        await uow.SaveChangesAsync(ct);
        return new LeadNoteDto(note.Id, note.Text, note.AuthorId, note.AuthorName, note.CreatedAt);
    }
}

// ---------- Bulk ----------
public sealed record BulkUpdateLeadsCommand(IReadOnlyList<Guid> Ids, LeadStatus? Status, Guid? OwnerId) : ICommand<int>;

public sealed class BulkUpdateLeadsHandler(IUnitOfWork uow, IQueryableExecutor executor, IIdentityService identity)
    : ICommandHandler<BulkUpdateLeadsCommand, int>
{
    public async Task<Result<int>> Handle(BulkUpdateLeadsCommand request, CancellationToken ct)
    {
        if (request.OwnerId is { } ownerId)
        {
            var owner = await identity.FindByIdAsync(ownerId, ct);
            if (owner is null || owner.Role is not (Roles.Admin or Roles.Sales))
                return Error.Validation("Leads can only be assigned to Admin or Sales users.");
        }
        var leads = await executor.ToListAsync(uow.Repository<Lead>().QueryTracked().Where(l => request.Ids.Contains(l.Id)), ct);
        foreach (var lead in leads)
        {
            if (request.OwnerId.HasValue) lead.AssignTo(request.OwnerId);
            if (request.Status.HasValue) lead.ChangeStatus(request.Status.Value);
        }
        await uow.SaveChangesAsync(ct);
        return leads.Count;
    }
}

public sealed record DeleteLeadCommand(Guid Id) : DeleteCommand(Id);
public sealed class DeleteLeadHandler(IUnitOfWork uow) : DeleteCommandHandler<DeleteLeadCommand, Lead>(uow);

public sealed record DeleteLeadsCommand(IReadOnlyList<Guid> Ids) : ICommand<int>;

public sealed class DeleteLeadsHandler(IUnitOfWork uow, IQueryableExecutor executor) : ICommandHandler<DeleteLeadsCommand, int>
{
    public async Task<Result<int>> Handle(DeleteLeadsCommand request, CancellationToken ct)
    {
        var repo = uow.Repository<Lead>();
        var leads = await executor.ToListAsync(repo.QueryTracked().Where(l => request.Ids.Contains(l.Id)), ct);
        foreach (var lead in leads) repo.Remove(lead);
        await uow.SaveChangesAsync(ct);
        return leads.Count;
    }
}
