// Legacy industry page: kept because the homepage links to it, but noindex and out
// of the sitemap until it is rebuilt to full quality (SEO brief §2.3).
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage } from '@/components/IndustryPage';
import { INDUSTRIES } from '@/content/industries';

const entry = INDUSTRIES['travel-hospitality'];
const data = entry.en;

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/industries/travel-hospitality', arPath: '/ar/industries/travel-hospitality', noindex: true });

export default function Page() {
  return <IndustryPage data={data} lang="en" />;
}
