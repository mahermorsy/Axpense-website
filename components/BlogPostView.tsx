import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPath, categoryLabel, getPosts, type BlogPost } from '@/lib/blog';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { DEFAULT_OG_IMAGE } from '@/lib/seo';
import { primaryCta } from '@/lib/cta';
import { lhref, type Lang } from '@/lib/i18n';
import { BlogCover } from './blog/BlogCover';
import { BlogCard, PostMeta } from './blog/BlogCard';
import { CtaBand } from './ui/AppSections';
import { Breadcrumbs } from './seo/Breadcrumbs';
import { JsonLd } from './seo/JsonLd';
import { Md, plain } from './seo/Md';
import { FaqItem } from './home/FAQSection';
import { links } from '@/content/registry';
import { gated } from '@/lib/capabilities';

const T = {
  en: {
    home: 'Home', blog: 'Blog', back: 'Back to Blog', toc: 'In this article', faq: 'Frequently asked questions',
    next: 'Put this into practice', more: 'More', moreAccent: 'articles',
    cta: { title: 'Ready to take control of your', accent: 'fleet?', subtitle: 'Book a demo and see Axpense with your own vehicles: km-based maintenance, inspections, spare parts and costs in one place.', sales: 'Talk to Sales' },
  },
  ar: {
    home: 'الرئيسية', blog: 'المدونة', back: 'العودة إلى المدونة', toc: 'في هذا المقال', faq: 'الأسئلة الشائعة',
    next: 'طبّق ذلك عمليًا', more: 'مقالات', moreAccent: 'أخرى',
    cta: { title: 'هل أنت مستعد للتحكم في', accent: 'أسطولك؟', subtitle: 'احجز عرضًا تجريبيًا وشاهد أكسبنس مع مركباتك: الصيانة حسب الكيلومترات والفحوصات وقطع الغيار والتكاليف في مكان واحد.', sales: 'تحدث مع المبيعات' },
  },
};

export function BlogPostView({ post }: { post: BlogPost }) {
  const lang: Lang = post.language;
  const t = T[lang];
  const path = blogPath(post.slug, lang);
  const [answer, ...sections] = post.sections;
  const faqs = gated(post.faqs ?? []);
  const related = links(post.relatedPages, lang);
  const more = getPosts(lang).filter((p) => p.slug !== post.slug && p.category === post.category)
    .concat(getPosts(lang).filter((p) => p.slug !== post.slug && p.category !== post.category)).slice(0, 3);
  const crumbs = [
    { name: t.home, path: lhref(lang, '/') },
    { name: t.blog, path: lhref(lang, '/blog') },
    { name: post.title, path },
  ];

  return (
    <>
      <JsonLd data={articleSchema({ title: post.title, description: post.seoDescription ?? post.excerpt, path, image: DEFAULT_OG_IMAGE, publishedAt: post.publishedAt, updatedAt: post.updatedAt, lang })} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs.map((f) => ({ q: f.q, a: plain(f.a) })))} />}

      <Breadcrumbs lang={lang} items={[{ label: t.blog, href: lhref(lang, '/blog') }, { label: post.title }]} />

      <header className="bg-gradient-hero pb-10 pt-8">
        <div className="mx-auto max-w-3xl px-5 sm:px-7">
          <Link href={lhref(lang, '/blog')} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />{t.back}
          </Link>
          <PostMeta post={post} lang={lang} />
          <h1 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">{post.excerpt}</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 sm:px-7">
        <div className="aspect-[21/9] overflow-hidden rounded-2xl border border-border shadow-elevated"><BlogCover category={post.category} size="lg" /></div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:px-7 lg:grid-cols-[1fr_220px]">
        <article className="min-w-0">
          {answer && (
            <section id="quick-answer" className="rounded-2xl border border-primary/25 bg-panel-1 p-6">
              <h2 className="mb-2 text-lg font-semibold text-foreground">{answer.heading}</h2>
              <Md text={answer.body} lang={lang} className="!text-[17px] !text-foreground" />
            </section>
          )}
          {sections.map((s, i) => (
            <section key={s.heading} id={`s${i + 1}`} className="mt-10 scroll-mt-24">
              <h2 className="mb-4 text-2xl font-bold text-foreground">{s.heading}</h2>
              <Md text={s.body} lang={lang} className="!text-[17px] !leading-8" />
            </section>
          ))}

          {faqs.length > 0 && (
            <section id="faq" className="mt-12 scroll-mt-24">
              <h2 className="mb-4 text-2xl font-bold text-foreground">{t.faq}</h2>
              <div className="flex flex-col gap-3">{faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} lang={lang} />)}</div>
            </section>
          )}

          {related.length > 0 && (
            <nav aria-label={t.next} className="mt-12 rounded-2xl border border-primary/20 bg-panel-1 p-6">
              <p className="mb-3 font-semibold text-foreground">{t.next}</p>
              <ul className="flex flex-col gap-2">
                {related.map((l) => (
                  <li key={l.path}>
                    <Link href={lhref(lang, l.path)} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                      {l.label}<ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>

        <aside className="hidden lg:block">
          <nav aria-label={t.toc} className="sticky top-24 rounded-2xl border border-border bg-card p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.toc}</p>
            <ul className="flex flex-col gap-2">
              {sections.map((s, i) => (
                <li key={s.heading}><a href={`#s${i + 1}`} className="text-sm text-foreground transition-colors hover:text-primary">{s.heading}</a></li>
              ))}
              {faqs.length > 0 && <li><a href="#faq" className="text-sm text-foreground transition-colors hover:text-primary">{t.faq}</a></li>}
            </ul>
          </nav>
        </aside>
      </div>

      {more.length > 0 && (
        <section className="border-t border-border bg-gradient-light py-20">
          <div className="mx-auto max-w-wrap px-5 sm:px-7">
            <h2 className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">{t.more} <span className="text-gradient">{t.moreAccent}</span></h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => <BlogCard key={p.slug} post={p} lang={lang} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={t.cta.title} accent={t.cta.accent} subtitle={t.cta.subtitle} primary={primaryCta(lang)} secondary={{ label: t.cta.sales, href: lhref(lang, '/contact') }} />
    </>
  );
}

export { categoryLabel };
