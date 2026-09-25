using System.Text.Json;
using System.Text.Json.Serialization;
using Axpense.Core.Common.Security;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;
using Axpense.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Axpense.Infrastructure.Persistence.Seed;

public static class DbInitializer
{
    private static readonly JsonSerializerOptions Json = new()
    {
        PropertyNameCaseInsensitive = true,
        Converters = { new JsonStringEnumConverter(JsonNamingPolicy.SnakeCaseLower) },
    };

    /// <summary>
    /// Applies migrations (or creates the schema if the project has none yet), then seeds
    /// roles, the first admin, and — optionally — the website's existing blog posts and FAQs.
    /// </summary>
    public static async Task InitialiseDatabaseAsync(this IServiceProvider services, CancellationToken ct = default)
    {
        using var scope = services.CreateScope();
        var sp = scope.ServiceProvider;
        var db = sp.GetRequiredService<AppDbContext>();
        var config = sp.GetRequiredService<IConfiguration>();
        var logger = sp.GetRequiredService<ILoggerFactory>().CreateLogger("DbInitializer");

        if (db.Database.IsRelational() && db.Database.GetMigrations().Any())
        {
            logger.LogInformation("Applying migrations…");
            await db.Database.MigrateAsync(ct);
        }
        else
        {
            logger.LogWarning("No EF migrations found — creating schema with EnsureCreated. Add an initial migration before production.");
            await db.Database.EnsureCreatedAsync(ct);
        }

        // Roles
        var roleManager = sp.GetRequiredService<RoleManager<ApplicationRole>>();
        foreach (var role in Roles.All)
            if (!await roleManager.RoleExistsAsync(role))
                await roleManager.CreateAsync(new ApplicationRole(role));

        // First admin (only when the database has no users)
        var userManager = sp.GetRequiredService<UserManager<ApplicationUser>>();
        var email = config["Seed:AdminEmail"];
        var password = config["Seed:AdminPassword"];
        if (!await userManager.Users.AnyAsync(ct) && !string.IsNullOrWhiteSpace(email) && !string.IsNullOrWhiteSpace(password))
        {
            var admin = new ApplicationUser
            {
                UserName = email, Email = email, EmailConfirmed = true,
                FullName = config["Seed:AdminName"] ?? "Administrator",
                Status = UserStatus.Active, CreatedAt = DateTime.UtcNow,
            };
            var created = await userManager.CreateAsync(admin, password);
            if (created.Succeeded)
            {
                await userManager.AddToRoleAsync(admin, Roles.Admin);
                logger.LogInformation("Seeded admin user {Email}", email);
            }
            else
            {
                logger.LogError("Could not seed admin: {Errors}", string.Join("; ", created.Errors.Select(e => e.Description)));
            }
        }

        // Website content (blog posts & FAQs) — only into empty tables.
        if (config.GetValue("Seed:WebsiteContent", true))
        {
            var dir = Path.Combine(AppContext.BaseDirectory, "Persistence", "Seed");
            if (!await db.BlogPosts.IgnoreQueryFilters().AnyAsync(ct) && File.Exists(Path.Combine(dir, "blog-posts.json")))
            {
                var posts = JsonSerializer.Deserialize<List<SeedPost>>(await File.ReadAllTextAsync(Path.Combine(dir, "blog-posts.json"), ct), Json) ?? new();
                db.BlogPosts.AddRange(posts.Select(p => new BlogPost
                {
                    Slug = p.Slug, Title = p.Title, Excerpt = p.Excerpt, Category = p.Category,
                    Language = p.Language, Status = PostStatus.Published,
                    PublishedAt = DateTime.SpecifyKind(DateTime.Parse(p.PublishedAt), DateTimeKind.Utc),
                    Sections = p.Sections,
                }));
            }
            if (!await db.Faqs.IgnoreQueryFilters().AnyAsync(ct) && File.Exists(Path.Combine(dir, "faqs.json")))
            {
                var faqs = JsonSerializer.Deserialize<List<SeedFaq>>(await File.ReadAllTextAsync(Path.Combine(dir, "faqs.json"), ct), Json) ?? new();
                db.Faqs.AddRange(faqs.Select(f => new Faq
                {
                    Page = f.Page, Language = f.Language, Question = f.Question, Answer = f.Answer, SortOrder = f.SortOrder, IsPublished = true,
                }));
            }
            await db.SaveChangesAsync(ct);
        }
    }

    private sealed record SeedPost(string Slug, string Title, string Excerpt, string Category, ContentLanguage Language, string PublishedAt, List<BlogSection> Sections);
    private sealed record SeedFaq(string Page, ContentLanguage Language, string Question, string Answer, int SortOrder);
}
