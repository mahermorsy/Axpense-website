import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { BlogIndexView } from '@/components/pages/BlogIndexView';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description: 'Guides on fleet management, maintenance, expenses, and asset management for businesses in Egypt and MENA.',
  path: '/blog',
  arPath: '/ar/blog',
});

export default function Page() {
  return <BlogIndexView lang={LANG} />;
}
