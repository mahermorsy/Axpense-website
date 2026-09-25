using System.Diagnostics;
using System.Reflection;
using Axpense.Core.Common.Results;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Axpense.Core.Common.Behaviors;

/// <summary>Runs FluentValidation validators before every handler; returns Result.Invalid instead of throwing.</summary>
public sealed class ValidationBehavior<TRequest, TResponse>(IEnumerable<IValidator<TRequest>> validators)
    : IPipelineBehavior<TRequest, TResponse> where TRequest : notnull
{
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken ct)
    {
        if (!validators.Any()) return await next();

        var context = new ValidationContext<TRequest>(request);
        var results = await Task.WhenAll(validators.Select(v => v.ValidateAsync(context, ct)));
        var failures = results.SelectMany(r => r.Errors).Where(f => f is not null).ToList();
        if (failures.Count == 0) return await next();

        var errors = failures
            .GroupBy(f => f.PropertyName)
            .ToDictionary(g => g.Key, g => g.Select(f => f.ErrorMessage).Distinct().ToArray());

        var responseType = typeof(TResponse);
        if (responseType.IsGenericType && responseType.GetGenericTypeDefinition() == typeof(Result<>))
        {
            var invalid = responseType.GetMethod(nameof(Result<object>.Invalid), BindingFlags.Public | BindingFlags.Static)!;
            return (TResponse)invalid.Invoke(null, new object[] { (IReadOnlyDictionary<string, string[]>)errors })!;
        }
        throw new ValidationException(failures);
    }
}

/// <summary>Logs every request with its duration; warns on slow ones.</summary>
public sealed class LoggingBehavior<TRequest, TResponse>(ILogger<LoggingBehavior<TRequest, TResponse>> logger)
    : IPipelineBehavior<TRequest, TResponse> where TRequest : notnull
{
    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken ct)
    {
        var name = typeof(TRequest).Name;
        var sw = Stopwatch.StartNew();
        var response = await next();
        sw.Stop();
        if (sw.ElapsedMilliseconds > 500)
            logger.LogWarning("Slow request {Request} took {Elapsed} ms", name, sw.ElapsedMilliseconds);
        else
            logger.LogDebug("Handled {Request} in {Elapsed} ms", name, sw.ElapsedMilliseconds);
        return response;
    }
}
