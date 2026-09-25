import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadFormView } from '@/components/pages/FormViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Sales',
  description: 'Talk to the Axpense team about fleet, asset, and maintenance management for your business.',
  path: '/contact',
  arPath: '/ar/contact',
});

export default function Page() {
  return <LeadFormView kind="contact" lang={LANG} />;
}
