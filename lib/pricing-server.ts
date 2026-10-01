// Server-side only (uses the internal API URL).
import { DEFAULT_PRICING } from '@/content/pricing';
import type { PricingConfig } from './pricing';

/**
 * Pricing for server components. Reads GET /api/public/pricing (edited by the
 * business team in /admin/pricing) and re-checks every 5 minutes, so price
 * changes go live without a redeploy. Falls back to content/pricing.ts when no
 * API is configured or the API is unreachable.
 */
export async function loadPricing(): Promise<PricingConfig> {
  const base = process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL;
  if (!base) return DEFAULT_PRICING;
  try {
    const res = await fetch(`${base.replace(/\/$/, '')}/api/public/pricing`, { next: { revalidate: 300, tags: ['pricing'] }, signal: AbortSignal.timeout(4000) });
    if (!res.ok) return DEFAULT_PRICING;
    const data = (await res.json()) as PricingConfig;
    return Array.isArray(data?.currencies) && data.currencies.length ? data : DEFAULT_PRICING;
  } catch {
    return DEFAULT_PRICING;
  }
}
