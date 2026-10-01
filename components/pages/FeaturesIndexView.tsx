import Link from 'next/link';
import { PageBreadcrumbs } from '@/components/seo/PageBreadcrumbs';
import { Brain, ChevronRight, ClipboardCheck, DollarSign, Globe, Shield, TrendingDown, Truck, Wrench } from 'lucide-react';
import { AppFeatureCard, CenteredHead, CtaBand, DeepDiveCard, PageHero } from '@/components/ui/AppSections';
import { primaryCta } from '@/lib/cta';
import { lhref, type Lang } from '@/lib/i18n';
import { SHOW_STATS, STATS } from '@/lib/site-stats';
import { gated, type Capability } from '@/lib/capabilities';
import { seoPagesOfType, isLive } from '@/content/seo';

const CORE: { icon: typeof Truck; href: string; en: string[]; ar: string[]; requires?: Capability }[] = [
  { icon: Truck, href: '/fleet-management-software',
    en: ['Asset & Fleet Management', 'Register and manage every vehicle, driver and service record in one central platform.'],
    ar: ['إدارة الأصول والأسطول', 'سجّل وأدر كل مركبة وسائق وسجل صيانة في منصة مركزية واحدة.'] },
  { icon: Wrench, href: '/fleet-maintenance-software',
    en: ['Maintenance Management', 'Schedule preventive maintenance by kilometre and keep the full service history of every vehicle.'],
    ar: ['إدارة الصيانة', 'جدول الصيانة الوقائية حسب الكيلومترات واحتفظ بسجل الصيانة الكامل لكل مركبة.'] },
  { icon: DollarSign, href: '/features/expense-management',
    en: ['Expense Tracking', 'Record repairs, spare parts, insurance and other costs per vehicle and follow cost trends.'],
    ar: ['تتبع المصروفات', 'سجّل الإصلاحات وقطع الغيار والتأمين وباقي التكاليف لكل مركبة وتابع اتجاه التكاليف.'] },
  { icon: ClipboardCheck, href: '/features/inspection-management',
    en: ['Inspections & Safety Checks', 'Checklist inspections with pass and fail results recorded on each vehicle’s history.'],
    ar: ['الفحوصات وفحص السلامة', 'فحوصات بقوائم محددة تُسجَّل نتائجها في سجل كل مركبة.'] },
  { icon: TrendingDown, href: '/features/asset-management',
    en: ['Depreciation & Financials', 'Depreciation and book value over each vehicle’s life, for replacement planning.'],
    ar: ['الإهلاك والبيانات المالية', 'الإهلاك والقيمة الدفترية على مدى عمر كل مركبة للتخطيط للاستبدال.'] },
  { icon: Brain, href: '/features/reports-analytics', requires: 'ai' as Capability,
    en: ['AI & Automation', 'Smart cost predictions, anomaly detection, and intelligent reminders powered by AI.'],
    ar: ['الذكاء الاصطناعي والأتمتة', 'توقعات ذكية للتكاليف، واكتشاف القيم الشاذة، وتذكيرات ذكية مدعومة بالذكاء الاصطناعي.'] },
];

