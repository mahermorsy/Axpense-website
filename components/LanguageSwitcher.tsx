'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Check, Globe } from 'lucide-react';
import { toArabic, toEnglish } from '@/lib/i18n-routes';

// Globe + language code, like the app's language menu ("🌐 EN").
export function LanguageSwitcher({ current }: { current: 'en' | 'ar' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || '/';
  const enHref = current === 'en' ? pathname : toEnglish(pathname);
  const arHref = current === 'ar' ? pathname : toArabic(pathname);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', esc); };
  }, [open]);

  const items = [
    { code: 'en' as const, label: 'English', href: enHref },
    { code: 'ar' as const, label: 'العربية', href: arHref },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={current === 'ar' ? 'تغيير اللغة' : 'Change language'}
        onClick={() => setOpen(!open)}
        className="inline-flex h-9 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span>{current.toUpperCase()}</span>
      </button>
      {open && (
        <div role="menu" className="absolute end-0 top-full z-50 mt-2 min-w-[150px] overflow-hidden rounded-lg border border-border bg-card p-1 shadow-elevated">
          {items.map((item) => (
            <Link
              key={item.code}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              lang={item.code}
              className={`flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent ${item.code === current ? 'font-semibold text-primary' : 'text-foreground'}`}
            >
              {item.label}
              {item.code === current && <Check className="h-4 w-4" aria-hidden="true" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
