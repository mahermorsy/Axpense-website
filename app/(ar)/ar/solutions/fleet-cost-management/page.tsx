import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionPage } from '@/components/SolutionPage';
import { SOLUTIONS } from '@/content/solutions';

const entry = SOLUTIONS['fleet-cost-management'];
const data = entry.ar;

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/ar/solutions/fleet-cost-management', enPath: '/solutions/fleet-cost-management' });

export default function Page() {
  return <SolutionPage data={data} lang="ar" />;
}
