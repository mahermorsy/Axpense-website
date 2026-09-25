'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { BarChart3, ChevronDown, ExternalLink, FileText, HelpCircle, LogOut, Menu, RotateCcw, Users, UserSearch, X } from 'lucide-react';
import { useAdmin } from '@/lib/admin/store';
import { can, ROLE_LABEL, type Area } from '@/lib/admin/types';
import { Avatar, ConfirmDialog, Toasts, cx } from './ui';

const NAV: { area: Area; label: string; href: string; icon: typeof BarChart3 }[] = [
  { area: 'dashboard', label: 'Analytics', href: '/admin', icon: BarChart3 },
  { area: 'leads', label: 'Leads', href: '/admin/leads', icon: UserSearch },
  { area: 'blog', label: 'Blog articles', href: '/admin/blog', icon: FileText },
  { area: 'faqs', label: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
  { area: 'users', label: 'Users', href: '/admin/users', icon: Users },
];

function areaFor(path: string): Area {
  if (path.startsWith('/admin/leads')) return 'leads';
  if (path.startsWith('/admin/blog')) return 'blog';
  if (path.startsWith('/admin/faqs')) return 'faqs';
  if (path.startsWith('/admin/users')) return 'users';
  return 'dashboard';
}

export function AdminShell({ children }: { children: ReactNode }) {
  const { ready, me, signOut, toasts, leads, resetDemo, toast, mode } = useAdmin();
  const pathname = usePathname() || '/admin';
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (ready && !me) router.replace('/admin/login'); }, [ready, me, router]);
  useEffect(() => { setNavOpen(false); }, [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const h = (e: MouseEvent) => { if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [menuOpen]);

  if (!ready || !me) return <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">Loading…</div>;

  const area = areaFor(pathname);
  const allowed = can(me.role, area);
  const newLeads = leads.filter((l) => l.status === 'new').length;
  const isActive = (href: string) => (href === '/admin' ? pathname === '/admin' : pathname.startsWith(href));

  const sidebar = (
    <nav className="flex flex-1 flex-col gap-1 px-3" aria-label="Admin">
      <p className="px-3 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Manage</p>
      {NAV.filter((n) => can(me.role, n.area)).map(({ label, href, icon: Icon, area: a }) => (
        <Link key={href} href={href} aria-current={isActive(href) ? 'page' : undefined}
          className={cx('flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors', isActive(href) ? 'bg-sidebar-accent text-sidebar-primary' : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground')}>
          <Icon className="h-4 w-4" aria-hidden="true" />
          <span className="flex-1">{label}</span>
          {a === 'leads' && newLeads > 0 && <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold text-primary-foreground">{newLeads}</span>}
        </Link>
      ))}
      <div className="mt-auto space-y-1 pb-4 pt-6">
        <a href="/" target="_blank" rel="noopener noreferrer" className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent"><ExternalLink className="h-4 w-4" />View website</a>
        {mode === 'demo' && (
          <div className="mx-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
            <p className="font-semibold">Demo mode</p>
            <p className="mt-1">Sample data, saved only in this browser. Set NEXT_PUBLIC_API_URL to connect the real backend.</p>
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[250px_1fr]">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen flex-col border-e border-sidebar-border bg-sidebar lg:flex">
        <Link href="/admin" className="flex h-16 items-center gap-2 border-b border-sidebar-border px-5">
          <Image src="/logo.png" alt="Axpense" width={839} height={184} className="h-7 w-auto" priority />
          <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Admin</span>
        </Link>
        {sidebar}
      </aside>

      {/* Mobile sidebar */}
      {navOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div className="absolute inset-0 bg-foreground/30" onClick={() => setNavOpen(false)} />
          <aside className="absolute inset-y-0 start-0 flex w-72 flex-col bg-sidebar shadow-elevated">
            <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-5">
              <Image src="/logo.png" alt="Axpense" width={839} height={184} className="h-7 w-auto" />
              <button type="button" onClick={() => setNavOpen(false)} aria-label="Close menu" className="rounded-md p-1 hover:bg-muted"><X className="h-5 w-5" /></button>
            </div>
            {sidebar}
          </aside>
        </div>
      )}

      <div className="min-w-0">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-3 border-b border-border bg-card/70 px-4 backdrop-blur-sm lg:px-8">
          <button type="button" onClick={() => setNavOpen(true)} aria-label="Open menu" className="rounded-lg p-2 hover:bg-muted lg:hidden"><Menu className="h-5 w-5" /></button>
          <div className="hidden text-sm text-muted-foreground lg:block">Signed in as <span className="font-medium text-foreground">{ROLE_LABEL[me.role]}</span></div>
          <div ref={menuRef} className="relative">
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-haspopup="menu" className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-muted">
              <Avatar name={me.name} />
              <span className="hidden text-start sm:block"><span className="block text-sm font-medium leading-tight text-foreground">{me.name}</span><span className="block text-xs text-muted-foreground">{ROLE_LABEL[me.role]}</span></span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
            {menuOpen && (
              <div role="menu" className="absolute end-0 top-full z-50 mt-2 w-56 rounded-lg border border-border bg-card p-1 shadow-elevated">
                <p className="truncate px-3 py-2 text-xs text-muted-foreground">{me.email}</p>
                {mode === 'demo' && <button role="menuitem" type="button" onClick={() => { setMenuOpen(false); setConfirmReset(true); }} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"><RotateCcw className="h-4 w-4" />Reset demo data</button>}
                <button role="menuitem" type="button" onClick={() => { signOut(); router.replace('/admin/login'); }} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"><LogOut className="h-4 w-4" />Sign out</button>
              </div>
            )}
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-8">
          {allowed ? children : (
            <div className="rounded-xl border border-border bg-card p-10 text-center">
              <p className="text-lg font-semibold text-foreground">You don’t have access to this section</p>
              <p className="mt-1 text-sm text-muted-foreground">Your role ({ROLE_LABEL[me.role]}) can’t open it. Ask an admin to change your role.</p>
            </div>
          )}
        </main>
      </div>

      <ConfirmDialog open={confirmReset} onCancel={() => setConfirmReset(false)} onConfirm={() => { resetDemo(); setConfirmReset(false); toast('Demo data reset'); }} title="Reset demo data?" body="All leads, articles, FAQs and users go back to the original sample data. Your changes in this browser will be lost." confirmLabel="Reset" />
      <Toasts items={toasts} />
    </div>
  );
}
