'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { CURRENCIES, PLANS, formatPrice, type Currency } from '@/lib/pricing';
import { TRIAL_CTA, TRIAL_CTA_AR } from '@/lib/cta';
import { trackEvent } from '@/lib/analytics';

const T = {
  en: { badge: 'Simple Pricing', title1: 'Choose Your ', title2: 'Perfect Plan', sub: 'Start with a 14-day free trial. No credit card required. Upgrade or downgrade anytime.', month: '/month', custom: 'Custom', popular: 'Most Popular', sales: 'Contact Sales', salesHref: '/contact', currency: 'Currency' },
  ar: { badge: 'أسعار بسيطة', title1: 'اختر ', title2: 'الخطة المناسبة لك', sub: 'ابدأ بتجربة مجانية لمدة 14 يومًا. بدون بطاقة ائتمان. غيّر خطتك في أي وقت.', month: '/شهريًا', custom: 'مخصص', popular: 'الأكثر طلبًا', sales: 'تواصل مع المبيعات', salesHref: '/ar/contact', currency: 'العملة' },
};

// Same layout as the Axpense app's pricing section: centered heading with a
// gradient accent, a USD/EGP/SAR toggle and three plan cards.
export function PricingPlans({ lang = 'en', headingLevel = 'h2' }: { lang?: 'en' | 'ar'; headingLevel?: 'h1' | 'h2' }) {
  const [currency, setCurrency] = useState<Currency>(lang === 'ar' ? 'EGP' : 'USD');
  const t = T[lang];
  const trial = lang === 'ar' ? TRIAL_CTA_AR : TRIAL_CTA;
  const Heading = headingLevel;

  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-panel-2/40 blur-3xl" />
      <div className="relative mx-auto max-w-wrap px-5 sm:px-7">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">{t.badge}</span>
          <Heading className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">{t.title1}<span className="text-gradient">{t.title2}</span></Heading>
          <p className="mt-4 text-lg text-muted-foreground">{t.sub}</p>
        </div>

        <div role="radiogroup" aria-label={t.currency} className="mb-12 flex items-center justify-center gap-1">
          {CURRENCIES.map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={currency === c}
              onClick={() => { setCurrency(c); trackEvent('pricing_currency', { currency: c }); }}
              className={`inline-flex h-9 min-w-[70px] items-center justify-center rounded-md px-4 text-xs font-medium transition-all duration-300 ${currency === c ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:bg-primary/90' : 'border border-border bg-transparent text-foreground hover:bg-muted'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${plan.popular ? 'border-primary bg-gradient-to-b from-card to-muted/50 shadow-glow' : 'border-border bg-gradient-card hover:border-primary/30'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />{t.popular}
                  </div>
                </div>
              )}
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">{plan.name[lang]}</h3>
                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground" dir="ltr">{plan.price ? formatPrice(plan.price[currency], currency, lang) : t.custom}</span>
                  {plan.price && <span className="text-muted-foreground">{t.month}</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.note[lang]}</p>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.en} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{f[lang]}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.price ? trial.href : t.salesHref}
                onClick={() => trackEvent('cta_click', { plan: plan.id, currency })}
                className={`inline-flex h-12 w-full items-center justify-center rounded-lg px-8 text-base transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40' : 'border-2 border-primary/50 bg-transparent font-medium text-foreground hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10'}`}
              >
                {plan.price ? trial.label : t.sales}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
