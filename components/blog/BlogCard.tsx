import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogCover } from './BlogCover';
import { blogPath, categoryLabel, formatPostDate, readingMinutes, type BlogPost } from '@/lib/blog';
import type { Lang } from '@/lib/i18n';

const T = {
  en: { min: 'min read', featured: 'Featured article', read: 'Read article', english: '' },
  ar: { min: 'دقائق قراءة', featured: 'مقال مميز', read: 'اقرأ المقال', english: 'اقرأ المقال (بالإنجليزية)' },
};

export { categoryLabel };
const arrow = 'h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1';

/** Card for `post`, shown on a page in `lang` (an English post on an Arabic page is labelled as English). */
function readLabel(post: BlogPost, lang: Lang) {
  return lang === 'ar' && post.language === 'en' ? T.ar.english : T[lang].read;
}

export function PostMeta({ post, className = '', lang = 'en' }: { post: BlogPost; className?: string; lang?: Lang }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground ${className}`}>
      <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{categoryLabel(post.category, lang)}</span>
      <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" aria-hidden="true" /><time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt, lang)}</time></span>
      <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" />{readingMinutes(post)} {T[lang].min}</span>
    </div>
  );
}

/** Large featured post: cover on one side, text on the other */
export function FeaturedPostCard({ post, lang = 'en' }: { post: BlogPost; lang?: Lang }) {
  return (
    <Link href={blogPath(post.slug, post.language)} hrefLang={post.language !== lang ? post.language : undefined} className="group grid overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated lg:grid-cols-2">
      <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[340px]"><BlogCover category={post.category} size="lg" /></div>
      <div className="flex flex-col justify-center p-8 lg:p-10">
        <span className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">{T[lang].featured}</span>
        <PostMeta post={post} lang={lang} />
        <h2 className="mt-4 text-2xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-3xl text-balance" lang={post.language}>{post.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground" lang={post.language}>{post.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">{readLabel(post, lang)}<ArrowRight className={arrow} aria-hidden="true" /></span>
      </div>
    </Link>
  );
}

/** Grid card */
export function BlogCard({ post, lang = 'en' }: { post: BlogPost; lang?: Lang }) {
  return (
    <Link href={blogPath(post.slug, post.language)} hrefLang={post.language !== lang ? post.language : undefined} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
      <div className="aspect-[16/10]"><BlogCover category={post.category} /></div>
      <div className="flex flex-1 flex-col p-6">
        <PostMeta post={post} lang={lang} />
        <h3 className="mt-4 text-xl font-semibold text-foreground transition-colors group-hover:text-primary text-balance" lang={post.language}>{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground" lang={post.language}>{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">{readLabel(post, lang)}<ArrowRight className={arrow} aria-hidden="true" /></span>
      </div>
    </Link>
  );
}
