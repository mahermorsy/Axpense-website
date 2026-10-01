/**
 * SEO audit for the Axpense marketing site.
 *
 * Crawls a running production build (`next build && next start`) starting
 * from /sitemap.xml plus every internal link, and fails (exit 1) on:
 * non-200 pages, H1 count ≠ 1, bad canonicals, broken hreflang, sitemap
 * mismatches, duplicate/empty titles or descriptions, invalid JSON-LD,
 * broken or redirecting internal links and thin pages.
 *
 * Usage:
 *   node --experimental-strip-types scripts/seo-audit.ts            # audit
 *   node --experimental-strip-types scripts/seo-audit.ts --inventory docs/seo/inventory.md
 * Env: AUDIT_BASE (default http://localhost:3000), SITE_URL (default https://axpense.net)
 *
 * Plain TypeScript with erasable types only, no dependencies.
 */
import { writeFileSync } from 'node:fs';

const BASE = (process.env.AUDIT_BASE || 'http://localhost:3000').replace(/\/$/, '');
const SITE = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://axpense.net').replace(/\/$/, '');
const NOT_FOUND_TEST = '/this-page-should-404';

// Minimum words in <main> per page type (English). Arabic pages get 60 %
// of the English minimum because Arabic uses fewer, longer words.
const MIN_WORDS: Record<string, number> = { commercial: 1200, feature: 700, industry: 800, location: 800, blog: 1200, tool: 500 };

type Page = {
  path: string;
  status: number;
  location?: string;
  title: string;
  description: string;
  robots: string;
  canonical: string;
  hreflang: Record<string, string>;
  h1: string[];
  jsonLd: string[];
  jsonLdTypes: string[];
  words: number;
  pageType: string;
  lang: string;
  ogLocale: string;
  links: string[];
};

const errors: string[] = [];
const warnings: string[] = [];
const err = (m: string) => errors.push(m);
const warn = (m: string) => warnings.push(m);

const decode = (s: string) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ');
const attr = (tag: string, name: string) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'));
  return m ? decode(m[1]) : '';
};
const text = (html: string) =>
  decode(html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

function toPath(url: string): string | null {
  if (url.startsWith(SITE)) url = url.slice(SITE.length) || '/';
  if (!url.startsWith('/') || url.startsWith('//')) return null;
  const p = url.split('#')[0].split('?')[0];
  return p || '/';
}

function isCrawlable(p: string) {
  return !p.startsWith('/_next') && !p.startsWith('/api/') && !p.startsWith('/admin') && !/\.(png|jpe?g|webp|svg|ico|xml|txt|pdf|js|css|json|webmanifest)$/i.test(p);
}

async function fetchPage(path: string): Promise<Page> {
  const res = await fetch(BASE + path, { redirect: 'manual' });
  const page: Page = { path, status: res.status, title: '', description: '', robots: '', canonical: '', hreflang: {}, h1: [], jsonLd: [], jsonLdTypes: [], words: 0, pageType: '', lang: '', ogLocale: '', links: [] };
  if (res.status >= 300 && res.status < 400) { page.location = res.headers.get('location') || ''; return page; }
  const html = await res.text();
  page.robots = (res.headers.get('x-robots-tag') || '').toLowerCase();
  page.title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '').trim();
  page.lang = (html.match(/<html[^>]*\slang="([^"]+)"/i) || [])[1] || '';
  for (const tag of html.match(/<meta\s[^>]*>/gi) || []) {
    const name = attr(tag, 'name').toLowerCase();
    const prop = attr(tag, 'property').toLowerCase();
    if (name === 'description') page.description = attr(tag, 'content');
    if (name === 'robots') page.robots += ' ' + attr(tag, 'content').toLowerCase();
    if (name === 'page-type') page.pageType = attr(tag, 'content');
    if (prop === 'og:locale') page.ogLocale = attr(tag, 'content');
  }
  for (const tag of html.match(/<link\s[^>]*>/gi) || []) {
    const rel = attr(tag, 'rel').toLowerCase();
    if (rel === 'canonical') page.canonical = attr(tag, 'href');
    if (rel === 'alternate' && attr(tag, 'hreflang')) page.hreflang[attr(tag, 'hreflang')] = attr(tag, 'href');
  }
  page.h1 = (html.match(/<h1[\s>][\s\S]*?<\/h1>/gi) || []).map(text);
  page.jsonLd = (html.match(/<script[^>]*application\/ld\+json[^>]*>[\s\S]*?<\/script>/gi) || []).map((s) => s.replace(/^<script[^>]*>|<\/script>$/gi, ''));
  for (const raw of page.jsonLd) {
    try {
      const data = JSON.parse(raw);
      const collect = (d: unknown): void => {
        if (Array.isArray(d)) return d.forEach(collect);
        if (d && typeof d === 'object') {
          const o = d as Record<string, unknown>;
          if (o['@type']) page.jsonLdTypes.push(String(o['@type']));
          if (o['@graph']) collect(o['@graph']);
        }
      };
      collect(data);
    } catch {
      err(`${path}: JSON-LD does not parse`);
    }
  }
  const main = (html.match(/<main[\s>][\s\S]*<\/main>/i) || [''])[0];
  page.words = text(main).split(' ').filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  for (const tag of html.match(/<a\s[^>]*href="[^"]*"[^>]*>/gi) || []) {
    const p = toPath(attr(tag, 'href'));
    if (p && isCrawlable(p)) page.links.push(p);
  }
  return page;
}

