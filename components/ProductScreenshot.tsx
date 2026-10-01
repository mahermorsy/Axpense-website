import Image from 'next/image';
import type { Lang } from '@/lib/i18n';
import type { ScreenName } from '@/lib/seo-page';

export const SCREENS: Record<ScreenName | 'legacy', { src: string; width: number; height: number; alt: { en: string; ar: string } }> = {
  dashboard: {
    src: '/screens/fleet-dashboard-costs-maintenance.webp', width: 1920, height: 1200,
    alt: { en: 'Axpense fleet dashboard showing vehicle KPIs, cost trend, cost breakdown and maintenance notifications', ar: 'لوحة تحكم أكسبنس: مؤشرات المركبات واتجاه التكاليف وتوزيعها وتنبيهات الصيانة' },
  },
  vehicles: {
    src: '/screens/vehicle-list-km-until-service.webp', width: 1920, height: 1200,
    alt: { en: 'Axpense vehicles screen showing each vehicle’s odometer and kilometres left until its next service', ar: 'شاشة المركبات في أكسبنس: عداد الكيلومترات والمسافة المتبقية حتى الصيانة القادمة لكل مركبة' },
  },
  maintenance: {
    src: '/screens/maintenance-schedule-by-km.webp', width: 1920, height: 1200,
    alt: { en: 'Axpense maintenance schedule showing services due by kilometre and overdue items', ar: 'جدول الصيانة في أكسبنس: الخدمات المستحقة حسب الكيلومترات والبنود المتأخرة' },
  },
  legacy: {
    src: '/axpense-dashboard.webp', width: 1536, height: 1024,
    alt: { en: 'Axpense fleet management dashboard showing vehicles, maintenance, expenses and fleet costs', ar: 'لوحة تحكم أكسبنس لإدارة الأسطول: المركبات والصيانة والمصروفات وتكاليف الأسطول' },
  },
};

// Product screenshot framed like an app window (rounded card, elevated shadow).
export function ProductScreenshot({ priority = false, compact = false, lang = 'en', screen = 'legacy', alt }: { priority?: boolean; compact?: boolean; lang?: Lang; screen?: ScreenName | 'legacy'; alt?: string }) {
  const s = SCREENS[screen];
  return (
    <figure className={`overflow-hidden rounded-xl border border-border bg-card shadow-elevated ${compact ? '' : 'p-1.5 sm:p-2'}`}>
      <div aria-hidden="true" className="flex items-center gap-1.5 px-2 pb-2 pt-1">
        <span className="h-2.5 w-2.5 rounded-full bg-muted" /><span className="h-2.5 w-2.5 rounded-full bg-muted" /><span className="h-2.5 w-2.5 rounded-full bg-muted" />
      </div>
      <Image
        src={s.src}
        alt={alt ?? s.alt[lang]}
        width={s.width}
        height={s.height}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        sizes="(max-width: 768px) 100vw, 1100px"
        className="h-auto w-full rounded-lg border border-border/60"
      />
    </figure>
  );
}
