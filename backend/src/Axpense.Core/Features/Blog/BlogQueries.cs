using System.Linq.Expressions;
using Axpense.Core.Abstractions;
using Axpense.Core.Common.Cqrs;
using Axpense.Core.Common.Results;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;

namespace Axpense.Core.Features.Blog;

public sealed record GetPostsQuery : PagedQuery<BlogPostDto>
{
    public PostStatus? Status { get; init; }
    public ContentLanguage? Language { get; init; }
}

public sealed class GetPostsHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : PagedQueryHandler<GetPostsQuery, BlogPost, BlogPostDto>(uow, executor)
{
    protected override Expression<Func<BlogPost, BlogPostDto>> Projection => BlogMappings.ToDto;

    protected override IQueryable<BlogPost> Filter(IQueryable<BlogPost> q, GetPostsQuery r)
    {
        if (r.Status.HasValue) q = q.Where(p => p.Status == r.Status);
        if (r.Language.HasValue) q = q.Where(p => p.Language == r.Language);
        if (!string.IsNullOrWhiteSpace(r.Search))
        {
            var s = r.Search.Trim().ToLower();
            q = q.Where(p => p.Title.ToLower().Contains(s) || p.Slug.Contains(s) || p.Category.ToLower().Contains(s));
        }
        return q;
    }

    protected override IQueryable<BlogPost> Sort(IQueryable<BlogPost> q, GetPostsQuery r) =>
        q.OrderByDescending(p => p.UpdatedAt ?? p.CreatedAt);
}

public sealed record GetPostByIdQuery(Guid Id) : GetByIdQuery<BlogPostDto>(Id);

public sealed class GetPostByIdHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : GetByIdQueryHandler<GetPostByIdQuery, BlogPost, BlogPostDto>(uow, executor)
{
    protected override Expression<Func<BlogPost, BlogPostDto>> Projection => BlogMappings.ToDto;
}

// ----- Public (website) -----
public sealed record GetPublishedPostsQuery(ContentLanguage Language) : IQuery<List<BlogPostSummaryDto>>;

public sealed class GetPublishedPostsHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : IQueryHandler<GetPublishedPostsQuery, List<BlogPostSummaryDto>>
{
    public async Task<Result<List<BlogPostSummaryDto>>> Handle(GetPublishedPostsQuery request, CancellationToken ct) =>
        await executor.ToListAsync(uow.Repository<BlogPost>().Query()
            .Where(p => p.Status == PostStatus.Published && p.Language == request.Language)
            .OrderByDescending(p => p.PublishedAt)
            .Select(BlogMappings.ToSummary), ct);
}

public sealed record GetPublishedPostBySlugQuery(string Slug, ContentLanguage Language) : IQuery<BlogPostDto>;

public sealed class GetPublishedPostBySlugHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : IQueryHandler<GetPublishedPostBySlugQuery, BlogPostDto>
{
    public async Task<Result<BlogPostDto>> Handle(GetPublishedPostBySlugQuery request, CancellationToken ct)
    {
        var post = await executor.FirstOrDefaultAsync(uow.Repository<BlogPost>().Query()
            .Where(p => p.Slug == request.Slug && p.Language == request.Language && p.Status == PostStatus.Published)
            .Select(BlogMappings.ToDto), ct);
        return post is null ? Error.NotFound(nameof(BlogPost), request.Slug) : Result<BlogPostDto>.Success(post);
    }
}
