using System.Linq.Expressions;
using Axpense.Core.Abstractions;
using Axpense.Core.Common.Results;
using Axpense.Core.Common.Security;
using Axpense.Core.Features.Auth;
using Axpense.Core.Features.Users;
using Axpense.Domain.Enums;
using Axpense.Infrastructure.Persistence;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Axpense.Infrastructure.Identity;

public sealed class IdentityService(
    UserManager<ApplicationUser> userManager,
    AppDbContext db,
    JwtTokenGenerator jwt,
    IDateTimeProvider clock) : IIdentityService
{
    private const string InvalidLogin = "Invalid email or password.";

    public async Task<Result<AuthResponse>> LoginAsync(string email, string password, CancellationToken ct = default)
    {
        var user = await userManager.FindByEmailAsync(email);
        if (user is null || user.Status != UserStatus.Active) return Error.Unauthorized(InvalidLogin);
        if (await userManager.IsLockedOutAsync(user))
            return Error.Unauthorized("Too many failed attempts. Try again in 15 minutes.");
        if (!await userManager.CheckPasswordAsync(user, password))
        {
            await userManager.AccessFailedAsync(user);
            return Error.Unauthorized(InvalidLogin);
        }

        await userManager.ResetAccessFailedCountAsync(user);
        user.LastActiveAt = clock.UtcNow;
        await userManager.UpdateAsync(user);

        var role = (await userManager.GetRolesAsync(user)).FirstOrDefault() ?? string.Empty;
        var (token, expires) = jwt.Create(user, role);
        return new AuthResponse(token, expires, ToDto(user, role));
    }

    /// <summary>Filters apply to ApplicationUser before projecting, so EF can translate them.</summary>
    private IQueryable<UserDto> Project(IQueryable<ApplicationUser> source) =>
        source.Select(u => new UserDto(
            u.Id,
            u.FullName,
            u.Email ?? string.Empty,
            (from ur in db.UserRoles join r in db.Roles on ur.RoleId equals r.Id where ur.UserId == u.Id select r.Name).FirstOrDefault() ?? string.Empty,
            u.Status,
            u.LastActiveAt,
            u.CreatedAt));

    public IQueryable<UserDto> Users() => Project(db.Users.AsNoTracking().OrderBy(u => u.FullName));

    public Task<UserDto?> FindByIdAsync(Guid id, CancellationToken ct = default) =>
        Project(db.Users.AsNoTracking().Where(u => u.Id == id)).FirstOrDefaultAsync(ct);

    public Task<bool> EmailExistsAsync(string email, Guid? exceptId = null, CancellationToken ct = default)
    {
        var normalized = userManager.NormalizeEmail(email);
        return db.Users.AnyAsync(u => u.NormalizedEmail == normalized && (exceptId == null || u.Id != exceptId), ct);
    }

    public Task<int> CountActiveAdminsAsync(CancellationToken ct = default) =>
        (from u in db.Users
         join ur in db.UserRoles on u.Id equals ur.UserId
         join r in db.Roles on ur.RoleId equals r.Id
         where r.Name == Roles.Admin && u.Status == UserStatus.Active
         select u.Id).CountAsync(ct);

    public async Task<Result<UserDto>> CreateAsync(string name, string email, string role, string password, CancellationToken ct = default)
    {
        var user = new ApplicationUser
        {
            UserName = email,
            Email = email,
            EmailConfirmed = true,
            FullName = name,
            Status = UserStatus.Active,
            CreatedAt = clock.UtcNow,
        };
        var created = await userManager.CreateAsync(user, password);
        if (!created.Succeeded) return Describe(created);
        var added = await userManager.AddToRoleAsync(user, role);
        if (!added.Succeeded) return Describe(added);
        return ToDto(user, role);
    }

    public async Task<Result<UserDto>> UpdateAsync(Guid id, string name, string role, UserStatus status, CancellationToken ct = default)
    {
        var user = await userManager.FindByIdAsync(id.ToString());
        if (user is null) return Error.NotFound("User", id);

        user.FullName = name;
        user.Status = status;
        var updated = await userManager.UpdateAsync(user);
        if (!updated.Succeeded) return Describe(updated);

        var current = await userManager.GetRolesAsync(user);
        if (!current.Contains(role))
        {
            if (current.Count > 0) await userManager.RemoveFromRolesAsync(user, current);
            var added = await userManager.AddToRoleAsync(user, role);
            if (!added.Succeeded) return Describe(added);
        }
        // Invalidate existing tokens after role/status changes.
        await userManager.UpdateSecurityStampAsync(user);
        return ToDto(user, role);
    }

    public async Task<Result<bool>> DeleteAsync(Guid id, CancellationToken ct = default)
    {
        var user = await userManager.FindByIdAsync(id.ToString());
        if (user is null) return Error.NotFound("User", id);
        // Their leads become unassigned rather than pointing at a missing user.
        await db.Leads.Where(l => l.OwnerId == id).ExecuteUpdateAsync(s => s.SetProperty(l => l.OwnerId, (Guid?)null), ct);
        var deleted = await userManager.DeleteAsync(user);
        return deleted.Succeeded ? true : Describe(deleted);
    }

    public async Task<Result<bool>> SetPasswordAsync(Guid id, string newPassword, CancellationToken ct = default)
    {
        var user = await userManager.FindByIdAsync(id.ToString());
        if (user is null) return Error.NotFound("User", id);
        var token = await userManager.GeneratePasswordResetTokenAsync(user);
        var reset = await userManager.ResetPasswordAsync(user, token, newPassword);
        return reset.Succeeded ? true : Describe(reset);
    }

    public async Task<Result<bool>> ChangePasswordAsync(Guid id, string currentPassword, string newPassword, CancellationToken ct = default)
    {
        var user = await userManager.FindByIdAsync(id.ToString());
        if (user is null) return Error.NotFound("User", id);
        var changed = await userManager.ChangePasswordAsync(user, currentPassword, newPassword);
        return changed.Succeeded ? true : Describe(changed);
    }

    private static UserDto ToDto(ApplicationUser u, string role) =>
        new(u.Id, u.FullName, u.Email ?? string.Empty, role, u.Status, u.LastActiveAt, u.CreatedAt);

    private static Error Describe(IdentityResult result) =>
        Error.Validation(string.Join(" ", result.Errors.Select(e => e.Description)));
}
