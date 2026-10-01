using System.Linq.Expressions;
using Axpense.Core.Abstractions;
using Axpense.Core.Common.Cqrs;
using Axpense.Core.Common.Results;
using Axpense.Domain.Entities;
using FluentValidation;

namespace Axpense.Core.Features.Pricing;

// Vehicle-based pricing managed by the business team (/admin/pricing) and read
// by the public website (GET /api/public/pricing). One price per vehicle per
// month by fleet-size tier, set separately per market currency.

// ===== Models / DTOs =====
public sealed record PricingCurrencyDto(Guid Id, string Code, string Symbol, string SymbolAr, string NameEn, string NameAr, string Flag,
    int Decimals, decimal AnnualDiscountPercent, bool IsDefault, int SortOrder, bool IsActive);

public sealed record PricingTierDto(Guid Id, string CurrencyCode, int MinVehicles, int? MaxVehicles, decimal? MonthlyPricePerVehicle,
    decimal? AnnualPricePerVehicle, int? ExampleVehicles, bool IsActive);

public sealed record PricingCurrencyModel
{
    public string Code { get; init; } = string.Empty;
    public string Symbol { get; init; } = string.Empty;
    public string SymbolAr { get; init; } = string.Empty;
    public string NameEn { get; init; } = string.Empty;
    public string NameAr { get; init; } = string.Empty;
    public string Flag { get; init; } = string.Empty;
    public int Decimals { get; init; }
    public decimal AnnualDiscountPercent { get; init; } = 20;
    public bool IsDefault { get; init; }
    public int SortOrder { get; init; }
    public bool IsActive { get; init; } = true;
}

public sealed record PricingTierModel
{
    public string CurrencyCode { get; init; } = string.Empty;
    public int MinVehicles { get; init; }
    public int? MaxVehicles { get; init; }
    /// <summary>Null = custom pricing for this range.</summary>
    public decimal? MonthlyPricePerVehicle { get; init; }
    public int? ExampleVehicles { get; init; }
    public bool IsActive { get; init; } = true;
}

/// <summary>Admin view: every currency with all of its tiers.</summary>
public sealed record PricingAdminDto(List<PricingCurrencyDto> Currencies, List<PricingTierDto> Tiers);

// Public shape — identical to the website's PricingConfig (lib/pricing.ts).
public sealed record PublicTierDto(int Min, int? Max, decimal? Monthly, int? Example);
public sealed record PublicNameDto(string En, string Ar);
public sealed record PublicCurrencyDto(string Code, string Flag, string Symbol, string SymbolAr, PublicNameDto Name, int Decimals,
    decimal AnnualDiscountPercent, List<PublicTierDto> Tiers);
public sealed record PublicPricingDto(int MinVehicles, int CustomAbove, string DefaultCurrency, string UpdatedAt, List<PublicCurrencyDto> Currencies);

public enum BillingCycle { Monthly, Annual }

public sealed record PricingQuoteDto(string Currency, BillingCycle Billing, int Vehicles, bool IsCustom, int? TierMin, int? TierMax,
    decimal? PricePerVehicleMonthly, decimal? PricePerVehicleAnnual, decimal? MonthlyTotal, decimal? AnnualTotal, decimal? AnnualSaving,
    decimal? AmountDue);

public static class PricingMappings
{
    public static readonly Expression<Func<PricingCurrency, PricingCurrencyDto>> CurrencyToDto = c =>
        new PricingCurrencyDto(c.Id, c.Code, c.Symbol, c.SymbolAr, c.NameEn, c.NameAr, c.Flag, c.Decimals, c.AnnualDiscountPercent, c.IsDefault, c.SortOrder, c.IsActive);
    private static readonly Func<PricingCurrency, PricingCurrencyDto> CurrencyCompiled = CurrencyToDto.Compile();
    public static PricingCurrencyDto Map(PricingCurrency c) => CurrencyCompiled(c);

    public static PricingTierDto Map(PricingTier t, decimal discountPercent) => new(t.Id, t.CurrencyCode, t.MinVehicles, t.MaxVehicles,
        t.MonthlyPricePerVehicle, t.MonthlyPricePerVehicle is { } m ? PricingCalculator.AnnualPerVehicle(m, discountPercent) : null, t.ExampleVehicles, t.IsActive);

    public static string NormaliseCode(string code) => code.Trim().ToUpperInvariant();
}

/// <summary>Pure pricing maths — the same rules as the website calculator.</summary>
public static class PricingCalculator
{
    public const int DefaultMinimumVehicles = 5;

