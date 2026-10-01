import { SeoRoute, seoMetadata, seoParams } from '@/lib/seo-route';

export const dynamicParams = false;
export function generateStaticParams() {
  return seoParams('feature');
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  return seoMetadata(`/features/${p.slug}`, 'en');
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  return <SeoRoute enPath={`/features/${p.slug}`} lang="en" />;
}
