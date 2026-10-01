'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Lang } from '@/lib/i18n';
import { trackEvent } from '@/lib/analytics';

/**
 * Fleet cost per km + TCO calculator. Straight-line depreciation and simple
 * yearly averages, so every result can be checked by hand (formulas are
 * explained on the page below the widget). A planning estimate, not a quote.
 */
const CURRENCIES = ['EGP', 'SAR', 'AED', 'QAR', 'JOD', 'IQD', 'USD'] as const;
type Currency = (typeof CURRENCIES)[number];
const KM_PER_MILE = 1.609344;

type Inputs = {
  vehicles: number; purchase: number; resale: number; years: number; kmPerYear: number;
  maintenance: number; fuel: number; insurance: number; financing: number; other: number;
};

const DEFAULTS: Record<Lang, { currency: Currency; inputs: Inputs }> = {
  en: { currency: 'EGP', inputs: { vehicles: 10, purchase: 1500000, resale: 600000, years: 5, kmPerYear: 40000, maintenance: 60000, fuel: 120000, insurance: 40000, financing: 0, other: 20000 } },
  ar: { currency: 'EGP', inputs: { vehicles: 10, purchase: 1500000, resale: 600000, years: 5, kmPerYear: 40000, maintenance: 60000, fuel: 120000, insurance: 40000, financing: 0, other: 20000 } },
};

const T = {
  en: {
    currency: 'Currency', vehicles: 'Number of vehicles (same type)', purchase: 'Purchase price per vehicle', resale: 'Expected resale value', years: 'Years of ownership',
    km: 'Km driven per vehicle per year', annual: 'Yearly running costs per vehicle', maintenance: 'Maintenance & repairs (incl. spare parts)', fuel: 'Fuel',
    insurance: 'Insurance & registration', financing: 'Financing cost (optional)', other: 'Other costs (tolls, parking, washing…)',
    perKm: 'Cost per km', perMile: 'Cost per mile', annualTotal: 'Total annual cost per vehicle', operating: 'Annual operating cost', depreciation: 'Annual depreciation',
    tco: 'Lifecycle TCO per vehicle', fleet: 'Fleet total per year', results: 'Results', note: 'Planning estimate based on your inputs — not a quote.',
    invalid: 'Enter km per year and years of ownership above zero to see results.',
  },
  ar: {
    currency: 'العملة', vehicles: 'عدد المركبات (من نفس النوع)', purchase: 'سعر شراء المركبة', resale: 'قيمة البيع المتوقعة', years: 'سنوات الملكية',
    km: 'الكيلومترات السنوية لكل مركبة', annual: 'مصروفات التشغيل السنوية لكل مركبة', maintenance: 'الصيانة والإصلاحات (مع قطع الغيار)', fuel: 'الوقود',
    insurance: 'التأمين والترخيص', financing: 'تكلفة التمويل (اختياري)', other: 'تكاليف أخرى (رسوم طرق، مواقف، غسيل…)',
    perKm: 'تكلفة الكيلومتر', perMile: 'تكلفة الميل', annualTotal: 'التكلفة السنوية الإجمالية لكل مركبة', operating: 'تكلفة التشغيل السنوية', depreciation: 'الإهلاك السنوي',
    tco: 'إجمالي تكلفة الملكية لكل مركبة', fleet: 'إجمالي الأسطول سنويًا', results: 'النتائج', note: 'تقدير للتخطيط بناءً على مدخلاتك — وليس عرض سعر.',
    invalid: 'أدخل الكيلومترات السنوية وسنوات الملكية بقيم أكبر من صفر لعرض النتائج.',
  },
};

export function calculate(i: Inputs) {
  const operating = i.maintenance + i.fuel + i.insurance + i.other;
  const depreciation = i.years > 0 ? (i.purchase - i.resale) / i.years : 0;
  const totalAnnual = operating + i.financing + depreciation;
  const tco = i.purchase + (operating + i.financing) * i.years - i.resale;
  const perKm = i.kmPerYear > 0 ? totalAnnual / i.kmPerYear : 0;
  return { operating, depreciation, totalAnnual, tco, perKm, perMile: perKm * KM_PER_MILE, fleet: totalAnnual * i.vehicles };
}

