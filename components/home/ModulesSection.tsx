import { AlertCircle, BarChart3, Boxes, ClipboardCheck, ClipboardList, DollarSign, History, ListChecks, Package, TrendingDown, Truck, Users, UserCog, Wrench } from 'lucide-react';
import { Section, SectionHead } from '../Section';
import type { Lang } from '@/lib/i18n';

// The same modules, in the same order, as the Axpense app sidebar.
const MODULES = [
  { icon: Boxes, en: 'Assets', ar: 'الأصول' },
  { icon: Truck, en: 'Fleet', ar: 'الأسطول' },
  { icon: AlertCircle, en: 'Issues', ar: 'الأعطال' },
  { icon: Users, en: 'Drivers', ar: 'السائقون' },
  { icon: History, en: 'Timeline', ar: 'السجل الزمني' },
  { icon: ClipboardList, en: 'Work Orders', ar: 'أوامر الشغل' },
  { icon: ListChecks, en: 'Tasks', ar: 'المهام' },
  { icon: Package, en: 'Spare Parts', ar: 'قطع الغيار' },
  { icon: Wrench, en: 'Maintenance', ar: 'الصيانة' },
  { icon: ClipboardCheck, en: 'Inspections', ar: 'الفحوصات' },
  { icon: DollarSign, en: 'Expenses', ar: 'المصروفات' },
  { icon: TrendingDown, en: 'Depreciation', ar: 'الإهلاك' },
  { icon: BarChart3, en: 'Reports', ar: 'التقارير' },
  { icon: UserCog, en: 'Users & Roles', ar: 'المستخدمون والصلاحيات' },
];

const T = {
  en: { eyebrow: 'Inside the platform', title: 'Every module your operations team works in', desc: 'The same modules you’ll see in the sidebar once you log in.' },
  ar: { eyebrow: 'داخل المنصة', title: 'كل الوحدات التي يعمل عليها فريق التشغيل', desc: 'نفس الوحدات التي ستراها في القائمة الجانبية بعد تسجيل الدخول.' },
};

export function ModulesSection({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <Section>
      <SectionHead eyebrow={t.eyebrow} title={t.title} description={t.desc} />
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {MODULES.map(({ icon: Icon, ...label }) => (
          <li key={label.en} className="card-app flex flex-col items-center gap-3 px-3 py-5 text-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
            <span className="text-sm font-medium text-foreground">{label[lang]}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