    public static decimal AnnualPerVehicle(decimal monthly, decimal discountPercent) =>
        Math.Round(monthly * 12m * (1m - discountPercent / 100m), 2, MidpointRounding.AwayFromZero);

    public static PricingQuoteDto Quote(PricingCurrency currency, IReadOnlyCollection<PricingTier> tiers, int vehicles, BillingCycle billing, int minimum = DefaultMinimumVehicles)
    {
        var count = Math.Max(minimum, vehicles);
        var active = tiers.Where(t => t.IsActive && t.CurrencyCode == currency.Code).ToList();
        var customAbove = active.Where(t => t.MaxVehicles.HasValue).Select(t => t.MaxVehicles!.Value).DefaultIfEmpty(int.MaxValue).Max();
        var tier = active.FirstOrDefault(t => t.Covers(count));
        if (tier?.MonthlyPricePerVehicle is not { } monthly || count > customAbove)
            return new PricingQuoteDto(currency.Code, billing, count, true, tier?.MinVehicles, tier?.MaxVehicles, null, null, null, null, null, null);

        var monthlyTotal = monthly * count;
        var perYear = AnnualPerVehicle(monthly, currency.AnnualDiscountPercent);
        var annualTotal = perYear * count;
        var saving = monthlyTotal * 12m - annualTotal;
        return new PricingQuoteDto(currency.Code, billing, count, false, tier.MinVehicles, tier.MaxVehicles, monthly, perYear,
            monthlyTotal, annualTotal, saving, billing == BillingCycle.Annual ? annualTotal : monthlyTotal);
    }

    /// <summary>Returns an error message when <paramref name="candidate"/> overlaps another active tier of the same currency.</summary>
    public static string? FindOverlap(IEnumerable<PricingTier> existing, PricingTierModel candidate, Guid? ignoreId = null)
    {
        var max = candidate.MaxVehicles ?? int.MaxValue;
        var clash = existing.FirstOrDefault(t => t.Id != ignoreId && t.IsActive && candidate.IsActive
            && t.CurrencyCode == PricingMappings.NormaliseCode(candidate.CurrencyCode)
            && candidate.MinVehicles <= (t.MaxVehicles ?? int.MaxValue) && t.MinVehicles <= max);
        return clash is null ? null : $"Overlaps the {clash.MinVehicles}–{(clash.MaxVehicles?.ToString() ?? "+")} tier for {clash.CurrencyCode}.";
    }
}

// ===== Currency commands =====
public sealed record CreatePricingCurrencyCommand(PricingCurrencyModel Model) : CreateCommand<PricingCurrencyModel, PricingCurrencyDto>(Model);

public sealed class CreatePricingCurrencyHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : CreateCommandHandler<CreatePricingCurrencyCommand, PricingCurrencyModel, PricingCurrency, PricingCurrencyDto>(uow)
{
    protected override async Task<Error?> CheckAsync(PricingCurrencyModel m, CancellationToken ct)
    {
        var code = PricingMappings.NormaliseCode(m.Code);
        if (await executor.AnyAsync(Uow.Repository<PricingCurrency>().Query().Where(c => c.Code == code), ct))
            return Error.Conflict("Pricing.CurrencyExists", $"Currency {code} already exists.");
        if (m.IsDefault) await PricingDefaults.ClearDefaultAsync(Uow, executor, null, ct);
        return null;
    }

    protected override PricingCurrency Map(PricingCurrencyModel m) => PricingDefaults.Apply(new PricingCurrency(), m);
    protected override PricingCurrencyDto ToDto(PricingCurrency entity) => PricingMappings.Map(entity);
}

public sealed record UpdatePricingCurrencyCommand(Guid Id, PricingCurrencyModel Model) : UpdateCommand<PricingCurrencyModel, PricingCurrencyDto>(Id, Model);

public sealed class UpdatePricingCurrencyHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : UpdateCommandHandler<UpdatePricingCurrencyCommand, PricingCurrencyModel, PricingCurrency, PricingCurrencyDto>(uow)
{
    protected override async Task<Error?> CheckAsync(Guid id, PricingCurrencyModel m, CancellationToken ct)
    {
        var code = PricingMappings.NormaliseCode(m.Code);
        if (await executor.AnyAsync(Uow.Repository<PricingCurrency>().Query().Where(c => c.Code == code && c.Id != id), ct))
            return Error.Conflict("Pricing.CurrencyExists", $"Currency {code} already exists.");
        if (m.IsDefault) await PricingDefaults.ClearDefaultAsync(Uow, executor, id, ct);
        return null;
    }

