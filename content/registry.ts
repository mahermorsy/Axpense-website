// Anchor text + liveness for every internal path, so related-link blocks,
// the footer and hubs are generated from data (no hard-coded link lists).
import type { Lang } from '@/lib/i18n';
import { SEO_PAGES, isLive } from './seo';
import { getPost } from '@/lib/blog';
import { TOOLS } from './tools';

const STATIC: Record<string, { en: string; ar: string }> = {
  '/pricing': { en: 'Axpense pricing', ar: 'أسعار أكسبنس' },
  '/solutions': { en: 'All Axpense solutions', ar: 'كل حلول أكسبنس' },
  '/features': { en: 'All Axpense features', ar: 'كل مميزات أكسبنس' },
  '/industries': { en: 'Industries we serve', ar: 'القطاعات التي نخدمها' },
  '/resources': { en: 'Free fleet resources', ar: 'موارد مجانية للأساطيل' },
  '/demo': { en: 'Book a demo', ar: 'احجز عرضًا تجريبيًا' },
  '/blog': { en: 'Fleet management blog', ar: 'مدونة إدارة الأسطول' },
};

export function linkLabel(path: string, lang: Lang): string | undefined {
  const page = SEO_PAGES.find((p) => p.path === path);
  if (page) return page.navLabel[lang];
  const tool = TOOLS.find((t) => t.path === path);
  if (tool) return tool.navLabel[lang];
  if (STATIC[path]) return STATIC[path][lang];
  const m = path.match(/^\/blog\/([^/]+)$/);
  if (m) return (getPost(m[1], lang) ?? getPost(m[1], 'en'))?.title;
  return undefined;
}

/** False for gated pages (unconfirmed capability) and unknown paths. */
export function isLinkable(path: string): boolean {
  const page = SEO_PAGES.find((p) => p.path === path);
  if (page) return isLive(page);
  if (TOOLS.find((t) => t.path === path)) return true;
  if (STATIC[path]) return true;
  const m = path.match(/^\/blog\/([^/]+)$/);
  if (m) return !!getPost(m[1], 'en');
  return false;
}

export function links(paths: string[], lang: Lang) {
  return paths.filter(isLinkable).map((path) => ({ path, label: linkLabel(path, lang) as string }));
}
