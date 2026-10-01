import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { SEO_PAGES, isLive } from '@/content/seo';
import { TOOLS } from '@/content/tools';
import { PAGE_UPDATED } from '@/content/page-dates';
import { getPosts } from '@/lib/blog';

// Every indexable EN + AR page with a real lastmod and hreflang alternates.
// Excluded: /admin, /api, /landing/*, noindex pages (gated features, legacy
// industries, legal drafts), redirected URLs and drafts.
type Entry = MetadataRoute.Sitemap[number];

function pair(enPath: string, lastModified: string, priority: number, codes = { en: 'en', ar: 'ar' }): Entry[] {
  const en = absoluteUrl(enPath);
  const ar = absoluteUrl(enPath === '/' ? '/ar' : `/ar${enPath}`);
  const languages = { [codes.en]: en, [codes.ar]: ar, 'x-default': en };
  return [
    { url: en, lastModified, priority, alternates: { languages } },
    { url: ar, lastModified, priority, alternates: { languages } },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  // /demo redirects to the demo modal (/?demo=1), so it is not listed.
  for (const [path, date] of Object.entries(PAGE_UPDATED)) if (path !== '/demo') out.push(...pair(path, date, path === '/' ? 1 : 0.6));
  for (const p of SEO_PAGES.filter(isLive)) {
    const prio = p.type === 'commercial' ? 0.9 : p.type === 'location' ? 0.8 : 0.7;
    out.push(...pair(p.path, p.updatedAt, prio, p.hreflang));
  }
  for (const t of TOOLS) out.push(...pair(t.path, t.updatedAt, 0.6));

  const ar = new Set(getPosts('ar').map((p) => p.slug));
  for (const post of getPosts('en')) {
    const en = absoluteUrl(`/blog/${post.slug}`);
    if (ar.has(post.slug)) {
      const arPost = getPosts('ar').find((p) => p.slug === post.slug)!;
      const languages = { en, ar: absoluteUrl(`/ar/blog/${post.slug}`), 'x-default': en };
      out.push({ url: en, lastModified: post.updatedAt, priority: 0.5, alternates: { languages } });
      out.push({ url: absoluteUrl(`/ar/blog/${post.slug}`), lastModified: arPost.updatedAt, priority: 0.5, alternates: { languages } });
    } else {
      out.push({ url: en, lastModified: post.updatedAt, priority: 0.5 });
    }
  }
  return out;
}
