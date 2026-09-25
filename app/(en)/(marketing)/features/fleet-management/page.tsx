import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { FeaturePage } from '@/components/FeaturePage';
import { JsonLd } from '@/components/seo/JsonLd';
import { FEATURES } from '@/content/features';

const entry = FEATURES['fleet-management'];
const data = entry.en;

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/features/fleet-management', arPath: '/ar/features/fleet-management' });

export default function Page() {
  return <><JsonLd data={softwareApplicationJsonLd({ name: entry.jsonLdName, description: data.description, path: '/features/fleet-management' })} /><FeaturePage data={data} lang="en" /></>;
}
