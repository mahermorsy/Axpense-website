import { Section, SectionHead } from '@/components/Section';
import { IconCard } from '@/components/ui/IconCard';
import { iconFor } from '@/lib/icons';
import { lhref, type Lang } from '@/lib/i18n';

type Item = { href: string; en: [string, string]; ar: [string, string] };

function Grid({ items, lang, cols }: { items: Item[]; lang: Lang; cols: string }) {
  return (
    <div className={`grid grid-cols-1 gap-6 ${cols}`}>
      {items.map((it) => <IconCard key={it.href} {...iconFor(it.href)} title={it[lang][0]} desc={it[lang][1]} href={lhref(lang, it.href)} lang={lang} />)}
    </div>
  );
}

const INDUSTRIES: Item[] = [
  { href: '/industries/transportation', en: ['Transportation', 'Manage vehicles, drivers, maintenance and operating costs.'], ar: ['النقل', 'أدر المركبات والسائقين والصيانة وتكاليف التشغيل.'] },
  { href: '/industries/logistics', en: ['Logistics & Transportation', 'Optimize fleet operations and reduce fuel costs.'], ar: ['اللوجستيات والنقل', 'حسّن تشغيل الأسطول وقلّل تكاليف الوقود.'] },
  { href: '/industries/construction', en: ['Construction', 'Track heavy equipment and tool inventory.'], ar: ['المقاولات والإنشاءات', 'تتبع المعدات الثقيلة ومخزون الأدوات.'] },
  { href: '/industries/manufacturing', en: ['Manufacturing', 'Monitor production equipment and reduce downtime.'], ar: ['التصنيع', 'راقب معدات الإنتاج وقلّل التوقفات.'] },
  { href: '/industries/real-estate', en: ['Real Estate', 'Manage service vehicles and facility assets.'], ar: ['العقارات', 'أدر مركبات الخدمة وأصول المرافق.'] },
  { href: '/industries/healthcare', en: ['Healthcare', 'Manage medical equipment and compliance.'], ar: ['الرعاية الصحية', 'أدر المعدات الطبية والالتزام.'] },
  { href: '/industries/travel-hospitality', en: ['Travel & Hospitality', 'Manage guest transport and vehicle costs.'], ar: ['السياحة والضيافة', 'أدر نقل الضيوف وتكاليف المركبات.'] },
  { href: '/industries/energy-utilities', en: ['Energy & Utilities', 'Manage service vehicles, equipment and maintenance.'], ar: ['الطاقة والمرافق', 'أدر مركبات الخدمة والمعدات والصيانة.'] },
];

export function IndustriesIndexView({ lang }: { lang: Lang }) {
  return (
    <Section>
      <SectionHead eyebrow={lang === 'ar' ? 'القطاعات' : 'Industries'} title={lang === 'ar' ? 'مصمم لطريقة عمل قطاعك' : 'Built for how your industry operates'} />
      <Grid items={INDUSTRIES} lang={lang} cols="sm:grid-cols-2 lg:grid-cols-3" />
    </Section>
  );
}

const SOLUTIONS: Item[] = [
  { href: '/solutions/fleet-cost-management', en: ['Fleet Cost Management', 'Get a clear, per-vehicle picture of fuel, repair, and operating costs.'], ar: ['إدارة تكاليف الأسطول', 'صورة واضحة لتكاليف الوقود والإصلاح والتشغيل لكل مركبة.'] },
  { href: '/solutions/fleet-maintenance-management', en: ['Fleet Maintenance Management', 'Move from reactive repairs to scheduled preventive maintenance.'], ar: ['إدارة صيانة الأسطول', 'انتقل من الإصلاح بعد العطل إلى صيانة وقائية مجدولة.'] },
  { href: '/solutions/asset-lifecycle-management', en: ['Asset Lifecycle Management', 'Track assets from acquisition through depreciation to disposal.'], ar: ['إدارة دورة حياة الأصول', 'تتبع الأصول من الاقتناء مرورًا بالإهلاك حتى التخلص منها.'] },
  { href: '/solutions/equipment-cost-management', en: ['Equipment Cost Management', 'Understand true equipment cost across sites and projects.'], ar: ['إدارة تكاليف المعدات', 'افهم التكلفة الحقيقية للمعدات عبر المواقع والمشروعات.'] },
];

export function SolutionsIndexView({ lang }: { lang: Lang }) {
  const ar = lang === 'ar';
  return (
    <Section>
      <SectionHead
        eyebrow={ar ? 'الحلول' : 'Solutions'}
        title={ar ? 'حل مشكلة تشغيلية محددة' : 'Solve a specific operational problem'}
        description={ar ? 'يجمع كل حل مميزات أكسبنس التي تحتاجها لإصلاح جزء واحد من تشغيلك.' : 'Each solution combines the Axpense features you need to fix one part of your operation.'}
      />
      <Grid items={SOLUTIONS} lang={lang} cols="sm:grid-cols-2" />
    </Section>
  );
}

const RESOURCES: Item[] = [
  { href: '/blog/what-is-fleet-management', en: ['Fleet Management Guide', 'What fleet management covers and why businesses outgrow spreadsheets for it.'], ar: ['دليل إدارة الأسطول', 'ما الذي تغطيه إدارة الأسطول، ولماذا تتجاوز الشركات جداول إكسل لأجلها (بالإنجليزية).'] },
  { href: '/blog/preventive-vs-reactive-maintenance', en: ['Maintenance Checklist', 'Preventive vs. reactive maintenance — and which one your fleet actually needs.'], ar: ['قائمة الصيانة', 'الصيانة الوقائية مقابل الصيانة بعد العطل — وأيهما يحتاجه أسطولك فعلًا (بالإنجليزية).'] },
];

export function ResourcesView({ lang }: { lang: Lang }) {
  const ar = lang === 'ar';
  return (
    <Section>
      <SectionHead eyebrow={ar ? 'الموارد' : 'Resources'} title={ar ? 'أدلة وأدوات' : 'Guides and tools'} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {RESOURCES.map((r) => <IconCard key={r.href} {...iconFor(r.href)} title={r[lang][0]} desc={r[lang][1]} href={lhref(lang, r.href)} lang={lang} />)}
        <IconCard
          {...iconFor('/resources/fleet-cost-calculator')}
          title={ar ? 'حاسبة تكلفة الأسطول' : 'Fleet Cost Calculator'}
          desc={ar ? 'قدّر التكلفة الشهرية لأسطولك من الوقود والصيانة والتأمين.' : 'Estimate your monthly fleet cost across fuel, maintenance, and insurance.'}
          href={lhref(lang, '/resources/fleet-cost-calculator')}
          meta={ar ? 'افتح الأداة' : 'Open tool'}
          lang={lang}
        />
      </div>
    </Section>
  );
}
