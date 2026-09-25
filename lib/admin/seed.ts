import { BLOG_POSTS } from '@/lib/blog';
import { MARKETS } from '@/lib/countries';
import type { AdminPost, AdminUser, Faq, Lead, LeadStatus } from './types';

// Deterministic PRNG so the demo data looks the same on every load.
function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const pick = <T,>(r: () => number, arr: readonly T[]) => arr[Math.floor(r() * arr.length)];
function weighted<T>(r: () => number, items: [T, number][]): T {
  const total = items.reduce((s, [, w]) => s + w, 0);
  let x = r() * total;
  for (const [v, w] of items) { if ((x -= w) < 0) return v; }
  return items[0][0];
}

export const DEMO_USERS: AdminUser[] = [
  { id: 'u1', name: 'Maher Samir', email: 'maher@axpense.net', role: 'admin', status: 'active', createdAt: '2026-01-10T09:00:00Z' },
  { id: 'u2', name: 'Sara Fahmy', email: 'sara@axpense.net', role: 'editor', status: 'active', createdAt: '2026-03-02T09:00:00Z' },
  { id: 'u3', name: 'Omar Adel', email: 'omar@axpense.net', role: 'sales', status: 'active', createdAt: '2026-03-15T09:00:00Z' },
  { id: 'u4', name: 'Nour Hassan', email: 'nour@axpense.net', role: 'sales', status: 'active', createdAt: '2026-05-20T09:00:00Z' },
  { id: 'u5', name: 'Karim Mansour', email: 'karim@axpense.net', role: 'editor', status: 'invited', createdAt: '2026-09-18T09:00:00Z' },
];

const FIRST = ['Ahmed', 'Mohamed', 'Mahmoud', 'Youssef', 'Omar', 'Khaled', 'Tarek', 'Hany', 'Amr', 'Sherif', 'Mona', 'Dina', 'Rania', 'Nada', 'Salma', 'Faisal', 'Abdullah', 'Rashid', 'Laila', 'Hassan', 'Ziad', 'Kareem', 'Reem', 'Yara'];
const LAST = ['Hassan', 'Ali', 'Ibrahim', 'Mostafa', 'Salem', 'Farouk', 'Nabil', 'Saleh', 'Zaki', 'Haddad', 'Khalil', 'Qasim', 'Nasser', 'Rizk', 'Awad', 'Shaker'];
const CO_A = ['Nile', 'Delta', 'Horizon', 'Crescent', 'Pyramid', 'Gulf', 'Oasis', 'Falcon', 'Atlas', 'Sinai', 'Red Sea', 'Cedar', 'Levant', 'Tigris', 'Dune'];
const CO_B = ['Logistics', 'Transport', 'Construction', 'Contracting', 'Foods', 'Pharma', 'Facilities', 'Industries', 'Trading', 'Tours', 'Energy', 'Real Estate'];
const INDUSTRIES: [string, number][] = [['Logistics & Transportation', 30], ['Construction', 22], ['Manufacturing', 14], ['Real Estate', 9], ['Healthcare', 7], ['Travel & Hospitality', 8], ['Energy & Utilities', 6], ['Other', 4]];
const COUNTRIES: [string, number][] = [['Egypt', 52], ['Saudi Arabia', 18], ['UAE', 12], ['Qatar', 5], ['Jordan', 6], ['Iraq', 7]];
const SOURCES: [string, number][] = [['/demo', 26], ['/', 18], ['/pricing', 14], ['/landing/fleet-management-egypt', 12], ['/features/fleet-maintenance', 8], ['/en-sa', 6], ['/ar/contact', 9], ['/landing/fleet-maintenance-egypt', 7]];
const CHANNELS: [Lead['channel'], number][] = [['Google', 44], ['Direct', 20], ['LinkedIn', 16], ['Facebook', 12], ['Referral', 8]];
const SIZES = ['1–10 employees', '11–50 employees', '51–200 employees', '201–1,000 employees', '1,000+ employees'];
const MESSAGES = [
  'We run 40 trucks and track services in Excel. Need km-based reminders.',
  'Looking to replace paper inspection checklists for our drivers.',
  'Need to track spare parts and work orders across two workshops.',
  'Interested in expense tracking per vehicle and monthly reports.',
  'We manage heavy equipment on 5 sites — want maintenance scheduling.',
  'Would like a demo in Arabic for our operations team.',
  'Need depreciation reports for finance plus fleet maintenance.',
  '',
];

