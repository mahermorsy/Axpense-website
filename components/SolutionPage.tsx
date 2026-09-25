import { Button } from './Button';
import { Section, SectionHead } from './Section';
import { CheckItem } from './ui/CheckItem';
import { primaryCta } from '@/lib/cta';
import type { Lang } from '@/lib/i18n';

export type SolutionPageData = {
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  outcomes: string[];
};

const T = {
  en: { badge: 'Solutions', changes: 'What changes for your team' },
  ar: { badge: 'الحلول', changes: 'ما الذي يتغير لفريقك' },
};

export function SolutionPage({ data, lang = 'en' }: { data: SolutionPageData; lang?: Lang }) {
  const t = T[lang];
  const cta = primaryCta(lang);
  return (
    <>
      <div className="border-b border-border bg-gradient-hero py-16">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <p className="badge-app mb-4">{t.badge}</p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-ink-900">{data.title}</h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-700">{data.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </div>
      </div>
      <Section>
        <SectionHead title={t.changes} />
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {data.outcomes.map((o) => <CheckItem key={o}>{o}</CheckItem>)}
        </ul>
      </Section>
    </>
  );
}
