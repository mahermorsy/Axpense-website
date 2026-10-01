import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HomeView } from '@/components/pages/HomeView';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: "Axpense | Fleet & Asset Management Platform for MENA",
  description: "Axpense is the fleet and asset management platform for businesses in Egypt and MENA: km-based maintenance, inspections, spare parts and costs. Book a demo.",
  path: '/',
  arPath: '/ar',
  pageType: 'home',
  absoluteTitle: true,
});

export default function Page() {
  return <HomeView lang={LANG} />;
}
