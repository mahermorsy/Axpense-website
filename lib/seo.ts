import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, absoluteUrl } from './site';

export { SITE_URL, SITE_NAME, absoluteUrl };
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

export type PageType = 'home' | 'commercial' | 'feature' | 'industry' | 'location' | 'blog' | 'tool' | 'hub' | 'page' | 'legal';

type Opts = {
  /** Title without the brand — the layout template appends "| Axpense" / "| أكسبنس". */
  title: string;
  description: string;
  /** This page's path (no trailing slash). */
  path: string;
  /** Arabic twin (on an English page). */
  arPath?: string;
  /** English twin (on an Arabic page). */
  enPath?: string;
  /** Region codes for location pages, e.g. { en: 'en-EG', ar: 'ar-EG' }. */
  hreflang?: { en: string; ar: string };
  ogLocale?: string;
  ogImage?: string;
  noindex?: boolean;
  pageType?: PageType;
  /** Use the title as-is (no template), e.g. the homepage. */
  absoluteTitle?: boolean;
  ogType?: 'website' | 'article';
};

/**
 * One metadata builder for every page: absolute self-canonical on SITE_URL,
 * reciprocal hreflang (en / ar / x-default → English) between true twins only,
 * og:locale per language/market, and a `page-type` meta used by the SEO audit.
 */
export function buildMetadata(o: Opts): Metadata {
  const lang = o.path === '/ar' || o.path.startsWith('/ar/') ? 'ar' : 'en';
  const url = absoluteUrl(o.path);
  const enUrl = lang === 'en' ? url : o.enPath ? absoluteUrl(o.enPath) : undefined;
  const arUrl = lang === 'ar' ? url : o.arPath ? absoluteUrl(o.arPath) : undefined;
  const codes = o.hreflang ?? { en: 'en', ar: 'ar' };

  const languages: Record<string, string> = {};
  if (!o.noindex && enUrl && arUrl) {
    languages[codes.en] = enUrl;
    languages[codes.ar] = arUrl;
    languages['x-default'] = enUrl;
  }

  const ogImage = o.ogImage ?? DEFAULT_OG_IMAGE;
  const ogLocale = o.ogLocale ?? (lang === 'ar' ? 'ar_AR' : 'en_US');
  const fullTitle = o.absoluteTitle ? o.title : `${o.title} | ${lang === 'ar' ? 'أكسبنس' : SITE_NAME}`;

  return {
    title: o.absoluteTitle ? { absolute: o.title } : o.title,
    description: o.description,
    alternates: { canonical: url, ...(Object.keys(languages).length ? { languages } : {}) },
    robots: o.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: o.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: lang === 'ar' ? 'أكسبنس — منصة إدارة الأسطول والأصول' : 'Axpense — fleet and asset management platform' }],
      locale: ogLocale,
      alternateLocale: enUrl && arUrl ? [lang === 'ar' ? 'en_US' : 'ar_AR'] : undefined,
      type: o.ogType ?? 'website',
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description: o.description, images: [ogImage] },
    other: o.pageType ? { 'page-type': o.pageType } : undefined,
  };
}

/** Verification tags + defaults shared by the root layouts. */
export function rootVerification(): Metadata['verification'] {
  const other: Record<string, string> = {};
  if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) other['msvalidate.01'] = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  return {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: Object.keys(other).length ? other : undefined,
  };
}

