using Axpense.Api.Infrastructure;
using Axpense.Core.Features.Blog;
using Axpense.Core.Features.Faqs;
using Axpense.Core.Features.Leads;
using Axpense.Core.Features.Pricing;
using Axpense.Domain.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.AspNetCore.RateLimiting;

namespace Axpense.Api.Controllers;

/// <summary>Anonymous endpoints used by the public website.</summary>
[Route("api/public"), AllowAnonymous]
public sealed class PublicController : ApiControllerBase
{
    /// <summary>Website contact/demo form. Rate-limited per IP.</summary>
    [HttpPost("leads"), EnableRateLimiting("leads")]
    public async Task<IActionResult> SubmitLead(SubmitLeadModel model, CancellationToken ct) =>
        (await Sender.Send(new SubmitLeadCommand(model), ct)).ToActionResult(this, lead => StatusCode(StatusCodes.Status201Created, new { id = lead.Id }));

    [HttpGet("blog"), OutputCache(Duration = 60)]
    public async Task<IActionResult> Posts([FromQuery] ContentLanguage language = ContentLanguage.En, CancellationToken ct = default) =>
        (await Sender.Send(new GetPublishedPostsQuery(language), ct)).ToActionResult(this);

    [HttpGet("blog/{slug}"), OutputCache(Duration = 60)]
    public async Task<IActionResult> Post(string slug, [FromQuery] ContentLanguage language = ContentLanguage.En, CancellationToken ct = default) =>
        (await Sender.Send(new GetPublishedPostBySlugQuery(slug, language), ct)).ToActionResult(this);

    [HttpPost("blog/{slug}/view"), EnableRateLimiting("views")]
    public async Task<IActionResult> View(string slug, [FromQuery] ContentLanguage language = ContentLanguage.En, CancellationToken ct = default) =>
        (await Sender.Send(new RegisterPostViewCommand(slug, language), ct)).ToActionResult(this, v => Ok(new { views = v }));

    [HttpGet("faqs"), OutputCache(Duration = 60)]
    public async Task<IActionResult> Faqs([FromQuery] string page = "home", [FromQuery] ContentLanguage language = ContentLanguage.En, CancellationToken ct = default) =>
        (await Sender.Send(new GetPublicFaqsQuery(page, language), ct)).ToActionResult(this);

    /// <summary>Vehicle-based pricing for the website (same shape as its PricingConfig).</summary>
    [HttpGet("pricing"), OutputCache(Duration = 60)]
    public async Task<IActionResult> Pricing(CancellationToken ct) =>
        (await Sender.Send(new GetPublicPricingQuery(), ct)).ToActionResult(this);

    /// <summary>Price for a fleet size, e.g. /api/public/pricing/quote?currency=EGP&amp;vehicles=25&amp;billing=annual.</summary>
    [HttpGet("pricing/quote")]
    public async Task<IActionResult> Quote([FromQuery] string currency = "EGP", [FromQuery] int vehicles = 5, [FromQuery] BillingCycle billing = BillingCycle.Monthly, CancellationToken ct = default) =>
        (await Sender.Send(new GetPricingQuoteQuery(currency, vehicles, billing), ct)).ToActionResult(this);
}
