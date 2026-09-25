import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getAllSlugs } from '@/lib/blog';
import { FEATURE_SLUGS } from '@/content/features';
import { INDUSTRY_SLUGS } from '@/content/industries';
import { SOLUTION_SLUGS } from '@/content/solutions';

const MARKETS = ['eg', 'sa', 'ae', 'qa', 'jo', 'iq', 'mena'];

type Freq = 'weekly' | 'monthly';
// Every marketing page exists in English (/path) and Arabic (/ar/path).
const MIRRORED: [string, number, Freq][] = [
  ['/', 1, 'weekly'],
  ['/features', 0.8, 'monthly'],
  ...FEATURE_SLUGS.map((s): [string, number, Freq] => [`/features/${s}`, 0.7, 'monthly']),
  ['/industries', 0.8, 'monthly'],
  ...INDUSTRY_SLUGS.map((s): [string, number, Freq] => [`/industries/${s}`, 0.7, 'monthly']),
  ['/solutions', 0.7, 'monthly'],
  ...SOLUTION_SLUGS.map((s): [string, number, Freq] => [`/solutions/${s}`, 0.6, 'monthly']),
  ['/pricing', 0.8, 'monthly'],
  ['/about', 0.5, 'monthly'],
  ['/contact', 0.6, 'monthly'],
  ['/demo', 0.7, 'monthly'],
  ['/blog', 0.6, 'weekly'],
  ['/resources', 0.5, 'monthly'],
  ['/resources/fleet-cost-calculator', 0.6, 'monthly'],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [];
  for (const [path, priority, changeFrequency] of MIRRORED) {
    pages.push({ url: `${SITE_URL}${path === '/' ? '' : path}`, lastModified: now, changeFrequency, priority });
    pages.push({ url: `${SITE_URL}/ar${path === '/' ? '' : path}`, lastModified: now, changeFrequency, priority });
  }
  // English-only article pages. /landing/* campaign pages are noindex and not listed.
  for (const slug of getAllSlugs()) pages.push({ url: `${SITE_URL}/blog/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 });
  for (const code of MARKETS) {
    pages.push({ url: `${SITE_URL}/en-${code}`, lastModified: now, changeFrequency: 'monthly', priority: code === 'eg' ? 0.9 : 0.75 });
    pages.push({ url: `${SITE_URL}/ar-${code}`, lastModified: now, changeFrequency: 'monthly', priority: code === 'eg' ? 0.9 : 0.75 });
  }
  return pages;
}
