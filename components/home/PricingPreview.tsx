import { PricingCalculator } from '../pricing/PricingCalculator';
import { loadPricing } from '@/lib/pricing-server';
import type { Lang } from '@/lib/i18n';

const T = {
  en: { badge: 'Simple Pricing', title1: 'Pay per ', title2: 'vehicle', sub: 'One price per vehicle with every feature included. The bigger your fleet, the less you pay per vehicle.' },
  ar: { badge: 'أسعار بسيطة', title1: 'ادفع حسب ', title2: 'عدد المركبات', sub: 'سعر واحد لكل مركبة مع كل المميزات. كلما كبر أسطولك قلّ السعر لكل مركبة.' },
};

// Homepage pricing section: compact version of the /pricing calculator.
export async function PricingPreview({ lang = 'en' }: { lang?: Lang }) {
  const config = await loadPricing();
  const t = T[lang];
  return (
    <div className="border-y border-border bg-gradient-light">
      <section id="pricing" className="relative overflow-hidden py-20 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-wrap px-5 sm:px-7">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">{t.badge}</span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">{t.title1}<span className="text-gradient">{t.title2}</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.sub}</p>
          </div>
          <PricingCalculator config={config} lang={lang} variant="compact" />
        </div>
      </section>
    </div>
  );
}
