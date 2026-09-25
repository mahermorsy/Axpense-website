using Axpense.Domain.Common;
using Axpense.Domain.Enums;

namespace Axpense.Domain.Entities;

public class BlogPost : BaseEntity
{
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Excerpt { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public PostStatus Status { get; set; } = PostStatus.Draft;
    public ContentLanguage Language { get; set; } = ContentLanguage.En;
    public DateTime? PublishedAt { get; set; }
    public int Views { get; set; }
    public Guid? AuthorId { get; set; }
    public string? SeoTitle { get; set; }
    public string? SeoDescription { get; set; }

    /// <summary>Stored as a JSON column (SQL Server) — the article body.</summary>
    public List<BlogSection> Sections { get; set; } = new();

    public void Publish(DateTime now)
    {
        Status = PostStatus.Published;
        PublishedAt ??= now;
    }
}

public class BlogSection
{
    public string Heading { get; set; } = string.Empty;
    public string Body { get; set; } = string.Empty;
}
