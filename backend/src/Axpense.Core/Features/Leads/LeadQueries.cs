using System.Linq.Expressions;
using Axpense.Core.Abstractions;
using Axpense.Core.Common.Cqrs;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;

namespace Axpense.Core.Features.Leads;

public sealed record GetLeadsQuery : PagedQuery<LeadDto>
{
    public LeadStatus? Status { get; init; }
    public string? Industry { get; init; }
    public string? Country { get; init; }
    public Guid? OwnerId { get; init; }
    public bool? Unassigned { get; init; }
    public DateTime? From { get; init; }
    public DateTime? To { get; init; }
}

public sealed class GetLeadsHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : PagedQueryHandler<GetLeadsQuery, Lead, LeadDto>(uow, executor)
{
    protected override Expression<Func<Lead, LeadDto>> Projection => LeadMappings.ToDto;

    protected override IQueryable<Lead> Filter(IQueryable<Lead> q, GetLeadsQuery r)
    {
        if (r.Status.HasValue) q = q.Where(l => l.Status == r.Status);
        if (!string.IsNullOrWhiteSpace(r.Industry)) q = q.Where(l => l.Industry == r.Industry);
        if (!string.IsNullOrWhiteSpace(r.Country)) q = q.Where(l => l.Country == r.Country);
        if (r.OwnerId.HasValue) q = q.Where(l => l.OwnerId == r.OwnerId);
        if (r.Unassigned == true) q = q.Where(l => l.OwnerId == null);
        if (r.From.HasValue) q = q.Where(l => l.CreatedAt >= r.From);
        if (r.To.HasValue) q = q.Where(l => l.CreatedAt < r.To);
        if (!string.IsNullOrWhiteSpace(r.Search))
        {
            var s = r.Search.Trim().ToLower();
            q = q.Where(l => l.Name.ToLower().Contains(s) || l.Company.ToLower().Contains(s) || l.Email.ToLower().Contains(s)
                             || (l.Phone != null && l.Phone.Contains(s)));
        }
        return q;
    }
}

public sealed record GetLeadByIdQuery(Guid Id) : GetByIdQuery<LeadDto>(Id);

public sealed class GetLeadByIdHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : GetByIdQueryHandler<GetLeadByIdQuery, Lead, LeadDto>(uow, executor)
{
    protected override Expression<Func<Lead, LeadDto>> Projection => LeadMappings.ToDto;
}
