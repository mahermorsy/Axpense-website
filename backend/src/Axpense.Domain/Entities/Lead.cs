using Axpense.Domain.Common;
using Axpense.Domain.Enums;

namespace Axpense.Domain.Entities;

/// <summary>A sales lead captured by a website form.</summary>
public class Lead : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Phone { get; set; }
    public string? CompanySize { get; set; }
    public int? AssetCount { get; set; }
    public string Industry { get; set; } = "Other";
    public string Country { get; set; } = "Unknown";
    public string? Message { get; set; }
    public string SourcePage { get; set; } = "/";
    public LeadChannel Channel { get; set; } = LeadChannel.Direct;
    public ContentLanguage Language { get; set; } = ContentLanguage.En;
    public LeadStatus Status { get; set; } = LeadStatus.New;
    public Guid? OwnerId { get; set; }

    public ICollection<LeadNote> Notes { get; set; } = new List<LeadNote>();

    public void ChangeStatus(LeadStatus status) => Status = status;

    public void AssignTo(Guid? ownerId)
    {
        OwnerId = ownerId;
        // Assigning a brand-new lead means someone is on it.
        if (ownerId.HasValue && Status == LeadStatus.New) Status = LeadStatus.Contacted;
    }
}

public class LeadNote : BaseEntity
{
    public Guid LeadId { get; set; }
    public Lead? Lead { get; set; }
    public string Text { get; set; } = string.Empty;
    public Guid? AuthorId { get; set; }
    public string AuthorName { get; set; } = string.Empty;
}
