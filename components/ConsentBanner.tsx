'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { readConsent, saveConsent } from '@/lib/consent';
import type { Lang } from '@/lib/i18n';

const T = {
  en: {
    text: 'We use cookies for analytics and advertising only if you agree. Essential cookies keep the site working.',
    policy: 'Cookie policy', accept: 'Accept all', reject: 'Reject non-essential', label: 'Cookie consent',
  },
  ar: {
    text: 'نستخدم ملفات الارتباط للتحليلات والإعلانات فقط بموافقتك. ملفات الارتباط الأساسية ضرورية لعمل الموقع.',
    policy: 'سياسة ملفات الارتباط', accept: 'قبول الكل', reject: 'رفض غير الضروري', label: 'الموافقة على ملفات الارتباط',
  },
};

/** Consent banner for Google Consent Mode v2 (shown until the visitor chooses). */
export function ConsentBanner({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(!readConsent()); }, []);
  if (!open) return null;
  const choose = (all: boolean) => { saveConsent({ analytics: all, ads: all }); setOpen(false); };
  return (
    <div role="dialog" aria-live="polite" aria-label={t.label} className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-elevated sm:inset-x-6 print:hidden">
      <p className="text-sm leading-relaxed text-foreground">
        {t.text} <Link href="/cookie-policy" className="font-medium text-primary underline-offset-2 hover:underline">{t.policy}</Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose(true)} className="inline-flex h-10 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">{t.accept}</button>
        <button type="button" onClick={() => choose(false)} className="inline-flex h-10 items-center rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted">{t.reject}</button>
      </div>
    </div>
  );
}
