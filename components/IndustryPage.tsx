import { Button } from './Button';
import { PillLinks } from './FeaturePage';
import { ProductScreenshot } from './ProductScreenshot';
import { Section, SectionHead } from './Section';
import { Breadcrumbs } from './seo/Breadcrumbs';
import { CheckItem } from './ui/CheckItem';
import { primaryCta } from '@/lib/cta';
import { lhref, type Lang } from '@/lib/i18n';

export type IndustryPageData = {
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  challenges: string[];
  /** English paths — localized when rendered. */
  relevantFeatures: { label: string; href: string }[];
};

const T = {
  en: { crumb: 'Industries', badge: 'Industry Solution', manage: 'What Axpense helps your team manage', relevant: 'Relevant features' },
  ar: { crumb: 'القطاعات', badge: 'حلول القطاعات', manage: 'ما يساعد أكسبنس فريقك على إدارته', relevant: 'المميزات المرتبطة' },
};

export function IndustryPage({ data, lang = 'en' }: { data: IndustryPageData; lang?: Lang }) {
  const t = T[lang];
  const cta = primaryCta(lang);
  return (
    <>
      <Breadcrumbs lang={lang} items={[{ label: t.crumb, href: lhref(lang, '/industries') }, { label: data.title }]} />
      <div className="border-b border-border bg-gradient-hero py-16">
        <div className="mx-auto grid max-w-wrap items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="badge-app mb-4">{t.badge}</p>
            <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">{data.title}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-700">{data.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={cta.href}>{cta.label}</Button>
            </div>
          </div>
          <ProductScreenshot lang={lang} />
        </div>
      </div>
      <Section>
        <SectionHead title={t.manage} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.challenges.map((c) => <CheckItem key={c}>{c}</CheckItem>)}
        </ul>
      </Section>
      <Section alt>
        <SectionHead title={t.relevant} />
        <PillLinks links={data.relevantFeatures} lang={lang} />
      </Section>
    </>
  );
}
