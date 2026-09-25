import { ClipboardCheck, DollarSign, Truck, Wrench } from 'lucide-react';
import { Section, SectionHead } from '../Section';
import { IconCard } from '../ui/IconCard';
import { lhref, type Lang } from '@/lib/i18n';

const USE_CASES = [
  { icon: Truck, tone: 'green' as const, href: '/features/fleet-management',
    en: ['Daily fleet operations', 'Track vehicles, drivers, assignments and status from one operational view.'],
    ar: ['تشغيل الأسطول اليومي', 'تابع المركبات والسائقين والتعيينات والحالة من شاشة تشغيل واحدة.'] },
  { icon: Wrench, tone: 'amber' as const, href: '/features/preventive-maintenance',
    en: ['Maintenance planning', 'Move from missed service dates to km-based reminders, planned maintenance and work orders.'],
    ar: ['تخطيط الصيانة', 'انتقل من مواعيد صيانة فائتة إلى تنبيهات بالكيلومترات وصيانة مخططة وأوامر شغل.'] },
  { icon: DollarSign, tone: 'teal' as const, href: '/features/expense-management',
    en: ['Fuel and expense control', 'Record fuel and operating expenses and connect costs to vehicles.'],
    ar: ['التحكم في الوقود والمصروفات', 'سجّل الوقود ومصروفات التشغيل واربط التكاليف بالمركبات.'] },
  { icon: ClipboardCheck, tone: 'teal' as const, href: '/features/inspection-management',
    en: ['Vehicle inspections', 'Capture inspection results and issues as part of the operational record.'],
    ar: ['فحص المركبات', 'سجّل نتائج الفحص والأعطال كجزء من السجل التشغيلي.'] },
];

const T = {
  en: { eyebrow: 'Use Cases', title: 'Built around the work your team does every day' },
  ar: { eyebrow: 'حالات الاستخدام', title: 'مبني حول العمل الذي يقوم به فريقك كل يوم' },
};

export function UseCasesSection({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <Section>
      <SectionHead eyebrow={t.eyebrow} title={t.title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {USE_CASES.map((u) => <IconCard key={u.href} icon={u.icon} tone={u.tone} title={u[lang][0]} desc={u[lang][1]} href={lhref(lang, u.href)} lang={lang} />)}
      </div>
    </Section>
  );
}