export function seedLeads(now = new Date()): Lead[] {
  const r = rng(20260924);
  const leads: Lead[] = [];
  const days = 120;
  let n = 0;
  for (let d = days; d >= 0; d--) {
    // gentle growth over time + weekday effect
    const date = new Date(now.getTime() - d * 86400000);
    const weekday = date.getDay();
    const base = 0.6 + ((days - d) / days) * 1.6;
    const weekend = weekday === 5 || weekday === 6 ? 0.45 : 1; // Fri/Sat weekend in Egypt/KSA
    const count = Math.floor(base * weekend + r() * 1.8);
    for (let i = 0; i < count; i++) {
      n++;
      const first = pick(r, FIRST), last = pick(r, LAST);
      const coA = pick(r, CO_A), coB = pick(r, CO_B);
      const age = d; // days old
      const status: LeadStatus = age < 3 ? weighted(r, [['new', 8], ['contacted', 2]])
        : age < 14 ? weighted(r, [['new', 3], ['contacted', 4], ['qualified', 3], ['demo_booked', 2], ['lost', 1]])
        : weighted(r, [['contacted', 2], ['qualified', 3], ['demo_booked', 3], ['won', 2.5], ['lost', 3]]);
      const created = new Date(date.getTime() + Math.floor(r() * 10 + 8) * 3600000 + Math.floor(r() * 59) * 60000);
      if (created > now) continue;
      const source = weighted(r, SOURCES);
      leads.push({
        id: `L-${String(1000 + n)}`,
        name: `${first} ${last}`,
        company: `${coA} ${coB}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}@${coA.toLowerCase().replace(/\s/g, '')}${coB.toLowerCase().replace(/\s/g, '')}.example`,
        phone: `+20 1${Math.floor(r() * 3)}${String(Math.floor(r() * 1e8)).padStart(8, '0')}`,
        companySize: pick(r, SIZES),
        assetCount: Math.floor(5 + r() * 180),
        industry: weighted(r, INDUSTRIES),
        country: weighted(r, COUNTRIES),
        message: pick(r, MESSAGES),
        sourcePage: source,
        channel: weighted(r, CHANNELS),
        lang: source.startsWith('/ar') ? 'ar' : r() < 0.12 ? 'ar' : 'en',
        status,
        ownerId: status === 'new' ? undefined : pick(r, ['u3', 'u4']),
        notes: status === 'new' ? [] : [{ id: `N-${n}`, at: new Date(created.getTime() + 86400000).toISOString(), by: 'u3', text: 'Called and sent product overview.' }],
        createdAt: created.toISOString(),
      });
    }
  }
  return leads.reverse();
}

export function seedPosts(): AdminPost[] {
  const views = [1840, 1320, 980, 760];
  const posts: AdminPost[] = BLOG_POSTS.map((p, i) => ({
    id: `P-${i + 1}`,
    slug: p.slug,
    title: p.title,
    excerpt: p.description,
    category: p.category,
    status: 'published',
    lang: 'en',
    publishedAt: p.publishedAt,
    updatedAt: p.updatedAt,
    views: views[i] ?? 500,
    authorId: 'u2',
    sections: p.sections.map((s) => ({ heading: s.heading, body: s.body.join('\n\n') })),
  }));
  posts.push(
    { id: 'P-5', slug: 'km-based-preventive-maintenance', title: 'Km-Based Preventive Maintenance: A Practical Guide', excerpt: 'Why service intervals by kilometres beat calendar reminders for busy fleets.', category: 'Fleet Maintenance', status: 'draft', lang: 'en', publishedAt: '', updatedAt: '2026-09-20', views: 0, authorId: 'u2', sections: [{ heading: 'Why kilometres', body: 'Calendar intervals ignore how much a vehicle actually works…' }] },
    { id: 'P-6', slug: 'ma-hia-idarat-al-ustul', title: 'ما هي إدارة الأسطول؟', excerpt: 'دليل مبسط لما تغطيه إدارة الأسطول.', category: 'Fleet Management', status: 'draft', lang: 'ar', publishedAt: '', updatedAt: '2026-09-15', views: 0, authorId: 'u5', sections: [{ heading: 'باختصار', body: 'إدارة الأسطول هي مجموعة العمليات…' }] },
  );
  return posts;
}

export function seedFaqs(): Faq[] {
  const faqs: Faq[] = [];
  let id = 0;
  const add = (page: string, lang: 'en' | 'ar', question: string, answer: string, order: number) =>
    faqs.push({ id: `F-${++id}`, page, lang, question, answer, published: true, order });
  [
    ['Who is Axpense built for?', 'Businesses in Egypt and MENA that manage vehicles, equipment, or other physical assets — logistics, construction, manufacturing, real estate, and more.'],
    ['How do I get started?', 'Book a demo. The Axpense team will walk you through the product and set up your account.'],
    ['Does Axpense work in Arabic?', 'The Axpense website includes Arabic pages, and the product can be discussed with the team for your language and workflow requirements.'],
    ['How are maintenance reminders triggered?', 'Service intervals can be set by kilometres driven or by date, so each vehicle is reminded based on how it is actually used.'],
  ].forEach(([q, a], i) => add('home', 'en', q, a, i));
  [
    ['Can I try Axpense for free?', 'Yes. Every plan starts with a 14-day free trial. No credit card required.'],
    ['Can I change plans later?', 'Yes. You can upgrade or downgrade at any time.'],
    ['Which currencies do you bill in?', 'Plans are available in USD, EGP and SAR.'],
  ].forEach(([q, a], i) => add('pricing', 'en', q, a, i));
  for (const m of MARKETS) {
    m.en.faq.forEach((f, i) => add(`en-${m.code}`, 'en', f.q, f.a, i));
    m.ar.faq.forEach((f, i) => add(`ar-${m.code}`, 'ar', f.q, f.a, i));
  }
  return faqs;
}

export const FAQ_PAGES: { id: string; label: string }[] = [
  { id: 'home', label: 'Homepage' },
  { id: 'pricing', label: 'Pricing' },
  ...MARKETS.flatMap((m) => [
    { id: `en-${m.code}`, label: `${m.nameEn} (EN)` },
    { id: `ar-${m.code}`, label: `${m.nameEn} (AR)` },
  ]),
];
