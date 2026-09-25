import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionsIndexView } from '@/components/pages/ListingViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'Solutions',
  description: 'Axpense solutions for fleet cost management, maintenance, asset lifecycle, and equipment cost management.',
  path: '/solutions',
  arPath: '/ar/solutions',
});

export default function Page() {
  return <SolutionsIndexView lang={LANG} />;
}
