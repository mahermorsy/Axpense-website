// Shared locale helpers. English and Arabic pages render the same
// components; only the strings and the URL prefix change.
export type Lang = 'en' | 'ar';
export type L<T> = { en: T; ar: T };

// Pages that exist in English only (article bodies, legal text, campaign
// landings). Arabic links to them go to the English page.
const EN_ONLY = [/^\/blog\/.+/, /^\/privacy-policy$/, /^\/terms$/, /^\/cookie-policy$/, /^\/landing\//];

/** Turn an English site path into the equivalent path for `lang`. */
export function lhref(lang: Lang, href: string): string {
  if (lang === 'en' || !href.startsWith('/') || href === '/ar' || href.startsWith('/ar/') || /^\/ar-[a-z]+$/.test(href)) return href;
  if (href === '/') return '/ar';
  const market = href.match(/^\/en-([a-z]+)$/);
  if (market) return `/ar-${market[1]}`;
  if (EN_ONLY.some((re) => re.test(href))) return href;
  return `/ar${href}`;
}

export function isEnglishOnly(href: string) {
  return EN_ONLY.some((re) => re.test(href));
}
