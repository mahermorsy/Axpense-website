using System.Linq.Expressions;
using Axpense.Domain.Common;

namespace Axpense.Core.Abstractions;

/// <summary>
/// Generic repository. Reads are exposed as <see cref="IQueryable{T}"/> so handlers compose
/// filters/projections that EF Core translates to SQL — and unit tests can back them with
/// in-memory lists (<c>list.AsQueryable()</c>).
/// </summary>
public interface IGenericRepository<TEntity> where TEntity : BaseEntity
{
    /// <summary>Read-only query (no change tracking). Soft-deleted rows are excluded.</summary>
    IQueryable<TEntity> Query(params Expression<Func<TEntity, object>>[] includes);

    /// <summary>Tracked query, for loading entities you intend to modify.</summary>
    IQueryable<TEntity> QueryTracked(params Expression<Func<TEntity, object>>[] includes);

    Task<TEntity?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task AddAsync(TEntity entity, CancellationToken ct = default);
    Task AddRangeAsync(IEnumerable<TEntity> entities, CancellationToken ct = default);
    void Update(TEntity entity);

    /// <summary>Marks the entity deleted (soft delete is applied when saving).</summary>
    void Remove(TEntity entity);
}

/// <summary>Unit of work: one transaction boundary per command.</summary>
public interface IUnitOfWork
{
    IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;
    Task<int> SaveChangesAsync(CancellationToken ct = default);
    Task ExecuteInTransactionAsync(Func<CancellationToken, Task> work, CancellationToken ct = default);
}

/// <summary>
/// Executes an <see cref="IQueryable{T}"/> asynchronously. Infrastructure uses EF Core's async
/// operators; tests use a synchronous implementation over LINQ-to-Objects.
/// Keeps the Core free of EF Core references.
/// </summary>
public interface IQueryableExecutor
{
    Task<List<T>> ToListAsync<T>(IQueryable<T> query, CancellationToken ct = default);
    Task<T?> FirstOrDefaultAsync<T>(IQueryable<T> query, CancellationToken ct = default);
    Task<int> CountAsync<T>(IQueryable<T> query, CancellationToken ct = default);
    Task<bool> AnyAsync<T>(IQueryable<T> query, CancellationToken ct = default);
}
