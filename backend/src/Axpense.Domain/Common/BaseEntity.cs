namespace Axpense.Domain.Common;

/// <summary>Root of every entity: a strongly-typed identifier.</summary>
public abstract class BaseEntity<TKey> where TKey : notnull
{
    public TKey Id { get; set; } = default!;
}

/// <summary>
/// Default entity base: Guid key + audit fields + soft delete.
/// Audit and soft-delete values are filled in by the persistence layer, never by handlers.
/// </summary>
public abstract class BaseEntity : BaseEntity<Guid>, IAuditableEntity, ISoftDelete
{
    protected BaseEntity() => Id = Guid.NewGuid();

    public DateTime CreatedAt { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public string? UpdatedBy { get; set; }
    public bool IsDeleted { get; set; }
    public DateTime? DeletedAt { get; set; }
}

public interface IAuditableEntity
{
    DateTime CreatedAt { get; set; }
    string? CreatedBy { get; set; }
    DateTime? UpdatedAt { get; set; }
    string? UpdatedBy { get; set; }
}

public interface ISoftDelete
{
    bool IsDeleted { get; set; }
    DateTime? DeletedAt { get; set; }
}
