using Axpense.Domain.Common;

namespace Axpense.Domain.Entities;

/// <summary>
/// A market currency with its own local per-vehicle prices (no live FX
/// conversion). Annual billing = monthly × 12 − <see cref="AnnualDiscountPercent"/>.
/// </summary>
public class PricingCurrency : BaseEntity
{
    public string Code { get; set; } = string.Empty;          // ISO 4217, e.g. "EGP"
    public string Symbol { get; set; } = string.Empty;        // "EGP", "$", "€"
    public string SymbolAr { get; set; } = string.Empty;      // "ج.م"
    public string NameEn { get; set; } = string.Empty;
    public string NameAr { get; set; } = string.Empty;
    public string Flag { get; set; } = string.Empty;          // emoji
    public int Decimals { get; set; }
    public decimal AnnualDiscountPercent { get; set; } = 20;
    public bool IsDefault { get; set; }
    public int SortOrder { get; set; }
    public bool IsActive { get; set; } = true;
}

/// <summary>
/// Price per vehicle per month for a fleet-size range in one currency.
/// <see cref="MonthlyPricePerVehicle"/> = null means "custom pricing".
/// </summary>
public class PricingTier : BaseEntity
{
    public string CurrencyCode { get; set; } = string.Empty;
    public int MinVehicles { get; set; }
    public int? MaxVehicles { get; set; }
    public decimal? MonthlyPricePerVehicle { get; set; }
    /// <summary>Fleet size used as the example in the website's pricing table.</summary>
    public int? ExampleVehicles { get; set; }
    public bool IsActive { get; set; } = true;

    public bool Covers(int vehicles) => vehicles >= MinVehicles && (MaxVehicles is null || vehicles <= MaxVehicles);
}
