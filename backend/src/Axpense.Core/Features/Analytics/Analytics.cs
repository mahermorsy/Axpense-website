using Axpense.Core.Abstractions;
using Axpense.Core.Common.Cqrs;
using Axpense.Core.Common.Results;
using Axpense.Core.Features.Leads;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;
using FluentValidation;

namespace Axpense.Core.Features.Analytics;

public sealed record CountItem(string Label, int Value);
public sealed record SeriesPoint(DateTime Start, DateTime End, int Value);
public sealed record LeadKpis(int NewLeads, int PrevNewLeads, int DemoBookedRate, int PrevDemoBookedRate, int WonDeals, int PrevWonDeals, int UnassignedNew);
public sealed record ContentKpis(int PublishedPosts, int DraftPosts, int TotalViews, int PublishedFaqs);
public sealed record LatestLead(Guid Id, string Name, string Company, string Industry, string Country, LeadStatus Status, DateTime CreatedAt);
public sealed record TopPost(Guid Id, string Title, int Views);

public sealed record DashboardDto(
    int Days, string Bucket, LeadKpis? Leads, List<SeriesPoint> Series, List<CountItem> Pipeline, List<CountItem> Sources,
    List<CountItem> Industries, List<CountItem> Countries, List<CountItem> Channels, List<LatestLead> LatestLeads,
    ContentKpis Content, List<TopPost> TopPosts);

/// <summary>Everything the analytics page shows, for a date range and optional country.</summary>
public sealed record GetDashboardQuery(int Days = 30, string? Country = null, bool IncludeLeads = true) : IQuery<DashboardDto>;

public sealed class GetDashboardValidator : AbstractValidator<GetDashboardQuery>
{
    public GetDashboardValidator() => RuleFor(x => x.Days).InclusiveBetween(1, 365);
}

public sealed class GetDashboardHandler(IUnitOfWork uow, IQueryableExecutor executor, IDateTimeProvider clock)
    : IQueryHandler<GetDashboardQuery, DashboardDto>
{
    private sealed record Row(Guid Id, string Name, string Company, string Industry, string Country, string SourcePage,
        LeadChannel Channel, LeadStatus Status, Guid? OwnerId, DateTime CreatedAt);

    public async Task<Result<DashboardDto>> Handle(GetDashboardQuery r, CancellationToken ct)
    {
        var now = clock.UtcNow;
        var from = now.AddDays(-r.Days);
        var prevFrom = now.AddDays(-2 * r.Days);

        // ---- Content (always) ----
        var posts = uow.Repository<BlogPost>().Query();
        var published = await executor.CountAsync(posts.Where(p => p.Status == PostStatus.Published), ct);
        var drafts = await executor.CountAsync(posts.Where(p => p.Status == PostStatus.Draft), ct);
        var views = await executor.ToListAsync(posts.Where(p => p.Status == PostStatus.Published).Select(p => p.Views), ct);
        var faqs = await executor.CountAsync(uow.Repository<Faq>().Query().Where(f => f.IsPublished), ct);
        var topPosts = await executor.ToListAsync(posts.Where(p => p.Status == PostStatus.Published)
            .OrderByDescending(p => p.Views).Take(5).Select(p => new TopPost(p.Id, p.Title, p.Views)), ct);
        var content = new ContentKpis(published, drafts, views.Sum(), faqs);

        var bucket = r.Days > 30 ? "week" : "day";
        if (!r.IncludeLeads)
            return new DashboardDto(r.Days, bucket, null, new(), new(), new(), new(), new(), new(), new(), content, topPosts);

        // ---- Leads: one query for the current + previous window, aggregated in memory ----
        var leads = uow.Repository<Lead>().Query();
        if (!string.IsNullOrWhiteSpace(r.Country)) leads = leads.Where(l => l.Country == r.Country);

        var rows = await executor.ToListAsync(leads.Where(l => l.CreatedAt >= prevFrom)
            .Select(l => new Row(l.Id, l.Name, l.Company, l.Industry, l.Country, l.SourcePage, l.Channel, l.Status, l.OwnerId, l.CreatedAt)), ct);
        var unassigned = await executor.CountAsync(leads.Where(l => l.Status == LeadStatus.New && l.OwnerId == null), ct);

        var cur = rows.Where(x => x.CreatedAt >= from).ToList();
        var prev = rows.Where(x => x.CreatedAt < from).ToList();

        var kpis = new LeadKpis(cur.Count, prev.Count, Rate(cur), Rate(prev), Won(cur), Won(prev), unassigned);

        var series = new List<SeriesPoint>();
        var step = bucket == "week" ? 7 : 1;
        var buckets = (int)Math.Ceiling(r.Days / (double)step);
        for (var i = buckets - 1; i >= 0; i--)
        {
            var end = now.AddDays(-i * step);
            var start = end.AddDays(-step);
            series.Add(new SeriesPoint(start, end, cur.Count(x => x.CreatedAt >= start && x.CreatedAt < end)));
        }

        var pipeline = Enum.GetValues<LeadStatus>()
            .Select(s => new CountItem(s.ToString(), cur.Count(x => x.Status == s))).ToList();

        var latest = await executor.ToListAsync(leads.OrderByDescending(l => l.CreatedAt).Take(6)
            .Select(l => new LatestLead(l.Id, l.Name, l.Company, l.Industry, l.Country, l.Status, l.CreatedAt)), ct);

        return new DashboardDto(r.Days, bucket, kpis, series, pipeline,
            Top(cur, x => x.SourcePage, 6), Top(cur, x => x.Industry, 6), Top(cur, x => x.Country, 8),
            Top(cur, x => x.Channel.ToString(), 6), latest, content, topPosts);
    }

    private static int Rate(IReadOnlyCollection<Row> rows) =>
        rows.Count == 0 ? 0 : (int)Math.Round(100.0 * rows.Count(x => x.Status is LeadStatus.DemoBooked or LeadStatus.Won) / rows.Count);

    private static int Won(IEnumerable<Row> rows) => rows.Count(x => x.Status == LeadStatus.Won);

    private static List<CountItem> Top(IEnumerable<Row> rows, Func<Row, string> key, int take) =>
        rows.GroupBy(key).Select(g => new CountItem(g.Key, g.Count())).OrderByDescending(c => c.Value).ThenBy(c => c.Label).Take(take).ToList();
}