export function FleetCostCalculator({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  const [currency, setCurrency] = useState<Currency>(DEFAULTS[lang].currency);
  const [v, setV] = useState<Inputs>(DEFAULTS[lang].inputs);
  const r = useMemo(() => calculate(v), [v]);
  const valid = v.years > 0 && v.kmPerYear > 0;

  // One calculator_complete per visit, after the visitor has changed an input.
  const touched = useRef(false);
  const sent = useRef(false);
  useEffect(() => {
    if (!touched.current || sent.current || !valid) return;
    const id = setTimeout(() => {
      sent.current = true;
      trackEvent('calculator_complete', { tool: 'fleet_cost_calculator', currency, lang, page_type: 'tool', vehicles: v.vehicles, cost_per_km: Math.round(r.perKm * 100) / 100 });
    }, 1500);
    return () => clearTimeout(id);
  }, [v, currency, valid, r.perKm, lang]);

  const set = (k: keyof Inputs) => (n: number) => { touched.current = true; setV((p) => ({ ...p, [k]: n })); };
  const money = (n: number, digits = 0) => `${currency} ${n.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="card-app flex flex-col gap-5 p-6 sm:p-7">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="calc-currency" className="label-app">{t.currency}</label>
            <select id="calc-currency" value={currency} onChange={(e) => { touched.current = true; setCurrency(e.target.value as Currency); }} className="input-app">
              {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <Num id="calc-vehicles" label={t.vehicles} value={v.vehicles} onChange={set('vehicles')} min={1} />
          <Num id="calc-purchase" label={t.purchase} value={v.purchase} onChange={set('purchase')} />
          <Num id="calc-resale" label={t.resale} value={v.resale} onChange={set('resale')} />
          <Num id="calc-years" label={t.years} value={v.years} onChange={set('years')} min={1} />
          <Num id="calc-km" label={t.km} value={v.kmPerYear} onChange={set('kmPerYear')} min={1} />
        </div>
        <p className="border-t border-border pt-4 text-sm font-semibold text-foreground">{t.annual}</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Num id="calc-maintenance" label={t.maintenance} value={v.maintenance} onChange={set('maintenance')} />
          <Num id="calc-fuel" label={t.fuel} value={v.fuel} onChange={set('fuel')} />
          <Num id="calc-insurance" label={t.insurance} value={v.insurance} onChange={set('insurance')} />
          <Num id="calc-financing" label={t.financing} value={v.financing} onChange={set('financing')} />
          <Num id="calc-other" label={t.other} value={v.other} onChange={set('other')} />
        </div>
      </div>

      <div className="card-app h-fit p-6 shadow-card sm:p-7 lg:sticky lg:top-24" aria-live="polite">
        <h2 className="mb-5 text-lg font-semibold text-foreground">{t.results}</h2>
        {valid ? (
          <>
            <p className="text-sm text-ink-500">{t.perKm}</p>
            <p className="mb-1 text-4xl font-bold text-primary">{money(r.perKm, 2)}</p>
            <p className="mb-6 text-sm text-ink-500">{t.perMile}: {money(r.perMile, 2)}</p>
            <dl className="divide-y divide-border border-y border-border text-sm">
              <Row label={t.operating} value={money(r.operating)} />
              <Row label={t.depreciation} value={money(r.depreciation)} />
              <Row label={t.annualTotal} value={money(r.totalAnnual)} strong />
              <Row label={t.tco} value={money(r.tco)} strong />
              <Row label={t.fleet} value={money(r.fleet)} strong />
            </dl>
          </>
        ) : <p className="text-sm text-muted-foreground">{t.invalid}</p>}
        <p className="mt-5 text-xs leading-relaxed text-ink-500">{t.note}</p>
      </div>
    </div>
  );
}

function Num({ id, label, value, onChange, min = 0 }: { id: string; label: string; value: number; onChange: (n: number) => void; min?: number }) {
  return (
    <div>
      <label htmlFor={id} className="label-app">{label}</label>
      <input id={id} type="number" inputMode="decimal" min={min} value={value} dir="ltr" onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))} className="input-app" />
    </div>
  );
}

function Row({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <dt className="text-ink-700">{label}</dt>
      <dd className={strong ? 'font-semibold text-foreground' : 'text-foreground'}>{value}</dd>
    </div>
  );
}
