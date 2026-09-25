using Axpense.Core.Abstractions;
using Axpense.Core.Common.Results;
using Axpense.Core.Common.Security;
using Axpense.Core.Features.Auth;
using Axpense.Core.Features.Users;
using Axpense.Domain.Enums;

namespace Axpense.Tests.Fakes;

public sealed class FakeIdentityService : IIdentityService
{
    public List<UserDto> Store { get; } = new();

    public UserDto Add(string name, string role, UserStatus status = UserStatus.Active)
    {
        var u = new UserDto(Guid.NewGuid(), name, $"{name.Replace(' ', '.').ToLowerInvariant()}@axpense.local", role, status, null, DateTime.UtcNow);
        Store.Add(u);
        return u;
    }

    public Task<Result<AuthResponse>> LoginAsync(string email, string password, CancellationToken ct = default) =>
        Task.FromResult(Result<AuthResponse>.Failure(Error.Unauthorized("n/a")));
    public IQueryable<UserDto> Users() => Store.OrderBy(u => u.Name).AsQueryable();
    public Task<UserDto?> FindByIdAsync(Guid id, CancellationToken ct = default) => Task.FromResult(Store.FirstOrDefault(u => u.Id == id));
    public Task<bool> EmailExistsAsync(string email, Guid? exceptId = null, CancellationToken ct = default) =>
        Task.FromResult(Store.Any(u => u.Email.Equals(email, StringComparison.OrdinalIgnoreCase) && u.Id != exceptId));
    public Task<int> CountActiveAdminsAsync(CancellationToken ct = default) =>
        Task.FromResult(Store.Count(u => u.Role == Roles.Admin && u.Status == UserStatus.Active));

    public Task<Result<UserDto>> CreateAsync(string name, string email, string role, string password, CancellationToken ct = default)
    {
        var u = new UserDto(Guid.NewGuid(), name, email, role, UserStatus.Active, null, DateTime.UtcNow);
        Store.Add(u);
        return Task.FromResult(Result<UserDto>.Success(u));
    }

    public Task<Result<UserDto>> UpdateAsync(Guid id, string name, string role, UserStatus status, CancellationToken ct = default)
    {
        var i = Store.FindIndex(u => u.Id == id);
        if (i < 0) return Task.FromResult(Result<UserDto>.Failure(Error.NotFound("User", id)));
        Store[i] = Store[i] with { Name = name, Role = role, Status = status };
        return Task.FromResult(Result<UserDto>.Success(Store[i]));
    }

    public Task<Result<bool>> DeleteAsync(Guid id, CancellationToken ct = default) =>
        Task.FromResult(Result<bool>.Success(Store.RemoveAll(u => u.Id == id) > 0));
    public Task<Result<bool>> SetPasswordAsync(Guid id, string newPassword, CancellationToken ct = default) => Task.FromResult(Result<bool>.Success(true));
    public Task<Result<bool>> ChangePasswordAsync(Guid id, string currentPassword, string newPassword, CancellationToken ct = default) => Task.FromResult(Result<bool>.Success(true));
}
