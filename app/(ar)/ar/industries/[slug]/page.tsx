import { SeoRoute, seoMetadata, seoParams } from '@/lib/seo-route';

export const dynamicParams = false;
export function generateStaticParams() {
  return seoParams('industry');
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  return seoMetadata(`/industries/${p.slug}`, 'ar');
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  return <SeoRoute enPath={`/industries/${p.slug}`} lang="ar" />;
}
