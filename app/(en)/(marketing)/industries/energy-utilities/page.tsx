import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage } from '@/components/IndustryPage';
import { INDUSTRIES } from '@/content/industries';

const entry = INDUSTRIES['energy-utilities'];
const data = entry.en;

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/industries/energy-utilities', arPath: '/ar/industries/energy-utilities' });

export default function Page() {
  return <IndustryPage data={data} lang="en" />;
}
