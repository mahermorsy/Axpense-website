using Axpense.Domain.Enums;
using Microsoft.AspNetCore.Identity;

namespace Axpense.Infrastructure.Identity;

public class ApplicationUser : IdentityUser<Guid>
{
    public string FullName { get; set; } = string.Empty;
    public UserStatus Status { get; set; } = UserStatus.Active;
    public DateTime? LastActiveAt { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class ApplicationRole : IdentityRole<Guid>
{
    public ApplicationRole() { }
    public ApplicationRole(string name) : base(name) { }
}

public sealed class JwtOptions
{
    public const string Section = "Jwt";
    public string Issuer { get; set; } = "axpense-api";
    public string Audience { get; set; } = "axpense-admin";
    /// <summary>HMAC-SHA256 signing key — at least 32 characters. Set via environment/secrets, never commit it.</summary>
    public string Key { get; set; } = string.Empty;
    public int ExpiryMinutes { get; set; } = 480;
}
