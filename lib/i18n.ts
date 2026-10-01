// Shared locale helpers. English and Arabic pages render the same
// components; only the strings and the URL prefix change.
import { AR_BLOG_SLUGS } from '@/content/blog';

export type Lang = 'en' | 'ar';
export type L<T> = { en: T; ar: T };

// Pages that exist in English only (legal text, campaign landings, and
// articles without an Arabic twin). Arabic links to them go to the English page.
const EN_ONLY = [/^\/privacy-policy$/, /^\/terms$/, /^\/cookie-policy$/, /^\/landing\//];

function isEnglishOnlyArticle(href: string) {
  const m = href.match(/^\/blog\/([^/]+)$/);
  return !!m && !AR_BLOG_SLUGS.includes(m[1]);
}

/** Turn an English site path into the equivalent path for `lang`. */
export function lhref(lang: Lang, href: string): string {
  if (lang === 'en' || !href.startsWith('/') || href === '/ar' || href.startsWith('/ar/')) return href;
  if (href === '/') return '/ar';
  const [path, hash] = href.split('#');
  if (EN_ONLY.some((re) => re.test(path)) || isEnglishOnlyArticle(path)) return href;
  return `/ar${path}${hash ? `#${hash}` : ''}`;
}

export function isEnglishOnly(href: string) {
  return EN_ONLY.some((re) => re.test(href)) || isEnglishOnlyArticle(href);
}
