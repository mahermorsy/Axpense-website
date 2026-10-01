'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Plus, RotateCcw, Save, Star, Trash2 } from 'lucide-react';
import { useAdmin } from '@/lib/admin/store';
import { api, API_MODE } from '@/lib/admin/api';
import { DEFAULT_PRICING } from '@/content/pricing';
import { annualPerVehicle, money, quote, type PricingCurrency } from '@/lib/pricing';
import { Btn, Card, CardHeader, ConfirmDialog, Field, Input, PageHeader, Pill, cx } from '@/components/admin/ui';

/**
 * Pricing configuration: per-vehicle monthly prices by fleet-size tier, per
 * market currency, plus each currency's annual discount. In API mode it edits
 * /api/pricing (the website picks changes up within ~5 minutes); in demo mode
 * it edits a local copy of content/pricing.ts.
 */
type CurrencyRow = { id: string; code: string; symbol: string; symbolAr: string; nameEn: string; nameAr: string; flag: string; decimals: number; annualDiscountPercent: number; isDefault: boolean; sortOrder: number; isActive: boolean };
type TierRow = { id: string; currencyCode: string; minVehicles: number; maxVehicles: number | null; monthlyPricePerVehicle: number | null; exampleVehicles: number | null; isActive: boolean; dirty?: boolean; isNew?: boolean };

const DEMO_KEY = 'axpense-admin-pricing-demo';

function fromDefault(): { currencies: CurrencyRow[]; tiers: TierRow[] } {
  const currencies = DEFAULT_PRICING.currencies.map((c, i) => ({
    id: `C-${c.code}`, code: c.code, symbol: c.symbol, symbolAr: c.symbolAr, nameEn: c.name.en, nameAr: c.name.ar, flag: c.flag,
    decimals: c.decimals, annualDiscountPercent: c.annualDiscountPercent, isDefault: c.code === DEFAULT_PRICING.defaultCurrency, sortOrder: i, isActive: true,
  }));
  const tiers = DEFAULT_PRICING.currencies.flatMap((c) => c.tiers.map((t) => ({
    id: `T-${c.code}-${t.min}`, currencyCode: c.code, minVehicles: t.min, maxVehicles: t.max, monthlyPricePerVehicle: t.monthly, exampleVehicles: t.example ?? null, isActive: true,
  })));
  return { currencies, tiers };
}

const toModel = (t: TierRow) => ({ currencyCode: t.currencyCode, minVehicles: t.minVehicles, maxVehicles: t.maxVehicles, monthlyPricePerVehicle: t.monthlyPricePerVehicle, exampleVehicles: t.exampleVehicles, isActive: t.isActive });
const currencyModel = (c: CurrencyRow) => ({ code: c.code, symbol: c.symbol, symbolAr: c.symbolAr, nameEn: c.nameEn, nameAr: c.nameAr, flag: c.flag, decimals: c.decimals, annualDiscountPercent: c.annualDiscountPercent, isDefault: c.isDefault, sortOrder: c.sortOrder, isActive: c.isActive });

