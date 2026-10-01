import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { BlogIndexView } from '@/components/pages/BlogIndexView';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "Fleet Management Blog",
  description: "Practical guides on fleet maintenance, cost per km, total cost of ownership, inspections and spare parts for fleet teams in Egypt and MENA.",
  path: '/blog',
  arPath: '/ar/blog',
  pageType: 'hub',
});

export default function Page() {
  return <BlogIndexView lang={LANG} />;
}
