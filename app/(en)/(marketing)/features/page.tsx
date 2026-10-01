import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { FeaturesIndexView } from '@/components/pages/FeaturesIndexView';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "Features",
  description: "Every Axpense feature in one place: vehicles, drivers, km-based preventive maintenance, spare parts, inspections, expenses, depreciation and reports.",
  path: '/features',
  arPath: '/ar/features',
  pageType: 'hub',
});

export default function Page() {
  return <FeaturesIndexView lang={LANG} />;
}
