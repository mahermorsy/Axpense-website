using Axpense.Core.Abstractions;
using Axpense.Core.Common.Cqrs;
using Axpense.Core.Common.Results;
using Axpense.Core.Features.Users;
using FluentValidation;

namespace Axpense.Core.Features.Auth;

public sealed record AuthResponse(string AccessToken, DateTime ExpiresAt, UserDto User);

public sealed record LoginCommand(string Email, string Password) : ICommand<AuthResponse>;

public sealed class LoginHandler(IIdentityService identity) : ICommandHandler<LoginCommand, AuthResponse>
{
    public Task<Result<AuthResponse>> Handle(LoginCommand r, CancellationToken ct) => identity.LoginAsync(r.Email.Trim(), r.Password, ct);
}

public sealed class LoginValidator : AbstractValidator<LoginCommand>
{
    public LoginValidator()
    {
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.Password).NotEmpty();
    }
}

public sealed record GetMeQuery : IQuery<UserDto>;

public sealed class GetMeHandler(IIdentityService identity, ICurrentUser current) : IQueryHandler<GetMeQuery, UserDto>
{
    public async Task<Result<UserDto>> Handle(GetMeQuery request, CancellationToken ct)
    {
        if (current.UserId is not { } id) return Error.Unauthorized("Not signed in.");
        var me = await identity.FindByIdAsync(id, ct);
        return me is null ? Error.Unauthorized("User no longer exists.") : Result<UserDto>.Success(me);
    }
}

public sealed record ChangePasswordCommand(string CurrentPassword, string NewPassword) : ICommand<bool>;

public sealed class ChangePasswordHandler(IIdentityService identity, ICurrentUser current) : ICommandHandler<ChangePasswordCommand, bool>
{
    public Task<Result<bool>> Handle(ChangePasswordCommand r, CancellationToken ct) =>
        current.UserId is { } id
            ? identity.ChangePasswordAsync(id, r.CurrentPassword, r.NewPassword, ct)
            : Task.FromResult(Result<bool>.Failure(Error.Unauthorized("Not signed in.")));
}

public sealed class ChangePasswordValidator : AbstractValidator<ChangePasswordCommand>
{
    public ChangePasswordValidator()
    {
        RuleFor(x => x.CurrentPassword).NotEmpty();
        RuleFor(x => x.NewPassword).NotEmpty().MinimumLength(10).NotEqual(x => x.CurrentPassword);
    }
}
