import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { primaryCta } from '@/lib/cta';
import type { Lang } from '@/lib/i18n';
import { TrustLine } from './TrustLine';

/*
 * The H1 is the SEO keyword line; the big tagline below it is a styled <p>.
 * Tagline options supplied by the Axpense team — swap `headline` to change it:
 *   ['Stop missing services.', 'Start controlling fleet costs.']
 *   ['Every vehicle, every service,', 'every pound — in one place']
 *   ['Fleet maintenance that runs on', 'kilometres, not guesswork']
 */
const T = {
  en: {
    badge: 'Built for fleet teams in Egypt & MENA region',
    h1: 'Fleet & asset management software for growing businesses',
    headline: ['Stop missing services.', 'Start controlling fleet costs.'],
    sub: 'Axpense reminds you when each vehicle is due for service based on the kilometres it actually drives. It also tracks spare parts and inspections, and shows every expense, replacing spreadsheets and WhatsApp groups.',
    alt: 'Axpense dashboard: fleet KPIs, cost trend, cost breakdown, fleet map and maintenance notifications',
  },
  ar: {
    badge: 'مصمم لفرق الأسطول في مصر ومنطقة الشرق الأوسط',
    h1: 'برنامج إدارة الأسطول والأصول للشركات النامية',
    headline: ['توقف عن تفويت مواعيد الصيانة.', 'وتحكّم في تكاليف أسطولك.'],
    sub: 'يذكّرك أكسبنس بموعد صيانة كل مركبة حسب الكيلومترات التي تقطعها فعليًا، ويتابع قطع الغيار والفحوصات، ويعرض كل المصروفات — بدلًا من جداول إكسل ومجموعات واتساب.',
    alt: 'لوحة تحكم أكسبنس: مؤشرات الأسطول واتجاه التكاليف وتوزيعها وخريطة الأسطول وتنبيهات الصيانة',
  },
};

export function Hero({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  const cta = primaryCta(lang);
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-24 h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.10),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-6 text-center sm:px-6 lg:px-8 lg:pt-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          {t.badge}
        </span>

        <h1 className="mx-auto mt-7 max-w-3xl text-lg font-semibold text-foreground sm:text-xl">{t.h1}</h1>

        <p className={`mx-auto mt-4 max-w-5xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl ${lang === 'ar' ? 'leading-[1.3]' : 'leading-[1.08]'}`}>
          {t.headline[0]}
          <br />
          <span className="text-gradient">{t.headline[1]}</span>
        </p>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{t.sub}</p>

        <div className="mt-9 flex justify-center">
          <Link href={cta.href} className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] px-10 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 sm:w-auto">
            {cta.label}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <TrustLine lang={lang} className="mt-7" />

        <figure className="relative mx-auto mt-14 max-w-6xl">
          <div aria-hidden="true" className="absolute -inset-x-10 -top-10 bottom-0 rounded-[40px] bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
            <Image src="/screens/dashboard.webp" alt={t.alt} width={1920} height={1200} priority sizes="(max-width: 1200px) 100vw, 1152px" className="h-auto w-full" />
          </div>
        </figure>
      </div>
    </section>
  );
}
