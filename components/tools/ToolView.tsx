import { Section } from '@/components/Section';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Md, plain } from '@/components/seo/Md';
import { SectionBlock } from '@/components/seo/SeoPageView';
import { FaqList, RelatedArticles, RelatedLinks } from '@/components/seo/Related';
import { CtaBand } from '@/components/ui/AppSections';
import { TRUST_AR, TRUST_EN } from '@/components/home/TrustLine';
import { gated } from '@/lib/capabilities';
import { primaryCta } from '@/lib/cta';
import { lhref, type Lang } from '@/lib/i18n';
import { breadcrumbSchema, faqSchema, toolSchema } from '@/lib/schema';
import type { ToolPage } from '@/lib/seo-page';
import { FleetCostCalculator } from './FleetCostCalculator';
import { InspectionChecklist } from './InspectionChecklist';
import { MaintenanceSchedule } from './MaintenanceSchedule';

const WIDGETS: Record<string, (p: { lang: Lang }) => JSX.Element> = {
  '/resources/fleet-cost-calculator': FleetCostCalculator,
  '/resources/vehicle-inspection-checklist': InspectionChecklist,
  '/resources/preventive-maintenance-checklist': MaintenanceSchedule,
};

const T = {
  en: { home: 'Home', resources: 'Resources', faq: 'Frequently asked questions', related: 'Related Axpense pages', articles: 'Related guides',
    cta: { title: 'Get these numbers from your', accent: 'real records', subtitle: 'Axpense keeps every vehicle’s service history, inspections and costs, so you don’t have to fill in a sheet each month.', pricing: 'See pricing' } },
  ar: { home: 'الرئيسية', resources: 'الموارد', faq: 'الأسئلة الشائعة', related: 'صفحات أكسبنس ذات الصلة', articles: 'أدلة ذات صلة',
    cta: { title: 'احصل على هذه الأرقام من', accent: 'سجلاتك الفعلية', subtitle: 'يحتفظ أكسبنس بسجل صيانة كل مركبة وفحوصاتها وتكاليفها، فلا تحتاج إلى ملء جدول كل شهر.', pricing: 'اطّلع على الأسعار' } },
};

export function ToolView({ tool, lang }: { tool: ToolPage; lang: Lang }) {
  const t = T[lang];
  const Widget = WIDGETS[tool.path];
  const faqs = gated(tool.faqs[lang]);
  const path = lhref(lang, tool.path);
  const crumbs = [
    { name: t.home, path: lhref(lang, '/') },
    { name: t.resources, path: lhref(lang, '/resources') },
    { name: tool.navLabel[lang], path },
  ];
  return (
    <>
      <JsonLd data={toolSchema({ name: tool.schemaName[lang], description: tool.meta[lang].description, path, lang })} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs.map((f) => ({ q: f.q, a: plain(f.a) })))} />}
      <Breadcrumbs lang={lang} items={[{ label: t.resources, href: lhref(lang, '/resources') }, { label: tool.navLabel[lang] }]} />

      <section className="bg-gradient-hero pb-12 pt-10">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <p className="badge-app mb-4">{tool.hero[lang].badge}</p>
          <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl text-balance">{tool.h1[lang]}</h1>
          <Md text={tool.hero[lang].intro} lang={lang} className="max-w-3xl text-lg text-ink-700" />
        </div>
      </section>

      <Section>{Widget && <Widget lang={lang} />}</Section>

      {gated(tool.sections[lang]).map((s, i) => <SectionBlock key={i} s={s} lang={lang} alt={i % 2 === 0} />)}

      <FaqList faqs={faqs} lang={lang} title={t.faq} />
      <Section alt>
        <RelatedLinks title={t.related} paths={tool.relatedPages} lang={lang} />
      </Section>
      <RelatedArticles slugs={tool.relatedArticles} lang={lang} title={t.articles} />
      <CtaBand title={t.cta.title} accent={t.cta.accent} subtitle={t.cta.subtitle} primary={primaryCta(lang)} secondary={{ label: t.cta.pricing, href: lhref(lang, '/pricing') }} checks={lang === 'ar' ? TRUST_AR : TRUST_EN} />
    </>
  );
}
