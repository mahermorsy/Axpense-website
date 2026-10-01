'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { X } from 'lucide-react';
import { LeadForm } from '@/components/LeadForm';
import type { Lang } from '@/lib/i18n';

const COPY = {
  en: {
    title: 'Book a demo',
    desc: 'Tell us about your vehicles and assets. The Axpense team will set up your access or walk you through the product.',
    close: 'Close demo form',
  },
  ar: {
    title: 'احجز عرضًا تجريبيًا',
    desc: 'أخبرنا عن مركباتك وأصولك. سيجهّز فريق أكسبنس حسابك أو يعرض لك المنتج خطوة بخطوة.',
    close: 'إغلاق نموذج العرض التجريبي',
  },
} satisfies Record<Lang, { title: string; desc: string; close: string }>;

const PLAN_KEYS = ['vehicles', 'currency', 'billing'] as const;

function isDemoPath(pathname: string) {
  return pathname === '/demo' || pathname === '/ar/demo';
}

export function DemoModalProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = COPY[lang];

  // Plan chosen on /pricing (vehicles, currency, billing) travels with the link
  // (/demo?vehicles=25&currency=EGP&billing=annual) and pre-fills the form.
  function openDemoModal(fromHref?: string) {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set('demo', '1');
    if (fromHref) {
      const src = new URL(fromHref, window.location.origin).searchParams;
      for (const k of PLAN_KEYS) {
        const v = src.get(k);
        if (v) nextUrl.searchParams.set(k, v); else nextUrl.searchParams.delete(k);
      }
    }
    // Update the URL synchronously so the form reads the plan when it mounts.
    window.history.replaceState(window.history.state, '', `${nextUrl.pathname}?${nextUrl.searchParams.toString()}${nextUrl.hash}`);
    setOpen(true);
  }

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (event.defaultPrevented) return;
      const anchor = (event.target as HTMLElement).closest('a');
      if (!anchor?.href) return;
      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin || !isDemoPath(url.pathname)) return;

      event.preventDefault();
      openDemoModal(anchor.href);
    }

    document.addEventListener('click', onDocumentClick, true);
    return () => document.removeEventListener('click', onDocumentClick, true);
  }, [router]);

  useEffect(() => {
    const onOpen = (e: Event) => openDemoModal((e as CustomEvent<{ href?: string }>).detail?.href);
    window.addEventListener('open-demo-modal', onOpen);
    return () => window.removeEventListener('open-demo-modal', onOpen);
  });

  useEffect(() => {
    if (searchParams.get('demo') === '1') setOpen(true);
  }, [searchParams]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    if (new URLSearchParams(window.location.search).get('demo') !== '1') return;
    const params = new URLSearchParams(window.location.search);
    params.delete('demo');
    const next = params.toString();
    router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
  }

  return (
    <div>
      {children}
      {open && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-foreground/50 px-4 py-6 backdrop-blur-sm sm:py-10" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title" onClick={close}>
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-5 shadow-elevated sm:p-7" onClick={(event) => event.stopPropagation()}>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p id="demo-modal-title" className="text-2xl font-bold text-foreground">{t.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.desc}</p>
              </div>
              <button type="button" onClick={close} aria-label={t.close} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <LeadForm lang={lang} onDone={close} />
          </div>
        </div>
      )}
    </div>
  );
}
