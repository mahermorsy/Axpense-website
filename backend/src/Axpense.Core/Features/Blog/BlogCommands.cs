using Axpense.Core.Abstractions;
using Axpense.Core.Common.Cqrs;
using Axpense.Core.Common.Results;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;

namespace Axpense.Core.Features.Blog;

public sealed record CreatePostCommand(BlogPostModel Model) : CreateCommand<BlogPostModel, BlogPostDto>(Model);

public sealed class CreatePostHandler(IUnitOfWork uow, IQueryableExecutor executor, ICurrentUser user, IDateTimeProvider clock)
    : CreateCommandHandler<CreatePostCommand, BlogPostModel, BlogPost, BlogPostDto>(uow)
{
    protected override async Task<Error?> CheckAsync(BlogPostModel m, CancellationToken ct)
    {
        var slug = BlogMappings.Slugify(m.Slug);
        var taken = await executor.AnyAsync(Uow.Repository<BlogPost>().Query().Where(p => p.Slug == slug && p.Language == m.Language), ct);
        return taken ? Error.Conflict("Blog.SlugTaken", "Another article already uses this URL slug.") : null;
    }

    protected override BlogPost Map(BlogPostModel m)
    {
        var post = new BlogPost
        {
            Title = m.Title.Trim(),
            Slug = BlogMappings.Slugify(m.Slug),
            Excerpt = m.Excerpt.Trim(),
            Category = m.Category.Trim(),
            Language = m.Language,
            PublishedAt = m.PublishedAt,
            SeoTitle = m.SeoTitle?.Trim(),
            SeoDescription = m.SeoDescription?.Trim(),
            Sections = m.Sections,
            AuthorId = user.UserId,
        };
        if (m.Status == PostStatus.Published) post.Publish(clock.UtcNow);
        return post;
    }

    protected override BlogPostDto ToDto(BlogPost entity) => BlogMappings.Map(entity);
}

public sealed record UpdatePostCommand(Guid Id, BlogPostModel Model) : UpdateCommand<BlogPostModel, BlogPostDto>(Id, Model);

public sealed class UpdatePostHandler(IUnitOfWork uow, IQueryableExecutor executor, IDateTimeProvider clock)
    : UpdateCommandHandler<UpdatePostCommand, BlogPostModel, BlogPost, BlogPostDto>(uow)
{
    protected override async Task<Error?> CheckAsync(Guid id, BlogPostModel m, CancellationToken ct)
    {
        var slug = BlogMappings.Slugify(m.Slug);
        var taken = await executor.AnyAsync(Uow.Repository<BlogPost>().Query().Where(p => p.Slug == slug && p.Language == m.Language && p.Id != id), ct);
        return taken ? Error.Conflict("Blog.SlugTaken", "Another article already uses this URL slug.") : null;
    }

    protected override void Apply(BlogPost post, BlogPostModel m)
    {
        post.Title = m.Title.Trim();
        post.Slug = BlogMappings.Slugify(m.Slug);
        post.Excerpt = m.Excerpt.Trim();
        post.Category = m.Category.Trim();
        post.Language = m.Language;
        post.SeoTitle = m.SeoTitle?.Trim();
        post.SeoDescription = m.SeoDescription?.Trim();
        post.Sections = m.Sections;
        post.PublishedAt = m.PublishedAt ?? post.PublishedAt;
        if (m.Status == PostStatus.Published) post.Publish(clock.UtcNow);
        else post.Status = PostStatus.Draft;
    }

    protected override BlogPostDto ToDto(BlogPost entity) => BlogMappings.Map(entity);
}

public sealed record DeletePostCommand(Guid Id) : DeleteCommand(Id);
public sealed class DeletePostHandler(IUnitOfWork uow) : DeleteCommandHandler<DeletePostCommand, BlogPost>(uow);

/// <summary>Public: counts a page view of a published article.</summary>
public sealed record RegisterPostViewCommand(string Slug, ContentLanguage Language) : ICommand<int>;

public sealed class RegisterPostViewHandler(IUnitOfWork uow, IQueryableExecutor executor) : ICommandHandler<RegisterPostViewCommand, int>
{
    public async Task<Result<int>> Handle(RegisterPostViewCommand request, CancellationToken ct)
    {
        var post = await executor.FirstOrDefaultAsync(uow.Repository<BlogPost>().QueryTracked()
            .Where(p => p.Slug == request.Slug && p.Language == request.Language && p.Status == PostStatus.Published), ct);
        if (post is null) return Error.NotFound(nameof(BlogPost), request.Slug);
        post.Views++;
        await uow.SaveChangesAsync(ct);
        return post.Views;
    }
}
