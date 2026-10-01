import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PricingView } from '@/components/pricing/PricingView';
import { loadPricing } from '@/lib/pricing-server';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "Fleet Management Software Pricing",
  description: "Fleet management software pricing per vehicle: from 200 EGP or $5.75 per vehicle a month, all features included, 20% off annual billing. Start free.",
  path: '/pricing',
  arPath: '/ar/pricing',
  pageType: 'page',
});

export default async function Page() {
  return <PricingView lang={LANG} config={await loadPricing()} />;
}