    protected override void Apply(PricingCurrency entity, PricingCurrencyModel m) => PricingDefaults.Apply(entity, m);
    protected override PricingCurrencyDto ToDto(PricingCurrency entity) => PricingMappings.Map(entity);
}

public sealed record DeletePricingCurrencyCommand(Guid Id) : DeleteCommand(Id);
public sealed class DeletePricingCurrencyHandler(IUnitOfWork uow) : DeleteCommandHandler<DeletePricingCurrencyCommand, PricingCurrency>(uow);

internal static class PricingDefaults
{
    public static PricingCurrency Apply(PricingCurrency c, PricingCurrencyModel m)
    {
        c.Code = PricingMappings.NormaliseCode(m.Code);
        c.Symbol = m.Symbol.Trim();
        c.SymbolAr = m.SymbolAr.Trim();
        c.NameEn = m.NameEn.Trim();
        c.NameAr = m.NameAr.Trim();
        c.Flag = m.Flag.Trim();
        c.Decimals = m.Decimals;
        c.AnnualDiscountPercent = m.AnnualDiscountPercent;
        c.IsDefault = m.IsDefault;
        c.SortOrder = m.SortOrder;
        c.IsActive = m.IsActive;
        return c;
    }

    /// <summary>Only one default currency: clear the flag on the others.</summary>
    public static async Task ClearDefaultAsync(IUnitOfWork uow, IQueryableExecutor executor, Guid? keep, CancellationToken ct)
    {
        var others = await executor.ToListAsync(uow.Repository<PricingCurrency>().QueryTracked().Where(c => c.IsDefault && c.Id != keep), ct);
        foreach (var c in others) c.IsDefault = false;
    }
}

// ===== Tier commands =====
public sealed record CreatePricingTierCommand(PricingTierModel Model) : CreateCommand<PricingTierModel, PricingTierDto>(Model);

public sealed class CreatePricingTierHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : CreateCommandHandler<CreatePricingTierCommand, PricingTierModel, PricingTier, PricingTierDto>(uow)
{
    private decimal _discount;

    protected override async Task<Error?> CheckAsync(PricingTierModel m, CancellationToken ct)
    {
        var code = PricingMappings.NormaliseCode(m.CurrencyCode);
        var currency = await executor.FirstOrDefaultAsync(Uow.Repository<PricingCurrency>().Query().Where(c => c.Code == code), ct);
        if (currency is null) return Error.Validation($"Unknown currency {code}. Create the currency first.");
        _discount = currency.AnnualDiscountPercent;
        var tiers = await executor.ToListAsync(Uow.Repository<PricingTier>().Query().Where(t => t.CurrencyCode == code), ct);
        var overlap = PricingCalculator.FindOverlap(tiers, m);
        return overlap is null ? null : Error.Conflict("Pricing.TierOverlap", overlap);
    }

    protected override PricingTier Map(PricingTierModel m) => PricingTierApply.Apply(new PricingTier(), m);
    protected override PricingTierDto ToDto(PricingTier entity) => PricingMappings.Map(entity, _discount);
}

public sealed record UpdatePricingTierCommand(Guid Id, PricingTierModel Model) : UpdateCommand<PricingTierModel, PricingTierDto>(Id, Model);

public sealed class UpdatePricingTierHandler(IUnitOfWork uow, IQueryableExecutor executor)
    : UpdateCommandHandler<UpdatePricingTierCommand, PricingTierModel, PricingTier, PricingTierDto>(uow)
{
    private decimal _discount;

    protected override async Task<Error?> CheckAsync(Guid id, PricingTierModel m, CancellationToken ct)
    {
        var code = PricingMappings.NormaliseCode(m.CurrencyCode);
        var currency = await executor.FirstOrDefaultAsync(Uow.Repository<PricingCurrency>().Query().Where(c => c.Code == code), ct);
        if (currency is null) return Error.Validation($"Unknown currency {code}.");
        _discount = currency.AnnualDiscountPercent;
        var tiers = await executor.ToListAsync(Uow.Repository<PricingTier>().Query().Where(t => t.CurrencyCode == code), ct);
        var overlap = PricingCalculator.FindOverlap(tiers, m, id);
        return overlap is null ? null : Error.Conflict("Pricing.TierOverlap", overlap);
    }

    protected override void Apply(PricingTier entity, PricingTierModel m) => PricingTierApply.Apply(entity, m);
    protected override PricingTierDto ToDto(PricingTier entity) => PricingMappings.Map(entity, _discount);
}

