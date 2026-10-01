import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HomeView } from '@/components/pages/HomeView';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "أكسبنس | منصة إدارة الأسطول والأصول في الشرق الأوسط",
  description: "أكسبنس منصة إدارة الأسطول والأصول للشركات في مصر والشرق الأوسط: صيانة حسب الكيلومترات وفحوصات وقطع غيار وتكاليف في مكان واحد. احجز عرضًا تجريبيًا.",
  path: '/ar',
  enPath: '/',
  pageType: 'home',
  absoluteTitle: true,
});

export default function Page() {
  return <HomeView lang={LANG} />;
}