type Point = { en: string; ar: string; requires?: Capability };
const DEEP_DIVE: { icon: typeof Truck; requires?: Capability; en: { title: string; desc: string }; ar: { title: string; desc: string }; points: Point[] }[] = [
  { icon: Truck,
    en: { title: 'Fleet Management', desc: 'One record per vehicle with its driver, odometer, status and full history.' },
    ar: { title: 'إدارة الأسطول', desc: 'سجل واحد لكل مركبة مع سائقها وعدادها وحالتها وسجلها الكامل.' },
    points: [
      { en: 'Vehicle records with odometer and status', ar: 'سجلات المركبات مع العداد والحالة' },
      { en: 'Driver assignment', ar: 'تعيين السائقين' },
      { en: 'Kilometres left until the next service', ar: 'الكيلومترات المتبقية حتى الصيانة القادمة' },
      { en: 'Service and inspection history per vehicle', ar: 'سجل الصيانة والفحص لكل مركبة' },
      { en: 'Real-time GPS tracking', ar: 'تتبع GPS لحظي', requires: 'gps' },
      { en: 'Route optimization', ar: 'تحسين المسارات', requires: 'routeOptimization' },
      { en: 'Fuel consumption monitoring', ar: 'مراقبة استهلاك الوقود', requires: 'fuelModule' },
    ] },
  { icon: Wrench,
    en: { title: 'Maintenance Management', desc: 'Prevent breakdowns with maintenance planned from the kilometres each vehicle drives.' },
    ar: { title: 'إدارة الصيانة', desc: 'امنع الأعطال بصيانة مخططة حسب الكيلومترات التي تقطعها كل مركبة.' },
    points: [
      { en: 'Km-based preventive maintenance', ar: 'صيانة وقائية حسب الكيلومترات' },
      { en: 'Services due soon and overdue', ar: 'الصيانة المستحقة قريبًا والمتأخرة' },
      { en: 'Spare parts from purchase to installation', ar: 'قطع الغيار من الشراء حتى التركيب' },
      { en: 'Maintenance history logs', ar: 'سجلات تاريخ الصيانة' },
      { en: 'Work order management', ar: 'إدارة أوامر العمل', requires: 'workOrders' },
    ] },
  { icon: DollarSign,
    en: { title: 'Cost Tracking', desc: 'See what each vehicle really costs across maintenance, parts, insurance and other expenses.' },
    ar: { title: 'تتبع التكاليف', desc: 'اعرف التكلفة الحقيقية لكل مركبة من الصيانة وقطع الغيار والتأمين وباقي المصروفات.' },
    points: [
      { en: 'Expense categories', ar: 'تصنيف المصروفات' },
      { en: 'Cost per vehicle', ar: 'التكلفة لكل مركبة' },
      { en: 'Depreciation and book value', ar: 'الإهلاك والقيمة الدفترية' },
      { en: 'Cost trend dashboards', ar: 'لوحات اتجاه التكاليف' },
      { en: 'Budget tracking', ar: 'متابعة الميزانية', requires: 'budgets' },
    ] },
  { icon: Shield,
    en: { title: 'Inspections & Safety', desc: 'Digital checklists that record the condition of every vehicle and keep failed items visible.' },
    ar: { title: 'الفحوصات والسلامة', desc: 'قوائم فحص رقمية تسجّل حالة كل مركبة وتُبقي البنود غير المطابقة ظاهرة.' },
    points: [
      { en: 'Configurable inspection checklists', ar: 'قوائم فحص قابلة للتخصيص' },
      { en: 'Pass and fail results per item', ar: 'نتيجة مطابق وغير مطابق لكل بند' },
      { en: 'Pre-trip and periodic inspections', ar: 'فحص ما قبل الرحلة والفحص الدوري' },
      { en: 'Inspection history per vehicle', ar: 'سجل الفحوصات لكل مركبة' },
      { en: 'Photo evidence for failed items', ar: 'صور للبنود غير المطابقة', requires: 'inspectionPhotos' },
    ] },
  { icon: Brain, requires: 'ai',
    en: { title: 'AI-Powered Insights', desc: 'Leverage artificial intelligence to predict costs, detect anomalies, and optimize operations.' },
    ar: { title: 'رؤى مدعومة بالذكاء الاصطناعي', desc: 'استفد من الذكاء الاصطناعي في توقع التكاليف واكتشاف القيم الشاذة وتحسين التشغيل.' },
    points: [
      { en: 'Predictive maintenance', ar: 'صيانة تنبؤية' },
      { en: 'Cost forecasting', ar: 'توقع التكاليف' },
      { en: 'Anomaly detection', ar: 'اكتشاف القيم الشاذة' },
    ] },
  { icon: Globe, requires: 'whiteLabel',
    en: { title: 'Multi-Tenant Platform', desc: 'Built for enterprises with multi-location support, white-labeling, and custom domains.' },
    ar: { title: 'منصة متعددة المستأجرين', desc: 'مصممة للمؤسسات مع دعم المواقع المتعددة والعلامة البيضاء والنطاقات المخصصة.' },
    points: [
      { en: 'White-label options', ar: 'خيارات العلامة البيضاء' },
      { en: 'Custom domains', ar: 'نطاقات مخصصة' },
      { en: 'SSO integration', ar: 'تكامل تسجيل الدخول الموحد (SSO)', requires: 'sso' },
    ] },
];

