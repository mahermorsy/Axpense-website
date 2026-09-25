using Axpense.Api.Infrastructure;
using Axpense.Core.Common.Security;
using Axpense.Core.Features.Users;
using Axpense.Domain.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Axpense.Api.Controllers;

[Route("api/users")]
public sealed class UsersController : ApiControllerBase
{
    /// <summary>Everyone signed in can read the user list (needed for lead owners); only admins can change it.</summary>
    [HttpGet, Authorize(Policy = Policies.Dashboard)]
    public async Task<IActionResult> List(CancellationToken ct) => (await Sender.Send(new GetUsersQuery(), ct)).ToActionResult(this);

    [HttpPost, Authorize(Policy = Policies.Users)]
    public async Task<IActionResult> Create(CreateUserCommand command, CancellationToken ct) =>
        (await Sender.Send(command, ct)).ToActionResult(this, u => StatusCode(StatusCodes.Status201Created, u));

    public sealed record UpdateUserRequest(string Name, string Role, UserStatus Status);

    [HttpPut("{id:guid}"), Authorize(Policy = Policies.Users)]
    public async Task<IActionResult> Update(Guid id, UpdateUserRequest r, CancellationToken ct) =>
        (await Sender.Send(new UpdateUserCommand(id, r.Name, r.Role, r.Status), ct)).ToActionResult(this);

    [HttpPost("{id:guid}/reset-password"), Authorize(Policy = Policies.Users)]
    public async Task<IActionResult> ResetPassword(Guid id, CancellationToken ct) =>
        (await Sender.Send(new ResetUserPasswordCommand(id), ct)).ToActionResult(this);

    [HttpDelete("{id:guid}"), Authorize(Policy = Policies.Users)]
    public async Task<IActionResult> Delete(Guid id, CancellationToken ct) =>
        (await Sender.Send(new DeleteUserCommand(id), ct)).ToActionResult(this, _ => NoContent());
}
