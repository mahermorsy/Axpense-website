import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadFormView } from '@/components/pages/FormViews';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: 'احجز عرضًا تجريبيًا',
  description: 'احجز عرضًا تجريبيًا قصيرًا لأكسبنس مع الفريق.',
  path: '/ar/demo',
  enPath: '/demo',
});

export default function Page() {
  return <LeadFormView kind="demo" lang={LANG} />;
}