const indexable = (p: Page) => p.status === 200 && !/noindex/.test(p.robots);

async function main() {
  const sitemapXml = await (await fetch(BASE + '/sitemap.xml')).text();
  const sitemap = new Set<string>();
  for (const m of sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const p = toPath(m[1].trim());
    if (!m[1].startsWith(SITE)) err(`sitemap: ${m[1]} is not on ${SITE}`);
    if (p) sitemap.add(p);
  }
  for (const m of sitemapXml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
    if (Number.isNaN(Date.parse(m[1]))) err(`sitemap: bad lastmod ${m[1]}`);
  }

  const pages = new Map<string, Page>();
  const queue = [...sitemap, '/', '/ar'];
  while (queue.length) {
    const p = queue.shift() as string;
    if (pages.has(p)) continue;
    const page = await fetchPage(p);
    pages.set(p, page);
    for (const l of page.links) if (!pages.has(l)) queue.push(l);
  }

  // Intended 404
  const nf = await fetch(BASE + NOT_FOUND_TEST, { redirect: 'manual' });
  if (nf.status !== 404) err(`${NOT_FOUND_TEST}: expected 404, got ${nf.status}`);

  const get = async (p: string) => {
    if (!pages.has(p)) pages.set(p, await fetchPage(p));
    return pages.get(p) as Page;
  };

  const titles = new Map<string, string[]>();
  const descs = new Map<string, string[]>();

  for (const page of [...pages.values()]) {
    const p = page.path;
    if (page.status >= 300 && page.status < 400) continue; // checked via links below
    if (page.status !== 200) { err(`${p}: status ${page.status}`); continue; }
    const idx = indexable(page);
    if (!idx) { if (sitemap.has(p)) err(`${p}: noindex page is in the sitemap`); continue; }
    if (!sitemap.has(p)) err(`${p}: indexable page missing from the sitemap`);
    if (page.h1.length !== 1) err(`${p}: ${page.h1.length} H1 elements`);
    if (!page.title) err(`${p}: empty title`);
    if (!page.description) err(`${p}: empty meta description`);
    if (page.title.length > 65) warn(`${p}: title is ${page.title.length} chars`);
    if (page.description.length > 160) warn(`${p}: description is ${page.description.length} chars`);
    (titles.get(page.title) || titles.set(page.title, []).get(page.title))!.push(p);
    (descs.get(page.description) || descs.set(page.description, []).get(page.description))!.push(p);

    // Canonical
    if (!page.canonical) err(`${p}: missing canonical`);
    else if (!page.canonical.startsWith(SITE + '/') && page.canonical !== SITE) err(`${p}: canonical ${page.canonical} not absolute on ${SITE}`);
    else if (toPath(page.canonical) !== p) err(`${p}: canonical points to ${page.canonical}`);
    else if (page.canonical.endsWith('/') && p !== '/') err(`${p}: canonical has a trailing slash`);

    // Hreflang
    const alts = page.hreflang;
    if (Object.keys(alts).length) {
      if (!alts['x-default']) err(`${p}: hreflang without x-default`);
      const self = Object.entries(alts).filter(([k]) => k !== 'x-default').find(([, u]) => toPath(u) === p);
      if (!self) err(`${p}: hreflang has no self-reference`);
      for (const [code, url] of Object.entries(alts)) {
        const tp = toPath(url);
        if (!url.startsWith(SITE)) { err(`${p}: hreflang ${code} → ${url} not on ${SITE}`); continue; }
        if (!tp) continue;
        const target = await get(tp);
        if (target.status !== 200) { err(`${p}: hreflang ${code} → ${tp} returns ${target.status}`); continue; }
        if (!indexable(target)) err(`${p}: hreflang ${code} → ${tp} is noindex`);
        if (code !== 'x-default' && tp !== p) {
          const back = Object.entries(target.hreflang).find(([, u]) => toPath(u) === p);
          if (!back) err(`${p}: hreflang ${code} → ${tp} is not reciprocal`);
        }
      }
    }

    // Word count
    const min = MIN_WORDS[page.pageType];
    if (min) {
      const need = page.lang === 'ar' ? Math.round(min * 0.6) : min;
      if (page.words < need) err(`${p}: ${page.pageType} page has ${page.words} words (min ${need})`);
    }
  }

  for (const [t, ps] of titles) if (ps.length > 1) err(`duplicate title "${t}": ${ps.join(', ')}`);
  for (const [d, ps] of descs) if (ps.length > 1 && d) err(`duplicate description on ${ps.join(', ')}`);

  // Internal links: broken or pointing at a redirect
  for (const page of pages.values()) {
    if (page.status !== 200) continue;
    for (const l of new Set(page.links)) {
      const t = pages.get(l);
      if (!t) continue;
      // /demo and /ar/demo open the demo modal on purpose (they redirect to ?demo=1 without JS).
      if (/^\/(ar\/)?demo(\?|$)/.test(l)) continue;
      if (t.status >= 300 && t.status < 400) err(`${page.path}: links to redirect ${l} → ${t.location}`);
      else if (t.status !== 200) err(`${page.path}: broken link ${l} (${t.status})`);
    }
  }
  for (const s of sitemap) {
    const t = pages.get(s);
    if (t && t.status >= 300 && t.status < 400) err(`sitemap: ${s} redirects to ${t.location}`);
  }

  const inv = process.argv.indexOf('--inventory');
  if (inv > -1) {
    const out = process.argv[inv + 1] || 'docs/seo/inventory.md';
    const rows = [...pages.values()].sort((a, b) => a.path.localeCompare(b.path)).map((p) =>
      `| ${p.path} | ${p.status}${p.location ? ` → ${p.location}` : ''} | ${p.title.replace(/\|/g, '\\|')} | ${(p.h1[0] || '').replace(/\|/g, '\\|')}${p.h1.length > 1 ? ` (+${p.h1.length - 1})` : ''} | ${p.canonical ? toPath(p.canonical) : ''} | ${Object.keys(p.hreflang).join(', ')} | ${indexable(p) ? 'yes' : 'no'} | ${sitemap.has(p.path) ? 'yes' : 'no'} | ${p.words} | ${[...new Set(p.jsonLdTypes)].join(', ')} |`);
    writeFileSync(out, `| Path | Status | Title | H1 | Canonical | hreflang | Indexable | In sitemap | Words | JSON-LD |\n|---|---|---|---|---|---|---|---|---|---|\n${rows.join('\n')}\n`);
    console.log(`inventory written to ${out}`);
  }

  const json = process.argv.indexOf('--json');
  if (json > -1) writeFileSync(process.argv[json + 1], JSON.stringify([...pages.values()].map(({ links, jsonLd, ...p }) => p), null, 2));

  console.log(`Crawled ${pages.size} URLs (${sitemap.size} in sitemap).`);
  for (const w of warnings) console.log(`WARN  ${w}`);
  for (const e of errors) console.log(`ERROR ${e}`);
  console.log(`${errors.length} errors, ${warnings.length} warnings`);
  process.exit(errors.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
