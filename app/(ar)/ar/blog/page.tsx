import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { BlogIndexView } from '@/components/pages/BlogIndexView';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: 'المدونة',
  description: 'أدلة حول إدارة الأسطول والصيانة والمصروفات وإدارة الأصول للشركات في مصر ومنطقة الشرق الأوسط وشمال أفريقيا.',
  path: '/ar/blog',
  enPath: '/blog',
});

export default function Page() {
  return <BlogIndexView lang={LANG} />;
}
