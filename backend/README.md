# Axpense Admin API (.NET 8)

Backend for the `/admin` dashboard and the website's lead form.
Clean Architecture · CQRS with MediatR · EF Core + SQL Server · ASP.NET Core Identity + JWT · Docker.

## Solution layout (5 projects)

```
backend/
├─ src/
│  ├─ Axpense.Domain          Entities + enums. No dependencies.
│  │    Common/BaseEntity.cs   BaseEntity<TKey> → BaseEntity (Guid Id, audit fields, soft delete)
│  │    Entities/              Lead, LeadNote, BlogPost (+ JSON sections), Faq
│  ├─ Axpense.Core            Application layer — depends on Domain only.
│  │    Abstractions/          IGenericRepository<T>, IUnitOfWork, IQueryableExecutor, ICurrentUser, IIdentityService
│  │    Common/Cqrs/           ICommand/IQuery, generic CRUD bases:
│  │                           GetByIdQuery / PagedQuery / CreateCommand / UpdateCommand / DeleteCommand
│  │                           + matching abstract handlers
│  │    Common/Behaviors/      ValidationBehavior (FluentValidation), LoggingBehavior
│  │    Features/<Module>/     Models (DTOs + input models), Commands, Queries, Validators, handlers
│  │                           Leads · Blog · Faqs · Users · Auth · Analytics
│  ├─ Axpense.Infrastructure  EF Core DbContext (SQL Server), GenericRepository, UnitOfWork,
│  │                           audit/soft-delete interceptor, Identity (users/roles), JWT, seeding
│  └─ Axpense.Api             Controllers → MediatR, JWT auth, role policies, rate limits, Swagger
└─ tests/
   └─ Axpense.Tests           xUnit — handlers tested over in-memory IQueryable (no database)
```

Dependency rule: **Api → Infrastructure → Core → Domain** (Core never references EF Core or ASP.NET).

### How a request flows

```
HTTP → Controller → ISender.Send(command/query)
     → LoggingBehavior → ValidationBehavior (FluentValidation → 400 with field errors)
     → Handler (uses IUnitOfWork.Repository<T>().Query() … IQueryableExecutor)
     → Result<T>  → mapped to 200/201/204 or ProblemDetails (400/401/403/404/409)
```

### Generic CRUD (write once, reuse per entity)

```csharp
// Core/Features/Faqs
public sealed record DeleteFaqCommand(Guid Id) : DeleteCommand(Id);
public sealed class DeleteFaqHandler(IUnitOfWork uow) : DeleteCommandHandler<DeleteFaqCommand, Faq>(uow);

public sealed record UpdateFaqCommand(Guid Id, FaqModel Model) : UpdateCommand<FaqModel, FaqDto>(Id, Model);
public sealed class UpdateFaqHandler(IUnitOfWork uow) : UpdateCommandHandler<UpdateFaqCommand, FaqModel, Faq, FaqDto>(uow)
{
    protected override void Apply(Faq f, FaqModel m) { … }
    protected override FaqDto ToDto(Faq f) => FaqMappings.Map(f);
}
```

`PagedQueryHandler` does filter → count → sort → page → project on `IQueryable`, so EF Core turns it into one SQL query.

### Why IQueryable + IQueryableExecutor

Handlers build queries with plain LINQ and run them through `IQueryableExecutor`
(`ToListAsync`, `CountAsync`, …). In production that is EF Core; in tests it is LINQ-to-Objects over
a `List<T>` — so every handler is unit-testable without a database or mocking framework
(see `tests/Axpense.Tests/Fakes`).

## Roles

| Role | Can |
|---|---|
| **Admin** | Everything, including users |
| **Editor** | Blog articles, FAQs, content analytics |
| **Sales** | Leads, lead analytics |

Tokens of users who are disabled, deleted or have their role changed stop working on the next request.
Passwords: 10+ characters with upper, lower and a digit. 5 failed sign-ins lock the account for 15 minutes.

## API

