import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/Button';
import { ProductScreenshot } from '@/components/ProductScreenshot';
import { Section, SectionHead } from '@/components/Section';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { IconCard } from '@/components/ui/IconCard';
import { CtaBand } from '@/components/ui/AppSections';
import { Md, plain } from './Md';
import { ICONS } from './icons';
import { FaqList, RelatedArticles, RelatedLinks } from './Related';
import { gated } from '@/lib/capabilities';
import { primaryCta } from '@/lib/cta';
import { lhref, type Lang } from '@/lib/i18n';
import { breadcrumbSchema, faqSchema, softwareApplicationSchema } from '@/lib/schema';
import type { Section as S, SeoPage } from '@/lib/seo-page';
import { isLinkable, linkLabel } from '@/content/registry';
import { TRUST_AR, TRUST_EN } from '@/components/home/TrustLine';

const T = {
  en: {
    home: 'Home', commercial: 'Solutions', feature: 'Features', industry: 'Industries', location: 'Locations',
    faq: 'Frequently asked questions', articles: 'Related guides', related: 'Related Axpense pages', industries: 'Industries using this',
    cta: { title: 'See Axpense with your', accent: 'own fleet', subtitle: 'Book a short demo. We’ll set up a few of your vehicles and show you how it works day to day.', pricing: 'See pricing' },
  },
  ar: {
    home: 'الرئيسية', commercial: 'الحلول', feature: 'المميزات', industry: 'القطاعات', location: 'الأسواق',
    faq: 'الأسئلة الشائعة', articles: 'أدلة ذات صلة', related: 'صفحات أكسبنس ذات الصلة', industries: 'قطاعات تستخدم هذا',
    cta: { title: 'شاهد أكسبنس مع', accent: 'أسطولك أنت', subtitle: 'احجز عرضًا تجريبيًا قصيرًا. سنضيف بعض مركباتك ونوضح لك كيف يعمل النظام يومًا بيوم.', pricing: 'اطّلع على الأسعار' },
  },
};

const HUB: Record<SeoPage['type'], string | undefined> = { commercial: '/solutions', feature: '/features', industry: '/industries', location: undefined };

export function seoBreadcrumbs(page: SeoPage, lang: Lang) {
  const t = T[lang];
  const hub = HUB[page.type];
  const items = [{ name: t.home, path: lhref(lang, '/') }];
  if (hub) items.push({ name: t[page.type], path: lhref(lang, hub) });
  items.push({ name: page.navLabel[lang], path: lhref(lang, page.path) });
  return items;
}

