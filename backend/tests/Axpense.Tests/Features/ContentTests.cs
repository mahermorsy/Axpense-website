using Axpense.Core.Common.Results;
using Axpense.Core.Features.Blog;
using Axpense.Core.Features.Faqs;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;
using Axpense.Tests.Fakes;

namespace Axpense.Tests.Features;

public class ContentTests
{
    private readonly InMemoryUnitOfWork _uow = new();
    private readonly SyncQueryableExecutor _exec = new();
    private readonly FixedClock _clock = new(new DateTime(2026, 9, 24, 10, 0, 0, DateTimeKind.Utc));

    private static BlogPostModel Post(string title, PostStatus status = PostStatus.Draft) => new()
    {
        Title = title, Slug = title, Excerpt = "Short excerpt", Category = "Fleet Management", Status = status,
        Sections = new() { new BlogSection { Heading = "Intro", Body = "Text" } },
    };

    [Fact]
    public async Task Publishing_sets_the_publish_date_and_slugifies()
    {
        var handler = new CreatePostHandler(_uow, _exec, new FakeCurrentUser(), _clock);
        var result = await handler.Handle(new CreatePostCommand(Post("Km-Based Maintenance!", PostStatus.Published)), default);

        Assert.True(result.IsSuccess);
        Assert.Equal("km-based-maintenance", result.Value!.Slug);
        Assert.Equal(_clock.UtcNow, result.Value.PublishedAt);
    }

    [Fact]
    public async Task Duplicate_slug_in_the_same_language_is_a_conflict()
    {
        var handler = new CreatePostHandler(_uow, _exec, new FakeCurrentUser(), _clock);
        await handler.Handle(new CreatePostCommand(Post("Fleet costs")), default);
        var second = await handler.Handle(new CreatePostCommand(Post("Fleet costs")), default);

        Assert.False(second.IsSuccess);
        Assert.Equal(ErrorType.Conflict, second.Error!.Type);
    }

    [Fact]
    public void Validator_requires_an_excerpt_before_publishing()
    {
        var model = Post("No excerpt", PostStatus.Published) with { Excerpt = "" };
        Assert.False(new CreatePostValidator().Validate(new CreatePostCommand(model)).IsValid);
        Assert.True(new CreatePostValidator().Validate(new CreatePostCommand(model with { Status = PostStatus.Draft })).IsValid);
    }

    [Fact]
    public async Task Public_list_only_returns_published_posts_in_the_language()
    {
        var posts = _uow.Set<BlogPost>();
        posts.Add(new BlogPost { Slug = "a", Title = "A", Status = PostStatus.Published, Language = ContentLanguage.En, PublishedAt = _clock.UtcNow });
        posts.Add(new BlogPost { Slug = "b", Title = "B", Status = PostStatus.Draft, Language = ContentLanguage.En });
        posts.Add(new BlogPost { Slug = "c", Title = "C", Status = PostStatus.Published, Language = ContentLanguage.Ar, PublishedAt = _clock.UtcNow });

        var result = await new GetPublishedPostsHandler(_uow, _exec).Handle(new GetPublishedPostsQuery(ContentLanguage.En), default);
        Assert.Equal("a", Assert.Single(result.Value!).Slug);
    }

    [Fact]
    public async Task New_faq_goes_last_and_can_be_moved_up()
    {
        var create = new CreateFaqHandler(_uow, _exec);
        var first = (await create.Handle(new CreateFaqCommand(new FaqModel { Page = "home", Question = "Q1?", Answer = "A1" }), default)).Value!;
        var second = (await create.Handle(new CreateFaqCommand(new FaqModel { Page = "home", Question = "Q2?", Answer = "A2" }), default)).Value!;
        Assert.Equal(0, first.SortOrder);
        Assert.Equal(1, second.SortOrder);

        var moved = await new MoveFaqHandler(_uow, _exec).Handle(new MoveFaqCommand(second.Id, -1), default);
        Assert.True(moved.Value);

        var list = await new GetPublicFaqsHandler(_uow, _exec).Handle(new GetPublicFaqsQuery("home", ContentLanguage.En), default);
        Assert.Equal(new[] { "Q2?", "Q1?" }, list.Value!.Select(f => f.Question));
    }

    [Fact]
    public async Task Moving_the_first_faq_up_does_nothing()
    {
        var created = (await new CreateFaqHandler(_uow, _exec).Handle(new CreateFaqCommand(new FaqModel { Page = "pricing", Question = "Q?", Answer = "A" }), default)).Value!;
        var moved = await new MoveFaqHandler(_uow, _exec).Handle(new MoveFaqCommand(created.Id, -1), default);
        Assert.False(moved.Value);
    }
}
