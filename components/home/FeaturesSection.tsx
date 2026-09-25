import { BarChart3, ClipboardCheck, DollarSign, Package, Truck, Wrench } from 'lucide-react';
import { Section, SectionHead } from '../Section';
import { IconCard } from '../ui/IconCard';
import { lhref, type Lang } from '@/lib/i18n';

const FEATURES = [
  { icon: Truck, tone: 'green' as const, href: '/features/fleet-management',
    en: ['Fleet Management', 'Track every vehicle, assign drivers, and keep documents and status in one place.'],
    ar: ['إدارة الأسطول', 'تتبع كل مركبة، وعيّن السائقين، واحتفظ بالمستندات والحالة في مكان واحد.'] },
  { icon: Wrench, tone: 'amber' as const, href: '/features/fleet-maintenance',
    en: ['Maintenance Management', 'Preventive maintenance reminders by kilometres driven or by date, with tasks and work orders.'],
    ar: ['إدارة الصيانة', 'تنبيهات صيانة وقائية حسب الكيلومترات المقطوعة أو التاريخ، مع المهام وأوامر الشغل.'] },
  { icon: DollarSign, tone: 'teal' as const, href: '/features/expense-management',
    en: ['Expense Management', 'Fuel, repairs, parts, insurance and other costs — recorded against the vehicle or asset.'],
    ar: ['إدارة المصروفات', 'الوقود والإصلاحات وقطع الغيار والتأمين وباقي التكاليف — مسجلة على المركبة أو الأصل.'] },
  { icon: ClipboardCheck, tone: 'teal' as const, href: '/features/inspection-management',
    en: ['Inspections', 'Checklist-based inspections that turn failed checks into issues your team can follow up.'],
    ar: ['الفحوصات', 'فحوصات بقوائم تحقق تحوّل البنود غير المطابقة إلى أعطال يتابعها فريقك.'] },
  { icon: Package, tone: 'teal' as const, href: '/features/asset-management',
    en: ['Assets & Spare Parts', 'Equipment, tools and spare parts tracked through their lifecycle, including depreciation.'],
    ar: ['الأصول وقطع الغيار', 'المعدات والأدوات وقطع الغيار عبر دورة حياتها، بما في ذلك الإهلاك.'] },
  { icon: BarChart3, tone: 'navy' as const, href: '/features/reports-analytics',
    en: ['Reports & Analytics', 'Turn operational data into decisions your team can act on today.'],
    ar: ['التقارير والتحليلات', 'حوّل بيانات التشغيل إلى قرارات يستطيع فريقك تنفيذها اليوم.'] },
];

const T = {
  en: { eyebrow: 'Core Features', title: 'Everything your operations team needs', desc: 'One platform for the day-to-day work of running vehicles, equipment, and the teams behind them.' },
  ar: { eyebrow: 'المميزات الأساسية', title: 'كل ما يحتاجه فريق التشغيل', desc: 'منصة واحدة للعمل اليومي في تشغيل المركبات والمعدات والفرق التي تديرها.' },
};

export function FeaturesSection({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <Section id="features" alt>
      <SectionHead eyebrow={t.eyebrow} title={t.title} description={t.desc} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => <IconCard key={f.href} icon={f.icon} tone={f.tone} title={f[lang][0]} desc={f[lang][1]} href={lhref(lang, f.href)} lang={lang} />)}
      </div>
    </Section>
  );
}
