import type { Metadata } from 'next';
import { buildMetadata, softwareApplicationJsonLd } from '@/lib/seo';
import { FeaturePage } from '@/components/FeaturePage';
import { JsonLd } from '@/components/seo/JsonLd';
import { FEATURES } from '@/content/features';

const entry = FEATURES['work-orders'];
const data = entry.ar;

export const metadata: Metadata = buildMetadata({ title: data.metaTitle, description: data.description, path: '/ar/features/work-orders', enPath: '/features/work-orders' });

export default function Page() {
  return <><JsonLd data={softwareApplicationJsonLd({ name: entry.jsonLdName, description: data.description, path: '/ar/features/work-orders' })} /><FeaturePage data={data} lang="ar" /></>;
}
