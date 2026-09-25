using Axpense.Core.Common.Results;
using Microsoft.AspNetCore.Mvc;

namespace Axpense.Api.Infrastructure;

public static class ResultExtensions
{
    /// <summary>Maps a Result to 200/201/204 or an RFC 7807 problem response.</summary>
    public static IActionResult ToActionResult<T>(this Result<T> result, ControllerBase controller, Func<T, IActionResult>? onSuccess = null)
    {
        if (result.IsSuccess) return onSuccess?.Invoke(result.Value!) ?? controller.Ok(result.Value);

        var error = result.Error!;
        var status = error.Type switch
        {
            ErrorType.Validation => StatusCodes.Status400BadRequest,
            ErrorType.NotFound => StatusCodes.Status404NotFound,
            ErrorType.Conflict => StatusCodes.Status409Conflict,
            ErrorType.Forbidden => StatusCodes.Status403Forbidden,
            ErrorType.Unauthorized => StatusCodes.Status401Unauthorized,
            _ => StatusCodes.Status400BadRequest,
        };

        if (result.ValidationErrors is { Count: > 0 } errors)
        {
            var problem = new ValidationProblemDetails(errors.ToDictionary(e => e.Key, e => e.Value))
            {
                Status = status, Title = error.Message, Type = error.Code,
            };
            return controller.StatusCode(status, problem);
        }

        return controller.StatusCode(status, new ProblemDetails { Status = status, Title = error.Message, Type = error.Code });
    }
}
