using System.Linq.Expressions;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;

namespace Axpense.Core.Features.Blog;

public sealed record BlogPostDto(
    Guid Id, string Slug, string Title, string Excerpt, string Category, PostStatus Status, ContentLanguage Language,
    DateTime? PublishedAt, int Views, Guid? AuthorId, string? SeoTitle, string? SeoDescription,
    List<BlogSection> Sections, DateTime CreatedAt, DateTime? UpdatedAt);

public sealed record BlogPostSummaryDto(
    Guid Id, string Slug, string Title, string Excerpt, string Category, ContentLanguage Language, DateTime? PublishedAt, int Views);

/// <summary>Create/update payload for an article.</summary>
public sealed record BlogPostModel
{
    public string Title { get; init; } = string.Empty;
    public string Slug { get; init; } = string.Empty;
    public string Excerpt { get; init; } = string.Empty;
    public string Category { get; init; } = string.Empty;
    public PostStatus Status { get; init; } = PostStatus.Draft;
    public ContentLanguage Language { get; init; } = ContentLanguage.En;
    public DateTime? PublishedAt { get; init; }
    public string? SeoTitle { get; init; }
    public string? SeoDescription { get; init; }
    public List<BlogSection> Sections { get; init; } = new();
}

public static class BlogMappings
{
    public static readonly Expression<Func<BlogPost, BlogPostDto>> ToDto = p => new BlogPostDto(
        p.Id, p.Slug, p.Title, p.Excerpt, p.Category, p.Status, p.Language, p.PublishedAt, p.Views, p.AuthorId,
        p.SeoTitle, p.SeoDescription, p.Sections, p.CreatedAt, p.UpdatedAt);

    public static readonly Expression<Func<BlogPost, BlogPostSummaryDto>> ToSummary = p => new BlogPostSummaryDto(
        p.Id, p.Slug, p.Title, p.Excerpt, p.Category, p.Language, p.PublishedAt, p.Views);

    private static readonly Func<BlogPost, BlogPostDto> Compiled = ToDto.Compile();
    public static BlogPostDto Map(BlogPost p) => Compiled(p);

    public static string Slugify(string value)
    {
        var chars = value.Trim().ToLowerInvariant()
            .Select(c => char.IsLetterOrDigit(c) ? c : '-').ToArray();
        var slug = new string(chars);
        while (slug.Contains("--")) slug = slug.Replace("--", "-");
        return slug.Trim('-');
    }
}
