import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionsIndexView } from '@/components/pages/ListingViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: 'الحلول',
  description: 'حلول أكسبنس لإدارة تكاليف الأسطول والصيانة ودورة حياة الأصول وتكاليف المعدات.',
  path: '/ar/solutions',
  enPath: '/solutions',
});

export default function Page() {
  return <SolutionsIndexView lang={LANG} />;
}
