import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { FeaturesIndexView } from '@/components/pages/FeaturesIndexView';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: 'المميزات',
  description: 'كل ما يتضمنه أكسبنس لإدارة الأصول والأسطول والصيانة والمصروفات والفحوصات والإهلاك والإدارة المدعومة بالذكاء الاصطناعي.',
  path: '/ar/features',
  enPath: '/features',
});

export default function Page() {
  return <FeaturesIndexView lang={LANG} />;
}
