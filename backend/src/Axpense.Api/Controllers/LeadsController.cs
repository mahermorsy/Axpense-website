using Axpense.Api.Infrastructure;
using Axpense.Core.Common.Security;
using Axpense.Core.Features.Leads;
using Axpense.Domain.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Axpense.Api.Controllers;

[Route("api/leads"), Authorize(Policy = Policies.Leads)]
public sealed class LeadsController : ApiControllerBase
{
    [HttpGet]
    public async Task<IActionResult> List([FromQuery] GetLeadsQuery query, CancellationToken ct) =>
        (await Sender.Send(query, ct)).ToActionResult(this);

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get(Guid id, CancellationToken ct) =>
        (await Sender.Send(new GetLeadByIdQuery(id), ct)).ToActionResult(this);

    [HttpPatch("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, UpdateLeadModel model, CancellationToken ct) =>
        (await Sender.Send(new UpdateLeadCommand(id, model), ct)).ToActionResult(this);

    public sealed record NoteRequest(string Text);

    [HttpPost("{id:guid}/notes")]
    public async Task<IActionResult> AddNote(Guid id, NoteRequest request, CancellationToken ct) =>
        (await Sender.Send(new AddLeadNoteCommand(id, request.Text), ct)).ToActionResult(this, note => StatusCode(StatusCodes.Status201Created, note));

    public sealed record BulkUpdateRequest(List<Guid> Ids, LeadStatus? Status, Guid? OwnerId);

    [HttpPost("bulk-update")]
    public async Task<IActionResult> BulkUpdate(BulkUpdateRequest r, CancellationToken ct) =>
        (await Sender.Send(new BulkUpdateLeadsCommand(r.Ids, r.Status, r.OwnerId), ct)).ToActionResult(this, n => Ok(new { updated = n }));

    public sealed record BulkDeleteRequest(List<Guid> Ids);

    [HttpPost("bulk-delete")]
    public async Task<IActionResult> BulkDelete(BulkDeleteRequest r, CancellationToken ct) =>
        (await Sender.Send(new DeleteLeadsCommand(r.Ids), ct)).ToActionResult(this, n => Ok(new { deleted = n }));

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id, CancellationToken ct) =>
        (await Sender.Send(new DeleteLeadCommand(id), ct)).ToActionResult(this, _ => NoContent());
}
