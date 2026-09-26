'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Globe } from 'lucide-react';
import { toArabic, toEnglish } from '@/lib/i18n-routes';

// Compact direct toggle. With only two languages, a menu adds an unnecessary click.
export function LanguageSwitcher({ current }: { current: 'en' | 'ar' }) {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const next = current === 'en' ? 'ar' : 'en';
  const baseHref = next === 'ar' ? toArabic(pathname) : toEnglish(pathname);
  const query = searchParams.toString();
  const href = query ? `${baseHref}?${query}` : baseHref;
  const label = next === 'ar' ? 'AR' : 'EN';
  const ariaLabel = current === 'ar' ? 'Switch to English' : 'التبديل إلى العربية';

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      lang={next}
      className="inline-flex h-9 items-center justify-center gap-2 rounded-md px-3 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}
