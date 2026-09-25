import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionPage } from '@/components/SolutionPage';
import { SOLUTIONS } from '@/content/solutions';

const entry = SOLUTIONS['asset-lifecycle-management'];
const data = entry.en;

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/solutions/asset-lifecycle-management', arPath: '/ar/solutions/asset-lifecycle-management' });

export default function Page() {
  return <SolutionPage data={data} lang="en" />;
}
