import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from './seo';
import type { Lang } from './i18n';
import { getSeoPage, isLive, seoPagesOfType, slugOf } from '@/content/seo';
import { SeoPageView } from '@/components/seo/SeoPageView';
import type { SeoPageType } from './seo-page';

/** Metadata for an SEO page (commercial / feature / industry / location). */
export function seoMetadata(enPath: string, lang: Lang): Metadata {
  const page = getSeoPage(enPath);
  if (!page) return {};
  const live = isLive(page);
  return buildMetadata({
    title: page.meta[lang].title,
    description: page.meta[lang].description,
    path: lang === 'ar' ? `/ar${enPath}` : enPath,
    ...(lang === 'ar' ? { enPath } : { arPath: `/ar${enPath}` }),
    hreflang: page.hreflang,
    ogLocale: page.ogLocale?.[lang],
    noindex: !live,
    pageType: page.type,
  });
}

export function SeoRoute({ enPath, lang }: { enPath: string; lang: Lang }) {
  const page = getSeoPage(enPath);
  if (!page) notFound();
  return <SeoPageView page={page} lang={lang} />;
}

/** generateStaticParams for /features/[slug], /industries/[slug], /locations/[slug]. */
export function seoParams(type: SeoPageType) {
  return seoPagesOfType(type).map((p) => ({ slug: slugOf(p) }));
}
