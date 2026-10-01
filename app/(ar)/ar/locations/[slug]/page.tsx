import { SeoRoute, seoMetadata, seoParams } from '@/lib/seo-route';

export const dynamicParams = false;
export function generateStaticParams() {
  return seoParams('location');
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  return seoMetadata(`/locations/${p.slug}`, 'ar');
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  return <SeoRoute enPath={`/locations/${p.slug}`} lang="ar" />;
}
