import Image from 'next/image';
import type { Lang } from '@/lib/i18n';

const ALT = {
  en: 'Axpense fleet management dashboard showing vehicles, maintenance, fuel, expenses and fleet costs',
  ar: 'لوحة تحكم أكسبنس لإدارة الأسطول: المركبات والصيانة والوقود والمصروفات وتكاليف الأسطول',
};

// Product screenshot framed like an app window (rounded card, elevated shadow).
export function ProductScreenshot({ priority = false, compact = false, lang = 'en' }: { priority?: boolean; compact?: boolean; lang?: Lang }) {
  return (
    <figure className={`overflow-hidden rounded-xl border border-border bg-card shadow-elevated ${compact ? '' : 'p-1.5 sm:p-2'}`}>
      <div aria-hidden="true" className="flex items-center gap-1.5 px-2 pb-2 pt-1">
        <span className="h-2.5 w-2.5 rounded-full bg-muted" /><span className="h-2.5 w-2.5 rounded-full bg-muted" /><span className="h-2.5 w-2.5 rounded-full bg-muted" />
      </div>
      <Image
        src="/axpense-dashboard.webp"
        alt={ALT[lang]}
        width={1536}
        height={1024}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 1100px"
        className="h-auto w-full rounded-lg border border-border/60"
      />
    </figure>
  );
}