public sealed record DeletePricingTierCommand(Guid Id) : DeleteCommand(Id);
public sealed class DeletePricingTierHandler(IUnitOfWork uow) : DeleteCommandHandler<DeletePricingTierCommand, PricingTier>(uow);

internal static class PricingTierApply
{
    public static PricingTier Apply(PricingTier t, PricingTierModel m)
    {
        t.CurrencyCode = PricingMappings.NormaliseCode(m.CurrencyCode);
        t.MinVehicles = m.MinVehicles;
        t.MaxVehicles = m.MaxVehicles;
        t.MonthlyPricePerVehicle = m.MonthlyPricePerVehicle;
        t.ExampleVehicles = m.ExampleVehicles;
        t.IsActive = m.IsActive;
        return t;
    }
}

// ===== Queries =====
public sealed record GetPricingAdminQuery : IQuery<PricingAdminDto>;

public sealed class GetPricingAdminHandler(IUnitOfWork uow, IQueryableExecutor executor) : IQueryHandler<GetPricingAdminQuery, PricingAdminDto>
{
    public async Task<Result<PricingAdminDto>> Handle(GetPricingAdminQuery request, CancellationToken ct)
    {
        var currencies = await executor.ToListAsync(uow.Repository<PricingCurrency>().Query().OrderBy(c => c.SortOrder).ThenBy(c => c.Code), ct);
        var tiers = await executor.ToListAsync(uow.Repository<PricingTier>().Query().OrderBy(t => t.CurrencyCode).ThenBy(t => t.MinVehicles), ct);
        var discount = currencies.ToDictionary(c => c.Code, c => c.AnnualDiscountPercent);
        return new PricingAdminDto(
            currencies.Select(PricingMappings.Map).ToList(),
            tiers.Select(t => PricingMappings.Map(t, discount.GetValueOrDefault(t.CurrencyCode))).ToList());
    }
}

/// <summary>Public: active currencies with active tiers, in the website's PricingConfig shape.</summary>
public sealed record GetPublicPricingQuery : IQuery<PublicPricingDto>;

public sealed class GetPublicPricingHandler(IUnitOfWork uow, IQueryableExecutor executor, IDateTimeProvider clock) : IQueryHandler<GetPublicPricingQuery, PublicPricingDto>
{
    public async Task<Result<PublicPricingDto>> Handle(GetPublicPricingQuery request, CancellationToken ct)
    {
        var currencies = await executor.ToListAsync(uow.Repository<PricingCurrency>().Query().Where(c => c.IsActive).OrderBy(c => c.SortOrder).ThenBy(c => c.Code), ct);
        var tiers = await executor.ToListAsync(uow.Repository<PricingTier>().Query().Where(t => t.IsActive).OrderBy(t => t.MinVehicles), ct);
        var withTiers = currencies.Where(c => tiers.Any(t => t.CurrencyCode == c.Code)).ToList();
        if (withTiers.Count == 0) return Error.NotFound("Pricing", "active");

        var def = withTiers.FirstOrDefault(c => c.IsDefault) ?? withTiers[0];
        var defTiers = tiers.Where(t => t.CurrencyCode == def.Code).ToList();
        var min = defTiers.Min(t => t.MinVehicles);
        var customAbove = defTiers.Where(t => t.MaxVehicles.HasValue && t.MonthlyPricePerVehicle.HasValue).Select(t => t.MaxVehicles!.Value).DefaultIfEmpty(min).Max();
        var updated = currencies.Select(c => c.UpdatedAt ?? c.CreatedAt).Concat(tiers.Select(t => t.UpdatedAt ?? t.CreatedAt)).DefaultIfEmpty(clock.UtcNow).Max();

        return new PublicPricingDto(min, customAbove, def.Code, updated.ToString("yyyy-MM-dd"),
            withTiers.Select(c => new PublicCurrencyDto(c.Code, c.Flag, c.Symbol, c.SymbolAr, new PublicNameDto(c.NameEn, c.NameAr), c.Decimals, c.AnnualDiscountPercent,
                tiers.Where(t => t.CurrencyCode == c.Code).Select(t => new PublicTierDto(t.MinVehicles, t.MaxVehicles, t.MonthlyPricePerVehicle, t.ExampleVehicles)).ToList())).ToList());
    }
}

/// <summary>Public: price for a number of vehicles (used by the signup flow to confirm the plan).</summary>
public sealed record GetPricingQuoteQuery(string Currency, int Vehicles, BillingCycle Billing) : IQuery<PricingQuoteDto>;

