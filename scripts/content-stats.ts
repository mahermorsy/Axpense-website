/**
 * Word counts and basic checks for content files, before a build.
 *   npx tsx scripts/content-stats.ts [filter]
 * Counts the words a visitor sees in the page body (hero intro, sections,
 * FAQs, articles) after capability gating. Minimums follow the SEO brief;
 * Arabic pages are checked at 70 % of the English minimum.
 */
import { SEO_PAGES, isLive } from '../content/seo';
import { POSTS } from '../content/blog';
import { gated } from '../lib/capabilities';
import type { Section } from '../lib/seo-page';

const MIN: Record<string, number> = { commercial: 1200, feature: 700, industry: 800, location: 800, blog: 1200 };
const words = (s: string) => s.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
const filter = process.argv[2] || '';

function sectionText(s: Section): string {
  switch (s.kind) {
    case 'text': return `${s.heading} ${s.body}`;
    case 'steps': return `${s.heading} ${s.intro ?? ''} ${gated(s.steps).map((x) => `${x.title} ${x.desc}`).join(' ')}`;
    case 'cards': return `${s.heading} ${s.intro ?? ''} ${gated(s.items).map((x) => `${x.title} ${x.desc}`).join(' ')}`;
    case 'checklist': return `${s.heading} ${s.intro ?? ''} ${gated(s.items).map((x) => x.text).join(' ')}`;
    case 'formula': return `${s.heading} ${s.intro ?? ''} ${s.formulas.map((f) => `${f.label} ${f.expression}`).join(' ')} ${s.example ? `${s.example.title} ${s.example.body}` : ''}`;
    case 'screenshot': return `${s.heading ?? ''} ${s.caption ?? ''}`;
    case 'workflow': return `${s.heading} ${s.intro ?? ''} ${gated(s.nodes).map((n) => n.label).join(' ')} ${s.note ?? ''}`;
  }
}

let problems = 0;
const rows: string[] = [];
for (const p of SEO_PAGES) {
  if (filter && !p.path.includes(filter)) continue;
  for (const lang of ['en', 'ar'] as const) {
    const text = [p.hero[lang].intro, ...gated(p.sections[lang]).map(sectionText), ...gated(p.faqs[lang]).map((f) => `${f.q} ${f.a}`)].join(' ');
    const n = words(text);
    const min = Math.round((MIN[p.type] ?? 0) * (lang === 'ar' ? 0.7 : 1));
    const faqs = gated(p.faqs[lang]).length;
    const issues: string[] = [];
    if (n < min) issues.push(`below ${min}`);
    if (!p.meta[lang].title || !p.meta[lang].description) issues.push('missing meta');
    if (p.meta[lang].description.length > 160) issues.push(`desc ${p.meta[lang].description.length} chars`);
    if (faqs < 4) issues.push(`${faqs} FAQs`);
    if (issues.length) problems++;
    rows.push(`${isLive(p) ? ' ' : 'G'} ${lang} ${p.path.padEnd(42)} ${String(n).padStart(5)} words  ${String(faqs).padStart(2)} FAQs  title ${String((p.meta[lang].title + ' | Axpense').length).padStart(3)}  desc ${String(p.meta[lang].description.length).padStart(3)}  ${issues.join('; ')}`);
  }
}
for (const post of POSTS) {
  if (filter && !post.slug.includes(filter)) continue;
  const n = words([post.excerpt, ...post.sections.map((s) => `${s.heading} ${s.body}`), ...(post.faqs ?? []).map((f) => `${f.q} ${f.a}`)].join(' '));
  const min = Math.round(MIN.blog * (post.language === 'ar' ? 0.7 : 1));
  const issues: string[] = [];
  if (post.status !== 'published') issues.push('draft');
  if (n < min) issues.push(`below ${min}`);
  if (post.relatedPages.length < 3) issues.push('needs 1 commercial + 2–3 related pages');
  if (issues.length) problems++;
  rows.push(`  ${post.language} /blog/${post.slug.padEnd(37)} ${String(n).padStart(5)} words  ${issues.join('; ')}`);
}
console.log(rows.join('\n'));
console.log(`\n${problems} item(s) with issues. (G = gated page: noindex until its capability is confirmed)`);
