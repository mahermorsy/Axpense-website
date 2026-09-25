'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BookOpen, Building2, FolderOpen, Info, LayoutGrid, Lightbulb, LogIn, Menu, Tag, X } from 'lucide-react';
import { Button } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LOGIN, loginLabel, primaryCta } from '@/lib/cta';
import { lhref, type Lang } from '@/lib/i18n';

const NAV = [
  { label: { en: 'Features', ar: 'المميزات' }, href: '/features', icon: LayoutGrid },
  { label: { en: 'Solutions', ar: 'الحلول' }, href: '/solutions', icon: Lightbulb },
  { label: { en: 'Industries', ar: 'القطاعات' }, href: '/industries', icon: Building2 },
  { label: { en: 'Pricing', ar: 'الأسعار' }, href: '/pricing', icon: Tag },
  { label: { en: 'Resources', ar: 'الموارد' }, href: '/resources', icon: FolderOpen },
  { label: { en: 'Blog', ar: 'المدونة' }, href: '/blog', icon: BookOpen },
  { label: { en: 'About', ar: 'من نحن' }, href: '/about', icon: Info },
];

const T = {
  en: { home: 'Axpense home', open: 'Open navigation', close: 'Close navigation', primary: 'Primary', mobile: 'Mobile primary' },
  ar: { home: 'أكسبنس - الصفحة الرئيسية', open: 'فتح القائمة', close: 'إغلاق القائمة', primary: 'التنقل الرئيسي', mobile: 'القائمة' },
};

// Same proportions as the Axpense app's public header: 80px bar, 40px-tall
// logo, centred nav, globe language menu, Sign In and one primary button.
// English and Arabic share this component; RTL mirrors it automatically.
export function Header({ lang = 'en' }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const t = T[lang];
  const cta = primaryCta(lang);
  const nav = NAV.map((n) => ({ ...n, label: n.label[lang], href: lhref(lang, n.href) }));
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href={lhref(lang, '/')} aria-label={t.home} onClick={() => setOpen(false)} className="shrink-0">
          <Image src="/logo.png" alt={lang === 'ar' ? 'أكسبنس' : 'Axpense'} width={839} height={184} priority className="h-8 w-auto lg:h-10" />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label={t.primary}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`inline-flex h-9 items-center whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors ${isActive(item.href) ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitcher current={lang} />
          <a href={LOGIN.href} className="hidden h-9 items-center rounded-md px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted sm:inline-flex">{loginLabel(lang)}</a>
          <span className="hidden sm:inline-flex"><Button href={cta.href}>{cta.label}</Button></span>
          <button type="button" aria-label={open ? t.close : t.open} aria-expanded={open} onClick={() => setOpen(!open)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted xl:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-3 py-3 sm:px-5" aria-label={t.mobile}>
            {nav.map(({ label, href, icon: Icon }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex h-10 items-center gap-3 rounded-lg px-4 text-sm font-medium ${isActive(href) ? 'bg-sidebar-accent text-sidebar-primary' : 'text-sidebar-foreground hover:bg-sidebar-accent'}`}>
                <Icon className="h-4 w-4" />{label}
              </Link>
            ))}
            <div className="my-2 h-px bg-sidebar-border" />
            <a href={LOGIN.href} className="flex h-10 items-center gap-3 rounded-lg px-4 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent"><LogIn className="h-4 w-4 rtl:rotate-180" />{loginLabel(lang)}</a>
            <div className="px-1 pt-2 sm:hidden [&>a]:w-full"><Button href={cta.href}>{cta.label}</Button></div>
          </nav>
        </div>
      )}
    </header>
  );
}
