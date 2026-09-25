import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { CalculatorView } from '@/components/pages/FormViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: 'حاسبة تكلفة الأسطول',
  description: 'قدّر تكلفة تشغيل أسطولك شهريًا من الوقود والصيانة والتأمين والمصروفات الأخرى.',
  path: '/ar/resources/fleet-cost-calculator',
  enPath: '/resources/fleet-cost-calculator',
});

export default function Page() {
  return <CalculatorView lang={LANG} />;
}