| Method | Route | Who |
|---|---|---|
| POST | `/api/auth/login` · GET `/api/auth/me` · POST `/api/auth/change-password` | anyone / signed in |
| GET | `/api/analytics/dashboard?days=30&country=Egypt` | all roles (lead data for Admin/Sales) |
| GET, GET/{id}, PATCH/{id}, DELETE/{id} | `/api/leads` | Admin, Sales |
| POST | `/api/leads/{id}/notes`, `/api/leads/bulk-update`, `/api/leads/bulk-delete` | Admin, Sales |
| GET, GET/{id}, POST, PUT/{id}, DELETE/{id} | `/api/blog` | Admin, Editor |
| GET, POST, PUT/{id}, DELETE/{id}, POST/{id}/move | `/api/faqs` | Admin, Editor |
| GET | `/api/users` | all roles |
| POST, PUT/{id}, DELETE/{id}, POST/{id}/reset-password | `/api/users` | Admin |
| POST | `/api/public/leads` (5 per 10 min per IP) | anonymous — website form |
| GET | `/api/public/blog`, `/api/public/blog/{slug}`, `/api/public/faqs?page=home` | anonymous, cached 60 s |
| GET | `/health` | anonymous |

Enums are sent as snake_case strings (`"demo_booked"`, `"en"`, `"published"`). Swagger UI: `/swagger`.

## Run it

### Everything in Docker (recommended)
From the repository root:
```bash
cp .env.example .env        # set the passwords and JWT key
docker compose up --build
```
- Website: http://localhost:3000 · Admin: http://localhost:3000/admin · API: http://localhost:8080/swagger
- Sign in with `ADMIN_EMAIL` / `ADMIN_PASSWORD` from `.env`.
- The existing blog posts and FAQs from the website are imported on first start.

### API only (local .NET 8 SDK)
```bash
docker run -e ACCEPT_EULA=Y -e MSSQL_SA_PASSWORD='Your_strong_Passw0rd' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
cd backend
dotnet run --project src/Axpense.Api          # Development settings: admin@axpense.local / Admin12345!
dotnet test                                   # unit tests
```

## Database & migrations

The schema is created automatically on first start. **Before going to production**, create the
initial migration so future schema changes are applied safely:
```bash
cd backend
./scripts/add-migration.sh InitialCreate      # needs a reachable SQL Server (ConnectionStrings__Default)
```
Once a migration exists, the API applies pending migrations at start-up instead of `EnsureCreated`.

Tables: `Leads`, `LeadNotes`, `BlogPosts` (sections in a JSON column), `Faqs`, plus Identity tables
`Users`, `Roles`, `UserRoles`… Every business table has `CreatedAt/By`, `UpdatedAt/By` and soft-delete
columns (`IsDeleted`, `DeletedAt`) filled in automatically.

## Configuration (environment variables)

| Variable | Purpose |
|---|---|
| `ConnectionStrings__Default` | SQL Server connection string |
| `Jwt__Key` | Signing key, 32+ random characters (**required**) |
| `Jwt__ExpiryMinutes` | Token lifetime (default 480) |
| `Seed__AdminEmail`, `Seed__AdminPassword`, `Seed__AdminName` | First admin, created only when there are no users |
| `Seed__WebsiteContent` | Import the website's blog posts and FAQs into empty tables (default true) |
| `Cors__Origins__0`, `__1`… | Allowed browser origins (the website/admin URLs) |
| `Swagger__Enabled` | Show Swagger outside Development |

## Deploying

- **API + database:** any Docker host (Azure App Service for Containers, AWS, DigitalOcean, a VPS) with
  Azure SQL / SQL Server. Put it behind HTTPS, e.g. `https://api.axpense.net`.
- **Website/admin on Vercel:** set `NEXT_PUBLIC_API_URL=https://api.axpense.net` in Vercel and add the
  Vercel domain to `Cors__Origins`. Without `NEXT_PUBLIC_API_URL` the admin runs in demo mode.
