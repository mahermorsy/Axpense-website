import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustriesIndexView } from '@/components/pages/ListingViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: 'القطاعات',
  description: 'كيف يتكيف أكسبنس مع احتياجات الأسطول والمعدات والصيانة في مختلف القطاعات في مصر والمنطقة.',
  path: '/ar/industries',
  enPath: '/industries',
});

export default function Page() {
  return <IndustriesIndexView lang={LANG} />;
}
