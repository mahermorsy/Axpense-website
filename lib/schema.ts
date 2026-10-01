// JSON-LD builders. Entities reference each other by @id so Google can
// connect the Organization, WebSite, software and pages.
import { DEFAULT_PRICING } from '@/content/pricing';
import { priceRange } from './pricing';
import { SITE_NAME, SITE_URL, SITE_EMAIL, SOCIAL_PROFILES, absoluteUrl } from './site';
import type { Lang } from './i18n';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SOFTWARE_ID = `${SITE_URL}/#software`;

type LD = Record<string, unknown>;

export function organizationSchema(): LD {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    alternateName: 'أكسبنس',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    email: SITE_EMAIL,
    sameAs: SOCIAL_PROFILES,
  };
}

export function websiteSchema(): LD {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ['en', 'ar'],
    publisher: { '@id': ORG_ID },
  };
}

/** Per-vehicle monthly price range per currency (USD base + EGP), from the pricing configuration. */
function offers() {
  return DEFAULT_PRICING.currencies.filter((c) => c.code === 'USD' || c.code === 'EGP').map((c) => {
    const { low, high } = priceRange(c);
    return {
      '@type': 'AggregateOffer',
      priceCurrency: c.code,
      lowPrice: String(low),
      highPrice: String(high),
      offerCount: c.tiers.length,
      description: `Price per vehicle per month by fleet size (${DEFAULT_PRICING.minVehicles}–${DEFAULT_PRICING.customAbove} vehicles); larger fleets on request.`,
      url: absoluteUrl('/pricing'),
    };
  });
}

export function softwareApplicationSchema(o: { name: string; description: string; path: string; lang: Lang; featureList?: string[] }): LD {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${absoluteUrl(o.path)}#software`,
    name: o.name,
    description: o.description,
    url: absoluteUrl(o.path),
    inLanguage: o.lang,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
    ...(o.featureList?.length ? { featureList: o.featureList } : {}),
    offers: offers(),
  };
}

export function toolSchema(o: { name: string; description: string; path: string; lang: Lang }): LD {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: o.name,
    description: o.description,
    url: absoluteUrl(o.path),
    inLanguage: o.lang,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    isAccessibleForFree: true,
    publisher: { '@id': ORG_ID },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): LD {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function faqSchema(items: { q: string; a: string }[]): LD {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  };
}

export function articleSchema(o: { title: string; description: string; path: string; image: string; publishedAt: string; updatedAt: string; lang: Lang }): LD {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: o.title,
    description: o.description,
    image: [o.image.startsWith('http') ? o.image : absoluteUrl(o.image)],
    datePublished: o.publishedAt,
    dateModified: o.updatedAt,
    inLanguage: o.lang,
    // No named author until the owner provides a real person and bio.
    author: { '@id': ORG_ID, '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: absoluteUrl(o.path),
    isPartOf: { '@id': WEBSITE_ID },
  };
}
