import type { Metadata } from 'next';

export const SITE_URL = 'https://www.axpense.net';
export const SITE_NAME = 'Axpense';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/axpense-dashboard.webp`;

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  arPath?: string;
  enPath?: string;
}): Metadata {
  const url = absoluteUrl(opts.path);
  const ogImage = opts.ogImage ?? DEFAULT_OG_IMAGE;
  const languages: Record<string, string> = {};

  if (opts.arPath) {
    languages.ar = absoluteUrl(opts.arPath);
    languages.en = url;
    languages['x-default'] = url;
  } else if (opts.enPath) {
    languages.en = absoluteUrl(opts.enPath);
    languages.ar = url;
    languages['x-default'] = absoluteUrl(opts.enPath);
  }

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url, ...(Object.keys(languages).length ? { languages } : {}) },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1536, height: 1024, alt: 'Axpense fleet management dashboard' }],
      locale: opts.enPath ? 'ar_EG' : 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: opts.title, description: opts.description, images: [ogImage] },
  };
}

export function buildCountryMetadata(opts: {
  title: string;
  description: string;
  path: string;
  language: 'en' | 'ar';
  alternatePath: string;
  alternateLanguage: 'en' | 'ar';
}) : Metadata {
  const url = absoluteUrl(opts.path);
  const alternate = absoluteUrl(opts.alternatePath);
  const languages = opts.language === 'en'
    ? { en: url, ar: alternate, 'x-default': url }
    : { en: alternate, ar: url, 'x-default': alternate };

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url, languages },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1536, height: 1024, alt: 'Axpense fleet management dashboard' }],
      locale: opts.language === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: opts.title, description: opts.description, images: [DEFAULT_OG_IMAGE] },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: 'info@axpense.net',
    sameAs: ['https://www.linkedin.com/company/axpense', 'https://www.facebook.com/Axpense.net'],
  };
}

export function websiteJsonLd() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.url) })),
  };
}

export function softwareApplicationJsonLd(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
  };
}
