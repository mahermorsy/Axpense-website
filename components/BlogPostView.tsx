import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';
import { BLOG_POSTS } from '@/lib/blog';
import { SITE_URL, SITE_NAME } from '@/lib/seo';
import { BlogCover } from './blog/BlogCover';
import { BlogCard, PostMeta } from './blog/BlogCard';
import { CtaBand } from './ui/AppSections';
import { PRIMARY_CTA } from '@/lib/cta';

export function articleJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

export function BlogPostView({ post }: { post: BlogPost }) {
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }} />

      <header className="bg-gradient-hero pb-10 pt-12">
        <div className="mx-auto max-w-3xl px-5 sm:px-7">
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to Blog
          </Link>
          <PostMeta post={post} />
          <h1 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">{post.description}</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 sm:px-7">
        <div className="aspect-[21/9] overflow-hidden rounded-2xl border border-border shadow-elevated"><BlogCover category={post.category} size="lg" /></div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:px-7 lg:grid-cols-[1fr_220px]">
        <article className="min-w-0">
          {post.sections.map((s) => (
            <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-24 [&:not(:first-child)]:mt-10">
              <h2 className="mb-4 text-2xl font-bold text-foreground">{s.heading}</h2>
              <div className="flex flex-col gap-4">
                {s.body.map((p, i) => <p key={i} className="text-[17px] leading-8 text-ink-700">{p}</p>)}
              </div>
            </section>
          ))}

          {post.relatedFeature && (
            <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/20 bg-panel-1 p-6 sm:flex-row sm:items-center">
              <p className="font-medium text-foreground">See how Axpense handles this in practice.</p>
              <Link href={post.relatedFeature.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                {post.relatedFeature.label}<ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </article>

        <aside className="hidden lg:block">
          <nav aria-label="In this article" className="sticky top-24 rounded-2xl border border-border bg-card p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">In this article</p>
            <ul className="flex flex-col gap-2">
              {post.sections.map((s) => (
                <li key={s.heading}><a href={`#${slugify(s.heading)}`} className="text-sm text-foreground transition-colors hover:text-primary">{s.heading}</a></li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      {more.length > 0 && (
        <section className="border-t border-border bg-gradient-light py-20">
          <div className="mx-auto max-w-wrap px-5 sm:px-7">
            <h2 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">More <span className="text-gradient">articles</span></h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => <BlogCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand title="Ready to take control of your" accent="fleet & assets?" subtitle="Book a demo and see Axpense with your own vehicles and equipment." primary={PRIMARY_CTA} secondary={{ label: 'Talk to Sales', href: '/contact' }} />
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
