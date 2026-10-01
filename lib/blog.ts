import type { Faq } from './seo-page';
import type { Lang } from './i18n';
import { POSTS } from '@/content/blog';

/**
 * Blog content. Fields mirror the backend BlogPost entity (Slug, Title, Excerpt,
 * Category, Language, Status, PublishedAt, SeoTitle, SeoDescription, Sections
 * with Heading + Body) so moving to /api/public/blog is a data copy
 * (see scripts/export-seeds.ts). Website-only extras: updatedAt,
 * primaryKeyword, faqs, relatedPages.
 *
 * Section 0 is the direct answer (2–3 sentences). Bodies are markdown-lite.
 */
export type BlogSection = { heading: string; body: string };
export type BlogCategory = 'fleet-management' | 'fleet-maintenance' | 'fleet-costs' | 'fleet-inspections' | 'asset-management';

export type BlogPost = {
  slug: string;
  language: Lang;
  title: string;
  /** Listing summary (backend: Excerpt). */
  excerpt: string;
  category: BlogCategory;
  status: 'published' | 'draft';
  publishedAt: string;
  updatedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  primaryKeyword: string;
  sections: BlogSection[];
  faqs?: Faq[];
  /** English paths: first entry must be the commercial page the article supports. */
  relatedPages: string[];
};

export const CATEGORIES: Record<BlogCategory, { en: string; ar: string }> = {
  'fleet-management': { en: 'Fleet Management', ar: 'إدارة الأسطول' },
  'fleet-maintenance': { en: 'Fleet Maintenance', ar: 'صيانة الأسطول' },
  'fleet-costs': { en: 'Fleet Costs', ar: 'تكاليف الأسطول' },
  'fleet-inspections': { en: 'Fleet Inspections', ar: 'فحص المركبات' },
  'asset-management': { en: 'Asset Management', ar: 'إدارة الأصول' },
};

export const categoryLabel = (c: BlogCategory, lang: Lang) => CATEGORIES[c][lang];

export function getPosts(lang: Lang): BlogPost[] {
  return POSTS.filter((p) => p.language === lang && p.status === 'published').sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug));
}
export function getPost(slug: string, lang: Lang = 'en'): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug && p.language === lang && p.status === 'published');
}
export function hasTwin(slug: string, lang: Lang) {
  return !!getPost(slug, lang === 'en' ? 'ar' : 'en');
}
export function blogPath(slug: string, lang: Lang) {
  return lang === 'ar' ? `/ar/blog/${slug}` : `/blog/${slug}`;
}
export function readingMinutes(post: BlogPost) {
  const words = [post.excerpt, ...post.sections.flatMap((s) => [s.heading, s.body])].join(' ').split(/\s+/).length;
  return Math.max(1, Math.round(words / (post.language === 'ar' ? 160 : 200)));
}
export function formatPostDate(iso: string, locale: Lang = 'en', style: 'short' | 'long' = 'short') {
  return new Date(iso).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US', { month: style === 'short' ? 'short' : 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
