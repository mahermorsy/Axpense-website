import { Section, SectionHead } from '../Section';
import type { Lang } from '@/lib/i18n';

const T = {
  en: {
    eyebrow: 'How It Works', title: 'Set up once, run every day',
    steps: [
      ['Add your vehicles and assets', 'Bring your fleet, equipment, and asset records into Axpense in one setup pass.'],
      ['Set up maintenance and inspections', 'Set service intervals by kilometres or date, and build digital inspection checklists.'],
      ['Track expenses as they happen', 'Fuel, repairs, spare parts and operating costs are logged against each vehicle as they happen.'],
      ['Act on the reports', 'See utilization, costs, and maintenance status without building a spreadsheet.'],
    ],
  },
  ar: {
    eyebrow: 'كيف يعمل', title: 'جهّزه مرة واحدة، وشغّله كل يوم',
    steps: [
      ['أضف مركباتك وأصولك', 'أدخل سجلات الأسطول والمعدات والأصول إلى أكسبنس في خطوة إعداد واحدة.'],
      ['جهّز الصيانة والفحوصات', 'حدد فترات الصيانة بالكيلومترات أو بالتاريخ، وأنشئ قوائم فحص رقمية.'],
      ['تابع المصروفات لحظة حدوثها', 'الوقود والإصلاحات وقطع الغيار وتكاليف التشغيل تُسجَّل على كل مركبة فور حدوثها.'],
      ['تصرّف بناءً على التقارير', 'اطّلع على الاستغلال والتكاليف وحالة الصيانة دون إعداد جدول إكسل.'],
    ],
  },
};

export function HowItWorks({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <Section>
      <SectionHead eyebrow={t.eyebrow} title={t.title} center />
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map(([title, desc], i) => (
          <li key={title} className="card-app p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">{i + 1}</div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
