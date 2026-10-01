import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { BlogIndexView } from '@/components/pages/BlogIndexView';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "مدونة إدارة الأسطول",
  description: "أدلة عملية عن صيانة الأسطول وتكلفة الكيلومتر والتكلفة الإجمالية للملكية وفحص المركبات وقطع الغيار لفرق الأسطول في مصر والشرق الأوسط.",
  path: '/ar/blog',
  enPath: '/blog',
  pageType: 'hub',
});

export default function Page() {
  return <BlogIndexView lang={LANG} />;
}