// Feature guides are generated from the live feature pages (gated ones are hidden).
const guides = () => seoPagesOfType('feature').filter(isLive);

const T = {
  en: {
    hero: { badge: 'Platform Features', title: 'Everything You Need for', accent: 'Asset Excellence', subtitle: 'Axpense gives your team the tools to manage every vehicle, from registration and daily use to maintenance, costs and replacement.' },
    core: { badge: 'Powerful Features', title: 'Everything You Need to', accent: 'Manage Assets', subtitle: 'From vehicle registration to km-based maintenance, inspections and cost reports, Axpense covers the daily work of running a fleet.' },
    deep: { title: 'Deep Dive into', accent: 'Features', subtitle: 'A closer look at what each part of Axpense does for your fleet team.' },
    guides: 'Explore feature guides',
    cta: { title: 'Ready to Transform Your', accent: 'Asset Management?', subtitle: 'Book a demo and see how Axpense can streamline your asset operations from day one.', sales: 'Talk to Sales', checks: ['Start free', 'No credit card required', 'Cancel anytime'] },
  },
  ar: {
    hero: { badge: 'مميزات المنصة', title: 'كل ما تحتاجه من أجل', accent: 'إدارة أصول متميزة', subtitle: 'يمنح أكسبنس فريقك الأدوات لإدارة كل مركبة، من التسجيل والاستخدام اليومي إلى الصيانة والتكاليف والاستبدال.' },
    core: { badge: 'مميزات قوية', title: 'كل ما تحتاجه', accent: 'لإدارة الأصول', subtitle: 'من تسجيل المركبات إلى الصيانة حسب الكيلومترات والفحوصات وتقارير التكاليف، يغطي أكسبنس العمل اليومي لإدارة الأسطول.' },
    deep: { title: 'تعمّق في', accent: 'المميزات', subtitle: 'نظرة أقرب على ما يقدمه كل جزء من أكسبنس لفريق الأسطول.' },
    guides: 'استكشف أدلة المميزات',
    cta: { title: 'هل أنت مستعد لتطوير', accent: 'إدارة أصولك؟', subtitle: 'احجز عرضًا تجريبيًا وشاهد كيف يبسّط أكسبنس تشغيل أصولك من اليوم الأول.', sales: 'تحدث مع المبيعات', checks: ['ابدأ مجانًا', 'بدون بطاقة ائتمان', 'إلغاء في أي وقت'] },
  },
};

export function FeaturesIndexView({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <>
      <PageBreadcrumbs lang={lang} label={lang === 'ar' ? 'المميزات' : 'Features'} path="/features" />
      <PageHero {...t.hero} />

      <section id="features" className="relative overflow-hidden bg-background py-24">
        <div aria-hidden="true" className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-wrap px-5 sm:px-7">
          <CenteredHead {...t.core} />
          <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gated(CORE).map((f, i) => <AppFeatureCard key={f.href} icon={f.icon} title={f[lang][0]} desc={f[lang][1]} href={lhref(lang, f.href)} index={i} />)}
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
            {gated(DEEP_DIVE).map((d) => <DeepDiveCard key={d.en.title} icon={d.icon} {...d[lang]} points={gated(d.points).map((p) => p[lang])} />)}
          </div>

          <div className="mt-16">
            <h2 className="mb-5 text-center text-lg font-semibold text-foreground">{t.guides}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {guides().map((g) => (
                <Link key={g.path} href={lhref(lang, g.path)} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-sidebar-accent hover:text-primary">
                  {g.navLabel[lang]}<ChevronRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
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
