import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { CalculatorView } from '@/components/pages/FormViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'Fleet Cost Calculator',
  description: 'Estimate your monthly fleet operating cost across fuel, maintenance, insurance, and other expenses.',
  path: '/resources/fleet-cost-calculator',
  arPath: '/ar/resources/fleet-cost-calculator',
});

export default function Page() {
  return <CalculatorView lang={LANG} />;
}
