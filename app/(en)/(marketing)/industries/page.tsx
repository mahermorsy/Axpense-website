import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustriesIndexView } from '@/components/pages/ListingViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'Industries',
  description: 'How Axpense adapts to fleet, equipment, and maintenance needs across industries in Egypt.',
  path: '/industries',
  arPath: '/ar/industries',
});

export default function Page() {
  return <IndustriesIndexView lang={LANG} />;
}
