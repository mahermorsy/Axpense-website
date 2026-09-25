using System.Security.Cryptography;
using Axpense.Core.Abstractions;
using Axpense.Core.Common.Cqrs;
using Axpense.Core.Common.Results;
using Axpense.Core.Common.Security;
using Axpense.Domain.Enums;
using FluentValidation;

namespace Axpense.Core.Features.Users;

// ===== Models =====
public sealed record UserDto(Guid Id, string Name, string Email, string Role, UserStatus Status, DateTime? LastActiveAt, DateTime CreatedAt);

/// <summary>Returned once when a user is created or a password reset: the temporary password to hand over.</summary>
public sealed record UserWithPasswordDto(UserDto User, string? TemporaryPassword);

public static class PasswordGenerator
{
    private const string Upper = "ABCDEFGHJKLMNPQRSTUVWXYZ", Lower = "abcdefghijkmnpqrstuvwxyz", Digits = "23456789", Symbols = "!@#$%*?";

    /// <summary>12+ chars with upper, lower, digit and symbol — satisfies the Identity password policy.</summary>
    public static string Create(int length = 14)
    {
        var all = Upper + Lower + Digits + Symbols;
        var chars = new List<char>
        {
            Upper[RandomNumberGenerator.GetInt32(Upper.Length)],
            Lower[RandomNumberGenerator.GetInt32(Lower.Length)],
            Digits[RandomNumberGenerator.GetInt32(Digits.Length)],
            Symbols[RandomNumberGenerator.GetInt32(Symbols.Length)],
        };
        while (chars.Count < length) chars.Add(all[RandomNumberGenerator.GetInt32(all.Length)]);
        return new string(chars.OrderBy(_ => RandomNumberGenerator.GetInt32(int.MaxValue)).ToArray());
    }
}

// ===== Queries =====
public sealed record GetUsersQuery : IQuery<List<UserDto>>;

public sealed class GetUsersHandler(IIdentityService identity, IQueryableExecutor executor) : IQueryHandler<GetUsersQuery, List<UserDto>>
{
    public async Task<Result<List<UserDto>>> Handle(GetUsersQuery request, CancellationToken ct) =>
        await executor.ToListAsync(identity.Users(), ct); // already ordered by name
}

// ===== Commands =====
public sealed record CreateUserCommand(string Name, string Email, string Role, string? Password) : ICommand<UserWithPasswordDto>;

public sealed class CreateUserHandler(IIdentityService identity) : ICommandHandler<CreateUserCommand, UserWithPasswordDto>
{
    public async Task<Result<UserWithPasswordDto>> Handle(CreateUserCommand r, CancellationToken ct)
    {
        if (await identity.EmailExistsAsync(r.Email, null, ct))
            return Error.Conflict("User.EmailTaken", "A user with this email already exists.");
        var generated = string.IsNullOrWhiteSpace(r.Password);
        var password = generated ? PasswordGenerator.Create() : r.Password!;
        var created = await identity.CreateAsync(r.Name.Trim(), r.Email.Trim(), r.Role, password, ct);
        if (!created.IsSuccess) return created.Error!;
        return new UserWithPasswordDto(created.Value!, generated ? password : null);
    }
}

public sealed record UpdateUserCommand(Guid Id, string Name, string Role, UserStatus Status) : ICommand<UserDto>;

public sealed class UpdateUserHandler(IIdentityService identity, ICurrentUser current) : ICommandHandler<UpdateUserCommand, UserDto>
{
    public async Task<Result<UserDto>> Handle(UpdateUserCommand r, CancellationToken ct)
    {
        var user = await identity.FindByIdAsync(r.Id, ct);
        if (user is null) return Error.NotFound("User", r.Id);

        var isSelf = current.UserId == r.Id;
        if (isSelf && (user.Role != r.Role || r.Status != UserStatus.Active))
            return Error.Forbidden("You can't change your own role or status.");

        var losesAdmin = user.Role == Roles.Admin && user.Status == UserStatus.Active && (r.Role != Roles.Admin || r.Status != UserStatus.Active);
        if (losesAdmin && await identity.CountActiveAdminsAsync(ct) <= 1)
            return Error.Conflict("User.LastAdmin", "At least one active admin is required.");

        return await identity.UpdateAsync(r.Id, r.Name.Trim(), r.Role, r.Status, ct);
    }
}

public sealed record DeleteUserCommand(Guid Id) : ICommand<bool>;

public sealed class DeleteUserHandler(IIdentityService identity, ICurrentUser current) : ICommandHandler<DeleteUserCommand, bool>
{
    public async Task<Result<bool>> Handle(DeleteUserCommand r, CancellationToken ct)
    {
        if (current.UserId == r.Id) return Error.Forbidden("You can't remove yourself.");
        var user = await identity.FindByIdAsync(r.Id, ct);
        if (user is null) return Error.NotFound("User", r.Id);
        if (user.Role == Roles.Admin && user.Status == UserStatus.Active && await identity.CountActiveAdminsAsync(ct) <= 1)
            return Error.Conflict("User.LastAdmin", "At least one active admin is required.");
        return await identity.DeleteAsync(r.Id, ct);
    }
}

public sealed record ResetUserPasswordCommand(Guid Id) : ICommand<UserWithPasswordDto>;

public sealed class ResetUserPasswordHandler(IIdentityService identity) : ICommandHandler<ResetUserPasswordCommand, UserWithPasswordDto>
{
    public async Task<Result<UserWithPasswordDto>> Handle(ResetUserPasswordCommand r, CancellationToken ct)
    {
        var user = await identity.FindByIdAsync(r.Id, ct);
        if (user is null) return Error.NotFound("User", r.Id);
        var password = PasswordGenerator.Create();
        var result = await identity.SetPasswordAsync(r.Id, password, ct);
        if (!result.IsSuccess) return result.Error!;
        return new UserWithPasswordDto(user, password);
    }
}

// ===== Validation =====
public sealed class CreateUserValidator : AbstractValidator<CreateUserCommand>
{
    public CreateUserValidator()
    {
        RuleFor(x => x.Name).NotEmpty().MaximumLength(120);
        RuleFor(x => x.Email).NotEmpty().EmailAddress().MaximumLength(200);
        RuleFor(x => x.Role).Must(Roles.IsValid).WithMessage("Role must be Admin, Editor or Sales.");
        RuleFor(x => x.Password).MinimumLength(10).When(x => !string.IsNullOrEmpty(x.Password));
    }
}

public sealed class UpdateUserValidator : AbstractValidator<UpdateUserCommand>
{
    public UpdateUserValidator()
    {
        RuleFor(x => x.Id).NotEmpty();
        RuleFor(x => x.Name).NotEmpty().MaximumLength(120);
        RuleFor(x => x.Role).Must(Roles.IsValid).WithMessage("Role must be Admin, Editor or Sales.");
        RuleFor(x => x.Status).IsInEnum();
    }
}