export function SeoPageView({ page, lang }: { page: SeoPage; lang: Lang }) {
  const t = T[lang];
  const cta = primaryCta(lang);
  const sections = gated(page.sections[lang]);
  const faqs = gated(page.faqs[lang]);
  const crumbs = seoBreadcrumbs(page, lang);
  const path = lhref(lang, page.path);
  const hero = page.hero[lang];
  const upPath = page.parent && isLinkable(page.parent) ? page.parent : undefined;

  const ld: Record<string, unknown>[] = [breadcrumbSchema(crumbs)];
  if (faqs.length) ld.push(faqSchema(faqs.map((f) => ({ q: f.q, a: plain(f.a) }))));
  if ((page.type === 'commercial' || page.type === 'feature') && page.schemaName) {
    ld.push(softwareApplicationSchema({ name: page.schemaName, description: page.meta[lang].description, path, lang }));
  }

  return (
    <>
      {ld.map((d, i) => <JsonLd key={i} data={d} />)}
      <Breadcrumbs lang={lang} items={crumbs.slice(1).map((c, i, a) => ({ label: c.name, href: i < a.length - 1 ? c.path : undefined }))} />

      <div className="border-b border-border bg-gradient-hero py-16">
        <div className="mx-auto grid max-w-wrap items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="badge-app mb-4">{hero.badge}</p>
            <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl text-balance rtl:leading-[1.3]">{page.h1[lang]}</h1>
            <Md text={hero.intro} lang={lang} className="max-w-xl text-lg text-ink-700" />
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href={cta.href}>{cta.label}</Button>
              {upPath && (
                <Link href={lhref(lang, upPath)} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                  {linkText(upPath, lang)}<ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
          <ProductScreenshot priority screen={page.heroImage ?? 'dashboard'} lang={lang} />
        </div>
      </div>

      {sections.map((s, i) => <SectionBlock key={i} s={s} lang={lang} alt={i % 2 === 1} />)}

      <FaqList faqs={faqs} lang={lang} title={t.faq} />

      <Section alt>
        <div className="flex flex-col gap-10">
          <RelatedLinks title={t.related} paths={[...(page.parent ? [page.parent] : []), ...page.relatedPages]} lang={lang} />
          <RelatedLinks title={t.industries} paths={page.relatedIndustries} lang={lang} />
        </div>
      </Section>

      <RelatedArticles slugs={page.relatedArticles} lang={lang} title={t.articles} />

      <CtaBand
        title={t.cta.title}
        accent={t.cta.accent}
        subtitle={t.cta.subtitle}
        primary={cta}
        secondary={{ label: t.cta.pricing, href: lhref(lang, '/pricing') }}
        checks={lang === 'ar' ? TRUST_AR : TRUST_EN}
      />
    </>
  );
}

function linkText(path: string, lang: Lang) {
  return linkLabel(path, lang) ?? path;
}

export function SectionBlock({ s, lang, alt }: { s: S; lang: Lang; alt: boolean }) {
  switch (s.kind) {
    case 'text':
      return (
        <Section alt={alt}>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">{s.heading}</h2>
            <Md text={s.body} lang={lang} />
          </div>
        </Section>
      );
    case 'steps': {
      const steps = gated(s.steps);
      return (
        <Section alt={alt}>
          <SectionHead title={s.heading} description={s.intro} />
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="card-app p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">{i + 1}</div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                <Md text={step.desc} lang={lang} className="mt-1 !text-sm" />
              </li>
            ))}
          </ol>
        </Section>
      );
    }
    case 'cards': {
      const items = gated(s.items).map((c) => ({ ...c, href: c.href && isLinkable(c.href) ? lhref(lang, c.href) : undefined }));
      return (
        <Section alt={alt}>
          <SectionHead title={s.heading} description={s.intro} />
          <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${s.columns === 2 ? '' : 'lg:grid-cols-3'}`}>
            {items.map((c) => <IconCard key={c.title} icon={ICONS[c.icon ?? 'check']} title={c.title} desc={plain(c.desc)} href={c.href} lang={lang} meta="" />)}
          </div>
        </Section>
      );
    }
    case 'checklist': {
      const items = gated(s.items);
      return (
        <Section alt={alt}>
          <SectionHead title={s.heading} description={s.intro} />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <li key={it.text} className="card-app flex items-start gap-3 p-4 text-sm leading-relaxed text-ink-700">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <Md text={it.text} lang={lang} className="!text-sm" />
              </li>
            ))}
          </ul>
        </Section>
      );
    }
    case 'formula':
      return (
        <Section alt={alt}>
          <SectionHead title={s.heading} description={s.intro} />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex min-w-0 flex-col gap-4">
              {s.formulas.map((f) => (
                <div key={f.label} className="rounded-2xl border border-primary/20 bg-card p-6 shadow-card">
                  <p className="text-sm font-semibold text-primary">{f.label}</p>
                  <p className="mt-2 text-lg font-semibold leading-relaxed text-foreground">{f.expression}</p>
                </div>
              ))}
            </div>
            {s.example && (
              <div className="card-app min-w-0 p-6">
                <h3 className="mb-4 text-lg font-semibold text-foreground">{s.example.title}</h3>
                <Md text={s.example.body} lang={lang} className="!text-sm" />
              </div>
            )}
          </div>
        </Section>
      );
    case 'screenshot':
      return (
        <Section alt={alt}>
          {s.heading && <SectionHead title={s.heading} />}
          <div className="mx-auto max-w-5xl">
            <ProductScreenshot screen={s.image} lang={lang} alt={s.alt} />
            {s.caption && <p className="mt-3 text-center text-sm text-muted-foreground">{s.caption}</p>}
          </div>
        </Section>
      );
    case 'workflow': {
      const nodes = gated(s.nodes);
      return (
        <Section alt={alt}>
          <SectionHead title={s.heading} description={s.intro} />
          <ol className="flex flex-col items-stretch gap-2 md:flex-row md:flex-wrap md:items-center">
            {nodes.map((n, i) => (
              <li key={n.label} className="flex flex-col items-center gap-2 md:flex-row">
                <span className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl border border-primary/25 bg-card px-5 py-3 text-center text-sm font-semibold text-foreground shadow-card md:w-auto">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary text-xs text-primary-foreground">{i + 1}</span>{n.label}
                </span>
                {i < nodes.length - 1 && (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 rotate-90 text-primary md:rotate-0 rtl:md:rotate-180" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                )}
              </li>
            ))}
          </ol>
          {s.note && <p className="mt-5 text-sm text-muted-foreground">{s.note}</p>}
        </Section>
      );
    }
  }
}

