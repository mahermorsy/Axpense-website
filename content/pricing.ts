import type { PricingConfig } from '@/lib/pricing';

/**
 * Default pricing configuration — per-vehicle monthly prices by fleet size, per
 * market currency. Used when the pricing API isn't configured or can't be
 * reached, and as the seed for the backend (scripts/export-seeds.ts).
 * In production the business team edits prices in /admin/pricing
 * (GET /api/public/pricing) without redeploying the website.
 *
 * - EGP: prices set by Axpense (market price, not converted).
 * - USD: base price for every other market.
 * - Other currencies: USD × market rate on 29 Sep 2026, rounded for local
 *   purchasing (whole units for SAR/AED/QAR, 0.05 for KWD/BHD/OMR, 0.25 for EUR).
 *   Rates used: SAR 3.75 · AED 3.6725 · QAR 3.64 (pegged), KWD 0.3077,
 *   BHD 0.376, OMR 0.3845, EUR 0.8801. Review before launch.
 * - Fleets above the last tier (500+) get custom pricing (Talk to Sales).
 */
const BRACKETS: [number, number, number][] = [[5, 10, 10], [11, 25, 25], [26, 50, 50], [51, 100, 100], [101, 250, 150], [251, 500, 300]];

function tiers(prices: number[]) {
  return BRACKETS.map(([min, max, example], i) => ({ min, max, example, monthly: prices[i] }));
}

export const DEFAULT_PRICING: PricingConfig = {
  minVehicles: 5,
  customAbove: 500,
  defaultCurrency: 'EGP',
  updatedAt: '2026-09-30',
  currencies: [
    { code: 'EGP', flag: '🇪🇬', symbol: 'EGP', symbolAr: 'ج.م', name: { en: 'Egyptian Pound', ar: 'جنيه مصري' }, decimals: 0, annualDiscountPercent: 20, tiers: tiers([350, 320, 290, 260, 230, 200]) },
    { code: 'USD', flag: '🇺🇸', symbol: '$', symbolAr: '$', name: { en: 'US Dollar', ar: 'دولار أمريكي' }, decimals: 2, annualDiscountPercent: 20, tiers: tiers([10, 9, 8.25, 7.5, 6.5, 5.75]) },
    { code: 'SAR', flag: '🇸🇦', symbol: 'SAR', symbolAr: 'ر.س', name: { en: 'Saudi Riyal', ar: 'ريال سعودي' }, decimals: 0, annualDiscountPercent: 20, tiers: tiers([38, 34, 31, 28, 24, 22]) },
    { code: 'AED', flag: '🇦🇪', symbol: 'AED', symbolAr: 'د.إ', name: { en: 'UAE Dirham', ar: 'درهم إماراتي' }, decimals: 0, annualDiscountPercent: 20, tiers: tiers([37, 33, 30, 28, 24, 21]) },
    { code: 'QAR', flag: '🇶🇦', symbol: 'QAR', symbolAr: 'ر.ق', name: { en: 'Qatari Riyal', ar: 'ريال قطري' }, decimals: 0, annualDiscountPercent: 20, tiers: tiers([36, 33, 30, 27, 24, 21]) },
    { code: 'KWD', flag: '🇰🇼', symbol: 'KWD', symbolAr: 'د.ك', name: { en: 'Kuwaiti Dinar', ar: 'دينار كويتي' }, decimals: 2, annualDiscountPercent: 20, tiers: tiers([3.1, 2.75, 2.55, 2.3, 2, 1.75]) },
    { code: 'BHD', flag: '🇧🇭', symbol: 'BHD', symbolAr: 'د.ب', name: { en: 'Bahraini Dinar', ar: 'دينار بحريني' }, decimals: 2, annualDiscountPercent: 20, tiers: tiers([3.75, 3.4, 3.1, 2.8, 2.45, 2.15]) },
    { code: 'OMR', flag: '🇴🇲', symbol: 'OMR', symbolAr: 'ر.ع', name: { en: 'Omani Rial', ar: 'ريال عماني' }, decimals: 2, annualDiscountPercent: 20, tiers: tiers([3.85, 3.45, 3.15, 2.9, 2.5, 2.2]) },
    { code: 'EUR', flag: '🇪🇺', symbol: '€', symbolAr: '€', name: { en: 'Euro', ar: 'يورو' }, decimals: 2, annualDiscountPercent: 20, tiers: tiers([8.75, 8, 7.25, 6.5, 5.75, 5]) },
  ],
};
