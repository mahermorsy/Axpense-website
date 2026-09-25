using Axpense.Core.Common.Results;
using Axpense.Core.Features.Auth;
using Axpense.Core.Features.Users;

namespace Axpense.Core.Abstractions;

public interface ICurrentUser
{
    Guid? UserId { get; }
    string? Name { get; }
    string? Email { get; }
    string? Role { get; }
    bool IsAuthenticated { get; }
}

public interface IDateTimeProvider
{
    DateTime UtcNow { get; }
}

/// <summary>User & role management (implemented with ASP.NET Core Identity in Infrastructure).</summary>
public interface IIdentityService
{
    Task<Result<AuthResponse>> LoginAsync(string email, string password, CancellationToken ct = default);
    IQueryable<UserDto> Users();
    Task<UserDto?> FindByIdAsync(Guid id, CancellationToken ct = default);
    Task<bool> EmailExistsAsync(string email, Guid? exceptId = null, CancellationToken ct = default);
    Task<int> CountActiveAdminsAsync(CancellationToken ct = default);
    Task<Result<UserDto>> CreateAsync(string name, string email, string role, string password, CancellationToken ct = default);
    Task<Result<UserDto>> UpdateAsync(Guid id, string name, string role, Domain.Enums.UserStatus status, CancellationToken ct = default);
    Task<Result<bool>> DeleteAsync(Guid id, CancellationToken ct = default);
    Task<Result<bool>> SetPasswordAsync(Guid id, string newPassword, CancellationToken ct = default);
    Task<Result<bool>> ChangePasswordAsync(Guid id, string currentPassword, string newPassword, CancellationToken ct = default);
}
