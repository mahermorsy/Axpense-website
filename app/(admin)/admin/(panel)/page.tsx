'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, CalendarCheck, Eye, FileText, Filter, HelpCircle, Inbox, Trophy, UserX } from 'lucide-react';
import { useAdmin } from '@/lib/admin/store';
import type { DashboardView } from '@/lib/admin/dashboard';
import { can, LEAD_STATUSES } from '@/lib/admin/types';
import { BarList, ColumnChart, type Point } from '@/components/admin/charts';
import { Card, CardHeader, LeadStatusBadge, PageHeader, Select, cx, timeAgo } from '@/components/admin/ui';

const RANGES = [
  { id: 7, label: 'Last 7 days' },
  { id: 30, label: 'Last 30 days' },
  { id: 90, label: 'Last 90 days' },
];
const SOURCE_NAMES: Record<string, string> = {
  '/': 'Homepage', '/demo': 'Book a Demo page', '/pricing': 'Pricing', '/ar/contact': 'Arabic contact', '/contact': 'Contact page',
  '/landing/fleet-management-egypt': 'LP · Fleet management Egypt', '/landing/fleet-maintenance-egypt': 'LP · Fleet maintenance Egypt',
  '/features/fleet-maintenance': 'Feature · Fleet maintenance', '/en-sa': 'Market · Saudi Arabia',
};
const STATUS_LABEL = Object.fromEntries(LEAD_STATUSES.map((s) => [s.id, s.label]));

