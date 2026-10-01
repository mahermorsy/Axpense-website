import { isEnglishOnly, lhref } from './i18n';

// English ↔ Arabic page pairs for the language switcher. Every marketing
// page has an Arabic twin at /ar + the same path. English-only pages
// (articles without a twin, legal) switch to the Arabic blog or home page.
export function toArabic(path: string): string {
  if (isEnglishOnly(path)) return /^\/blog\//.test(path) ? '/ar/blog' : '/ar';
  return lhref('ar', path);
}

export function toEnglish(path: string): string {
  if (path === '/ar') return '/';
  if (path.startsWith('/ar/')) return path.slice(3);
  return '/';
}
