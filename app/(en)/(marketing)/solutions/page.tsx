import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { SolutionsIndexView } from '@/components/pages/ListingViews';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description: "Axpense solutions: fleet management software, fleet maintenance software, fleet cost tracking and vehicle inspection software for Egypt and MENA.",
  path: '/solutions',
  arPath: '/ar/solutions',
  pageType: 'hub',
});

export default function Page() {
  return <SolutionsIndexView lang={LANG} />;
}
