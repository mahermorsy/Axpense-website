import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage } from '@/components/IndustryPage';
import { INDUSTRIES } from '@/content/industries';

const entry = INDUSTRIES['healthcare'];
const data = entry.en;

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/industries/healthcare', arPath: '/ar/industries/healthcare' });

export default function Page() {
  return <IndustryPage data={data} lang="en" />;
}
