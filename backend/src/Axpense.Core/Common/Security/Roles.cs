namespace Axpense.Core.Common.Security;

public static class Roles
{
    public const string Admin = "Admin";
    public const string Editor = "Editor";
    public const string Sales = "Sales";
    public static readonly string[] All = { Admin, Editor, Sales };
    public static bool IsValid(string? role) => role is not null && All.Contains(role);
}

/// <summary>Authorization policy names (mapped to roles in the API).</summary>
public static class Policies
{
    public const string Dashboard = nameof(Dashboard); // Admin, Editor, Sales
    public const string Leads = nameof(Leads);         // Admin, Sales
    public const string Content = nameof(Content);     // Admin, Editor
    public const string Users = nameof(Users);         // Admin
}
