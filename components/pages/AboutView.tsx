import { Eye, Globe, Shield, Target, Users, Zap } from 'lucide-react';
import { Button } from '@/components/Button';
import { AppFeatureCard, CenteredHead, PageHero } from '@/components/ui/AppSections';
import { primaryCta } from '@/lib/cta';
import type { Lang } from '@/lib/i18n';

const VALUES = [
  { icon: Target, en: ['Mission-Driven', "We're building the tools that help businesses eliminate waste, extend asset life, and operate smarter."], ar: ['مدفوعون برسالة', 'نبني الأدوات التي تساعد الشركات على تقليل الهدر وإطالة عمر الأصول والعمل بذكاء أكبر.'] },
  { icon: Eye, en: ['Transparency', 'Clear pricing, open communication, and honest product roadmaps. No surprises.'], ar: ['الشفافية', 'أسعار واضحة، وتواصل مفتوح، وخطط تطوير صادقة. بلا مفاجآت.'] },
  { icon: Zap, en: ['Innovation', 'We leverage AI and modern technology to solve real-world asset management challenges.'], ar: ['الابتكار', 'نستخدم الذكاء الاصطناعي والتقنيات الحديثة لحل تحديات إدارة الأصول الواقعية.'] },
  { icon: Shield, en: ['Reliability', "Enterprise-grade security and 99.9% uptime because your operations can't afford downtime."], ar: ['الموثوقية', 'أمان بمستوى المؤسسات وتشغيل بنسبة 99.9% لأن عملياتك لا تحتمل التوقف.'] },
  { icon: Users, en: ['Customer-First', 'Every feature we build starts with a real customer need. Your feedback shapes our product.'], ar: ['العميل أولًا', 'كل ميزة نبنيها تبدأ من احتياج حقيقي لعميل. ملاحظاتك تشكّل منتجنا.'] },
  { icon: Globe, en: ['Regional Focus', 'Built for the MENA region with multi-currency, bilingual support, and local compliance.'], ar: ['تركيز إقليمي', 'مصمم لمنطقة الشرق الأوسط وشمال أفريقيا مع دعم العملات المتعددة واللغتين والمتطلبات المحلية.'] },
];

const T = {
  en: {
    hero: { badge: 'About Us', title: 'Built for teams that', accent: 'run on assets', subtitle: 'Axpense builds fleet, asset, and maintenance management software for growing businesses in Egypt and MENA, so teams can manage vehicles and equipment from one platform instead of spreadsheets and scattered messages.' },
    whyTitle: 'Why we built ', whyAccent: 'Axpense',
    why: 'Fleet and asset teams in the region were managing real operations with tools built for something else — spreadsheets, WhatsApp threads, and paper forms. Axpense replaces that with one system built specifically for fleet, maintenance, spare parts, and asset management.',
    hq: 'Headquarters', hqValue: 'New Cairo, Egypt', contact: 'Contact',
    values: { title: 'What We', accent: 'Stand For', subtitle: 'Our values guide every decision we make, from product development to customer support.' },
  },
  ar: {
    hero: { badge: 'من نحن', title: 'مصمم للفرق التي', accent: 'تعتمد على الأصول', subtitle: 'تطوّر أكسبنس برامج إدارة الأسطول والأصول والصيانة للشركات النامية في مصر ومنطقة الشرق الأوسط وشمال أفريقيا، لتدير الفرق مركباتها ومعداتها من منصة واحدة بدلًا من جداول إكسل والرسائل المتفرقة.' },
    whyTitle: 'لماذا بنينا ', whyAccent: 'أكسبنس',
    why: 'كانت فرق الأسطول والأصول في المنطقة تدير عمليات حقيقية بأدوات صُممت لأغراض أخرى — جداول إكسل ومحادثات واتساب واستمارات ورقية. يستبدل أكسبنس كل ذلك بنظام واحد مصمم خصيصًا لإدارة الأسطول والصيانة وقطع الغيار والأصول.',
    hq: 'المقر الرئيسي', hqValue: 'القاهرة الجديدة، مصر', contact: 'التواصل',
    values: { title: 'ما', accent: 'نؤمن به', subtitle: 'قيمنا توجّه كل قرار نتخذه، من تطوير المنتج إلى دعم العملاء.' },
  },
};

export function AboutView({ lang }: { lang: Lang }) {
  const t = T[lang];
  const cta = primaryCta(lang);
  return (
    <>
      <PageHero {...t.hero} />

      <section className="py-24">
        <div className="mx-auto grid max-w-wrap items-center gap-10 px-5 sm:px-7 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">{t.whyTitle}<span className="text-gradient">{t.whyAccent}</span></h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{t.why}</p>
            <div className="mt-8"><Button href={cta.href} size="lg">{cta.label}</Button></div>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
            <p className="text-sm font-medium text-primary">{t.hq}</p>
            <p className="mt-1 text-xl font-semibold text-foreground">{t.hqValue}</p>
            <p className="mt-6 text-sm font-medium text-primary">{t.contact}</p>
            <p className="mt-1 text-foreground">info@axpense.net</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <CenteredHead {...t.values} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => <AppFeatureCard key={v.en[0]} icon={v.icon} title={v[lang][0]} desc={v[lang][1]} solid />)}
          </div>
        </div>
      </section>
    </>
  );
}
