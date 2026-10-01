import { LeadForm } from '@/components/LeadForm';
import { Section, SectionHead } from '@/components/Section';
import type { Lang } from '@/lib/i18n';
import { PageBreadcrumbs } from '@/components/seo/PageBreadcrumbs';

const COPY = {
  contact: {
    en: { eyebrow: 'Contact', title: 'Talk to the team', desc: 'Tell us a bit about your fleet or assets and we’ll get back to you.' },
    ar: { eyebrow: 'اتصل بنا', title: 'تحدث مع الفريق', desc: 'أخبرنا قليلًا عن أسطولك أو أصولك وسنعود إليك.' },
  },
  demo: {
    en: { eyebrow: 'Get Started', title: 'Book a demo', desc: 'Tell us about your vehicles and assets. The Axpense team will set up your access or walk you through the product.' },
    ar: { eyebrow: 'ابدأ الآن', title: 'احجز عرضًا تجريبيًا', desc: 'أخبرنا عن مركباتك وأصولك. سيجهّز فريق أكسبنس حسابك أو يعرض لك المنتج خطوة بخطوة.' },
  },
};

export function LeadFormView({ kind, lang }: { kind: 'contact' | 'demo'; lang: Lang }) {
  const c = COPY[kind][lang];
  return (
    <>
    <PageBreadcrumbs lang={lang} label={c.title} path={`/${kind}`} />
    <Section>
      <SectionHead as="h1" eyebrow={c.eyebrow} title={c.title} description={c.desc} center />
      <div className="card-app mx-auto max-w-2xl p-6 shadow-card sm:p-8">
        <LeadForm lang={lang} />
      </div>
    </Section>
    </>
  );
}

