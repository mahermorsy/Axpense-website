using System.Linq.Expressions;
using Axpense.Domain.Entities;
using Axpense.Domain.Enums;

namespace Axpense.Core.Features.Leads;

public sealed record LeadNoteDto(Guid Id, string Text, Guid? AuthorId, string AuthorName, DateTime CreatedAt);

public sealed record LeadDto(
    Guid Id, string Name, string Company, string Email, string? Phone, string? CompanySize, int? AssetCount,
    string Industry, string Country, string? Message, string SourcePage, LeadChannel Channel,
    ContentLanguage Language, LeadStatus Status, Guid? OwnerId, DateTime CreatedAt, List<LeadNoteDto> Notes);

/// <summary>Payload of the public website form.</summary>
public sealed record SubmitLeadModel
{
    public string Name { get; init; } = string.Empty;
    public string Company { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public string? Phone { get; init; }
    public string? CompanySize { get; init; }
    public int? AssetCount { get; init; }
    public string? Industry { get; init; }
    public string? Message { get; init; }
    public string? SourcePage { get; init; }
    public string? Lang { get; init; }
    /// <summary>ISO-3166 alpha-2 from the edge (e.g. x-vercel-ip-country), optional.</summary>
    public string? CountryCode { get; init; }
    public string? UtmSource { get; init; }
    public string? Referrer { get; init; }
}

public sealed record UpdateLeadModel
{
    public LeadStatus? Status { get; init; }
    public Guid? OwnerId { get; init; }
    /// <summary>Set true to unassign the lead.</summary>
    public bool ClearOwner { get; init; }
}

public static class LeadMappings
{
    /// <summary>Single projection used by every lead query — translated to SQL by EF Core.</summary>
    public static readonly Expression<Func<Lead, LeadDto>> ToDto = l => new LeadDto(
        l.Id, l.Name, l.Company, l.Email, l.Phone, l.CompanySize, l.AssetCount, l.Industry, l.Country, l.Message,
        l.SourcePage, l.Channel, l.Language, l.Status, l.OwnerId, l.CreatedAt,
        l.Notes.Where(n => !n.IsDeleted).OrderBy(n => n.CreatedAt)
            .Select(n => new LeadNoteDto(n.Id, n.Text, n.AuthorId, n.AuthorName, n.CreatedAt)).ToList());

    private static readonly Func<Lead, LeadDto> Compiled = ToDto.Compile();
    public static LeadDto Map(Lead lead) => Compiled(lead);

    private static readonly Dictionary<string, string> Countries = new(StringComparer.OrdinalIgnoreCase)
    {
        ["EG"] = "Egypt", ["SA"] = "Saudi Arabia", ["AE"] = "UAE", ["QA"] = "Qatar", ["JO"] = "Jordan", ["IQ"] = "Iraq",
        ["KW"] = "Kuwait", ["BH"] = "Bahrain", ["OM"] = "Oman", ["LB"] = "Lebanon", ["MA"] = "Morocco", ["TN"] = "Tunisia",
        ["DZ"] = "Algeria", ["LY"] = "Libya",
    };
    private static readonly (string Prefix, string Code)[] DialCodes =
    {
        ("+20", "EG"), ("+966", "SA"), ("+971", "AE"), ("+974", "QA"), ("+962", "JO"), ("+964", "IQ"),
        ("+965", "KW"), ("+973", "BH"), ("+968", "OM"), ("+961", "LB"), ("+212", "MA"), ("+216", "TN"),
    };
    private static readonly (string Page, string Code)[] MarketPages =
    {
        ("-eg", "EG"), ("-sa", "SA"), ("-ae", "AE"), ("-qa", "QA"), ("-jo", "JO"), ("-iq", "IQ"), ("egypt", "EG"),
    };

    /// <summary>Best guess of the lead's country: edge geo header → phone dial code → market page.</summary>
    public static string InferCountry(SubmitLeadModel m)
    {
        if (!string.IsNullOrWhiteSpace(m.CountryCode) && Countries.TryGetValue(m.CountryCode.Trim(), out var byGeo)) return byGeo;
        var phone = m.Phone?.Replace(" ", "").Replace("-", "");
        if (!string.IsNullOrEmpty(phone))
        {
            if (phone.StartsWith("00")) phone = "+" + phone[2..];
            if (phone.StartsWith("01") && phone.Length == 11) return "Egypt"; // local Egyptian mobile
            foreach (var (prefix, code) in DialCodes.OrderByDescending(d => d.Prefix.Length))
                if (phone.StartsWith(prefix)) return Countries[code];
        }
        var page = m.SourcePage?.ToLowerInvariant() ?? string.Empty;
        foreach (var (suffix, code) in MarketPages)
            if (page.Contains(suffix)) return Countries[code];
        return "Unknown";
    }

    public static LeadChannel InferChannel(SubmitLeadModel m)
    {
        var s = $"{m.UtmSource} {m.Referrer}".ToLowerInvariant();
        if (s.Contains("google")) return LeadChannel.Google;
        if (s.Contains("linkedin") || s.Contains("lnkd")) return LeadChannel.LinkedIn;
        if (s.Contains("facebook") || s.Contains("fb.") || s.Contains("instagram") || s.Contains("meta")) return LeadChannel.Facebook;
        if (string.IsNullOrWhiteSpace(m.Referrer) && string.IsNullOrWhiteSpace(m.UtmSource)) return LeadChannel.Direct;
        if (m.Referrer?.Contains("axpense", StringComparison.OrdinalIgnoreCase) == true && string.IsNullOrWhiteSpace(m.UtmSource)) return LeadChannel.Direct;
        return LeadChannel.Referral;
    }
}
