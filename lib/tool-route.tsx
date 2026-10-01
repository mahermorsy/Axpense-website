import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from './seo';
import type { Lang } from './i18n';
import { getTool } from '@/content/tools';
import { ToolView } from '@/components/tools/ToolView';

export function toolMetadata(enPath: string, lang: Lang): Metadata {
  const tool = getTool(enPath);
  if (!tool) return {};
  return buildMetadata({
    title: tool.meta[lang].title,
    description: tool.meta[lang].description,
    path: lang === 'ar' ? `/ar${enPath}` : enPath,
    ...(lang === 'ar' ? { enPath } : { arPath: `/ar${enPath}` }),
    pageType: 'tool',
  });
}

export function ToolRoute({ enPath, lang }: { enPath: string; lang: Lang }) {
  const tool = getTool(enPath);
  if (!tool) notFound();
  return <ToolView tool={tool} lang={lang} />;
}
