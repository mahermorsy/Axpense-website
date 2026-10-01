// Canonical host. Every canonical, hreflang, sitemap and JSON-LD URL is built
// from this one constant. Override with NEXT_PUBLIC_SITE_URL (no trailing slash).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://axpense.net').replace(/\/$/, '');
export const SITE_NAME = 'Axpense';
export const SITE_NAME_AR = 'أكسبنس';
export const SITE_EMAIL = 'info@axpense.net';
export const SOCIAL_PROFILES = ['https://www.linkedin.com/company/axpense', 'https://www.facebook.com/Axpense.net'];

/** Absolute URL on the canonical host, without a trailing slash. */
export function absoluteUrl(path: string) {
  const p = path.startsWith('/') ? path : `/${path}`;
  return p === '/' ? SITE_URL : `${SITE_URL}${p.replace(/\/$/, '')}`;
}
