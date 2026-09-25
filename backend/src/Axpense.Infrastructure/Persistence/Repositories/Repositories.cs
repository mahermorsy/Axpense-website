using System.Collections.Concurrent;
using System.Linq.Expressions;
using Axpense.Core.Abstractions;
using Axpense.Domain.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;

namespace Axpense.Infrastructure.Persistence.Repositories;

public class GenericRepository<TEntity>(AppDbContext db) : IGenericRepository<TEntity> where TEntity : BaseEntity
{
    protected DbSet<TEntity> Set => db.Set<TEntity>();

    public IQueryable<TEntity> Query(params Expression<Func<TEntity, object>>[] includes) => Include(Set.AsNoTracking(), includes);

    public IQueryable<TEntity> QueryTracked(params Expression<Func<TEntity, object>>[] includes) => Include(Set, includes);

    public Task<TEntity?> GetByIdAsync(Guid id, CancellationToken ct = default) => Set.FirstOrDefaultAsync(e => e.Id == id, ct);

    public async Task AddAsync(TEntity entity, CancellationToken ct = default) => await Set.AddAsync(entity, ct);

    public Task AddRangeAsync(IEnumerable<TEntity> entities, CancellationToken ct = default) => Set.AddRangeAsync(entities, ct);

    public void Update(TEntity entity)
    {
        if (db.Entry(entity).State == EntityState.Detached) Set.Update(entity);
    }

    public void Remove(TEntity entity) => Set.Remove(entity);

    private static IQueryable<TEntity> Include(IQueryable<TEntity> query, Expression<Func<TEntity, object>>[] includes) =>
        includes.Aggregate(query, (current, include) => current.Include(include));
}

public sealed class UnitOfWork(AppDbContext db) : IUnitOfWork
{
    private readonly ConcurrentDictionary<Type, object> _repositories = new();

    public IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity =>
        (IGenericRepository<TEntity>)_repositories.GetOrAdd(typeof(TEntity), _ => new GenericRepository<TEntity>(db));

    public Task<int> SaveChangesAsync(CancellationToken ct = default) => db.SaveChangesAsync(ct);

    public async Task ExecuteInTransactionAsync(Func<CancellationToken, Task> work, CancellationToken ct = default)
    {
        // Works with SQL Server retry-on-failure: the whole unit is retried together.
        var strategy = db.Database.CreateExecutionStrategy();
        await strategy.ExecuteAsync(async () =>
        {
            await using var tx = await db.Database.BeginTransactionAsync(ct);
            await work(ct);
            await db.SaveChangesAsync(ct);
            await tx.CommitAsync(ct);
        });
    }
}

/// <summary>EF Core async execution, with a synchronous fallback for non-EF (in-memory) queryables.</summary>
public sealed class EfQueryableExecutor : IQueryableExecutor
{
    private static bool IsEf<T>(IQueryable<T> q) => q.Provider is IAsyncQueryProvider;

    public Task<List<T>> ToListAsync<T>(IQueryable<T> query, CancellationToken ct = default) =>
        IsEf(query) ? query.ToListAsync(ct) : Task.FromResult(query.ToList());

    public Task<T?> FirstOrDefaultAsync<T>(IQueryable<T> query, CancellationToken ct = default) =>
        IsEf(query) ? query.FirstOrDefaultAsync(ct) : Task.FromResult(query.FirstOrDefault());

    public Task<int> CountAsync<T>(IQueryable<T> query, CancellationToken ct = default) =>
        IsEf(query) ? query.CountAsync(ct) : Task.FromResult(query.Count());

    public Task<bool> AnyAsync<T>(IQueryable<T> query, CancellationToken ct = default) =>
        IsEf(query) ? query.AnyAsync(ct) : Task.FromResult(query.Any());
}
