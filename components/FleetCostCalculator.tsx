'use client';

import { useMemo, useState } from 'react';
import type { Lang } from '@/lib/i18n';

/**
 * Simple, transparent per-vehicle monthly cost estimator. The formula is
 * intentionally basic (sum of the categories the user enters) rather than
 * anything presented as a precise prediction — this is a planning aid,
 * not a quote, and says so.
 */
const CURRENCIES = ['EGP', 'SAR', 'AED', 'QAR', 'JOD', 'IQD', 'USD'] as const;
type Currency = typeof CURRENCIES[number];

const T = {
  en: {
    currency: 'Currency', vehicles: 'Number of vehicles', fuel: 'Fuel cost per vehicle / month', maint: 'Maintenance per vehicle / month',
    ins: 'Insurance per vehicle / month', other: 'Other costs per vehicle / month', perVehicle: 'Estimated cost per vehicle / month',
    total: 'Estimated total fleet cost / month', breakdown: 'Breakdown', rows: ['Fuel', 'Maintenance', 'Insurance', 'Other'],
    note: 'This is a planning estimate based on the numbers you enter — not a quote. Actual costs vary by vehicle type, usage, and route. Axpense tracks your real per-vehicle costs automatically once you’re logging expenses.',
  },
  ar: {
    currency: 'العملة', vehicles: 'عدد المركبات', fuel: 'تكلفة الوقود لكل مركبة / شهريًا', maint: 'الصيانة لكل مركبة / شهريًا',
    ins: 'التأمين لكل مركبة / شهريًا', other: 'تكاليف أخرى لكل مركبة / شهريًا', perVehicle: 'التكلفة التقديرية لكل مركبة / شهريًا',
    total: 'إجمالي التكلفة التقديرية للأسطول / شهريًا', breakdown: 'التفاصيل', rows: ['الوقود', 'الصيانة', 'التأمين', 'أخرى'],
    note: 'هذا تقدير للتخطيط بناءً على الأرقام التي تدخلها — وليس عرض سعر. تختلف التكاليف الفعلية حسب نوع المركبة والاستخدام والمسار. يتتبع أكسبنس التكاليف الفعلية لكل مركبة تلقائيًا بمجرد تسجيل المصروفات.',
  },
};

export function FleetCostCalculator({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  const [currency, setCurrency] = useState<Currency>('EGP');
  const [vehicles, setVehicles] = useState(10);
  const [fuelPerVehicle, setFuelPerVehicle] = useState(2500);
  const [maintenancePerVehicle, setMaintenancePerVehicle] = useState(800);
  const [insurancePerVehicle, setInsurancePerVehicle] = useState(400);
  const [otherPerVehicle, setOtherPerVehicle] = useState(300);

  const perVehicleTotal = fuelPerVehicle + maintenancePerVehicle + insurancePerVehicle + otherPerVehicle;
  const fleetTotal = useMemo(() => perVehicleTotal * vehicles, [perVehicleTotal, vehicles]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="calc-currency" className="label-app">{t.currency}</label>
          <select id="calc-currency" value={currency} onChange={(e) => setCurrency(e.target.value as Currency)} className="input-app">
            {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <NumberField id="calc-vehicles" label={t.vehicles} value={vehicles} onChange={setVehicles} min={1} />
        <NumberField id="calc-fuel" label={t.fuel} value={fuelPerVehicle} onChange={setFuelPerVehicle} min={0} />
        <NumberField id="calc-maintenance" label={t.maint} value={maintenancePerVehicle} onChange={setMaintenancePerVehicle} min={0} />
        <NumberField id="calc-insurance" label={t.ins} value={insurancePerVehicle} onChange={setInsurancePerVehicle} min={0} />
        <NumberField id="calc-other" label={t.other} value={otherPerVehicle} onChange={setOtherPerVehicle} min={0} />
      </div>

      <div className="card-app p-7 shadow-card">
        <p className="mb-1 text-sm text-ink-500">{t.perVehicle}</p>
        <p className="mb-6 text-3xl font-bold text-ink-900">{formatMoney(perVehicleTotal, currency)}</p>

        <p className="mb-1 text-sm text-ink-500">{t.total}</p>
        <p className="mb-6 text-4xl font-bold text-primary">{formatMoney(fleetTotal, currency)}</p>

        <div className="border-t border-line pt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500">{t.breakdown}</p>
          <BreakdownRow label={t.rows[0]} value={fuelPerVehicle * vehicles} currency={currency} />
          <BreakdownRow label={t.rows[1]} value={maintenancePerVehicle * vehicles} currency={currency} />
          <BreakdownRow label={t.rows[2]} value={insurancePerVehicle * vehicles} currency={currency} />
          <BreakdownRow label={t.rows[3]} value={otherPerVehicle * vehicles} currency={currency} />
        </div>

        <p className="mt-6 text-xs leading-relaxed text-ink-500">{t.note}</p>
      </div>
    </div>
  );
}

function NumberField({
  id,
  label,
  value,
  onChange,
  min = 0,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-app">{label}</label>
      <input
        id={id}
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
        className="input-app"
      />
    </div>
  );
}

function BreakdownRow({ label, value, currency }: { label: string; value: number; currency: string }) {
  return (
    <div className="flex justify-between py-1.5 text-sm">
      <span className="text-ink-700">{label}</span>
      <span className="font-medium text-ink-900">{formatMoney(value, currency)}</span>
    </div>
  );
}

function formatMoney(n: number, currency: string) {
  return `${currency} ${n.toLocaleString('en-US')}`;
}
