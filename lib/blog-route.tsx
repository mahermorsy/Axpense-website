import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from './seo';
import { getPost, getPosts, hasTwin } from './blog';
import type { Lang } from './i18n';
import { BlogPostView } from '@/components/BlogPostView';

export function blogParams(lang: Lang) {
  return getPosts(lang).map((p) => ({ slug: p.slug }));
}

/** hreflang only when a true twin exists (SEO brief §7.4). */
export function blogMetadata(slug: string, lang: Lang): Metadata {
  const post = getPost(slug, lang);
  if (!post) return {};
  const twin = hasTwin(slug, lang);
  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    path: lang === 'ar' ? `/ar/blog/${slug}` : `/blog/${slug}`,
    ...(twin ? (lang === 'ar' ? { enPath: `/blog/${slug}` } : { arPath: `/ar/blog/${slug}` }) : {}),
    pageType: 'blog',
    ogType: 'article',
  });
}

export function BlogRoute({ slug, lang }: { slug: string; lang: Lang }) {
  const post = getPost(slug, lang);
  if (!post) notFound();
  return <BlogPostView post={post} />;
}
