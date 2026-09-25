import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionPage } from '@/components/SolutionPage';
import { SOLUTIONS } from '@/content/solutions';

const entry = SOLUTIONS['fleet-maintenance-management'];
const data = entry.en;

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/solutions/fleet-maintenance-management', arPath: '/ar/solutions/fleet-maintenance-management' });

export default function Page() {
  return <SolutionPage data={data} lang="en" />;
}
