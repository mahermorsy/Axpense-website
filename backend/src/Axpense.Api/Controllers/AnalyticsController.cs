using Axpense.Api.Infrastructure;
using Axpense.Core.Common.Security;
using Axpense.Core.Features.Analytics;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Axpense.Api.Controllers;

[Route("api/analytics"), Authorize(Policy = Policies.Dashboard)]
public sealed class AnalyticsController : ApiControllerBase
{
    /// <summary>Lead metrics are only returned to roles that can see leads.</summary>
    [HttpGet("dashboard")]
    public async Task<IActionResult> Dashboard([FromQuery] int days = 30, [FromQuery] string? country = null, CancellationToken ct = default)
    {
        var includeLeads = User.IsInRole(Roles.Admin) || User.IsInRole(Roles.Sales);
        return (await Sender.Send(new GetDashboardQuery(days, country, includeLeads), ct)).ToActionResult(this);
    }
}