export default function PricingAdminPage() {
  const { toast } = useAdmin();
  const [currencies, setCurrencies] = useState<CurrencyRow[]>([]);
  const [tiers, setTiers] = useState<TierRow[]>([]);
  const [code, setCode] = useState(DEFAULT_PRICING.defaultCurrency);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [del, setDel] = useState<TierRow | null>(null);
  const [preview, setPreview] = useState(25);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      if (API_MODE) {
        const data = await api<{ currencies: CurrencyRow[]; tiers: TierRow[] }>('/api/pricing');
        setCurrencies(data.currencies);
        setTiers(data.tiers);
      } else {
        let saved: { currencies: CurrencyRow[]; tiers: TierRow[] } | null = null;
        try { saved = JSON.parse(localStorage.getItem(DEMO_KEY) || 'null'); } catch { /* ignore */ }
        const d = saved ?? fromDefault();
        setCurrencies(d.currencies);
        setTiers(d.tiers);
      }
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Could not load pricing', 'error');
    } finally {
      setLoading(false);
    }
  }, [toast]);
  useEffect(() => { load(); }, [load]);

  const persistDemo = (c: CurrencyRow[], t: TierRow[]) => { try { localStorage.setItem(DEMO_KEY, JSON.stringify({ currencies: c, tiers: t.map(({ dirty, isNew, ...r }) => r) })); } catch { /* ignore */ } };

  const current = currencies.find((c) => c.code === code);
  const rows = tiers.filter((t) => t.currencyCode === code).sort((a, b) => a.minVehicles - b.minVehicles);
  const dirty = rows.some((r) => r.dirty) || !!(current as CurrencyRow & { dirty?: boolean })?.dirty;

  // Live preview with the unsaved values.
  const previewCurrency: PricingCurrency | null = useMemo(() => current ? ({
    code: current.code, flag: current.flag, symbol: current.symbol, symbolAr: current.symbolAr, name: { en: current.nameEn, ar: current.nameAr }, decimals: current.decimals,
    annualDiscountPercent: current.annualDiscountPercent,
    tiers: rows.filter((r) => r.isActive).map((r) => ({ min: r.minVehicles, max: r.maxVehicles, monthly: r.monthlyPricePerVehicle, example: r.exampleVehicles ?? undefined })),
  }) : null, [current, rows]);
  const cfg = previewCurrency ? { ...DEFAULT_PRICING, currencies: [previewCurrency], defaultCurrency: previewCurrency.code, customAbove: Math.max(...rows.filter((r) => r.isActive && r.maxVehicles !== null && r.monthlyPricePerVehicle !== null).map((r) => r.maxVehicles as number), 0), minVehicles: Math.min(...rows.filter((r) => r.isActive).map((r) => r.minVehicles), DEFAULT_PRICING.minVehicles) } : null;
  const pq = cfg && previewCurrency ? quote(cfg, previewCurrency, preview) : null;

  const setTier = (id: string, patch: Partial<TierRow>) => setTiers((all) => all.map((t) => (t.id === id ? { ...t, ...patch, dirty: true } : t)));
  const setCur = (patch: Partial<CurrencyRow>) => setCurrencies((all) => all.map((c) => (c.code === code ? { ...c, ...patch, dirty: true } as CurrencyRow : c)));

  function overlaps(): string | null {
    const active = rows.filter((r) => r.isActive);
    for (let i = 0; i < active.length; i++) for (let j = i + 1; j < active.length; j++) {
      const a = active[i], b = active[j];
      if (a.minVehicles <= (b.maxVehicles ?? Infinity) && b.minVehicles <= (a.maxVehicles ?? Infinity)) return `Tiers ${a.minVehicles}–${a.maxVehicles ?? '+'} and ${b.minVehicles}–${b.maxVehicles ?? '+'} overlap.`;
    }
    for (const r of active) {
      if (r.maxVehicles !== null && r.maxVehicles < r.minVehicles) return `Tier starting at ${r.minVehicles}: max must be ≥ min.`;
      if (r.monthlyPricePerVehicle !== null && r.monthlyPricePerVehicle <= 0) return `Tier starting at ${r.minVehicles}: price must be above 0 (leave it empty for custom pricing).`;
    }
    return null;
  }

  async function save() {
    const problem = overlaps();
    if (problem) { toast(problem, 'error'); return; }
    setBusy(true);
    try {
      if (API_MODE) {
        const cur = current as CurrencyRow & { dirty?: boolean };
        if (cur?.dirty) await api(`/api/pricing/currencies/${cur.id}`, { method: 'PUT', body: currencyModel(cur) });
        for (const r of rows.filter((x) => x.dirty)) {
          if (r.isNew) await api('/api/pricing/tiers', { method: 'POST', body: toModel(r) });
          else await api(`/api/pricing/tiers/${r.id}`, { method: 'PUT', body: toModel(r) });
        }
        await load();
      } else {
        const c = currencies.map(({ ...x }) => { delete (x as { dirty?: boolean }).dirty; return x; });
        const t = tiers.map((x) => ({ ...x, dirty: false, isNew: false }));
        setCurrencies(c); setTiers(t); persistDemo(c, t);
      }
      toast(`${code} pricing saved${API_MODE ? ' — live on the website within 5 minutes' : ' (demo)'}`);
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Could not save pricing', 'error');
    } finally {
      setBusy(false);
    }
  }

  async function removeTier(r: TierRow) {
    setDel(null);
    try {
      if (API_MODE && !r.isNew) await api(`/api/pricing/tiers/${r.id}`, { method: 'DELETE' });
      const t = tiers.filter((x) => x.id !== r.id);
      setTiers(t);
      if (!API_MODE) persistDemo(currencies, t);
      toast('Tier removed');
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Could not remove tier', 'error');
    }
  }

  function addTier() {
    const last = rows[rows.length - 1];
    const min = last ? (last.maxVehicles ?? last.minVehicles) + 1 : DEFAULT_PRICING.minVehicles;
    setTiers((all) => [...all, { id: `new-${Date.now()}`, currencyCode: code, minVehicles: min, maxVehicles: null, monthlyPricePerVehicle: null, exampleVehicles: null, isActive: true, dirty: true, isNew: true }]);
  }

  async function makeDefault() {
    setCurrencies((all) => all.map((c) => ({ ...c, isDefault: c.code === code, ...(c.code === code ? { dirty: true } : {}) }) as CurrencyRow));
  }

  const num = (v: string) => (v.trim() === '' ? null : Number(v));

  return (
    <>
      <PageHeader
        eyebrow="Website pricing"
        title="Pricing"
        desc="Per-vehicle monthly prices by fleet size for each market currency. Annual billing applies the currency's discount. Changes reach the website's pricing page and calculators without a redeploy."
        actions={<>
          {!API_MODE && <Btn onClick={() => { try { localStorage.removeItem(DEMO_KEY); } catch { /* ignore */ } load(); }}><RotateCcw />Reset demo prices</Btn>}
          <Btn variant="primary" onClick={save} disabled={busy || loading || !dirty}><Save />{busy ? 'Saving…' : 'Save changes'}</Btn>
        </>}
      />

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <Card className="h-fit p-2">
          <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Currencies</p>
          <nav aria-label="Currencies" className="flex flex-col">
            {currencies.map((c) => (
              <button key={c.code} type="button" onClick={() => setCode(c.code)} aria-current={code === c.code ? 'page' : undefined}
                className={cx('flex items-center justify-between rounded-lg px-3 py-2 text-start text-sm', code === c.code ? 'bg-sidebar-accent font-medium text-sidebar-primary' : 'text-foreground hover:bg-muted')}>
                <span className="flex items-center gap-2"><span aria-hidden="true">{c.flag}</span>{c.code}</span>
                <span className="flex items-center gap-1">{c.isDefault && <Star className="h-3.5 w-3.5 text-primary" aria-label="Default" />}{!c.isActive && <Pill>off</Pill>}</span>
              </button>
            ))}
          </nav>
        </Card>

        <div className="flex min-w-0 flex-col gap-6">
          {loading || !current ? <Card className="p-8 text-sm text-muted-foreground">Loading pricing…</Card> : (
            <>
              <Card>
                <CardHeader title={`${current.flag} ${current.code} — ${current.nameEn}`} action={current.isDefault ? <Pill tone="teal">Default currency</Pill> : <Btn size="sm" onClick={makeDefault}><Star />Make default</Btn>} />
                <div className="grid gap-4 p-5 sm:grid-cols-4">
                  <Field label="Annual discount %" htmlFor="disc"><Input id="disc" type="number" min={0} max={90} value={current.annualDiscountPercent} onChange={(e) => setCur({ annualDiscountPercent: Number(e.target.value) })} /></Field>
                  <Field label="Decimals shown" htmlFor="dec"><Input id="dec" type="number" min={0} max={3} value={current.decimals} onChange={(e) => setCur({ decimals: Number(e.target.value) })} /></Field>
                  <Field label="Symbol (EN / AR)" htmlFor="sym"><div className="flex gap-2"><Input id="sym" value={current.symbol} onChange={(e) => setCur({ symbol: e.target.value })} /><Input aria-label="Arabic symbol" value={current.symbolAr} onChange={(e) => setCur({ symbolAr: e.target.value })} dir="rtl" /></div></Field>
                  <Field label="Shown on website" htmlFor="act"><label className="flex h-10 items-center gap-2 text-sm"><input id="act" type="checkbox" checked={current.isActive} onChange={(e) => setCur({ isActive: e.target.checked })} />Active</label></Field>
                </div>
              </Card>

              <Card>
                <CardHeader title="Fleet-size tiers" action={<Btn size="sm" onClick={addTier}><Plus />Add tier</Btn>} />
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-sm">
                    <thead className="bg-muted/50 text-muted-foreground">
                      <tr>
                        <th className="px-4 py-3 text-start font-medium">Min vehicles</th>
                        <th className="px-4 py-3 text-start font-medium">Max vehicles</th>
                        <th className="px-4 py-3 text-start font-medium">Monthly / vehicle</th>
                        <th className="px-4 py-3 text-start font-medium">Annual / vehicle</th>
                        <th className="px-4 py-3 text-start font-medium">Table example</th>
                        <th className="px-4 py-3 text-start font-medium">Active</th>
                        <th className="px-4 py-3" />
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r) => (
                        <tr key={r.id} className={cx('border-t border-border', r.dirty && 'bg-amber-50/60')}>
                          <td className="px-4 py-2"><Input aria-label="Min vehicles" type="number" min={1} value={r.minVehicles} onChange={(e) => setTier(r.id, { minVehicles: Number(e.target.value) })} className="w-24" /></td>
                          <td className="px-4 py-2"><Input aria-label="Max vehicles" type="number" placeholder="no max" value={r.maxVehicles ?? ''} onChange={(e) => setTier(r.id, { maxVehicles: num(e.target.value) })} className="w-24" /></td>
                          <td className="px-4 py-2"><Input aria-label="Monthly price per vehicle" type="number" step="0.01" placeholder="custom" value={r.monthlyPricePerVehicle ?? ''} onChange={(e) => setTier(r.id, { monthlyPricePerVehicle: num(e.target.value) })} className="w-28" /></td>
                          <td className="px-4 py-2 text-muted-foreground">{r.monthlyPricePerVehicle !== null && previewCurrency ? money(annualPerVehicle(previewCurrency, r.monthlyPricePerVehicle), previewCurrency, 'en') : 'Custom'}</td>
                          <td className="px-4 py-2"><Input aria-label="Example fleet size" type="number" value={r.exampleVehicles ?? ''} onChange={(e) => setTier(r.id, { exampleVehicles: num(e.target.value) })} className="w-24" /></td>
                          <td className="px-4 py-2"><input aria-label="Active" type="checkbox" checked={r.isActive} onChange={(e) => setTier(r.id, { isActive: e.target.checked })} /></td>
                          <td className="px-4 py-2 text-end"><Btn size="sm" variant="ghost" aria-label="Remove tier" onClick={() => setDel(r)}><Trash2 /></Btn></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="border-t border-border px-5 py-3 text-xs text-muted-foreground">Leave “Max vehicles” empty for an open-ended tier, and the price empty for custom pricing (Talk to Sales). Fleets above the highest priced tier get custom pricing.</p>
              </Card>

              {pq && previewCurrency && (
                <Card className="p-5">
                  <div className="flex flex-wrap items-center gap-4">
                    <Field label="Preview: vehicles" htmlFor="preview"><Input id="preview" type="number" min={1} value={preview} onChange={(e) => setPreview(Number(e.target.value) || 1)} className="w-28" /></Field>
                    <p className="text-sm text-foreground">
                      {pq.kind === 'custom' ? 'Custom pricing (Talk to Sales)' : <>
                        <strong>{money(pq.monthlyTotal, previewCurrency, 'en', 0)}</strong> / month ({money(pq.perVehicleMonthly, previewCurrency, 'en')} × {pq.vehicles}) · <strong>{money(pq.annualTotal, previewCurrency, 'en', 0)}</strong> / year billed annually (saves {money(pq.annualSaving, previewCurrency, 'en', 0)})
                      </>}
                    </p>
                  </div>
                </Card>
              )}
            </>
          )}
        </div>
      </div>

      <ConfirmDialog open={!!del} onCancel={() => setDel(null)} onConfirm={() => del && removeTier(del)} title="Remove this tier?" body="Vehicles in this range will fall back to custom pricing until another tier covers them." confirmLabel="Remove" />
    </>
  );
}
