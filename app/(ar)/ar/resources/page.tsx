import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ResourcesView } from '@/components/pages/ListingViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: 'الموارد',
  description: 'أدلة وأدوات لإدارة الأسطول والأصول، منها دليل إدارة الأسطول وقائمة الصيانة وحاسبة التكاليف.',
  path: '/ar/resources',
  enPath: '/resources',
});

export default function Page() {
  return <ResourcesView lang={LANG} />;
}
