import Link from 'next/link';
import {
  Bell, BarChart3, CalendarClock, ClipboardCheck, ClipboardList, DollarSign, Fuel, Globe2, Headphones, Languages, Package, Rocket,
  ShieldCheck, Smartphone, Truck, UserCheck, Users, type LucideIcon,
} from 'lucide-react';
import { PricingCalculator } from './PricingCalculator';
import { PageBreadcrumbs } from '@/components/seo/PageBreadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { FaqItem } from '@/components/home/FAQSection';
import { CtaBand } from '@/components/ui/AppSections';
import { TRUST_AR, TRUST_EN } from '@/components/home/TrustLine';
import { faqSchema, softwareApplicationSchema } from '@/lib/schema';
import { isConfirmed, type Capability } from '@/lib/capabilities';
import { getCurrency, money, type PricingConfig } from '@/lib/pricing';
import { lhref, type Lang } from '@/lib/i18n';
import { primaryCta } from '@/lib/cta';
import { plain } from '@/components/seo/Md';

type Feature = { icon: LucideIcon; en: string; ar: string; href?: string; requires?: Capability; soon?: boolean };

// Everything is included in every subscription — no plan tiers to compare.
const FEATURES: Feature[] = [
  { icon: Truck, en: 'Vehicle Management', ar: 'إدارة المركبات', href: '/features/vehicle-management' },
  { icon: Fuel, en: 'Fuel Management', ar: 'إدارة الوقود', href: '/features/fuel-management', requires: 'fuelModule' },
  { icon: DollarSign, en: 'Expense Tracking', ar: 'تتبع المصروفات', href: '/features/expense-management' },
  { icon: CalendarClock, en: 'Preventive Maintenance', ar: 'الصيانة الوقائية', href: '/features/preventive-maintenance' },
  { icon: ClipboardList, en: 'Work Orders', ar: 'أوامر العمل', href: '/features/work-orders', requires: 'workOrders' },
  { icon: ClipboardCheck, en: 'Vehicle Inspections', ar: 'فحص المركبات', href: '/features/inspection-management' },
  { icon: Package, en: 'Parts Management', ar: 'إدارة قطع الغيار', href: '/features/spare-parts' },
  { icon: Users, en: 'Driver Management', ar: 'إدارة السائقين', href: '/features/drivers' },
  { icon: UserCheck, en: 'Assignments', ar: 'تعيين المركبات', href: '/features/drivers' },
  { icon: BarChart3, en: 'Dashboard & Reports', ar: 'لوحات المتابعة والتقارير', href: '/features/reports-analytics' },
  { icon: Bell, en: 'Alerts & Reminders', ar: 'التنبيهات والتذكيرات', href: '/features/preventive-maintenance', requires: 'alerts' },
  { icon: Smartphone, en: 'Mobile Access', ar: 'الوصول من الجوال', soon: true },
];

const T = {
  en: {
    crumb: 'Pricing', badge: 'Simple per-vehicle pricing',
    h1a: 'Fleet management software pricing,', h1b: 'per vehicle',
    sub: 'One price per vehicle, everything included. Choose how many vehicles you manage, pick monthly or annual billing and your currency, and see your exact price.',
    featTitle: 'One platform. Everything needed to manage your fleet.', featSub: 'Every subscription includes the full Axpense feature set — no plans to compare, no add-ons to unlock.', soon: 'Coming soon',
    menaTitle: 'Local prices for Egypt, the Gulf and the wider region', menaSub: 'Prices are set per market in each currency, not converted from a daily exchange rate, so your price doesn’t move when currencies do.',
    menaNote: 'Prices are shown per vehicle per month. Annual billing saves {p}%.',
    trustTitle: 'Onboarding and support included',
    trust: [
      { icon: Rocket, title: 'Live in one day', desc: 'We help you add your vehicles, set your first maintenance intervals and show your team the daily routine.' },
      { icon: Languages, title: 'Arabic & English', desc: 'Your team works in the language they prefer, from the workshop to management.' },
      { icon: Headphones, title: 'Free onboarding', desc: 'Onboarding is included in every subscription, whatever your fleet size.' },
      { icon: ShieldCheck, title: 'Start free', desc: 'Try Axpense with your own vehicles before you pay. No credit card required.' },
    ],
    faqTitle: 'Pricing questions',
    cta: { title: 'See your fleet in Axpense', accent: 'this week', subtitle: 'Start free with your own vehicles, or talk to our team about a larger fleet.', sales: 'Talk to Sales' },
  },
  ar: {
    crumb: 'الأسعار', badge: 'تسعير بسيط حسب المركبة',
    h1a: 'أسعار برنامج إدارة الأسطول', h1b: 'حسب عدد المركبات',
    sub: 'سعر واحد لكل مركبة وكل المميزات متضمنة. اختر عدد مركباتك، ثم الاشتراك الشهري أو السنوي وعملتك، واعرف سعرك بالضبط.',
    featTitle: 'منصة واحدة. كل ما تحتاجه لإدارة أسطولك.', featSub: 'كل اشتراك يشمل كل مميزات أكسبنس — لا خطط للمقارنة ولا إضافات مدفوعة.', soon: 'قريبًا',
    menaTitle: 'أسعار محلية لمصر والخليج والمنطقة', menaSub: 'نحدد السعر لكل سوق بعملته، ولا نحوّله يوميًا من سعر الصرف، فلا يتغير سعرك مع تقلب العملات.',
    menaNote: 'الأسعار لكل مركبة شهريًا. الاشتراك السنوي يوفّر {p}%.',
    trustTitle: 'التهيئة والدعم متضمنان',
    trust: [
      { icon: Rocket, title: 'التشغيل خلال يوم', desc: 'نساعدك في إضافة مركباتك وضبط أول فترات صيانة وتعريف فريقك بالروتين اليومي.' },
      { icon: Languages, title: 'العربية والإنجليزية', desc: 'يعمل فريقك باللغة التي يفضّلها، من الورشة إلى الإدارة.' },
      { icon: Headphones, title: 'تهيئة مجانية', desc: 'التهيئة متضمنة في كل اشتراك أيًّا كان حجم أسطولك.' },
      { icon: ShieldCheck, title: 'ابدأ مجانًا', desc: 'جرّب أكسبنس على مركباتك قبل الدفع، بدون بطاقة ائتمان.' },
    ],
    faqTitle: 'أسئلة عن الأسعار',
    cta: { title: 'شاهد أسطولك على أكسبنس', accent: 'هذا الأسبوع', subtitle: 'ابدأ مجانًا بمركباتك، أو تحدث مع فريقنا عن أسطول أكبر.', sales: 'تحدث مع المبيعات' },
  },
};