public sealed class GetPricingQuoteHandler(IUnitOfWork uow, IQueryableExecutor executor) : IQueryHandler<GetPricingQuoteQuery, PricingQuoteDto>
{
    public async Task<Result<PricingQuoteDto>> Handle(GetPricingQuoteQuery r, CancellationToken ct)
    {
        var code = PricingMappings.NormaliseCode(r.Currency);
        var currency = await executor.FirstOrDefaultAsync(uow.Repository<PricingCurrency>().Query().Where(c => c.Code == code && c.IsActive), ct);
        if (currency is null) return Error.NotFound(nameof(PricingCurrency), code);
        var tiers = await executor.ToListAsync(uow.Repository<PricingTier>().Query().Where(t => t.CurrencyCode == code && t.IsActive), ct);
        if (tiers.Count == 0) return Error.NotFound(nameof(PricingTier), code);
        return PricingCalculator.Quote(currency, tiers, r.Vehicles, r.Billing, tiers.Min(t => t.MinVehicles));
    }
}

// ===== Validation =====
public sealed class PricingCurrencyModelValidator : AbstractValidator<PricingCurrencyModel>
{
    public PricingCurrencyModelValidator()
    {
        RuleFor(x => x.Code).NotEmpty().Matches("^[A-Za-z]{3}$").WithMessage("Code must be a 3-letter ISO currency code.");
        RuleFor(x => x.Symbol).NotEmpty().MaximumLength(8);
        RuleFor(x => x.SymbolAr).NotEmpty().MaximumLength(8);
        RuleFor(x => x.NameEn).NotEmpty().MaximumLength(60);
        RuleFor(x => x.NameAr).NotEmpty().MaximumLength(60);
        RuleFor(x => x.Flag).MaximumLength(16);
        RuleFor(x => x.Decimals).InclusiveBetween(0, 3);
        RuleFor(x => x.AnnualDiscountPercent).InclusiveBetween(0m, 90m);
    }
}

public sealed class PricingTierModelValidator : AbstractValidator<PricingTierModel>
{
    public PricingTierModelValidator()
    {
        RuleFor(x => x.CurrencyCode).NotEmpty().Matches("^[A-Za-z]{3}$");
        RuleFor(x => x.MinVehicles).GreaterThanOrEqualTo(1);
        RuleFor(x => x.MaxVehicles).GreaterThanOrEqualTo(x => x.MinVehicles).When(x => x.MaxVehicles.HasValue)
            .WithMessage("Max vehicles must be greater than or equal to min vehicles.");
        RuleFor(x => x.MonthlyPricePerVehicle).GreaterThan(0m).When(x => x.MonthlyPricePerVehicle.HasValue);
        RuleFor(x => x.ExampleVehicles).GreaterThanOrEqualTo(x => x.MinVehicles).When(x => x.ExampleVehicles.HasValue);
    }
}

public sealed class CreatePricingCurrencyValidator : AbstractValidator<CreatePricingCurrencyCommand>
{
    public CreatePricingCurrencyValidator() => RuleFor(x => x.Model).NotNull().SetValidator(new PricingCurrencyModelValidator());
}

public sealed class UpdatePricingCurrencyValidator : AbstractValidator<UpdatePricingCurrencyCommand>
{
    public UpdatePricingCurrencyValidator()
    {
        RuleFor(x => x.Id).NotEmpty();
        RuleFor(x => x.Model).NotNull().SetValidator(new PricingCurrencyModelValidator());
    }
}

public sealed class CreatePricingTierValidator : AbstractValidator<CreatePricingTierCommand>
{
    public CreatePricingTierValidator() => RuleFor(x => x.Model).NotNull().SetValidator(new PricingTierModelValidator());
}

public sealed class UpdatePricingTierValidator : AbstractValidator<UpdatePricingTierCommand>
{
    public UpdatePricingTierValidator()
    {
        RuleFor(x => x.Id).NotEmpty();
        RuleFor(x => x.Model).NotNull().SetValidator(new PricingTierModelValidator());
    }
}

public sealed class GetPricingQuoteValidator : AbstractValidator<GetPricingQuoteQuery>
{
    public GetPricingQuoteValidator()
    {
        RuleFor(x => x.Currency).NotEmpty().Matches("^[A-Za-z]{3}$");
        RuleFor(x => x.Vehicles).InclusiveBetween(1, 1_000_000);
    }
}
