using System.Linq.Expressions;
using Axpense.Core.Abstractions;
using Axpense.Core.Common.Results;
using Axpense.Domain.Common;

namespace Axpense.Core.Common.Cqrs;

// ---------------------------------------------------------------------------
// Generic CRUD building blocks. Each feature declares small concrete
// commands/queries that inherit these, plus a handler that inherits the
// matching base handler and supplies only what is specific (mapping, filters).
// ---------------------------------------------------------------------------

public abstract record GetByIdQuery<TDto>(Guid Id) : IQuery<TDto>;

public abstract record DeleteCommand(Guid Id) : ICommand<bool>;

public abstract record CreateCommand<TModel, TDto>(TModel Model) : ICommand<TDto>;

public abstract record UpdateCommand<TModel, TDto>(Guid Id, TModel Model) : ICommand<TDto>;

public abstract record PagedQuery<TDto> : IQuery<PagedResult<TDto>>
{
    public int Page { get; init; } = 1;
    public int PageSize { get; init; } = 20;
    public string? Search { get; init; }
}

/// <summary>Loads one entity projected to a DTO.</summary>
public abstract class GetByIdQueryHandler<TQuery, TEntity, TDto>(IUnitOfWork uow, IQueryableExecutor executor)
    : IQueryHandler<TQuery, TDto>
    where TQuery : GetByIdQuery<TDto>
    where TEntity : BaseEntity
{
    protected IUnitOfWork Uow { get; } = uow;
    protected IQueryableExecutor Executor { get; } = executor;
    protected abstract Expression<Func<TEntity, TDto>> Projection { get; }

    public async Task<Result<TDto>> Handle(TQuery request, CancellationToken ct)
    {
        var dto = await Executor.FirstOrDefaultAsync(
            Uow.Repository<TEntity>().Query().Where(e => e.Id == request.Id).Select(Projection), ct);
        return dto is null ? Error.NotFound(typeof(TEntity).Name, request.Id) : Result<TDto>.Success(dto);
    }
}

/// <summary>Filter → count → sort → page → project, all on IQueryable.</summary>
public abstract class PagedQueryHandler<TQuery, TEntity, TDto>(IUnitOfWork uow, IQueryableExecutor executor)
    : IQueryHandler<TQuery, PagedResult<TDto>>
    where TQuery : PagedQuery<TDto>
    where TEntity : BaseEntity
{
    public const int MaxPageSize = 1000;
    protected IUnitOfWork Uow { get; } = uow;
    protected IQueryableExecutor Executor { get; } = executor;
    protected abstract Expression<Func<TEntity, TDto>> Projection { get; }
    protected virtual IQueryable<TEntity> Filter(IQueryable<TEntity> query, TQuery request) => query;
    protected virtual IQueryable<TEntity> Sort(IQueryable<TEntity> query, TQuery request) => query.OrderByDescending(e => e.CreatedAt);

    public async Task<Result<PagedResult<TDto>>> Handle(TQuery request, CancellationToken ct)
    {
        var page = Math.Max(1, request.Page);
        var size = Math.Clamp(request.PageSize, 1, MaxPageSize);
        var filtered = Filter(Uow.Repository<TEntity>().Query(), request);
        var total = await Executor.CountAsync(filtered, ct);
        var items = await Executor.ToListAsync(
            Sort(filtered, request).Skip((page - 1) * size).Take(size).Select(Projection), ct);
        return new PagedResult<TDto>(items, total, page, size);
    }
}

/// <summary>Maps a model to a new entity, saves it, returns the DTO.</summary>
public abstract class CreateCommandHandler<TCommand, TModel, TEntity, TDto>(IUnitOfWork uow)
    : ICommandHandler<TCommand, TDto>
    where TCommand : CreateCommand<TModel, TDto>
    where TEntity : BaseEntity
{
    protected IUnitOfWork Uow { get; } = uow;
    protected abstract TEntity Map(TModel model);
    protected abstract TDto ToDto(TEntity entity);

    /// <summary>Business-rule checks that need the database (e.g. uniqueness). Return null when OK.</summary>
    protected virtual Task<Error?> CheckAsync(TModel model, CancellationToken ct) => Task.FromResult<Error?>(null);

    public async Task<Result<TDto>> Handle(TCommand request, CancellationToken ct)
    {
        var error = await CheckAsync(request.Model, ct);
        if (error is not null) return error;
        var entity = Map(request.Model);
        await Uow.Repository<TEntity>().AddAsync(entity, ct);
        await Uow.SaveChangesAsync(ct);
        return ToDto(entity);
    }
}

/// <summary>Loads the tracked entity, applies the model, saves, returns the DTO.</summary>
public abstract class UpdateCommandHandler<TCommand, TModel, TEntity, TDto>(IUnitOfWork uow)
    : ICommandHandler<TCommand, TDto>
    where TCommand : UpdateCommand<TModel, TDto>
    where TEntity : BaseEntity
{
    protected IUnitOfWork Uow { get; } = uow;
    protected abstract void Apply(TEntity entity, TModel model);
    protected abstract TDto ToDto(TEntity entity);
    protected virtual Task<Error?> CheckAsync(Guid id, TModel model, CancellationToken ct) => Task.FromResult<Error?>(null);

    public async Task<Result<TDto>> Handle(TCommand request, CancellationToken ct)
    {
        var repo = Uow.Repository<TEntity>();
        var entity = await repo.GetByIdAsync(request.Id, ct);
        if (entity is null) return Error.NotFound(typeof(TEntity).Name, request.Id);
        var error = await CheckAsync(request.Id, request.Model, ct);
        if (error is not null) return error;
        Apply(entity, request.Model);
        repo.Update(entity);
        await Uow.SaveChangesAsync(ct);
        return ToDto(entity);
    }
}

/// <summary>Soft-deletes an entity by id.</summary>
public abstract class DeleteCommandHandler<TCommand, TEntity>(IUnitOfWork uow) : ICommandHandler<TCommand, bool>
    where TCommand : DeleteCommand
    where TEntity : BaseEntity
{
    protected IUnitOfWork Uow { get; } = uow;

    public async Task<Result<bool>> Handle(TCommand request, CancellationToken ct)
    {
        var repo = Uow.Repository<TEntity>();
        var entity = await repo.GetByIdAsync(request.Id, ct);
        if (entity is null) return Error.NotFound(typeof(TEntity).Name, request.Id);
        repo.Remove(entity);
        await Uow.SaveChangesAsync(ct);
        return true;
    }
}
