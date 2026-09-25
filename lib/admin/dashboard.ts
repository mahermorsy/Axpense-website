import type { AdminPost, Faq, Lead, LeadStatus } from './types';

/** Same shape as the API's DashboardDto (GET /api/analytics/dashboard). */
export type CountItem = { label: string; value: number };
export type DashboardView = {
  days: number;
  bucket: 'day' | 'week';
  leads: { newLeads: number; prevNewLeads: number; demoBookedRate: number; prevDemoBookedRate: number; wonDeals: number; prevWonDeals: number; unassignedNew: number } | null;
  series: { start: string; end: string; value: number }[];
  pipeline: CountItem[];
  sources: CountItem[];
  industries: CountItem[];
  countries: CountItem[];
  channels: CountItem[];
  latestLeads: { id: string; name: string; company: string; industry: string; country: string; status: LeadStatus; createdAt: string }[];
  content: { publishedPosts: number; draftPosts: number; totalViews: number; publishedFaqs: number };
  topPosts: { id: string; title: string; views: number }[];
};

const STATUS_ORDER: LeadStatus[] = ['new', 'contacted', 'qualified', 'demo_booked', 'won', 'lost'];
const API_STATUS: Record<string, LeadStatus> = { New: 'new', Contacted: 'contacted', Qualified: 'qualified', DemoBooked: 'demo_booked', Won: 'won', Lost: 'lost' };

/** Normalises the API response (pipeline labels come back as enum names). */
export function fromDashboardDto(d: DashboardView): DashboardView {
  return { ...d, pipeline: d.pipeline.map((p) => ({ label: API_STATUS[p.label] ?? p.label, value: p.value })) };
}

function top<T>(rows: T[], key: (r: T) => string, take: number): CountItem[] {
  const m = new Map<string, number>();
  rows.forEach((r) => m.set(key(r), (m.get(key(r)) ?? 0) + 1));
  return [...m.entries()].map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label)).slice(0, take);
}

/** Demo mode: the same calculation the API performs, run on local sample data. */
export function computeDashboard(leads: Lead[], posts: AdminPost[], faqs: Faq[], days: number, country: string | null, includeLeads: boolean, now = Date.now()): DashboardView {
  const published = posts.filter((p) => p.status === 'published');
  const content = { publishedPosts: published.length, draftPosts: posts.length - published.length, totalViews: published.reduce((s, p) => s + p.views, 0), publishedFaqs: faqs.filter((f) => f.published).length };
  const topPosts = [...published].sort((a, b) => b.views - a.views).slice(0, 5).map((p) => ({ id: p.id, title: p.title, views: p.views }));
  const bucket = days > 30 ? 'week' : 'day';
  const empty: DashboardView = { days, bucket, leads: null, series: [], pipeline: [], sources: [], industries: [], countries: [], channels: [], latestLeads: [], content, topPosts };
  if (!includeLeads) return empty;

  const scoped = leads.filter((l) => !country || l.country === country);
  const t = (l: Lead) => new Date(l.createdAt).getTime();
  const from = now - days * 86400000, prevFrom = now - 2 * days * 86400000;
  const cur = scoped.filter((l) => t(l) >= from && t(l) <= now);
  const prev = scoped.filter((l) => t(l) >= prevFrom && t(l) < from);
  const rate = (a: Lead[]) => (a.length ? Math.round((100 * a.filter((l) => l.status === 'demo_booked' || l.status === 'won').length) / a.length) : 0);
  const won = (a: Lead[]) => a.filter((l) => l.status === 'won').length;

  const step = bucket === 'week' ? 7 : 1;
  const n = Math.ceil(days / step);
  const series = Array.from({ length: n }, (_, k) => {
    const i = n - 1 - k;
    const end = now - i * step * 86400000, start = end - step * 86400000;
    return { start: new Date(start).toISOString(), end: new Date(end).toISOString(), value: cur.filter((l) => t(l) >= start && t(l) < end).length };
  });

  return {
    ...empty,
    leads: { newLeads: cur.length, prevNewLeads: prev.length, demoBookedRate: rate(cur), prevDemoBookedRate: rate(prev), wonDeals: won(cur), prevWonDeals: won(prev), unassignedNew: scoped.filter((l) => l.status === 'new' && !l.ownerId).length },
    series,
    pipeline: STATUS_ORDER.map((s) => ({ label: s, value: cur.filter((l) => l.status === s).length })),
    sources: top(cur, (l) => l.sourcePage, 6),
    industries: top(cur, (l) => l.industry, 6),
    countries: top(cur, (l) => l.country, 8),
    channels: top(cur, (l) => l.channel, 6),
    latestLeads: [...scoped].sort((a, b) => t(b) - t(a)).slice(0, 6).map((l) => ({ id: l.id, name: l.name, company: l.company, industry: l.industry, country: l.country, status: l.status, createdAt: l.createdAt })),
  };
}
