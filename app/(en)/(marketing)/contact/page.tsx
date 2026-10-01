import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { LeadFormView } from '@/components/pages/FormViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "Contact Sales",
  description: "Talk to the Axpense team about fleet maintenance, inspections and cost tracking for your company in Egypt or MENA. We'll get back to you.",
  path: '/contact',
  arPath: '/ar/contact',
  pageType: 'page',
});

export default function Page() {
  return <LeadFormView kind="contact" lang={LANG} />;
}
