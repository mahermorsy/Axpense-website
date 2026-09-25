import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { AboutView } from '@/components/pages/AboutView';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'About Axpense',
  description: 'Axpense builds fleet, asset, and maintenance management software for growing businesses in Egypt and MENA.',
  path: '/about',
  arPath: '/ar/about',
});

export default function Page() {
  return <AboutView lang={LANG} />;
}
