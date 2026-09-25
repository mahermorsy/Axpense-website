using System.Security.Claims;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.RateLimiting;
using Axpense.Api.Infrastructure;
using Axpense.Core;
using Axpense.Core.Abstractions;
using Axpense.Core.Common.Security;
using Axpense.Infrastructure;
using Axpense.Infrastructure.Identity;
using Axpense.Infrastructure.Persistence.Seed;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
var config = builder.Configuration;

// ---------- Layers ----------
builder.Services.AddCore();
builder.Services.AddInfrastructure(config);
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<ICurrentUser, CurrentUser>();

// ---------- MVC + JSON (enums as snake_case strings: "demo_booked", "en") ----------
builder.Services.AddControllers().AddJsonOptions(o =>
{
    o.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter(JsonNamingPolicy.SnakeCaseLower));
    o.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.Never;
});
builder.Services.AddProblemDetails();

// ---------- Auth: JWT bearer + role policies ----------
var jwt = config.GetSection(JwtOptions.Section).Get<JwtOptions>() ?? new JwtOptions();
if (string.IsNullOrWhiteSpace(jwt.Key) || jwt.Key.Length < 32)
    throw new InvalidOperationException("Jwt:Key must be set to at least 32 characters (use an environment variable or user secrets).");

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(o =>
    {
        o.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true, ValidIssuer = jwt.Issuer,
            ValidateAudience = true, ValidAudience = jwt.Audience,
            ValidateIssuerSigningKey = true, IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key)),
            ValidateLifetime = true, ClockSkew = TimeSpan.FromMinutes(1),
            NameClaimType = ClaimTypes.Name, RoleClaimType = ClaimTypes.Role,
        };
        // Reject tokens of users who were disabled, deleted or had their role changed since sign-in.
        o.Events = new JwtBearerEvents
        {
            OnTokenValidated = async ctx =>
            {
                var id = ctx.Principal?.FindFirstValue(ClaimTypes.NameIdentifier) ?? ctx.Principal?.FindFirstValue("sub");
                var users = ctx.HttpContext.RequestServices.GetRequiredService<UserManager<ApplicationUser>>();
                var user = id is null ? null : await users.FindByIdAsync(id);
                if (user is null || user.Status != Axpense.Domain.Enums.UserStatus.Active) { ctx.Fail("User is not active."); return; }
                var role = ctx.Principal!.FindFirstValue(ClaimTypes.Role);
                if (role is null || !await users.IsInRoleAsync(user, role)) ctx.Fail("Role has changed — sign in again.");
            },
        };
    });

builder.Services.AddAuthorizationBuilder()
    .AddPolicy(Policies.Dashboard, p => p.RequireRole(Roles.Admin, Roles.Editor, Roles.Sales))
    .AddPolicy(Policies.Leads, p => p.RequireRole(Roles.Admin, Roles.Sales))
    .AddPolicy(Policies.Content, p => p.RequireRole(Roles.Admin, Roles.Editor))
    .AddPolicy(Policies.Users, p => p.RequireRole(Roles.Admin));

// ---------- CORS (admin + website origins) ----------
var origins = config.GetSection("Cors:Origins").Get<string[]>() ?? Array.Empty<string>();
builder.Services.AddCors(o => o.AddDefaultPolicy(p => p.WithOrigins(origins).AllowAnyHeader().AllowAnyMethod()));

// ---------- Rate limiting (per client IP) ----------
builder.Services.AddRateLimiter(o =>
{
    o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
    static string Ip(HttpContext c) => c.Connection.RemoteIpAddress?.ToString() ?? "unknown";
    o.AddPolicy("leads", c => RateLimitPartition.GetFixedWindowLimiter(Ip(c), _ => new FixedWindowRateLimiterOptions { PermitLimit = 5, Window = TimeSpan.FromMinutes(10) }));
    o.AddPolicy("auth", c => RateLimitPartition.GetFixedWindowLimiter(Ip(c), _ => new FixedWindowRateLimiterOptions { PermitLimit = 10, Window = TimeSpan.FromMinutes(1) }));
    o.AddPolicy("views", c => RateLimitPartition.GetFixedWindowLimiter(Ip(c), _ => new FixedWindowRateLimiterOptions { PermitLimit = 60, Window = TimeSpan.FromMinutes(1) }));
});

builder.Services.AddOutputCache();
builder.Services.AddHealthChecks();
builder.Services.Configure<ForwardedHeadersOptions>(o =>
{
    o.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
    o.KnownNetworks.Clear();
    o.KnownProxies.Clear();
});

// ---------- Swagger (with "Authorize" button for the JWT) ----------
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(o =>
{
    o.SwaggerDoc("v1", new OpenApiInfo { Title = "Axpense Admin API", Version = "v1" });
    o.CustomSchemaIds(t => t.FullName?.Replace("+", "."));
    var scheme = new OpenApiSecurityScheme
    {
        Name = "Authorization", Type = SecuritySchemeType.Http, Scheme = "bearer", BearerFormat = "JWT", In = ParameterLocation.Header,
        Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" },
    };
    o.AddSecurityDefinition("Bearer", scheme);
    o.AddSecurityRequirement(new OpenApiSecurityRequirement { [scheme] = Array.Empty<string>() });
});

var app = builder.Build();

app.UseForwardedHeaders();
app.UseExceptionHandler();
app.UseStatusCodePages();
if (app.Environment.IsDevelopment() || config.GetValue<bool>("Swagger:Enabled"))
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();
app.UseRateLimiter();
app.UseAuthentication();
app.UseAuthorization();
app.UseOutputCache();
app.MapControllers();
app.MapHealthChecks("/health");

// ---------- Database: migrate/create + seed (retries while SQL Server starts) ----------
for (var attempt = 1; ; attempt++)
{
    try
    {
        await app.Services.InitialiseDatabaseAsync();
        break;
    }
    catch (Exception ex) when (attempt < 12)
    {
        app.Logger.LogWarning("Database not ready (attempt {Attempt}): {Message}", attempt, ex.Message);
        await Task.Delay(TimeSpan.FromSeconds(5));
    }
}

app.Run();

public partial class Program { }
