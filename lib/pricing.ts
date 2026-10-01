/**
 * Vehicle-based pricing. One price per vehicle per month, by fleet-size tier,
 * set separately per market currency (no live FX conversion). Annual billing
 * = monthly × 12 − the currency's annual discount (20 % by default).
 *
 * Shape matches GET /api/public/pricing (backend PricingCurrency + PricingTier).
 * Pure helpers only — safe to import from client and server components.
 */
import type { Lang } from './i18n';

export type Billing = 'monthly' | 'annual';

export type PricingTier = { min: number; max: number | null; monthly: number | null; /** Fleet size used in the pricing table example. */ example?: number };

export type PricingCurrency = {
  code: string;
  flag: string;
  symbol: string;
  symbolAr: string;
  name: { en: string; ar: string };
  /** Decimal places shown for per-vehicle prices. Totals are rounded to whole units when decimals = 0. */
  decimals: number;
  annualDiscountPercent: number;
  tiers: PricingTier[];
};

export type PricingConfig = {
  minVehicles: number;
  /** Fleets above this size get custom pricing (Talk to Sales). */
  customAbove: number;
  defaultCurrency: string;
  updatedAt: string;
  currencies: PricingCurrency[];
};

export type Quote =
  | { kind: 'custom'; vehicles: number }
  | {
      kind: 'priced';
      vehicles: number;
      tier: PricingTier;
      /** Per vehicle per month at the monthly rate. */
      perVehicleMonthly: number;
      /** Per vehicle per year, annual billing (discount applied). */
      perVehicleAnnual: number;
      monthlyTotal: number;
      /** 12 × monthly, before the annual discount. */
      yearAtMonthly: number;
      annualTotal: number;
      annualSaving: number;
      discountPercent: number;
    };

const round = (n: number, d = 2) => Math.round(n * 10 ** d) / 10 ** d;

export function getCurrency(config: PricingConfig, code?: string | null): PricingCurrency {
  return config.currencies.find((c) => c.code === code) ?? config.currencies.find((c) => c.code === config.defaultCurrency) ?? config.currencies[0];
}

export function tierFor(currency: PricingCurrency, vehicles: number): PricingTier | undefined {
  return currency.tiers.find((t) => vehicles >= t.min && (t.max === null || vehicles <= t.max));
}

export function annualPerVehicle(currency: PricingCurrency, monthly: number) {
  return round(monthly * 12 * (1 - currency.annualDiscountPercent / 100));
}

export function quote(config: PricingConfig, currency: PricingCurrency, vehiclesIn: number): Quote {
  const vehicles = Math.max(config.minVehicles, Math.floor(vehiclesIn || 0));
  const tier = tierFor(currency, vehicles);
  if (vehicles > config.customAbove || !tier || tier.monthly === null) return { kind: 'custom', vehicles };
  const monthlyTotal = round(tier.monthly * vehicles);
  const yearAtMonthly = round(monthlyTotal * 12);
  const perVehicleAnnual = annualPerVehicle(currency, tier.monthly);
  const annualTotal = round(perVehicleAnnual * vehicles);
  return {
    kind: 'priced', vehicles, tier, perVehicleMonthly: tier.monthly, perVehicleAnnual, monthlyTotal, yearAtMonthly,
    annualTotal, annualSaving: round(yearAtMonthly - annualTotal), discountPercent: currency.annualDiscountPercent,
  };
}

/** "8,000 EGP", "$10.00", "٨٬٠٠٠ ج.م" is avoided on purpose: Latin digits in both languages. */
export function money(n: number, currency: PricingCurrency, lang: Lang, decimals?: number) {
  const d = decimals ?? (Number.isInteger(n) ? 0 : currency.decimals);
  const num = n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  const sym = lang === 'ar' ? currency.symbolAr : currency.symbol;
  if (sym === '$' || sym === '€') return `${sym}${num}`;
  return `${num} ${sym}`;
}

/** Tier label "5–10", "251–500", "500+". */
export function tierLabel(t: PricingTier) {
  return t.max === null ? `${t.min}+` : `${t.min}–${t.max}`;
}

/** Example fleet size used in the pricing table for each tier. */
export function exampleVehicles(t: PricingTier) {
  return t.example ?? t.max ?? t.min;
}

/** Lowest and highest per-vehicle monthly price for a currency (schema.org offers). */
export function priceRange(currency: PricingCurrency) {
  const prices = currency.tiers.map((t) => t.monthly).filter((p): p is number => p !== null);
  return { low: Math.min(...prices), high: Math.max(...prices) };
}

/** Query string for Start Free / Talk to Sales so the form arrives pre-filled. */
export function planQuery(vehicles: number, currency: string, billing: Billing) {
  return `?vehicles=${vehicles}&currency=${currency}&billing=${billing}`;
}
