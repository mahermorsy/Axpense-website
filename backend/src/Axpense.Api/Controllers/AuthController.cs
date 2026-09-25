using Axpense.Api.Infrastructure;
using Axpense.Core.Features.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace Axpense.Api.Controllers;

[Route("api/auth")]
public sealed class AuthController : ApiControllerBase
{
    /// <summary>Email + password → JWT access token.</summary>
    [HttpPost("login"), AllowAnonymous, EnableRateLimiting("auth")]
    public async Task<IActionResult> Login(LoginCommand command, CancellationToken ct) =>
        (await Sender.Send(command, ct)).ToActionResult(this);

    [HttpGet("me"), Authorize]
    public async Task<IActionResult> Me(CancellationToken ct) => (await Sender.Send(new GetMeQuery(), ct)).ToActionResult(this);

    [HttpPost("change-password"), Authorize]
    public async Task<IActionResult> ChangePassword(ChangePasswordCommand command, CancellationToken ct) =>
        (await Sender.Send(command, ct)).ToActionResult(this, _ => NoContent());
}
