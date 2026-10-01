import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustriesIndexView } from '@/components/pages/ListingViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description: "How Axpense supports fleets in logistics, distribution, construction, oil and gas, manufacturing and field services across Egypt and MENA. Book a demo.",
  path: '/industries',
  arPath: '/ar/industries',
  pageType: 'hub',
});

export default function Page() {
  return <IndustriesIndexView lang={LANG} />;
}
