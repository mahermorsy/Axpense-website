'use client';

import { useState } from 'react';
import { INSPECTION_GROUPS } from '@/content/tools/checklist-data';
import type { Lang } from '@/lib/i18n';
import { ChecklistActions } from './DownloadButton';

/** Interactive vehicle inspection checklist (state stays in the browser tab only). */
export function InspectionChecklist({ lang = 'en' }: { lang?: Lang }) {
  const ar = lang === 'ar';
  const total = INSPECTION_GROUPS.reduce((n, g) => n + g.items.length, 0);
  const [done, setDone] = useState<Record<string, boolean>>({});
  const count = Object.values(done).filter(Boolean).length;
  return (
    <div className="card-app p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-medium text-foreground" aria-live="polite">
          {ar ? `تم فحص ${count} من ${total} بندًا` : `${count} of ${total} items checked`}
        </p>
        <ChecklistActions pdf={`/downloads/vehicle-inspection-checklist-${lang}.pdf`} tool="vehicle_inspection_checklist" lang={lang} />
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted" aria-hidden="true"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(count / total) * 100}%` }} /></div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {INSPECTION_GROUPS.map((g, gi) => (
          <fieldset key={g.title.en}>
            <legend className="mb-3 text-base font-semibold text-foreground">{g.title[lang]}</legend>
            <ul className="flex flex-col gap-2">
              {g.items.map((it, ii) => {
                const id = `chk-${gi}-${ii}`;
                return (
                  <li key={id}>
                    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-card p-3 text-sm text-ink-700 hover:border-primary/40">
                      <input id={id} type="checkbox" checked={!!done[id]} onChange={(e) => setDone((d) => ({ ...d, [id]: e.target.checked }))} className="mt-0.5 h-4 w-4 shrink-0 accent-[hsl(var(--primary))]" />
                      <span>{it[lang]}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
      </div>
    </div>
  );
}
