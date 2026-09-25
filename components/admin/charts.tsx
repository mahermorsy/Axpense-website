'use client';

import { useState } from 'react';

// Single-series charts in the brand teal (validated: contrast ≥3:1 on white).
// Hover/focus tooltips on every mark; values are also in the table view.

export type Point = { key: string; label: string; value: number; sub?: string };

export function ColumnChart({ data, height = 220, valueLabel = 'Leads' }: { data: Point[]; height?: number; valueLabel?: string }) {
  const [hover, setHover] = useState<number | null>(null);
  const [table, setTable] = useState(false);
  const max = Math.max(1, ...data.map((d) => d.value));
  const nice = niceMax(max);
  const ticks = [0, nice / 2, nice];
  const W = 1000, H = height, padL = 36, padB = 26, padT = 10;
  const innerW = W - padL - 4, innerH = H - padB - padT;
  const step = innerW / Math.max(1, data.length);
  const barW = Math.max(2, Math.min(28, step - 2)); // keep a ≥2px gap
  const labelEvery = Math.ceil(data.length / 8);

  return (
    <div>
      <div className="mb-2 flex justify-end">
        <button type="button" onClick={() => setTable(!table)} className="text-xs font-medium text-primary hover:underline">{table ? 'Show chart' : 'Show as table'}</button>
      </div>
      {table ? (
        <div className="max-h-64 overflow-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-muted text-left text-xs text-muted-foreground"><tr><th className="px-3 py-2 font-medium">Period</th><th className="px-3 py-2 text-right font-medium">{valueLabel}</th></tr></thead>
            <tbody>{data.map((d) => <tr key={d.key} className="border-t border-border"><td className="px-3 py-1.5">{d.sub ?? d.label}</td><td className="px-3 py-1.5 text-right tabular-nums">{d.value}</td></tr>)}</tbody>
          </table>
        </div>
      ) : (
        <div className="relative">
          <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`${valueLabel} over time`} preserveAspectRatio="none" style={{ height }}>
            {ticks.map((t) => {
              const y = padT + innerH - (t / nice) * innerH;
              return (
                <g key={t}>
                  <line x1={padL} x2={W} y1={y} y2={y} stroke="hsl(var(--border))" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                </g>
              );
            })}
            {data.map((d, i) => {
              const h = (d.value / nice) * innerH;
              const x = padL + i * step + (step - barW) / 2;
              const y = padT + innerH - h;
              const r = Math.min(4, barW / 2, h);
              return (
                <g key={d.key}>
                  {h > 0 && <path d={roundedTop(x, y, barW, h, r)} fill={hover === i ? 'hsl(176 58% 34%)' : 'hsl(var(--primary))'} />}
                  <rect
                    x={padL + i * step} y={padT} width={step} height={innerH} fill="transparent" tabIndex={0}
                    aria-label={`${d.sub ?? d.label}: ${d.value} ${valueLabel.toLowerCase()}`}
                    onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}
                    className="cursor-default outline-none"
                  />
                </g>
              );
            })}
          </svg>
          {/* Axis labels as HTML so text isn't stretched by preserveAspectRatio */}
          <div className="pointer-events-none absolute inset-0">
            {ticks.map((t) => (
              <span key={t} className="absolute left-0 -translate-y-1/2 text-[11px] tabular-nums text-muted-foreground" style={{ top: `${((padT + innerH - (t / nice) * innerH) / H) * 100}%` }}>{t}</span>
            ))}
            {data.map((d, i) => (i % labelEvery === 0 ? (
              <span key={d.key} className="absolute bottom-0 -translate-x-1/2 whitespace-nowrap text-[11px] text-muted-foreground" style={{ left: `${((padL + i * step + step / 2) / W) * 100}%` }}>{d.label}</span>
            ) : null))}
            {hover !== null && (
              <div className="absolute z-10 -translate-x-1/2 -translate-y-full rounded-lg border border-border bg-card px-3 py-2 shadow-elevated"
                style={{ left: `${Math.min(92, Math.max(8, ((padL + hover * step + step / 2) / W) * 100))}%`, top: `${((padT + innerH - (data[hover].value / nice) * innerH) / H) * 100}%`, marginTop: -8 }}>
                <p className="text-base font-bold tabular-nums text-foreground">{data[hover].value}</p>
                <p className="flex items-center gap-1.5 whitespace-nowrap text-xs text-muted-foreground"><span className="h-0.5 w-3 rounded bg-primary" />{valueLabel} · {data[hover].sub ?? data[hover].label}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function roundedTop(x: number, y: number, w: number, h: number, r: number) {
  return `M${x},${y + h} L${x},${y + r} Q${x},${y} ${x + r},${y} L${x + w - r},${y} Q${x + w},${y} ${x + w},${y + r} L${x + w},${y + h} Z`;
}
function niceMax(v: number) {
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  // even integers only, so the midpoint tick is a whole number of leads
  if (v <= 2) return 2;
  for (const m of [1, 2, 4, 6, 8, 10]) if (m * pow >= v && (m * pow) % 2 === 0) return m * pow;
  return 10 * pow;
}

/** Horizontal bar list: label · bar · value (direct labels, so no tooltip needed). */
export function BarList({ items, total, format = (n: number) => String(n) }: { items: { label: string; value: number; hint?: string }[]; total?: number; format?: (n: number) => string }) {
  const max = Math.max(1, ...items.map((i) => i.value));
  const sum = total ?? items.reduce((s, i) => s + i.value, 0);
  if (!items.length) return <p className="py-6 text-center text-sm text-muted-foreground">No data for this period.</p>;
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.label} className="group" title={`${it.label}: ${format(it.value)} (${sum ? Math.round((it.value / sum) * 100) : 0}%)`}>
          <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
            <span className="truncate text-foreground">{it.label}{it.hint && <span className="ms-1.5 text-xs text-muted-foreground">{it.hint}</span>}</span>
            <span className="shrink-0 tabular-nums"><span className="font-semibold text-foreground">{format(it.value)}</span><span className="ms-1.5 text-xs text-muted-foreground">{sum ? Math.round((it.value / sum) * 100) : 0}%</span></span>
          </div>
          <div className="h-2 rounded-full bg-muted">
            <div className="h-2 rounded-full bg-primary transition-[width,filter] group-hover:brightness-90" style={{ width: `${Math.max(2, (it.value / max) * 100)}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
