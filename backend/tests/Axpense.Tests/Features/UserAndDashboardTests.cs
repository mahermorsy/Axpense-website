using Axpense.Core.Common.Behaviors;
using Axpense.Core.Common.Results;
using Axpense.Core.Common.Security;
using Axpense.Core.Features.Analytics;
using Axpense.Core.Features.Leads;
using Axpense.Core.Features.Users;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;
using Axpense.Tests.Fakes;
using FluentValidation;

namespace Axpense.Tests.Features;

public class UserTests
{
    private readonly FakeIdentityService _identity = new();

    [Fact]
    public async Task The_last_active_admin_cannot_be_demoted()
    {
        var admin = _identity.Add("Maher Samir", Roles.Admin);
        var otherAdminUser = new FakeCurrentUser { UserId = Guid.NewGuid() };
        var result = await new UpdateUserHandler(_identity, otherAdminUser).Handle(new UpdateUserCommand(admin.Id, admin.Name, Roles.Sales, UserStatus.Active), default);

        Assert.Equal(ErrorType.Conflict, result.Error!.Type);
    }

    [Fact]
    public async Task Users_cannot_change_their_own_role()
    {
        var me = _identity.Add("Maher Samir", Roles.Admin);
        _identity.Add("Second Admin", Roles.Admin);
        var result = await new UpdateUserHandler(_identity, new FakeCurrentUser { UserId = me.Id }).Handle(new UpdateUserCommand(me.Id, me.Name, Roles.Editor, UserStatus.Active), default);

        Assert.Equal(ErrorType.Forbidden, result.Error!.Type);
    }

    [Fact]
    public async Task Creating_a_user_without_password_returns_a_strong_temporary_one()
    {
        var result = await new CreateUserHandler(_identity).Handle(new CreateUserCommand("Nour Hassan", "nour@axpense.net", Roles.Sales, null), default);

        Assert.True(result.IsSuccess);
        var pwd = result.Value!.TemporaryPassword!;
        Assert.True(pwd.Length >= 12);
        Assert.Contains(pwd, char.IsUpper);
        Assert.Contains(pwd, char.IsLower);
        Assert.Contains(pwd, char.IsDigit);
    }

    [Fact]
    public async Task Duplicate_emails_are_rejected()
    {
        _identity.Add("Omar Adel", Roles.Sales);
        var result = await new CreateUserHandler(_identity).Handle(new CreateUserCommand("Omar", "omar.adel@axpense.local", Roles.Sales, "Password1234"), default);
        Assert.Equal(ErrorType.Conflict, result.Error!.Type);
    }
}

public class DashboardTests
{
    [Fact]
    public async Task Computes_kpis_and_daily_series_for_the_range()
    {
        var now = new DateTime(2026, 9, 24, 12, 0, 0, DateTimeKind.Utc);
        var uow = new InMemoryUnitOfWork();
        var leads = uow.Set<Lead>();
        void Add(int daysAgo, LeadStatus s, string country = "Egypt", Guid? owner = null) =>
            leads.Add(new Lead { Name = "L", Company = "C", Email = "e@x.com", Status = s, Country = country, OwnerId = owner, CreatedAt = now.AddDays(-daysAgo).AddHours(-1) });

        Add(0, LeadStatus.New);
        Add(1, LeadStatus.DemoBooked);
        Add(2, LeadStatus.Won);
        Add(3, LeadStatus.Lost, "UAE");
        Add(10, LeadStatus.Won);   // previous 7-day window
        Add(40, LeadStatus.Won);   // outside both windows

        var handler = new GetDashboardHandler(uow, new SyncQueryableExecutor(), new FixedClock(now));
        var result = await handler.Handle(new GetDashboardQuery(7), default);
        var d = result.Value!;

        Assert.Equal(4, d.Leads!.NewLeads);
        Assert.Equal(1, d.Leads.PrevNewLeads);
        Assert.Equal(50, d.Leads.DemoBookedRate);   // DemoBooked + Won out of 4
        Assert.Equal(1, d.Leads.WonDeals);
        Assert.Equal(1, d.Leads.UnassignedNew);
        Assert.Equal("day", d.Bucket);
        Assert.Equal(7, d.Series.Count);
        Assert.Equal(4, d.Series.Sum(p => p.Value));
        Assert.Equal("Egypt", d.Countries.First().Label);

        var uae = await handler.Handle(new GetDashboardQuery(7, "UAE"), default);
        Assert.Equal(1, uae.Value!.Leads!.NewLeads);
    }

    [Fact]
    public async Task Editors_get_content_stats_without_lead_data()
    {
        var uow = new InMemoryUnitOfWork();
        uow.Set<BlogPost>().Add(new BlogPost { Title = "A", Slug = "a", Status = PostStatus.Published, Views = 120 });
        uow.Set<BlogPost>().Add(new BlogPost { Title = "B", Slug = "b", Status = PostStatus.Draft });
        var result = await new GetDashboardHandler(uow, new SyncQueryableExecutor(), new FixedClock(DateTime.UtcNow))
            .Handle(new GetDashboardQuery(30, null, IncludeLeads: false), default);

        Assert.Null(result.Value!.Leads);
        Assert.Equal(1, result.Value.Content.PublishedPosts);
        Assert.Equal(120, result.Value.Content.TotalViews);
    }
}

public class PipelineTests
{
    [Fact]
    public async Task ValidationBehavior_returns_an_invalid_result_instead_of_calling_the_handler()
    {
        var behavior = new ValidationBehavior<SubmitLeadCommand, Result<LeadDto>>(new IValidator<SubmitLeadCommand>[] { new SubmitLeadValidator() });
        var called = false;
        var result = await behavior.Handle(new SubmitLeadCommand(new SubmitLeadModel()), () => { called = true; return Task.FromResult(Result<LeadDto>.Failure(Error.Failure("x", "x"))); }, default);

        Assert.False(called);
        Assert.False(result.IsSuccess);
        Assert.Equal(ErrorType.Validation, result.Error!.Type);
        Assert.NotEmpty(result.ValidationErrors!);
    }
}
