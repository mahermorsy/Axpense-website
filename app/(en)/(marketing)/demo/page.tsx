import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: "Book a Demo",
  description: "Book a free Axpense demo. Tell us about your vehicles and we will show you km-based maintenance, inspections and cost tracking with your own fleet.",
  path: '/demo',
  arPath: '/ar/demo',
  pageType: 'page',
});

const PLAN_KEYS = ['vehicles', 'currency', 'billing'] as const;

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams;
  const q = new URLSearchParams({ demo: '1' });
  for (const k of PLAN_KEYS) { const v = sp[k]; if (typeof v === 'string' && v) q.set(k, v.slice(0, 20)); }
  redirect(`/?${q.toString()}`);
}
