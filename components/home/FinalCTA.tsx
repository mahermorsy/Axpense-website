import { Button } from '../Button';
import { Section } from '../Section';
import { primaryCta } from '@/lib/cta';
import type { Lang } from '@/lib/i18n';
import { TrustLine } from './TrustLine';

const T = {
  en: { title: 'Bring your fleet and assets into one system', sub: 'Book a short demo and see how Axpense fits your fleet and assets.' },
  ar: { title: 'وحّد إدارة أسطولك وأصولك في نظام واحد', sub: 'احجز عرضًا تجريبيًا قصيرًا وشاهد كيف يناسب أكسبنس أسطولك وأصولك.' },
};

export function FinalCTA({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  const cta = primaryCta(lang);
  return (
    <Section>
      <div className="relative overflow-hidden rounded-xl bg-gradient-primary px-6 py-14 text-center shadow-glow sm:px-16">
        <div aria-hidden="true" className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <h2 className="relative mx-auto max-w-lg text-2xl font-bold text-white sm:text-3xl text-balance">{t.title}</h2>
        <p className="relative mx-auto mt-3 max-w-md text-base leading-relaxed text-white/85">{t.sub}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button href={cta.href} variant="white" size="lg">{cta.label}</Button>
        </div>
        <TrustLine lang={lang} tone="onDark" className="relative mt-6" />
      </div>
    </Section>
  );
}
