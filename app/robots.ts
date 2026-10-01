import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Allow everything public (including /_next assets); keep the admin panel and
// API out. /landing/* pages stay crawlable but carry noindex.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/api/'] },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
