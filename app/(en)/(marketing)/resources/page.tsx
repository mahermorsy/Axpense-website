import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ResourcesView } from '@/components/pages/ListingViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'Resources',
  description: 'Guides and tools for fleet and asset management, including a fleet management guide and a maintenance checklist.',
  path: '/resources',
  arPath: '/ar/resources',
});

export default function Page() {
  return <ResourcesView lang={LANG} />;
}
