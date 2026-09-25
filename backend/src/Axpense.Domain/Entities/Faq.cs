using Axpense.Domain.Common;
using Axpense.Domain.Enums;

namespace Axpense.Domain.Entities;

/// <summary>A question/answer shown on a website page (e.g. "home", "pricing", "en-eg").</summary>
public class Faq : BaseEntity
{
    public string Page { get; set; } = "home";
    public ContentLanguage Language { get; set; } = ContentLanguage.En;
    public string Question { get; set; } = string.Empty;
    public string Answer { get; set; } = string.Empty;
    public bool IsPublished { get; set; } = true;
    public int SortOrder { get; set; }
}