export function pricingFaqs(config: PricingConfig, lang: Lang) {
  const egp = getCurrency(config, 'EGP');
  const usd = getCurrency(config, 'USD');
  const first = (c: typeof egp) => c.tiers[0]?.monthly ?? 0;
  const last = (c: typeof egp) => c.tiers.filter((t) => t.monthly !== null).slice(-1)[0]?.monthly ?? 0;
  const p = egp.annualDiscountPercent;
  if (lang === 'ar') {
    return [
      { q: 'كيف يُحسب سعر أكسبنس؟', a: `تدفع سعرًا ثابتًا لكل مركبة شهريًا، ويقل السعر كلما زاد عدد المركبات: من ${money(first(egp), egp, 'ar')} لكل مركبة للأساطيل من ${config.minVehicles} إلى 10 مركبات حتى ${money(last(egp), egp, 'ar')} للأساطيل من 251 إلى ${config.customAbove} مركبة. السعر الإجمالي = عدد المركبات × سعر الشريحة.` },
      { q: 'ما الذي يتضمنه الاشتراك؟', a: 'كل المميزات: إدارة المركبات والوقود والمصروفات والصيانة الوقائية وأوامر العمل والفحوصات وقطع الغيار والسائقين والتقارير والتنبيهات، مع التهيئة المجانية.' },
      { q: 'كم أوفر مع الاشتراك السنوي؟', a: `يوفر الاشتراك السنوي ${p}% مقارنة بالدفع الشهري لمدة 12 شهرًا. مثال: 25 مركبة × ${money(egp.tiers[1]?.monthly ?? 0, egp, 'ar')} = ${money((egp.tiers[1]?.monthly ?? 0) * 25, egp, 'ar')} شهريًا، أو ${money((egp.tiers[1]?.monthly ?? 0) * 25 * 12 * (1 - p / 100), egp, 'ar')} سنويًا.` },
      { q: 'بأي عملات يمكنني الدفع؟', a: `نعرض الأسعار بـ ${config.currencies.map((c) => c.code).join('، ')}. لكل سوق سعر محلي محدد، وليس تحويلًا يوميًا من الدولار.` },
      { q: `ماذا لو كان لديّ أكثر من ${config.customAbove} مركبة؟`, a: `للأساطيل الأكبر من ${config.customAbove} مركبة نقدم تسعيرًا مخصصًا حسب حجم التشغيل والمتطلبات. [تحدث مع المبيعات](/contact).` },
      { q: 'هل يمكنني تغيير عدد المركبات لاحقًا؟', a: 'نعم. عند إضافة مركبات أو إزالتها يتغير الإجمالي، وإذا انتقل أسطولك إلى شريحة أخرى يُطبَّق سعر تلك الشريحة.' },
      { q: 'هل يوجد تجربة مجانية؟', a: 'نعم، ابدأ مجانًا بمركباتك وبدون بطاقة ائتمان. التهيئة مجانية ومعظم الفرق تبدأ العمل خلال يوم.' },
    ];
  }
  return [
    { q: 'How is Axpense priced?', a: `You pay one price per vehicle per month, and the price per vehicle goes down as your fleet grows: from ${money(first(egp), egp, 'en')} (${money(first(usd), usd, 'en')}) per vehicle for ${config.minVehicles}–10 vehicles to ${money(last(egp), egp, 'en')} (${money(last(usd), usd, 'en')}) for 251–${config.customAbove} vehicles. Your total is the number of vehicles × your tier’s price.` },
    { q: 'What is included in the subscription?', a: 'Everything: vehicle, fuel and expense management, preventive maintenance, work orders, inspections, parts, drivers and assignments, dashboards, reports and alerts — plus free onboarding.' },
    { q: 'How much do I save with annual billing?', a: `Annual billing saves ${p}% compared with paying monthly for 12 months. For example, 25 vehicles × ${money(egp.tiers[1]?.monthly ?? 0, egp, 'en')} = ${money((egp.tiers[1]?.monthly ?? 0) * 25, egp, 'en')} a month, or ${money((egp.tiers[1]?.monthly ?? 0) * 25 * 12 * (1 - p / 100), egp, 'en')} a year billed annually.` },
    { q: 'Which currencies can I pay in?', a: `Prices are available in ${config.currencies.map((c) => c.code).join(', ')}. Each market has its own local price rather than a daily conversion from US dollars.` },
    { q: `What if I have more than ${config.customAbove} vehicles?`, a: `Fleets above ${config.customAbove} vehicles get custom pricing based on your operation and requirements. [Talk to Sales](/contact).` },
    { q: 'Can I change the number of vehicles later?', a: 'Yes. Your total changes as you add or remove vehicles, and if your fleet moves into another size tier, that tier’s price per vehicle applies.' },
    { q: 'Is there a free trial?', a: 'Yes. Start free with your own vehicles — no credit card required. Onboarding is free and most teams are live in one day.' },
  ];
}

