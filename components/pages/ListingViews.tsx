import { Section, SectionHead } from '@/components/Section';
import { IconCard } from '@/components/ui/IconCard';
import { ICONS } from '@/components/seo/icons';
import { RelatedLinks } from '@/components/seo/Related';
import { iconFor } from '@/lib/icons';
import { PageBreadcrumbs } from '@/components/seo/PageBreadcrumbs';
import { lhref, type Lang } from '@/lib/i18n';
import { seoPagesOfType, isLive } from '@/content/seo';
import { TOOLS } from '@/content/tools';
import type { IconName, SeoPage } from '@/lib/seo-page';

const ICON: Record<string, IconName> = {
  '/fleet-management-software': 'truck',
  '/fleet-maintenance-software': 'wrench',
  '/fleet-cost-tracking': 'dollar',
  '/vehicle-inspection-software': 'clipboard',
  '/industries/logistics': 'truck',
  '/industries/distribution': 'boxes',
  '/industries/construction': 'hardhat',
  '/industries/oil-and-gas': 'flame',
  '/industries/manufacturing': 'factory',
  '/industries/field-services': 'wrench',
  '/resources/fleet-cost-calculator': 'calculator',
  '/resources/vehicle-inspection-checklist': 'clipboard',
  '/resources/preventive-maintenance-checklist': 'calendar',
};

function PageCards({ pages, lang, cols }: { pages: { path: string; title: string; desc: string }[]; lang: Lang; cols: string }) {
  return (
    <div className={`grid grid-cols-1 gap-6 ${cols}`}>
      {pages.map((p) => (
        <IconCard key={p.path} icon={ICONS[ICON[p.path] ?? 'check']} tone={ICON[p.path] === 'wrench' ? 'amber' : ICON[p.path] === 'truck' ? 'green' : 'teal'} title={p.title} desc={p.desc} href={lhref(lang, p.path)} lang={lang} meta="" />
      ))}
    </div>
  );
}

const card = (p: SeoPage, lang: Lang) => ({ path: p.path, title: p.navLabel[lang], desc: p.meta[lang].description });

/** /industries hub — the six indexable industry pages. */
export function IndustriesIndexView({ lang }: { lang: Lang }) {
  const ar = lang === 'ar';
  const pages = seoPagesOfType('industry').filter(isLive).map((p) => card(p, lang));
  return (
    <>
    <PageBreadcrumbs lang={lang} label={ar ? 'القطاعات' : 'Industries'} path="/industries" />
    <Section>
      <SectionHead as="h1" eyebrow={ar ? 'القطاعات' : 'Industries'} title={ar ? 'إدارة الأسطول حسب طريقة عمل قطاعك' : 'Fleet management built for how your industry operates'} description={ar ? 'لكل قطاع مركباته وجداول صيانته وتكاليفه. اختر قطاعك لترى كيف يعمل أكسبنس معه.' : 'Every industry runs different vehicles, service schedules and costs. Pick yours to see how Axpense fits.'} />
      <PageCards pages={pages} lang={lang} cols="sm:grid-cols-2 lg:grid-cols-3" />
    </Section>
    </>
  );
}

/** /solutions hub — the four commercial pages first (SEO brief §8). */
export function SolutionsIndexView({ lang }: { lang: Lang }) {
  const ar = lang === 'ar';
  const commercial = seoPagesOfType('commercial').filter(isLive).map((p) => card(p, lang));
  const locations = seoPagesOfType('location').filter(isLive).map((p) => p.path);
  return (
    <>
      <PageBreadcrumbs lang={lang} label={ar ? 'الحلول' : 'Solutions'} path="/solutions" />
      <Section>
        <SectionHead
          as="h1"
          eyebrow={ar ? 'الحلول' : 'Solutions'}
          title={ar ? 'حلول إدارة الأسطول من أكسبنس' : 'Axpense fleet management solutions'}
          description={ar ? 'ابدأ بالمشكلة التي تكلّفك أكثر: الإدارة اليومية للأسطول، أو الصيانة الفائتة، أو التكاليف غير الواضحة، أو الفحوصات الورقية.' : 'Start with the problem that costs you most: day-to-day fleet control, missed services, unclear costs or paper inspections.'}
        />
        <PageCards pages={commercial} lang={lang} cols="sm:grid-cols-2" />
      </Section>
      <Section alt>
        <RelatedLinks title={ar ? 'إدارة الأسطول في أسواقنا' : 'Fleet management in our markets'} paths={locations} lang={lang} />
      </Section>
    </>
  );
}

/** /resources hub — free tools, then guides. */
export function ResourcesView({ lang }: { lang: Lang }) {
  const ar = lang === 'ar';
  const tools = TOOLS.map((t) => ({ path: t.path, title: t.navLabel[lang], desc: t.meta[lang].description }));
  return (
    <>
      <PageBreadcrumbs lang={lang} label={ar ? 'الموارد' : 'Resources'} path="/resources" />
      <Section>
        <SectionHead as="h1" eyebrow={ar ? 'الموارد' : 'Resources'} title={ar ? 'أدوات وأدلة مجانية لفرق الأسطول' : 'Free tools and guides for fleet teams'} description={ar ? 'احسب تكلفة الكيلومتر، واطبع قائمة الفحص، وخطط للصيانة الدورية — مجانًا ودون تسجيل.' : 'Work out your cost per km, print an inspection checklist and plan preventive maintenance — free, no sign-up.'} />
        <PageCards pages={tools} lang={lang} cols="sm:grid-cols-2 lg:grid-cols-3" />
      </Section>
      <Section alt>
        <RelatedLinks
          title={ar ? 'أدلة مفيدة' : 'Practical guides'}
          paths={['/blog/km-based-preventive-maintenance', '/blog/vehicle-cost-per-km', '/blog/fleet-total-cost-of-ownership', '/blog/daily-vehicle-inspection-checklist', '/blog/what-is-fleet-management-software', '/blog']}
          lang={lang}
        />
      </Section>
    </>
  );
}

export { iconFor };
