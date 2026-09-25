import Link from 'next/link';
import { Brain, ChevronRight, ClipboardCheck, DollarSign, Globe, Shield, TrendingDown, Truck, Wrench } from 'lucide-react';
import { AppFeatureCard, CenteredHead, CtaBand, DeepDiveCard, PageHero } from '@/components/ui/AppSections';
import { primaryCta } from '@/lib/cta';
import { lhref, type Lang } from '@/lib/i18n';
import { SHOW_STATS, STATS } from '@/lib/site-stats';

const CORE = [
  { icon: Truck, href: '/features/fleet-management',
    en: ['Asset & Fleet Management', 'Register, track, and manage all your assets, vehicles, and equipment in one centralized platform.'],
    ar: ['إدارة الأصول والأسطول', 'سجّل وتابع وأدر كل أصولك ومركباتك ومعداتك في منصة مركزية واحدة.'] },
  { icon: Wrench, href: '/features/fleet-maintenance',
    en: ['Maintenance Management', 'Schedule preventive maintenance, create work orders, and track repair history with ease.'],
    ar: ['إدارة الصيانة', 'جدول الصيانة الوقائية، وأنشئ أوامر الشغل، وتابع سجل الإصلاحات بسهولة.'] },
  { icon: DollarSign, href: '/features/expense-management',
    en: ['Expense Tracking', 'Monitor fuel costs, operating expenses, and cost trends with detailed analytics.'],
    ar: ['تتبع المصروفات', 'راقب تكاليف الوقود ومصروفات التشغيل واتجاهات التكاليف بتحليلات تفصيلية.'] },
  { icon: ClipboardCheck, href: '/features/inspection-management',
    en: ['Inspections & Compliance', 'Digital inspection forms, safety checks, and compliance documentation all in one place.'],
    ar: ['الفحوصات والالتزام', 'استمارات فحص رقمية وفحوصات سلامة وتوثيق للالتزام في مكان واحد.'] },
  { icon: TrendingDown, href: '/features/asset-management',
    en: ['Depreciation & Financials', 'Automated depreciation calculations, real-time book values, and financial reporting.'],
    ar: ['الإهلاك والبيانات المالية', 'احتساب تلقائي للإهلاك، وقيم دفترية لحظية، وتقارير مالية.'] },
  { icon: Brain, href: '/features/reports-analytics',
    en: ['AI & Automation', 'Smart cost predictions, anomaly detection, and intelligent reminders powered by AI.'],
    ar: ['الذكاء الاصطناعي والأتمتة', 'توقعات ذكية للتكاليف، واكتشاف القيم الشاذة، وتذكيرات ذكية مدعومة بالذكاء الاصطناعي.'] },
];