export function PricingView({ lang, config }: { lang: Lang; config: PricingConfig }) {
  const t = T[lang];
  const faqs = pricingFaqs(config, lang);
  const features = FEATURES.filter((f) => f.soon || isConfirmed(f.requires));
  const path = lhref(lang, '/pricing');
  return (
    <div className="bg-gradient-hero">
      <JsonLd data={softwareApplicationSchema({ name: 'Axpense', description: t.sub, path, lang, featureList: features.filter((f) => !f.soon).map((f) => f[lang]) })} />
      <JsonLd data={faqSchema(faqs.map((f) => ({ q: f.q, a: plain(f.a) })))} />
      <PageBreadcrumbs lang={lang} label={t.crumb} path="/pricing" />

      <section className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-wrap px-5 sm:px-7">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">{t.badge}</span>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance rtl:leading-[1.3]">{t.h1a} <span className="text-gradient">{t.h1b}</span></h1>
            <p className="mt-4 text-lg text-muted-foreground">{t.sub}</p>
          </div>

          <PricingCalculator config={config} lang={lang}>
            <section aria-labelledby="included-title" className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-10">
              <div className="mx-auto mb-8 max-w-2xl text-center">
                <h2 id="included-title" className="text-2xl font-bold text-foreground sm:text-3xl text-balance">{t.featTitle}</h2>
                <p className="mt-3 text-muted-foreground">{t.featSub}</p>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {features.map(({ icon: Icon, href, soon, ...f }) => {
                  const body = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                      <span className="flex-1 font-medium text-foreground">{f[lang]}</span>
                      {soon && <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{t.soon}</span>}
                    </>
                  );
                  return (
                    <li key={f.en}>
                      {href ? (
                        <Link href={lhref(lang, href)} className="flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:border-primary/40 hover:bg-sidebar-accent/40">{body}</Link>
                      ) : (
                        <div className="flex items-center gap-3 rounded-xl border border-dashed border-border p-3">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          </PricingCalculator>
        </div>
      </section>

      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Globe2 className="mb-4 h-10 w-10 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">{t.menaTitle}</h2>
              <p className="mt-3 text-muted-foreground">{t.menaSub}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t.menaNote.replace('{p}', String(getCurrency(config, 'USD').annualDiscountPercent))}</p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {config.currencies.map((c) => {
                const from = c.tiers.filter((x) => x.monthly !== null).slice(-1)[0]?.monthly ?? undefined;
                return (
                  <li key={c.code} className="rounded-xl border border-border bg-background p-4">
                    <p className="flex items-center gap-2 font-semibold text-foreground"><span aria-hidden="true">{c.flag}</span>{c.code}</p>
                    <p className="text-xs text-muted-foreground">{c.name[lang]}</p>
                    {typeof from === "number" && <p className="mt-2 text-sm text-foreground"><span className="text-muted-foreground">{lang === 'ar' ? 'من ' : 'from '}</span><span dir="ltr" className="font-semibold">{money(from, c, lang)}</span></p>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">{t.trustTitle}</h2>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.trust.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="card-app p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary"><Icon className="h-5 w-5 text-primary-foreground" aria-hidden="true" /></span>
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-light py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-7">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">{t.faqTitle}</h2>
          <div className="flex flex-col gap-3">{faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} lang={lang} />)}</div>
        </div>
      </section>

      <CtaBand title={t.cta.title} accent={t.cta.accent} subtitle={t.cta.subtitle} primary={primaryCta(lang)} secondary={{ label: t.cta.sales, href: lhref(lang, '/contact') }} checks={lang === 'ar' ? TRUST_AR : TRUST_EN} />
    </div>
  );
}
