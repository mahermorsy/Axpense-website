import Link from 'next/link';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import type { Lang } from '@/lib/i18n';

type Tone = 'teal' | 'green' | 'amber' | 'navy';
const toneClass: Record<Tone, string> = { teal: '', green: 'icon-tile-green', amber: 'icon-tile-amber', navy: 'icon-tile-navy' };

// Mirrors the dashboard stat card: gradient icon tile top-left,
// optional teal meta link top-right, title + description below.
export function IconCard({ icon: Icon, title, desc, href, tone = 'teal', meta, lang = 'en' }: { icon: LucideIcon; title: string; desc: string; href?: string; tone?: Tone; meta?: string; lang?: Lang }) {
  const body = (
    <div className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div className={`icon-tile ${toneClass[tone]}`}><Icon className="h-6 w-6" aria-hidden="true" /></div>
        {href && <span className="flex items-center gap-1 text-sm font-medium text-primary">{meta ?? (lang === 'ar' ? 'اعرف المزيد' : 'Learn more')}<ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" /></span>}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
  return href ? <Link href={href} className="card-app block">{body}</Link> : <div className="card-app">{body}</div>;
}
