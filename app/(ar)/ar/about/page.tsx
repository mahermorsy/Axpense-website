import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { AboutView } from '@/components/pages/AboutView';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "من نحن",
  description: "تطوّر أكسبنس برامج إدارة الأسطول والأصول والصيانة للشركات النامية في مصر والشرق الأوسط. تعرّف على قيمنا وطريقة التواصل معنا.",
  path: '/ar/about',
  enPath: '/about',
  pageType: 'page',
});

export default function Page() {
  return <AboutView lang={LANG} />;
}
