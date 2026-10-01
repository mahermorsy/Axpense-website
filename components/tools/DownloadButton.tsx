'use client';

import { Download, Printer } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import type { Lang } from '@/lib/i18n';

/** PDF download (fires `checklist_download`) + print. */
export function ChecklistActions({ pdf, tool, lang }: { pdf: string; tool: string; lang: Lang }) {
  const ar = lang === 'ar';
  return (
    <div className="flex flex-wrap gap-3 print:hidden">
      <a
        href={pdf}
        download
        onClick={() => trackEvent('checklist_download', { tool, lang, page_type: 'tool', format: 'pdf' })}
        className="inline-flex h-10 items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
      >
        <Download className="h-4 w-4" aria-hidden="true" />{ar ? 'تحميل PDF مجانًا' : 'Download free PDF'}
      </a>
      <button type="button" onClick={() => { trackEvent('checklist_download', { tool, lang, page_type: 'tool', format: 'print' }); window.print(); }} className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted">
        <Printer className="h-4 w-4" aria-hidden="true" />{ar ? 'طباعة' : 'Print'}
      </button>
    </div>
  );
}
