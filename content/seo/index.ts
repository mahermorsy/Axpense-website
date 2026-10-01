import type { SeoPage, SeoPageType } from '@/lib/seo-page';
import { isConfirmed } from '@/lib/capabilities';
import { COMMERCIAL_PAGES } from './commercial';
import { FEATURE_PAGES } from './features';
import { INDUSTRY_PAGES } from './industries';
import { LOCATION_PAGES } from './locations';

export const SEO_PAGES: SeoPage[] = [...COMMERCIAL_PAGES, ...FEATURE_PAGES, ...INDUSTRY_PAGES, ...LOCATION_PAGES];

export function getSeoPage(path: string): SeoPage | undefined {
  return SEO_PAGES.find((p) => p.path === path);
}
export function seoPagesOfType(type: SeoPageType) {
  return SEO_PAGES.filter((p) => p.type === type);
}
/** A page whose capability gate is not confirmed is noindex, out of the sitemap and never linked. */
export function isLive(p: SeoPage) {
  return isConfirmed(...(p.requires ?? []));
}
export function slugOf(p: SeoPage) {
  return p.path.split('/').pop() as string;
}
