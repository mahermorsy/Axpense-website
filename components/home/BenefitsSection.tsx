import { Gauge, LineChart, ShieldCheck, TrendingDown } from 'lucide-react';
import { Section, SectionHead } from '../Section';
import { IconCard } from '../ui/IconCard';
import type { Lang } from '@/lib/i18n';

const BENEFITS = [
  { icon: TrendingDown, tone: 'teal' as const,
    en: ['Control operating costs', 'Bring fuel, maintenance and other operating expenses into the same view as the vehicle or asset they belong to.'],
    ar: ['تحكّم في تكاليف التشغيل', 'اجمع الوقود والصيانة وباقي مصروفات التشغيل في نفس العرض مع المركبة أو الأصل الذي تخصه.'] },
  { icon: ShieldCheck, tone: 'green' as const,
    en: ['Reduce avoidable downtime', 'Service reminders triggered by kilometres driven, plus inspections and work orders, keep planned work ahead of breakdowns.'],
    ar: ['قلّل التوقفات التي يمكن تجنبها', 'تنبيهات صيانة حسب الكيلومترات المقطوعة، مع الفحوصات وأوامر الشغل، تُبقي العمل المخطط يسبق الأعطال.'] },
  { icon: Gauge, tone: 'amber' as const,
    en: ['Improve asset utilization', 'See vehicle and asset status, assignments and operational records without chasing separate files.'],
    ar: ['حسّن استغلال الأصول', 'اطّلع على حالة المركبات والأصول وتعييناتها وسجلاتها التشغيلية دون البحث في ملفات منفصلة.'] },
  { icon: LineChart, tone: 'navy' as const,
    en: ['Make faster operational decisions', 'Use reports and cost trends to understand what is happening across your fleet and assets.'],
    ar: ['اتخذ قرارات تشغيلية أسرع', 'استخدم التقارير واتجاهات التكاليف لفهم ما يحدث في أسطولك وأصولك.'] },
];

const T = {
  en: { eyebrow: 'Business Benefits', title: 'Turn operational data into control', desc: 'Axpense connects the records your operations team already needs to maintain with the costs and actions behind them.' },
  ar: { eyebrow: 'الفوائد للأعمال', title: 'حوّل بيانات التشغيل إلى سيطرة فعلية', desc: 'يربط أكسبنس السجلات التي يحتاج فريق التشغيل للاحتفاظ بها أصلًا بالتكاليف والإجراءات المرتبطة بها.' },
};

export function BenefitsSection({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <Section alt>
      <SectionHead eyebrow={t.eyebrow} title={t.title} description={t.desc} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {BENEFITS.map((b) => <IconCard key={b.en[0]} icon={b.icon} tone={b.tone} title={b[lang][0]} desc={b[lang][1]} lang={lang} />)}
      </div>
    </Section>
  );
}
