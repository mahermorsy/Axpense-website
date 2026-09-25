import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { HomeView } from '@/components/pages/HomeView';

const LANG = 'ar';

export const metadata: Metadata = buildMetadata({
  title: 'برنامج إدارة الأسطول والأصول للشركات النامية',
  description: 'إدارة المركبات والمعدات والصيانة والوقود والمصروفات والفحوصات من منصة واحدة. مصمم للشركات في مصر ومنطقة الشرق الأوسط وشمال أفريقيا.',
  path: '/ar',
  enPath: '/',
});

export default function Page() {
  return <HomeView lang={LANG} />;
}
