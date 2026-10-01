import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionsIndexView } from '@/components/pages/ListingViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "الحلول",
  description: "حلول أكسبنس: برنامج إدارة الأسطول وبرنامج صيانة الأسطول وإدارة تكاليف الأسطول وبرنامج فحص المركبات للشركات في مصر والشرق الأوسط.",
  path: '/ar/solutions',
  enPath: '/solutions',
  pageType: 'hub',
});

export default function Page() {
  return <SolutionsIndexView lang={LANG} />;
}
