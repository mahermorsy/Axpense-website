import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HomeView } from '@/components/pages/HomeView';

const LANG = 'en';

export const metadata: Metadata = buildMetadata({
  title: 'Fleet & Asset Management Software for Growing Businesses',
  description: 'Manage vehicles, equipment, maintenance, fuel, expenses and inspections in one platform. Built for businesses across Egypt and MENA.',
  path: '/',
  arPath: '/ar',
});

export default function Page() {
  return <HomeView lang={LANG} />;
}
