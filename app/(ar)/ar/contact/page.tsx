import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadFormView } from '@/components/pages/FormViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: 'اتصل بنا',
  description: 'تحدث مع فريق أكسبنس حول إدارة الأسطول والأصول والصيانة لشركتك.',
  path: '/ar/contact',
  enPath: '/contact',
});

export default function Page() {
  return <LeadFormView kind="contact" lang={LANG} />;
}