const DEEP_DIVE = [
  { icon: Truck,
    en: { title: 'Fleet Management', desc: 'Complete visibility into your entire fleet with real-time tracking, fuel management, and driver assignments.', points: ['Real-time GPS tracking', 'Fuel consumption monitoring', 'Driver performance analytics', 'Route optimization', 'Vehicle health monitoring'] },
    ar: { title: 'إدارة الأسطول', desc: 'رؤية كاملة لأسطولك بالكامل مع تتبع لحظي وإدارة للوقود وتعيين للسائقين.', points: ['تتبع GPS لحظي', 'مراقبة استهلاك الوقود', 'تحليلات أداء السائقين', 'تحسين المسارات', 'مراقبة حالة المركبات'] } },
  { icon: Wrench,
    en: { title: 'Maintenance Management', desc: 'Prevent breakdowns and extend asset life with proactive maintenance scheduling and tracking.', points: ['Preventive maintenance scheduling', 'Work order management', 'Parts inventory tracking', 'Vendor management', 'Maintenance history logs'] },
    ar: { title: 'إدارة الصيانة', desc: 'امنع الأعطال وأطِل عمر الأصول بجدولة ومتابعة استباقية للصيانة.', points: ['جدولة الصيانة الوقائية', 'إدارة أوامر الشغل', 'تتبع مخزون قطع الغيار', 'إدارة الموردين', 'سجلات تاريخ الصيانة'] } },
  { icon: DollarSign,
    en: { title: 'Cost Tracking', desc: 'Get complete visibility into your total cost of ownership with detailed expense tracking.', points: ['Expense categorization', 'Cost per asset analytics', 'Budget tracking', 'Invoice management', 'Cost trend analysis'] },
    ar: { title: 'تتبع التكاليف', desc: 'رؤية كاملة لإجمالي تكلفة الملكية مع تتبع تفصيلي للمصروفات.', points: ['تصنيف المصروفات', 'تحليل التكلفة لكل أصل', 'متابعة الميزانية', 'إدارة الفواتير', 'تحليل اتجاه التكاليف'] } },
  { icon: Shield,
    en: { title: 'Compliance & Safety', desc: 'Stay compliant with regulations and ensure safety with digital inspection forms and documentation.', points: ['Digital inspection forms', 'Compliance document management', 'Safety checklists', 'Audit trails', 'Certification tracking'] },
    ar: { title: 'الالتزام والسلامة', desc: 'التزم باللوائح واضمن السلامة باستمارات فحص رقمية وتوثيق منظم.', points: ['استمارات فحص رقمية', 'إدارة مستندات الالتزام', 'قوائم فحص السلامة', 'سجلات التدقيق', 'متابعة الشهادات'] } },
  { icon: Brain,
    en: { title: 'AI-Powered Insights', desc: 'Leverage artificial intelligence to predict costs, detect anomalies, and optimize operations.', points: ['Predictive maintenance', 'Cost forecasting', 'Anomaly detection', 'Smart recommendations', 'Automated alerts'] },
    ar: { title: 'رؤى مدعومة بالذكاء الاصطناعي', desc: 'استفد من الذكاء الاصطناعي في توقع التكاليف واكتشاف القيم الشاذة وتحسين التشغيل.', points: ['صيانة تنبؤية', 'توقع التكاليف', 'اكتشاف القيم الشاذة', 'توصيات ذكية', 'تنبيهات تلقائية'] } },
  { icon: Globe,
    en: { title: 'Multi-Tenant Platform', desc: 'Built for enterprises with multi-location support, white-labeling, and custom domains.', points: ['Multi-location support', 'White-label options', 'Custom domains', 'Tenant isolation', 'SSO integration'] },
    ar: { title: 'منصة متعددة المستأجرين', desc: 'مصممة للمؤسسات مع دعم المواقع المتعددة والعلامة البيضاء والنطاقات المخصصة.', points: ['دعم المواقع المتعددة', 'خيارات العلامة البيضاء', 'نطاقات مخصصة', 'عزل بيانات كل مستأجر', 'تكامل تسجيل الدخول الموحد (SSO)'] } },
];

const GUIDES = [
  { href: '/features/fleet-management', en: 'Fleet Management', ar: 'إدارة الأسطول' },
  { href: '/features/vehicle-management', en: 'Vehicle Management', ar: 'إدارة المركبات' },
  { href: '/features/fleet-maintenance', en: 'Fleet Maintenance', ar: 'صيانة الأسطول' },
  { href: '/features/preventive-maintenance', en: 'Preventive Maintenance', ar: 'الصيانة الوقائية' },
  { href: '/features/work-orders', en: 'Work Orders', ar: 'أوامر الشغل' },
  { href: '/features/inspection-management', en: 'Inspections', ar: 'الفحوصات' },
  { href: '/features/expense-management', en: 'Expense Management', ar: 'إدارة المصروفات' },
  { href: '/features/fuel-management', en: 'Fuel Management', ar: 'إدارة الوقود' },
  { href: '/features/asset-management', en: 'Asset Management', ar: 'إدارة الأصول' },
  { href: '/features/reports-analytics', en: 'Reports & Analytics', ar: 'التقارير والتحليلات' },
];

