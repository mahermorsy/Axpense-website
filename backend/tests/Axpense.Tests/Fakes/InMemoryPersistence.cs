using System.Linq.Expressions;
using Axpense.Core.Abstractions;
using Axpense.Domain.Common;

namespace Axpense.Tests.Fakes;

/// <summary>
/// In-memory repository: the same IQueryable handlers get from EF Core, but backed by a List.
/// This is what makes every handler unit-testable without a database.
/// </summary>
public sealed class InMemoryRepository<T>(List<T> store) : IGenericRepository<T> where T : BaseEntity
{
    public List<T> Store { get; } = store;

    public IQueryable<T> Query(params Expression<Func<T, object>>[] includes) => Store.Where(e => !e.IsDeleted).AsQueryable();
    public IQueryable<T> QueryTracked(params Expression<Func<T, object>>[] includes) => Query();
    public Task<T?> GetByIdAsync(Guid id, CancellationToken ct = default) => Task.FromResult(Store.FirstOrDefault(e => e.Id == id && !e.IsDeleted));
    public Task AddAsync(T entity, CancellationToken ct = default) { Store.Add(entity); return Task.CompletedTask; }
    public Task AddRangeAsync(IEnumerable<T> entities, CancellationToken ct = default) { Store.AddRange(entities); return Task.CompletedTask; }
    public void Update(T entity) { }
    public void Remove(T entity) { entity.IsDeleted = true; entity.DeletedAt = DateTime.UtcNow; }
}

public sealed class InMemoryUnitOfWork : IUnitOfWork
{
    private readonly Dictionary<Type, object> _stores = new();
    public int SaveCount { get; private set; }

    public List<T> Set<T>() where T : BaseEntity
    {
        if (!_stores.TryGetValue(typeof(T), out var s)) _stores[typeof(T)] = s = new List<T>();
        return (List<T>)s;
    }

    public IGenericRepository<T> Repository<T>() where T : BaseEntity => new InMemoryRepository<T>(Set<T>());

    public Task<int> SaveChangesAsync(CancellationToken ct = default)
    {
        SaveCount++;
        // Mimic the audit interceptor for newly added rows.
        foreach (var list in _stores.Values.OfType<System.Collections.IEnumerable>())
            foreach (var e in list.OfType<BaseEntity>().Where(e => e.CreatedAt == default))
                e.CreatedAt = DateTime.UtcNow;
        return Task.FromResult(1);
    }

    public async Task ExecuteInTransactionAsync(Func<CancellationToken, Task> work, CancellationToken ct = default)
    {
        await work(ct);
        await SaveChangesAsync(ct);
    }
}

/// <summary>Synchronous executor for LINQ-to-Objects queryables.</summary>
public sealed class SyncQueryableExecutor : IQueryableExecutor
{
    public Task<List<T>> ToListAsync<T>(IQueryable<T> q, CancellationToken ct = default) => Task.FromResult(q.ToList());
    public Task<T?> FirstOrDefaultAsync<T>(IQueryable<T> q, CancellationToken ct = default) => Task.FromResult(q.FirstOrDefault());
    public Task<int> CountAsync<T>(IQueryable<T> q, CancellationToken ct = default) => Task.FromResult(q.Count());
    public Task<bool> AnyAsync<T>(IQueryable<T> q, CancellationToken ct = default) => Task.FromResult(q.Any());
}

public sealed class FixedClock(DateTime now) : IDateTimeProvider
{
    public DateTime UtcNow { get; set; } = now;
}

public sealed class FakeCurrentUser : ICurrentUser
{
    public Guid? UserId { get; set; } = Guid.NewGuid();
    public string? Name { get; set; } = "Test User";
    public string? Email { get; set; } = "test@axpense.local";
    public string? Role { get; set; } = "Admin";
    public bool IsAuthenticated => UserId.HasValue;
}
