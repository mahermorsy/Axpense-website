import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadFormView } from '@/components/pages/FormViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: "اتصل بنا",
  description: "تواصل مع فريق أكسبنس بخصوص إدارة الأسطول والصيانة والتكاليف لشركتك في مصر أو الشرق الأوسط. نرد عليك عبر البريد أو الهاتف.",
  path: '/ar/contact',
  enPath: '/contact',
  pageType: 'page',
});

export default function Page() {
  return <LeadFormView kind="contact" lang={LANG} />;
}
