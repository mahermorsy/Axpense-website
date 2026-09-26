import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Book a Demo',
  description: 'Book a short Axpense demo with the team.',
  path: '/demo',
  arPath: '/ar/demo',
});

export default function Page() {
  redirect('/?demo=1');
}
