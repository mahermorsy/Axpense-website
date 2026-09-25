using Axpense.Api.Infrastructure;
using Axpense.Core.Common.Security;
using Axpense.Core.Features.Blog;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Axpense.Api.Controllers;

[Route("api/blog"), Authorize(Policy = Policies.Content)]
public sealed class BlogController : ApiControllerBase
{
    [HttpGet]
    public async Task<IActionResult> List([FromQuery] GetPostsQuery query, CancellationToken ct) =>
        (await Sender.Send(query, ct)).ToActionResult(this);

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> Get(Guid id, CancellationToken ct) =>
        (await Sender.Send(new GetPostByIdQuery(id), ct)).ToActionResult(this);

    [HttpPost]
    public async Task<IActionResult> Create(BlogPostModel model, CancellationToken ct) =>
        (await Sender.Send(new CreatePostCommand(model), ct)).ToActionResult(this, post => CreatedAtAction(nameof(Get), new { id = post.Id }, post));

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, BlogPostModel model, CancellationToken ct) =>
        (await Sender.Send(new UpdatePostCommand(id, model), ct)).ToActionResult(this);

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id, CancellationToken ct) =>
        (await Sender.Send(new DeletePostCommand(id), ct)).ToActionResult(this, _ => NoContent());
}
