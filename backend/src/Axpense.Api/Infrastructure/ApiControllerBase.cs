using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Axpense.Api.Infrastructure;

[ApiController]
[Produces("application/json")]
public abstract class ApiControllerBase : ControllerBase
{
    private ISender? _sender;
    protected ISender Sender => _sender ??= HttpContext.RequestServices.GetRequiredService<ISender>();
}
