import Link from 'next/link';
import { ChevronRight, LayoutGrid } from 'lucide-react';
import { Button } from './Button';
import { ProductScreenshot } from './ProductScreenshot';
import { Section, SectionHead } from './Section';
import { CheckItem } from './ui/CheckItem';
import { FaqItem } from './home/FAQSection';
import { primaryCta } from '@/lib/cta';

export type CountryLandingData = {
  language: 'en' | 'ar';
  code: string;
  name: string;
  h1: string;
  intro: string;
  focus: string[];
  featureLinks: { label: string; href: string; arHref?: string }[];
  faq: { q: string; a: string }[];
  relatedMarkets: { label: string; href: string }[];
};

export function CountryLandingPage({ data }: { data: CountryLandingData }) {
  const ar = data.language === 'ar';
  return (
    <>
      <section className="border-b border-border bg-gradient-hero py-16">
        <div className="mx-auto grid max-w-wrap items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="badge-app mb-4">{ar ? `أكسبنس في ${data.name}` : `Axpense in ${data.name}`}</p>
            <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl">{data.h1}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-ink-700">{data.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={primaryCta(data.language).href} size="lg">{primaryCta(data.language).label}</Button>
              <Button href={ar ? '/ar' : '/'} variant="outline" size="lg">{ar ? 'استكشف أكسبنس' : 'Explore Axpense'}</Button>
            </div>
          </div>
          <ProductScreenshot />
        </div>
      </section>

      <Section>
        <SectionHead eyebrow={ar ? 'ما يمكنك إدارته' : 'What you can manage'} title={ar ? `إدارة الأسطول والأصول في ${data.name}` : `Fleet and asset operations in ${data.name}`} description={ar ? 'المركبات والمعدات والصيانة الوقائية حسب الكيلومترات وقطع الغيار والفحوصات والمصروفات — في نظام واحد لفريق التشغيل.' : 'Vehicles, equipment, kilometre-based preventive maintenance, spare parts, inspections and expenses — in one system your operations team actually uses.'} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.focus.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
        </ul>
      </Section>

      <Section alt>
        <SectionHead eyebrow={ar ? 'مميزات أكسبنس' : 'Core Axpense features'} title={ar ? 'استكشف المميزات بالتفصيل' : 'Explore the features in detail'} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.featureLinks.map((item) => <Link key={item.href} href={ar ? (item.arHref ?? item.href) : item.href} className="card-app flex items-center justify-between gap-3 p-5 font-medium text-foreground hover:text-primary"><span className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-accent text-sidebar-primary"><LayoutGrid className="h-4 w-4" aria-hidden="true" /></span>{item.label}</span><ChevronRight className="h-4 w-4 text-muted-foreground rtl:rotate-180" aria-hidden="true" /></Link>)}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow={ar ? 'الأسئلة الشائعة' : 'FAQ'} title={ar ? 'أسئلة شائعة' : 'Frequently asked questions'} />
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {data.faq.map((item) => <FaqItem key={item.q} q={item.q} a={item.a} />)}
        </div>
      </Section>

      <Section alt>
        <SectionHead title={ar ? 'أكسبنس في دول أخرى' : 'Axpense in other countries'} />
        <div className="flex flex-wrap gap-3">
          {data.relatedMarkets.map((item) => <Link key={item.href} href={item.href} className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-sidebar-accent hover:border-primary/40 hover:text-primary">{item.label}</Link>)}
        </div>
      </Section>
    </>
  );
}
