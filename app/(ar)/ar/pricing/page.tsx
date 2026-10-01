import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PricingView } from '@/components/pricing/PricingView';
import { loadPricing } from '@/lib/pricing-server';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "أسعار برنامج إدارة الأسطول",
  description: "أسعار برنامج إدارة الأسطول حسب المركبة: من 200 جنيه أو 5.75 دولار للمركبة شهريًا، كل المميزات متضمنة، وخصم 20% على الاشتراك السنوي. ابدأ مجانًا.",
  path: '/ar/pricing',
  enPath: '/pricing',
  pageType: 'page',
});

export default async function Page() {
  return <PricingView lang={LANG} config={await loadPricing()} />;
}
