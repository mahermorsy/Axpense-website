'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react';
import { ArrowRight, Check, ChevronDown, Minus, Plus, Sparkles } from 'lucide-react';
import {
  exampleVehicles, getCurrency, money, planQuery, quote, tierFor, tierLabel, annualPerVehicle,
  type Billing, type PricingConfig, type PricingCurrency,
} from '@/lib/pricing';
import { lhref, type Lang } from '@/lib/i18n';
import { trackEvent } from '@/lib/analytics';

const STORE_KEY = 'axpense-pricing-v1';

const T = {
  en: {
    monthly: 'Monthly', annual: 'Annual', save: (p: number) => `Save ${p}%`, currency: 'Currency',
    question: 'How many vehicles do you manage?', decrease: 'Remove one vehicle', increase: 'Add one vehicle', vehiclesLabel: 'Number of vehicles',
    min: (n: number) => `Minimum ${n} vehicles`, quick: 'Quick pick',
    planTitle: 'Your Axpense plan', vehicles: (n: number) => `${n.toLocaleString('en-US')} vehicles`,
    perMonth: '/ month', perYear: '/ year', perVehicleMonth: 'per vehicle / month', perVehicleYear: 'per vehicle / year',
    billedAnnually: (v: string) => `${v} billed annually`, annualEq: 'Annual billing', insteadOf: (v: string) => `instead of ${v}`,
    youSave: (v: string, p: number) => `You save ${v} (${p}%)`, switchAnnual: (v: string) => `Switch to annual and save ${v} a year`,
    tier: (l: string) => `Tier: ${l} vehicles`, custom: 'Custom pricing', customText: (n: number) => `For fleets above ${n} vehicles we build a plan around your operation: volume pricing, onboarding and support.`,
    startFree: 'Start Free', talk: 'Talk to Sales', noCard: 'No credit card required · Free onboarding',
    tableTitle: 'Fleet pricing', tableSub: 'The more vehicles you manage, the less you pay per vehicle.',
    colVehicles: 'Number of vehicles', colMonthly: 'Monthly price / vehicle', colAnnual: 'Annual price / vehicle', colExample: 'Example monthly cost', colExampleYear: 'Example annual cost',
    contactSales: 'Contact Sales', current: 'Your tier', seeFull: 'See full pricing',
  },
  ar: {
    monthly: 'شهري', annual: 'سنوي', save: (p: number) => `وفّر ${p}%`, currency: 'العملة',
    question: 'كم مركبة تديرها؟', decrease: 'إنقاص مركبة', increase: 'إضافة مركبة', vehiclesLabel: 'عدد المركبات',
    min: (n: number) => `الحد الأدنى ${n} مركبات`, quick: 'اختيار سريع',
    planTitle: 'خطتك في أكسبنس', vehicles: (n: number) => `${n.toLocaleString('en-US')} مركبة`,
    perMonth: '/ شهريًا', perYear: '/ سنويًا', perVehicleMonth: 'لكل مركبة / شهريًا', perVehicleYear: 'لكل مركبة / سنويًا',
    billedAnnually: (v: string) => `${v} تُدفع سنويًا`, annualEq: 'الاشتراك السنوي', insteadOf: (v: string) => `بدلًا من ${v}`,
    youSave: (v: string, p: number) => `توفّر ${v} (${p}%)`, switchAnnual: (v: string) => `اختر الاشتراك السنوي ووفّر ${v} سنويًا`,
    tier: (l: string) => `الشريحة: ${l} مركبة`, custom: 'تسعير مخصص', customText: (n: number) => `للأساطيل الأكبر من ${n} مركبة نصمم خطة تناسب تشغيلك: أسعار حسب الحجم وتهيئة ودعم.`,
    startFree: 'ابدأ مجانًا', talk: 'تحدث مع المبيعات', noCard: 'بدون بطاقة ائتمان · تهيئة مجانية',
    tableTitle: 'أسعار الأسطول', tableSub: 'كلما زاد عدد مركباتك، قلّ السعر لكل مركبة.',
    colVehicles: 'عدد المركبات', colMonthly: 'السعر الشهري / مركبة', colAnnual: 'السعر السنوي / مركبة', colExample: 'مثال للتكلفة الشهرية', colExampleYear: 'مثال للتكلفة السنوية',
    contactSales: 'تواصل مع المبيعات', current: 'شريحتك', seeFull: 'اطّلع على كل الأسعار',
  },
};

type Props = {
  config: PricingConfig;
  lang: Lang;
  variant?: 'full' | 'compact';
  /** Server-rendered block shown between the calculator and the pricing table (e.g. included features). */
  children?: ReactNode;
};

