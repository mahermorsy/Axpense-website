import { Hero } from '@/components/home/Hero';
import { ProblemSection } from '@/components/home/ProblemSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { ModulesSection } from '@/components/home/ModulesSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { HowItWorks } from '@/components/home/HowItWorks';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { UseCasesSection } from '@/components/home/UseCasesSection';
import { WhyAxpense } from '@/components/home/WhyAxpense';
import { PricingPreview } from '@/components/home/PricingPreview';
import { FAQSection, HOME_FAQS } from '@/components/home/FAQSection';
import { FinalCTA } from '@/components/home/FinalCTA';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQJsonLd } from '@/components/seo/FAQJsonLd';
import type { Lang } from '@/lib/i18n';

export function HomeView({ lang }: { lang: Lang }) {
  return (
    <>
      <JsonLd data={FAQJsonLd({ items: HOME_FAQS[lang] })} />
      <Hero lang={lang} />
      <ProblemSection lang={lang} />
      <FeaturesSection lang={lang} />
      <ModulesSection lang={lang} />
      <BenefitsSection lang={lang} />
      <HowItWorks lang={lang} />
      <IndustriesSection lang={lang} />
      <UseCasesSection lang={lang} />
      <WhyAxpense lang={lang} />
      <PricingPreview lang={lang} />
      <FAQSection lang={lang} />
      <FinalCTA lang={lang} />
    </>
  );
}
