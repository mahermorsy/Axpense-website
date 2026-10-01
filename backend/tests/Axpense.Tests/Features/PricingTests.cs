using Axpense.Core.Common.Results;
using Axpense.Core.Features.Pricing;
using Axpense.Domain.Entities;
using Axpense.Tests.Fakes;

namespace Axpense.Tests.Features;

public class PricingTests
{
    private readonly InMemoryUnitOfWork _uow = new();
    private readonly SyncQueryableExecutor _exec = new();
    private readonly FixedClock _clock = new(new DateTime(2026, 9, 30, 8, 0, 0, DateTimeKind.Utc));

    private static readonly (int Min, int? Max, decimal? Price)[] EgpTiers =
        { (5, 10, 350), (11, 25, 320), (26, 50, 290), (51, 100, 260), (101, 250, 230), (251, 500, 200) };

    private PricingCurrency SeedEgp(bool active = true)
    {
        var egp = new PricingCurrency { Code = "EGP", Symbol = "EGP", SymbolAr = "ج.م", NameEn = "Egyptian Pound", NameAr = "جنيه مصري", AnnualDiscountPercent = 20, IsDefault = true, IsActive = active };
        _uow.Set<PricingCurrency>().Add(egp);
        foreach (var (min, max, price) in EgpTiers)
            _uow.Set<PricingTier>().Add(new PricingTier { CurrencyCode = "EGP", MinVehicles = min, MaxVehicles = max, MonthlyPricePerVehicle = price });
        return egp;
    }

    [Theory]
    [InlineData(25, 320, 8000, 76800)]    // the brief's example: 25 × 320 = 8,000 / month; 76,800 / year
    [InlineData(30, 290, 8700, 83520)]    // 25 → 30 vehicles moves to the 26–50 tier
    [InlineData(10, 350, 3500, 33600)]
    [InlineData(150, 230, 34500, 331200)]
    [InlineData(500, 200, 100000, 960000)]
    public void Quote_uses_the_tier_for_the_fleet_size(int vehicles, int perVehicle, int monthly, int annual)
    {
        var egp = SeedEgp();
        var q = PricingCalculator.Quote(egp, _uow.Set<PricingTier>(), vehicles, BillingCycle.Monthly);

        Assert.False(q.IsCustom);
        Assert.Equal((decimal?)perVehicle, q.PricePerVehicleMonthly);
        Assert.Equal((decimal?)monthly, q.MonthlyTotal);
        Assert.Equal((decimal?)annual, q.AnnualTotal);
        Assert.Equal((decimal?)(monthly * 12 - annual), q.AnnualSaving);
    }

    [Fact]
    public void Annual_price_per_vehicle_applies_the_discount()
    {
        Assert.Equal(3360m, PricingCalculator.AnnualPerVehicle(350, 20));
        Assert.Equal(96m, PricingCalculator.AnnualPerVehicle(10, 20));
    }

    [Fact]
    public void Fleets_above_the_last_tier_get_custom_pricing_and_small_fleets_the_minimum()
    {
        var egp = SeedEgp();
        Assert.True(PricingCalculator.Quote(egp, _uow.Set<PricingTier>(), 501, BillingCycle.Annual).IsCustom);

        var small = PricingCalculator.Quote(egp, _uow.Set<PricingTier>(), 2, BillingCycle.Monthly);
        Assert.Equal(5, small.Vehicles);
        Assert.Equal((decimal?)1750m, small.AmountDue);
    }

    [Fact]
    public async Task Overlapping_tier_is_a_conflict()
    {
        SeedEgp();
        var handler = new CreatePricingTierHandler(_uow, _exec);
        var result = await handler.Handle(new CreatePricingTierCommand(new PricingTierModel { CurrencyCode = "egp", MinVehicles = 20, MaxVehicles = 30, MonthlyPricePerVehicle = 300 }), default);

        Assert.False(result.IsSuccess);
        Assert.Equal(ErrorType.Conflict, result.Error!.Type);
    }

    [Fact]
    public async Task Tier_for_an_unknown_currency_is_rejected()
    {
        var handler = new CreatePricingTierHandler(_uow, _exec);
        var result = await handler.Handle(new CreatePricingTierCommand(new PricingTierModel { CurrencyCode = "USD", MinVehicles = 5, MaxVehicles = 10, MonthlyPricePerVehicle = 10 }), default);
        Assert.Equal(ErrorType.Validation, result.Error!.Type);
    }

    [Fact]
    public async Task Only_one_currency_can_be_the_default()
    {
        SeedEgp();
        var handler = new CreatePricingCurrencyHandler(_uow, _exec);
        var usd = await handler.Handle(new CreatePricingCurrencyCommand(new PricingCurrencyModel { Code = "usd", Symbol = "$", SymbolAr = "$", NameEn = "US Dollar", NameAr = "دولار", Decimals = 2, IsDefault = true }), default);

        Assert.True(usd.IsSuccess);
        Assert.Equal("USD", usd.Value!.Code);
        Assert.Equal(1, _uow.Set<PricingCurrency>().Count(c => c.IsDefault));
    }

    [Fact]
    public async Task Public_pricing_matches_the_website_shape_and_skips_inactive_currencies()
    {
        SeedEgp();
        _uow.Set<PricingCurrency>().Add(new PricingCurrency { Code = "EUR", Symbol = "€", SymbolAr = "€", NameEn = "Euro", NameAr = "يورو", IsActive = false });
        _uow.Set<PricingTier>().Add(new PricingTier { CurrencyCode = "EUR", MinVehicles = 5, MaxVehicles = 10, MonthlyPricePerVehicle = 8.75m });

        var result = await new GetPublicPricingHandler(_uow, _exec, _clock).Handle(new GetPublicPricingQuery(), default);

        Assert.True(result.IsSuccess);
        var p = result.Value!;
        Assert.Equal(5, p.MinVehicles);
        Assert.Equal(500, p.CustomAbove);
        Assert.Equal("EGP", p.DefaultCurrency);
        var egp = Assert.Single(p.Currencies);
        Assert.Equal(6, egp.Tiers.Count);
        Assert.Equal((decimal?)350m, egp.Tiers[0].Monthly);
    }

    [Fact]
    public void Tier_validator_rejects_max_below_min_and_non_positive_prices()
    {
        var v = new PricingTierModelValidator();
        Assert.False(v.Validate(new PricingTierModel { CurrencyCode = "EGP", MinVehicles = 10, MaxVehicles = 5, MonthlyPricePerVehicle = 100 }).IsValid);
        Assert.False(v.Validate(new PricingTierModel { CurrencyCode = "EGP", MinVehicles = 5, MaxVehicles = 10, MonthlyPricePerVehicle = 0 }).IsValid);
        Assert.True(v.Validate(new PricingTierModel { CurrencyCode = "EGP", MinVehicles = 501, MonthlyPricePerVehicle = null }).IsValid);
    }
}
