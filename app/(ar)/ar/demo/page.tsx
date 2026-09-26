import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'احجز عرضًا تجريبيًا',
  description: 'احجز عرضًا تجريبيًا قصيرًا لأكسبنس مع الفريق.',
  path: '/ar/demo',
  enPath: '/demo',
});

export default function Page() {
  redirect('/ar?demo=1');
}