const T = {
  en: {
    hero: { badge: 'Platform Features', title: 'Everything You Need for', accent: 'Asset Excellence', subtitle: 'Axpense provides a comprehensive suite of tools to manage your assets, fleet, and equipment from purchase to retirement.' },
    core: { badge: 'Powerful Features', title: 'Everything You Need to', accent: 'Manage Assets', subtitle: 'From asset registration to AI-powered insights, Axpense provides all the tools your organization needs for comprehensive asset and fleet management.' },
    deep: { title: 'Deep Dive into', accent: 'Features', subtitle: 'Explore the capabilities that make Axpense the leading asset management platform.' },
    guides: 'Explore feature guides',
    cta: { title: 'Ready to Transform Your', accent: 'Asset Management?', subtitle: 'Book a demo and see how Axpense can streamline your asset operations from day one.', sales: 'Talk to Sales', checks: ['14-day free trial', 'No credit card required', 'Cancel anytime'] },
  },
  ar: {
    hero: { badge: 'مميزات المنصة', title: 'كل ما تحتاجه من أجل', accent: 'إدارة أصول متميزة', subtitle: 'يوفر أكسبنس مجموعة متكاملة من الأدوات لإدارة أصولك وأسطولك ومعداتك من الشراء حتى الإخراج من الخدمة.' },
    core: { badge: 'مميزات قوية', title: 'كل ما تحتاجه', accent: 'لإدارة الأصول', subtitle: 'من تسجيل الأصول إلى الرؤى المدعومة بالذكاء الاصطناعي، يوفر أكسبنس كل الأدوات التي تحتاجها مؤسستك لإدارة شاملة للأصول والأسطول.' },
    deep: { title: 'تعمّق في', accent: 'المميزات', subtitle: 'استكشف الإمكانيات التي تجعل أكسبنس منصة رائدة في إدارة الأصول.' },
    guides: 'استكشف أدلة المميزات',
    cta: { title: 'هل أنت مستعد لتطوير', accent: 'إدارة أصولك؟', subtitle: 'احجز عرضًا تجريبيًا وشاهد كيف يبسّط أكسبنس تشغيل أصولك من اليوم الأول.', sales: 'تحدث مع المبيعات', checks: ['تجربة مجانية 14 يومًا', 'بدون بطاقة ائتمان', 'إلغاء في أي وقت'] },
  },
};

export function FeaturesIndexView({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <>
      <PageHero {...t.hero} />

      <section id="features" className="relative overflow-hidden bg-background py-24">
        <div aria-hidden="true" className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-wrap px-5 sm:px-7">
          <CenteredHead {...t.core} />
          <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE.map((f, i) => <AppFeatureCard key={f.href} icon={f.icon} title={f[lang][0]} desc={f[lang][1]} href={lhref(lang, f.href)} index={i} />)}
          </div>
          {SHOW_STATS && (
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-gradient-card p-6 text-center">
                  <div className="mb-2 text-3xl font-bold sm:text-4xl" dir="ltr"><span className="text-gradient">{s.value}</span></div>
                  <p className="text-sm text-muted-foreground">{lang === 'ar' ? s.labelAr : s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <CenteredHead {...t.deep} />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {DEEP_DIVE.map((d) => <DeepDiveCard key={d.en.title} icon={d.icon} {...d[lang]} />)}
          </div>

          <div className="mt-16">
            <h2 className="mb-5 text-center text-lg font-semibold text-foreground">{t.guides}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {GUIDES.map((g) => (
                <Link key={g.href} href={lhref(lang, g.href)} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-sidebar-accent hover:text-primary">
                  {g[lang]}<ChevronRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={t.cta.title}
        accent={t.cta.accent}
        subtitle={t.cta.subtitle}
        primary={primaryCta(lang)}
        secondary={{ label: t.cta.sales, href: lhref(lang, '/contact') }}
        checks={t.cta.checks}
      />
    </>
  );
}