export default function DashboardPage() {
  const { me, leads, posts, faqs, fetchDashboard } = useAdmin();
  const [range, setRange] = useState(30);
  const [country, setCountry] = useState('all');
  const [view, setView] = useState<DashboardView | null>(null);
  const [loading, setLoading] = useState(true);
  const showLeads = can(me?.role, 'leads');
  const showContent = can(me?.role, 'blog');
  const countries = useMemo(() => Array.from(new Set(leads.map((l) => l.country))).sort(), [leads]);

  // Re-fetch when filters change or data changes (demo mode recomputes locally).
  useEffect(() => {
    let alive = true;
    setLoading(true);
    fetchDashboard(range, country === 'all' ? null : country).then((v) => { if (alive) { setView(v); setLoading(false); } });
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range, country, leads, posts, faqs]);

  const series: Point[] = (view?.series ?? []).map((p, i) => {
    const end = new Date(new Date(p.end).getTime() - 1);
    const label = end.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    return { key: String(i), label, value: p.value, sub: view?.bucket === 'week' ? `Week ending ${label}` : end.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }) };
  });

  const L = view?.leads;
  const C = view?.content;
  const kpis = showLeads && L ? [
    { label: 'New leads', value: L.newLeads, prev: L.prevNewLeads, icon: Inbox, fmt: (n: number) => String(n), fmtDelta: (n: number) => String(n) },
    { label: 'Demo-booked rate', value: L.demoBookedRate, prev: L.prevDemoBookedRate, icon: CalendarCheck, fmt: (n: number) => `${n}%`, fmtDelta: (n: number) => `${n} pts` },
    { label: 'Won deals', value: L.wonDeals, prev: L.prevWonDeals, icon: Trophy, fmt: (n: number) => String(n), fmtDelta: (n: number) => String(n) },
    { label: 'Unassigned new leads', value: L.unassignedNew, icon: UserX, fmt: (n: number) => String(n), attention: L.unassignedNew > 0 },
  ] : C ? [
    { label: 'Published articles', value: C.publishedPosts, icon: FileText, fmt: (n: number) => String(n) },
    { label: 'Drafts', value: C.draftPosts, icon: FileText, fmt: (n: number) => String(n) },
    { label: 'Article views', value: C.totalViews, icon: Eye, fmt: (n: number) => n.toLocaleString('en-US') },
    { label: 'Published FAQs', value: C.publishedFaqs, icon: HelpCircle, fmt: (n: number) => String(n) },
  ] : [];
  const maxViews = Math.max(1, ...(view?.topPosts ?? []).map((p) => p.views));

  return (
    <>
      <PageHeader eyebrow="Analytics & insights" title={`Welcome back, ${me?.name.split(' ')[0] ?? ''}`} desc="How the website is turning visitors into leads, and how your content performs." />

      {/* Filters: one row, above everything they scope */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div role="radiogroup" aria-label="Date range" className="inline-flex rounded-lg border border-border bg-card p-1">
          {RANGES.map((r) => (
            <button key={r.id} type="button" role="radio" aria-checked={range === r.id} onClick={() => setRange(r.id)}
              className={cx('rounded-md px-3 py-1.5 text-sm font-medium transition-colors', range === r.id ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground')}>{r.label}</button>
          ))}
        </div>
        {showLeads && (
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <label htmlFor="country" className="sr-only">Country</label>
            <Select id="country" value={country} onChange={(e) => setCountry(e.target.value)} className="h-10 w-44">
              <option value="all">All countries</option>
              {countries.map((c) => <option key={c}>{c}</option>)}
            </Select>
          </div>
        )}
      </div>

      {/* Refetch keeps the frame: previous render stays, dimmed */}
      <div className={cx('transition-opacity', loading && view ? 'opacity-60' : 'opacity-100')}>
        {!view ? <p className="py-20 text-center text-sm text-muted-foreground">Loading analytics…</p> : (
          <>
            <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {kpis.map((k) => {
                const delta = 'prev' in k && k.prev !== undefined ? k.value - k.prev : undefined;
                return (
                  <Card key={k.label} className={cx('p-5', 'attention' in k && k.attention && 'border-amber-300')}>
                    <div className="flex items-start justify-between">
                      <span className="icon-tile h-10 w-10 rounded-lg"><k.icon className="h-5 w-5" aria-hidden="true" /></span>
                      {delta !== undefined && 'fmtDelta' in k && k.fmtDelta && (
                        <span className={cx('flex items-center gap-0.5 text-xs font-semibold', delta >= 0 ? 'text-green-700' : 'text-red-700')}>
                          {delta >= 0 ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}{k.fmtDelta(Math.abs(delta))}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{k.label}</p>
                    <p className="mt-0.5 text-2xl font-bold tabular-nums text-foreground">{k.fmt(k.value)}</p>
                    {delta !== undefined && <p className="mt-0.5 text-xs text-muted-foreground">vs. previous {range} days</p>}
                    {'attention' in k && k.attention && <Link href="/admin/leads?status=new" className="mt-1 inline-block text-xs font-medium text-amber-800 hover:underline">Assign them →</Link>}
                  </Card>
                );
              })}
            </div>

            {showLeads && L && (
              <>
                <div className="mb-6 grid gap-6 xl:grid-cols-3">
                  <Card className="xl:col-span-2">
                    <CardHeader title={`Leads ${view.bucket === 'week' ? 'per week' : 'per day'}`} />
                    <div className="px-5 pb-5"><ColumnChart data={series} /></div>
                  </Card>
                  <Card>
                    <CardHeader title="Pipeline" action={<Link href="/admin/leads" className="text-xs font-medium text-primary hover:underline">Open leads</Link>} />
                    <div className="px-5 pb-5"><BarList items={view.pipeline.map((p) => ({ label: STATUS_LABEL[p.label] ?? p.label, value: p.value }))} /></div>
                  </Card>
                </div>

                <div className="mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  <Card><CardHeader title="Top source pages" /><div className="px-5 pb-5"><BarList items={view.sources.map((s) => ({ label: SOURCE_NAMES[s.label] ?? s.label, value: s.value }))} /></div></Card>
                  <Card><CardHeader title="Industries" /><div className="px-5 pb-5"><BarList items={view.industries} /></div></Card>
                  <Card><CardHeader title={country === 'all' ? 'Countries' : 'Channels'} /><div className="px-5 pb-5"><BarList items={country === 'all' ? view.countries : view.channels} /></div></Card>
                </div>
              </>
            )}

            <div className="grid gap-6 xl:grid-cols-2">
              {showLeads && L && (
                <Card>
                  <CardHeader title="Latest leads" action={<Link href="/admin/leads" className="text-xs font-medium text-primary hover:underline">View all</Link>} />
                  <ul className="divide-y divide-border px-5 pb-3">
                    {view.latestLeads.map((l) => (
                      <li key={l.id} className="flex items-center justify-between gap-3 py-3">
                        <div className="min-w-0">
                          <Link href={`/admin/leads?id=${l.id}`} className="block truncate text-sm font-medium text-foreground hover:text-primary">{l.name} · {l.company}</Link>
                          <p className="truncate text-xs text-muted-foreground">{l.industry} · {l.country} · {timeAgo(l.createdAt)}</p>
                        </div>
                        <LeadStatusBadge status={l.status} />
                      </li>
                    ))}
                    {!view.latestLeads.length && <li className="py-6 text-center text-sm text-muted-foreground">No leads yet.</li>}
                  </ul>
                </Card>
              )}
              {showContent && (
                <Card>
                  <CardHeader title="Top articles by views" action={<Link href="/admin/blog" className="text-xs font-medium text-primary hover:underline">Manage blog</Link>} />
                  <ul className="space-y-4 px-5 pb-5">
                    {view.topPosts.map((p) => (
                      <li key={p.id}>
                        <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
                          <Link href={`/admin/blog/${p.id}`} className="truncate text-foreground hover:text-primary">{p.title}</Link>
                          <span className="shrink-0 font-semibold tabular-nums text-foreground">{p.views.toLocaleString('en-US')}</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted"><div className="h-2 rounded-full bg-primary" style={{ width: `${(p.views / maxViews) * 100}%` }} /></div>
                      </li>
                    ))}
                    {!view.topPosts.length && <li className="py-6 text-center text-sm text-muted-foreground">No published articles yet.</li>}
                  </ul>
                </Card>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
