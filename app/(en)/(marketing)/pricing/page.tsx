import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PricingView } from '@/components/pages/FormViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'Axpense Pricing',
  description: 'Axpense plans from $40/month (2,000 EGP · 150 SAR). Start with a 14-day free trial — no credit card required.',
  path: '/pricing',
  arPath: '/ar/pricing',
});

export default function Page() {
  return <PricingView lang={LANG} />;
}
