using Axpense.Api.Infrastructure;
using Axpense.Core.Common.Security;
using Axpense.Core.Features.Faqs;
using Axpense.Domain.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Axpense.Api.Controllers;

[Route("api/faqs"), Authorize(Policy = Policies.Content)]
public sealed class FaqsController : ApiControllerBase
{
    [HttpGet]
    public async Task<IActionResult> List([FromQuery] string? page, [FromQuery] ContentLanguage? language, [FromQuery] string? search, CancellationToken ct) =>
        (await Sender.Send(new GetFaqsQuery(page, language, search), ct)).ToActionResult(this);

    [HttpPost]
    public async Task<IActionResult> Create(FaqModel model, CancellationToken ct) =>
        (await Sender.Send(new CreateFaqCommand(model), ct)).ToActionResult(this, faq => StatusCode(StatusCodes.Status201Created, faq));

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, FaqModel model, CancellationToken ct) =>
        (await Sender.Send(new UpdateFaqCommand(id, model), ct)).ToActionResult(this);

    public sealed record MoveRequest(int Direction);

    [HttpPost("{id:guid}/move")]
    public async Task<IActionResult> Move(Guid id, MoveRequest request, CancellationToken ct) =>
        (await Sender.Send(new MoveFaqCommand(id, request.Direction), ct)).ToActionResult(this, moved => Ok(new { moved }));

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id, CancellationToken ct) =>
        (await Sender.Send(new DeleteFaqCommand(id), ct)).ToActionResult(this, _ => NoContent());
}
