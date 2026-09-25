import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { FeaturesIndexView } from '@/components/pages/FeaturesIndexView';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'Features',
  description: 'Everything Axpense includes for asset, fleet, maintenance, expense, inspection, depreciation and AI-powered management.',
  path: '/features',
  arPath: '/ar/features',
});

export default function Page() {
  return <FeaturesIndexView lang={LANG} />;
}
