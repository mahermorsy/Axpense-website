namespace Axpense.Core.Common.Results;

public enum ErrorType { Failure, Validation, NotFound, Conflict, Forbidden, Unauthorized }

public sealed record Error(string Code, string Message, ErrorType Type = ErrorType.Failure)
{
    public static Error NotFound(string entity, object id) => new($"{entity}.NotFound", $"{entity} '{id}' was not found.", ErrorType.NotFound);
    public static Error Conflict(string code, string message) => new(code, message, ErrorType.Conflict);
    public static Error Forbidden(string message) => new("Forbidden", message, ErrorType.Forbidden);
    public static Error Unauthorized(string message) => new("Unauthorized", message, ErrorType.Unauthorized);
    public static Error Validation(string message) => new("Validation", message, ErrorType.Validation);
    public static Error Failure(string code, string message) => new(code, message);
}

/// <summary>Outcome of a command/query: a value or an error — no exceptions for expected failures.</summary>
public sealed class Result<T>
{
    private Result(T? value, Error? error, IReadOnlyDictionary<string, string[]>? validationErrors)
    {
        Value = value;
        Error = error;
        ValidationErrors = validationErrors;
    }

    public bool IsSuccess => Error is null;
    public T? Value { get; }
    public Error? Error { get; }
    public IReadOnlyDictionary<string, string[]>? ValidationErrors { get; }

    public static Result<T> Success(T value) => new(value, null, null);
    public static Result<T> Failure(Error error) => new(default, error, null);

    /// <summary>Used by the validation pipeline behavior (called via reflection).</summary>
    public static Result<T> Invalid(IReadOnlyDictionary<string, string[]> errors) =>
        new(default, Error.Validation("One or more validation errors occurred."), errors);

    public static implicit operator Result<T>(T value) => Success(value);
    public static implicit operator Result<T>(Error error) => Failure(error);
}
