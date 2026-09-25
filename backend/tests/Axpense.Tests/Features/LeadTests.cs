using Axpense.Core.Common.Results;
using Axpense.Core.Common.Security;
using Axpense.Core.Features.Leads;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;
using Axpense.Tests.Fakes;

namespace Axpense.Tests.Features;

public class LeadTests
{
    private readonly InMemoryUnitOfWork _uow = new();
    private readonly SyncQueryableExecutor _exec = new();
    private readonly FakeIdentityService _identity = new();

    private Lead Seed(string name, LeadStatus status = LeadStatus.New, string country = "Egypt", int daysAgo = 1)
    {
        var lead = new Lead { Name = name, Company = $"{name} Co", Email = $"{name.ToLower()}@x.com", Status = status, Country = country, CreatedAt = DateTime.UtcNow.AddDays(-daysAgo) };
        _uow.Set<Lead>().Add(lead);
        return lead;
    }

    [Theory]
    [InlineData("SA", null, null, "Saudi Arabia")]
    [InlineData(null, "+971 50 123 4567", null, "UAE")]
    [InlineData(null, "01001234567", null, "Egypt")]
    [InlineData(null, null, "/en-jo", "Jordan")]
    [InlineData(null, null, "/pricing", "Unknown")]
    public void InferCountry_uses_geo_then_phone_then_page(string? code, string? phone, string? page, string expected) =>
        Assert.Equal(expected, LeadMappings.InferCountry(new SubmitLeadModel { CountryCode = code, Phone = phone, SourcePage = page }));

    [Theory]
    [InlineData("google", null, LeadChannel.Google)]
    [InlineData(null, "https://www.linkedin.com/feed", LeadChannel.LinkedIn)]
    [InlineData(null, null, LeadChannel.Direct)]
    [InlineData(null, "https://partner.example.com", LeadChannel.Referral)]
    public void InferChannel_reads_utm_and_referrer(string? utm, string? referrer, LeadChannel expected) =>
        Assert.Equal(expected, LeadMappings.InferChannel(new SubmitLeadModel { UtmSource = utm, Referrer = referrer }));

    [Fact]
    public async Task Submit_creates_a_new_lead_with_inferred_fields()
    {
        var handler = new SubmitLeadHandler(_uow);
        var result = await handler.Handle(new SubmitLeadCommand(new SubmitLeadModel
        {
            Name = " Omar ", Company = "Nile Logistics", Email = "OMAR@Nile.com", Phone = "+966 55 000 0000", SourcePage = "/demo", Lang = "ar", UtmSource = "google",
        }), default);

        Assert.True(result.IsSuccess);
        var lead = Assert.Single(_uow.Set<Lead>());
        Assert.Equal("Omar", lead.Name);
        Assert.Equal("omar@nile.com", lead.Email);
        Assert.Equal("Saudi Arabia", lead.Country);
        Assert.Equal(LeadChannel.Google, lead.Channel);
        Assert.Equal(ContentLanguage.Ar, lead.Language);
        Assert.Equal(LeadStatus.New, lead.Status);
    }

    [Fact]
    public void Submit_validator_rejects_missing_fields_and_bad_email()
    {
        var result = new SubmitLeadValidator().Validate(new SubmitLeadCommand(new SubmitLeadModel { Name = "", Company = "X", Email = "not-an-email" }));
        Assert.False(result.IsValid);
        Assert.Contains(result.Errors, e => e.PropertyName.EndsWith("Name"));
        Assert.Contains(result.Errors, e => e.PropertyName.EndsWith("Email"));
    }

    [Fact]
    public async Task GetLeads_filters_searches_and_pages_on_IQueryable()
    {
        for (var i = 0; i < 25; i++) Seed($"Lead{i:00}", i % 2 == 0 ? LeadStatus.New : LeadStatus.Won, daysAgo: i);
        Seed("Special", LeadStatus.Won, "Qatar");

        var handler = new GetLeadsHandler(_uow, _exec);
        var won = await handler.Handle(new GetLeadsQuery { Status = LeadStatus.Won, Page = 1, PageSize = 5 }, default);
        Assert.Equal(13, won.Value!.Total);
        Assert.Equal(5, won.Value.Items.Count);
        Assert.Equal(3, won.Value.TotalPages);

        var search = await handler.Handle(new GetLeadsQuery { Search = "speci" }, default);
        Assert.Equal("Special", Assert.Single(search.Value!.Items).Name);

        var qatar = await handler.Handle(new GetLeadsQuery { Country = "Qatar" }, default);
        Assert.Single(qatar.Value!.Items);
    }

    [Fact]
    public async Task Assigning_a_new_lead_to_sales_marks_it_contacted()
    {
        var lead = Seed("Hany");
        var sales = _identity.Add("Omar Adel", Roles.Sales);
        var result = await new UpdateLeadHandler(_uow, _identity).Handle(new UpdateLeadCommand(lead.Id, new UpdateLeadModel { OwnerId = sales.Id }), default);

        Assert.True(result.IsSuccess);
        Assert.Equal(sales.Id, lead.OwnerId);
        Assert.Equal(LeadStatus.Contacted, lead.Status);
    }

    [Fact]
    public async Task Leads_cannot_be_assigned_to_editors()
    {
        var lead = Seed("Dina");
        var editor = _identity.Add("Sara Fahmy", Roles.Editor);
        var result = await new UpdateLeadHandler(_uow, _identity).Handle(new UpdateLeadCommand(lead.Id, new UpdateLeadModel { OwnerId = editor.Id }), default);

        Assert.False(result.IsSuccess);
        Assert.Equal(ErrorType.Validation, result.Error!.Type);
        Assert.Null(lead.OwnerId);
    }

    [Fact]
    public async Task Delete_is_soft_and_hides_the_lead_from_queries()
    {
        var lead = Seed("Gone");
        var result = await new DeleteLeadHandler(_uow).Handle(new DeleteLeadCommand(lead.Id), default);
        Assert.True(result.IsSuccess);
        Assert.True(lead.IsDeleted);

        var list = await new GetLeadsHandler(_uow, _exec).Handle(new GetLeadsQuery(), default);
        Assert.Equal(0, list.Value!.Total);
        var byId = await new GetLeadByIdHandler(_uow, _exec).Handle(new GetLeadByIdQuery(lead.Id), default);
        Assert.Equal(ErrorType.NotFound, byId.Error!.Type);
    }

    [Fact]
    public async Task AddNote_records_the_current_user()
    {
        var lead = Seed("Noted");
        var user = new FakeCurrentUser { Name = "Nour Hassan" };
        var result = await new AddLeadNoteHandler(_uow, _exec, user).Handle(new AddLeadNoteCommand(lead.Id, "  Called, demo on Tuesday "), default);

        Assert.True(result.IsSuccess);
        var note = Assert.Single(_uow.Set<LeadNote>());
        Assert.Equal("Called, demo on Tuesday", note.Text);
        Assert.Equal("Nour Hassan", note.AuthorName);
    }
}
