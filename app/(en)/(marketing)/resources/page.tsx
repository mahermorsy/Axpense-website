import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ResourcesView } from '@/components/pages/ListingViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "Free Fleet Resources",
  description: "Free fleet tools and guides: a cost per km calculator, a vehicle inspection checklist, a preventive maintenance checklist and practical fleet articles.",
  path: '/resources',
  arPath: '/ar/resources',
  pageType: 'hub',
});

export default function Page() {
  return <ResourcesView lang={LANG} />;
}
