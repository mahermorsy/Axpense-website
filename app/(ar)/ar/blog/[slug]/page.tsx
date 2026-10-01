import { BlogRoute, blogMetadata, blogParams } from '@/lib/blog-route';

export const dynamicParams = false;
export function generateStaticParams() {
  return blogParams('ar');
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  return blogMetadata(p.slug, 'ar');
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  return <BlogRoute slug={p.slug} lang="ar" />;
}
