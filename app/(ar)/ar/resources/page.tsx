import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ResourcesView } from '@/components/pages/ListingViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "موارد مجانية للأساطيل",
  description: "أدوات وأدلة مجانية للأساطيل: حاسبة تكلفة الكيلومتر، وقائمة فحص السيارة، وجدول الصيانة الدورية، ومقالات عملية عن إدارة الأسطول.",
  path: '/ar/resources',
  enPath: '/resources',
  pageType: 'hub',
});

export default function Page() {
  return <ResourcesView lang={LANG} />;
}
