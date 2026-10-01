import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { IndustriesIndexView } from '@/components/pages/ListingViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "القطاعات",
  description: "كيف يدعم أكسبنس أساطيل النقل والتوزيع والمقاولات والبترول والغاز والمصانع والخدمات الميدانية في مصر والشرق الأوسط. احجز عرضًا تجريبيًا.",
  path: '/ar/industries',
  enPath: '/industries',
  pageType: 'hub',
});

export default function Page() {
  return <IndustriesIndexView lang={LANG} />;
}