/**
 * Vehicle-based pricing calculator: billing toggle + currency selector,
 * vehicle stepper, live plan summary, CTAs that carry the selection to the
 * form, and the fleet pricing table. Currency and billing are remembered in
 * the visitor's browser and can be set from the URL (?currency=USD&billing=annual&vehicles=40).
 */
export function PricingCalculator({ config, lang, variant = 'full', children }: Props) {
  const t = T[lang];
  const [currencyCode, setCurrencyCode] = useState(config.defaultCurrency);
  const [billing, setBilling] = useState<Billing>('monthly');
  const [vehicles, setVehicles] = useState(25);
  const [draft, setDraft] = useState('25');

  // Restore: URL params first, then the saved choice.
  useEffect(() => {
    let saved: { currency?: string; billing?: Billing; vehicles?: number } = {};
    try { saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); } catch { /* storage blocked */ }
    const q = new URLSearchParams(window.location.search);
    const cur = q.get('currency') || saved.currency;
    if (cur && config.currencies.some((c) => c.code === cur)) setCurrencyCode(cur);
    const b = q.get('billing') || saved.billing;
    if (b === 'monthly' || b === 'annual') setBilling(b);
    const v = Number(q.get('vehicles') || saved.vehicles);
    if (v >= config.minVehicles) { setVehicles(Math.floor(v)); setDraft(String(Math.floor(v))); }
  }, [config]);

  useEffect(() => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify({ currency: currencyCode, billing, vehicles })); } catch { /* storage blocked */ }
  }, [currencyCode, billing, vehicles]);

  const currency = getCurrency(config, currencyCode);
  const q = useMemo(() => quote(config, currency, vehicles), [config, currency, vehicles]);
  const m = (n: number, d?: number) => money(n, currency, lang, d);

  const setCount = useCallback((n: number) => {
    const v = Math.max(config.minVehicles, Math.floor(Number.isFinite(n) ? n : config.minVehicles));
    setVehicles(v);
    setDraft(String(v));
  }, [config.minVehicles]);

  // Analytics: one event per settled change.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const id = setTimeout(() => trackEvent('pricing_change', { vehicles, currency: currencyCode, billing, variant }), 800);
    return () => clearTimeout(id);
  }, [vehicles, currencyCode, billing, variant]);

  const query = planQuery(vehicles, currencyCode, billing);
  const startHref = `${lhref(lang, '/demo')}${query}`;
  const salesHref = `${lhref(lang, '/contact')}${query}`;
  const quickPicks = [10, 25, 50, 100, 250];

  return (
    <div className="flex flex-col gap-10">
      {/* Billing + currency controls */}
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <div role="radiogroup" aria-label={lang === 'ar' ? 'دورة الفوترة' : 'Billing cycle'} className="inline-flex rounded-xl border border-border bg-card p-1 shadow-card">
          {(['monthly', 'annual'] as Billing[]).map((b) => (
            <button
              key={b}
              type="button"
              role="radio"
              aria-checked={billing === b}
              onClick={() => setBilling(b)}
              className={`inline-flex h-10 items-center gap-2 rounded-lg px-5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${billing === b ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25' : 'text-foreground hover:bg-muted'}`}
            >
              {b === 'monthly' ? t.monthly : t.annual}
              {b === 'annual' && <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${billing === b ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>{t.save(currency.annualDiscountPercent)}</span>}
            </button>
          ))}
        </div>
        <CurrencySelect config={config} value={currency} onChange={setCurrencyCode} lang={lang} label={t.currency} />
      </div>

      {/* Calculator + plan */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="card-app flex flex-col justify-center p-6 sm:p-8">
          <label htmlFor="pricing-vehicles" className="text-lg font-semibold text-foreground sm:text-xl">{t.question}</label>
          <div className="mt-6 flex items-center gap-3">
            <button type="button" aria-label={t.decrease} onClick={() => setCount(vehicles - 1)} disabled={vehicles <= config.minVehicles} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40">
              <Minus className="h-5 w-5" aria-hidden="true" />
            </button>
            <input
              id="pricing-vehicles"
              type="number"
              inputMode="numeric"
              min={config.minVehicles}
              dir="ltr"
              value={draft}
              aria-describedby="pricing-vehicles-hint"
              onChange={(e) => { setDraft(e.target.value); const n = Number(e.target.value); if (n >= config.minVehicles) setVehicles(Math.floor(n)); }}
              onBlur={() => setCount(Number(draft))}
              className="h-14 w-full min-w-0 rounded-xl border border-border bg-background text-center text-3xl font-bold text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button type="button" aria-label={t.increase} onClick={() => setCount(vehicles + 1)} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <Plus className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <p id="pricing-vehicles-hint" className="mt-3 text-sm text-muted-foreground">{t.min(config.minVehicles)}</p>
          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t.quick}</p>
            <div className="flex flex-wrap gap-2">
              {quickPicks.map((n) => (
                <button key={n} type="button" onClick={() => setCount(n)} aria-pressed={vehicles === n} className={`h-9 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${vehicles === n ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-card text-foreground hover:border-primary/40'}`}>{n}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-primary bg-gradient-to-b from-card to-muted/50 p-6 shadow-glow sm:p-8" aria-live="polite">
          <p className="flex items-center gap-2 text-sm font-semibold text-primary"><Sparkles className="h-4 w-4" aria-hidden="true" />{t.planTitle}</p>
          <p className="mt-3 text-xl font-bold text-foreground">{t.vehicles(vehicles)}</p>
          {q.kind === 'custom' ? (
            <>
              <p className="mt-4 text-4xl font-bold text-foreground">{t.custom}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.customText(config.customAbove)}</p>
              <Link href={salesHref} data-cta-id="pricing_talk_to_sales" data-cta-position={variant === 'compact' ? 'home_pricing' : 'pricing_card'} className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] px-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                {t.talk}<ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </>
          ) : (
            <>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
                <span className="text-4xl font-bold text-foreground sm:text-5xl" dir="ltr">{billing === 'monthly' ? m(q.monthlyTotal, 0) : m(q.annualTotal, 0)}</span>
                <span className="text-base text-muted-foreground">{billing === 'monthly' ? t.perMonth : t.perYear}</span>
              </p>
              <p className="mt-2 text-sm text-foreground"><span dir="ltr" className="font-semibold">{billing === 'monthly' ? m(q.perVehicleMonthly) : m(q.perVehicleAnnual)}</span> {billing === 'monthly' ? t.perVehicleMonth : t.perVehicleYear}</p>
              <div className="mt-5 rounded-xl border border-border bg-card/70 p-4 text-sm">
                {billing === 'annual' ? (
                  <>
                    <p className="text-muted-foreground">{t.insteadOf(m(q.yearAtMonthly, 0))}</p>
                    <p className="mt-1 font-semibold text-primary">{t.youSave(m(q.annualSaving, 0), q.discountPercent)}</p>
                  </>
                ) : (
                  <>
                    <p className="text-muted-foreground">{t.annualEq}: <span className="font-semibold text-foreground">{t.billedAnnually(m(q.annualTotal, 0))}</span></p>
                    <button type="button" onClick={() => setBilling('annual')} className="mt-1 font-semibold text-primary underline-offset-2 hover:underline">{t.switchAnnual(m(q.annualSaving, 0))}</button>
                  </>
                )}
                <p className="mt-2 text-xs text-muted-foreground">{t.tier(tierLabel(q.tier))}</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href={startHref} data-cta-id="pricing_start_free" data-cta-position={variant === 'compact' ? 'home_pricing' : 'pricing_card'} className="inline-flex h-12 w-full shrink-0 items-center sm:w-auto sm:flex-1 justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] px-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  {t.startFree}<ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
                <Link href={salesHref} data-cta-id="pricing_talk_to_sales" data-cta-position={variant === 'compact' ? 'home_pricing' : 'pricing_card'} className="inline-flex h-12 w-full shrink-0 items-center sm:w-auto sm:flex-1 justify-center rounded-xl border-2 border-primary/50 bg-transparent px-6 text-base font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10">
                  {t.talk}
                </Link>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">{t.noCard}</p>
            </>
          )}
        </div>
      </div>

      {variant === 'compact' ? (
        <p className="text-center">
          <Link href={`${lhref(lang, '/pricing')}${query}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">{t.seeFull}<ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" /></Link>
        </p>
      ) : (
        <>
          {children}
          <PricingTable config={config} currency={currency} billing={billing} vehicles={vehicles} lang={lang} salesHref={salesHref} />
        </>
      )}
    </div>
  );
}

function PricingTable({ config, currency, billing, vehicles, lang, salesHref }: { config: PricingConfig; currency: PricingCurrency; billing: Billing; vehicles: number; lang: Lang; salesHref: string }) {
  const t = T[lang];
  const current = vehicles > config.customAbove ? null : tierFor(currency, vehicles);
  const m = (n: number, d?: number) => money(n, currency, lang, d);
  return (
    <section id="fleet-pricing" aria-labelledby="fleet-pricing-title" className="scroll-mt-24">
      <div className="mb-6 text-center">
        <h2 id="fleet-pricing-title" className="text-2xl font-bold text-foreground sm:text-3xl">{t.tableTitle}</h2>
        <p className="mt-2 text-muted-foreground">{t.tableSub}</p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
        <table className="w-full min-w-[620px] text-sm">
          <thead className="bg-muted/60 text-foreground">
            <tr>
              <th scope="col" className="px-5 py-4 text-start font-semibold">{t.colVehicles}</th>
              <th scope="col" className="px-5 py-4 text-start font-semibold">{t.colMonthly}</th>
              <th scope="col" className="px-5 py-4 text-start font-semibold">{t.colAnnual}</th>
              <th scope="col" className="px-5 py-4 text-start font-semibold">{billing === 'annual' ? t.colExampleYear : t.colExample}</th>
            </tr>
          </thead>
          <tbody>
            {currency.tiers.map((tier) => {
              const active = current === tier;
              const ex = exampleVehicles(tier);
              return (
                <tr key={tier.min} className={`border-t border-border ${active ? 'bg-primary/5' : ''}`} aria-current={active ? 'true' : undefined}>
                  <th scope="row" className="px-5 py-4 text-start font-semibold text-foreground">
                    <span dir="ltr">{tierLabel(tier)}</span>
                    {active && <span className="ms-2 inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-primary-foreground"><Check className="h-3 w-3" aria-hidden="true" />{t.current}</span>}
                  </th>
                  {tier.monthly === null ? (
                    <><td className="px-5 py-4">{t.custom}</td><td className="px-5 py-4">{t.custom}</td><td className="px-5 py-4"><Link href={salesHref} className="font-semibold text-primary hover:underline">{t.contactSales}</Link></td></>
                  ) : (
                    <>
                      <td className={`px-5 py-4 ${billing === 'monthly' ? 'font-semibold text-foreground' : 'text-muted-foreground'}`} dir="ltr">{m(tier.monthly)}</td>
                      <td className={`px-5 py-4 ${billing === 'annual' ? 'font-semibold text-foreground' : 'text-muted-foreground'}`} dir="ltr">{m(annualPerVehicle(currency, tier.monthly))}</td>
                      <td className="px-5 py-4 text-foreground"><span dir="ltr">{ex} = {billing === 'annual' ? m(annualPerVehicle(currency, tier.monthly) * ex, 0) : m(tier.monthly * ex, 0)}</span></td>
                    </>
                  )}
                </tr>
              );
            })}
            <tr className={`border-t border-border ${vehicles > config.customAbove ? 'bg-primary/5' : ''}`}>
              <th scope="row" className="px-5 py-4 text-start font-semibold text-foreground"><span dir="ltr">{config.customAbove}+</span></th>
              <td className="px-5 py-4">{t.custom}</td>
              <td className="px-5 py-4">{t.custom}</td>
              <td className="px-5 py-4"><Link href={salesHref} data-cta-id="pricing_table_sales" data-cta-position="pricing_table" className="font-semibold text-primary hover:underline">{t.contactSales}</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

/** Accessible currency listbox (button + popup list, arrow keys, Enter, Escape). */
function CurrencySelect({ config, value, onChange, lang, label }: { config: PricingConfig; value: PricingCurrency; onChange: (code: string) => void; lang: Lang; label: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    setActive(Math.max(0, config.currencies.findIndex((c) => c.code === value.code)));
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open, config.currencies, value.code]);

  const choose = (code: string) => { onChange(code); setOpen(false); trackEvent('pricing_currency', { currency: code }); };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { setOpen(false); return; }
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setOpen(true); return; }
    if (!open) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(config.currencies.length - 1, i + 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(0, i - 1)); }
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(config.currencies[active].code); }
  };

  return (
    <div ref={ref} className="relative flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground sm:sr-only">{label}:</span>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${label}: ${value.code} — ${value.name[lang]}`}
        onClick={() => setOpen(!open)}
        onKeyDown={onKey}
        className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-semibold text-foreground shadow-card transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span aria-hidden="true">{value.flag}</span>{value.code}<ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <ul id={listId} role="listbox" aria-label={label} tabIndex={-1} className="absolute end-0 top-full z-40 mt-2 max-h-80 w-64 overflow-auto rounded-xl border border-border bg-card p-1 shadow-elevated">
          {config.currencies.map((c, i) => (
            <li
              key={c.code}
              role="option"
              aria-selected={c.code === value.code}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(c.code)}
              className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${i === active ? 'bg-sidebar-accent' : ''} ${c.code === value.code ? 'font-semibold text-primary' : 'text-foreground'}`}
            >
              <span aria-hidden="true" className="text-base">{c.flag}</span>
              <span className="w-10 font-semibold">{c.code}</span>
              <span className="flex-1 text-muted-foreground">{c.name[lang]}</span>
              {c.code === value.code && <Check className="h-4 w-4" aria-hidden="true" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
