import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustryPage } from '@/components/IndustryPage';
import { INDUSTRIES } from '@/content/industries';

const entry = INDUSTRIES['logistics'];
const data = entry.ar;

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/ar/industries/logistics', enPath: '/industries/logistics' });

export default function Page() {
  return <IndustryPage data={data} lang="ar" />;
}
