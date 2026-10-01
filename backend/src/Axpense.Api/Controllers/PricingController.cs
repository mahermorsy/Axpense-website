using Axpense.Api.Infrastructure;
using Axpense.Core.Common.Security;
using Axpense.Core.Features.Pricing;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Axpense.Api.Controllers;

/// <summary>
/// Pricing configuration (Admin). The website reads GET /api/public/pricing and
/// re-checks every few minutes, so changes here go live without a redeploy.
/// </summary>
[Route("api/pricing"), Authorize(Policy = Policies.Pricing)]
public sealed class PricingController : ApiControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get(CancellationToken ct) =>
        (await Sender.Send(new GetPricingAdminQuery(), ct)).ToActionResult(this);

    [HttpPost("currencies")]
    public async Task<IActionResult> CreateCurrency(PricingCurrencyModel model, CancellationToken ct) =>
        (await Sender.Send(new CreatePricingCurrencyCommand(model), ct)).ToActionResult(this, c => StatusCode(StatusCodes.Status201Created, c));

    [HttpPut("currencies/{id:guid}")]
    public async Task<IActionResult> UpdateCurrency(Guid id, PricingCurrencyModel model, CancellationToken ct) =>
        (await Sender.Send(new UpdatePricingCurrencyCommand(id, model), ct)).ToActionResult(this);

    [HttpDelete("currencies/{id:guid}")]
    public async Task<IActionResult> DeleteCurrency(Guid id, CancellationToken ct) =>
        (await Sender.Send(new DeletePricingCurrencyCommand(id), ct)).ToActionResult(this, _ => NoContent());

    [HttpPost("tiers")]
    public async Task<IActionResult> CreateTier(PricingTierModel model, CancellationToken ct) =>
        (await Sender.Send(new CreatePricingTierCommand(model), ct)).ToActionResult(this, t => StatusCode(StatusCodes.Status201Created, t));

    [HttpPut("tiers/{id:guid}")]
    public async Task<IActionResult> UpdateTier(Guid id, PricingTierModel model, CancellationToken ct) =>
        (await Sender.Send(new UpdatePricingTierCommand(id, model), ct)).ToActionResult(this);

    [HttpDelete("tiers/{id:guid}")]
    public async Task<IActionResult> DeleteTier(Guid id, CancellationToken ct) =>
        (await Sender.Send(new DeletePricingTierCommand(id), ct)).ToActionResult(this, _ => NoContent());
}
