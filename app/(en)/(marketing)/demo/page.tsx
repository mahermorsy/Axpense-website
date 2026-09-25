import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadFormView } from '@/components/pages/FormViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'Book a Demo',
  description: 'Book a short Axpense demo with the team.',
  path: '/demo',
  arPath: '/ar/demo',
});

export default function Page() {
  return <LeadFormView kind="demo" lang={LANG} />;
}
