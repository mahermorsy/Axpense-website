import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { AboutView } from '@/components/pages/AboutView';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "Axpense builds fleet, asset and maintenance management software for growing businesses in Egypt and MENA. Learn what we stand for and how to reach us.",
  path: '/about',
  arPath: '/ar/about',
  pageType: 'page',
});

export default function Page() {
  return <AboutView lang={LANG} />;
}
