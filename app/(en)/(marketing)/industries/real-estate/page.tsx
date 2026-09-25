import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage } from '@/components/IndustryPage';
import { INDUSTRIES } from '@/content/industries';

const entry = INDUSTRIES['real-estate'];
const data = entry.en;

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/industries/real-estate', arPath: '/ar/industries/real-estate' });

export default function Page() {
  return <IndustryPage data={data} lang="en" />;
}
