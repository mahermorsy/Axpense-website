import { isEnglishOnly, lhref } from './i18n';

// English ↔ Arabic page pairs for the language switcher. Every marketing
// page has an Arabic twin at /ar + the same path; country hubs are
// /en-xx ↔ /ar-xx. English-only pages (articles, legal) switch to the
// Arabic blog or home page.
export function toArabic(path: string): string {
  if (/^\/blog\/.+/.test(path)) return '/ar/blog';
  if (isEnglishOnly(path)) return '/ar';
  return lhref('ar', path);
}

export function toEnglish(path: string): string {
  if (path === '/ar') return '/';
  const m = path.match(/^\/ar-([a-z]+)$/);
  if (m) return `/en-${m[1]}`;
  if (path.startsWith('/ar/')) return path.slice(3);
  return '/';
}
