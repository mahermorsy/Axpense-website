import { BookOpen, CalendarDays, Layers } from 'lucide-react';
import { BLOG_POSTS, formatPostDate } from '@/lib/blog';
import { CtaBand, PageHero } from '@/components/ui/AppSections';
import { BlogCard, FeaturedPostCard, categoryLabel } from '@/components/blog/BlogCard';
import { primaryCta } from '@/lib/cta';
import { lhref, type Lang } from '@/lib/i18n';

const T = {
  en: {
    hero: { badge: 'Blog', title: 'Insights on fleet &', accent: 'asset management', subtitle: 'Practical guides on fleet operations, maintenance, expenses, and asset management for teams in Egypt and MENA.' },
    articles: 'Articles', latestPublish: 'Latest publish', categories: 'Categories', latest: 'Latest ', latestAccent: 'articles',
    cta: { title: 'Ready to put this into', accent: 'practice?', subtitle: 'See how Axpense handles fleet, maintenance, spare parts and expenses in one platform.', sales: 'Talk to Sales' },
  },
  ar: {
    hero: { badge: 'المدونة', title: 'رؤى حول إدارة', accent: 'الأسطول والأصول', subtitle: 'أدلة عملية حول تشغيل الأسطول والصيانة والمصروفات وإدارة الأصول لفرق التشغيل في مصر ومنطقة الشرق الأوسط وشمال أفريقيا.' },
    articles: 'مقالات', latestPublish: 'آخر نشر', categories: 'تصنيفات', latest: 'أحدث ', latestAccent: 'المقالات',
    cta: { title: 'هل أنت مستعد لتطبيق', accent: 'ذلك عمليًا؟', subtitle: 'شاهد كيف يدير أكسبنس الأسطول والصيانة وقطع الغيار والمصروفات في منصة واحدة.', sales: 'تحدث مع المبيعات' },
  },
};

export function BlogIndexView({ lang }: { lang: Lang }) {
  const t = T[lang];
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const [featured, ...rest] = posts;
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const latestDate = formatPostDate(posts[0].publishedAt, lang, 'long').replace(/,?\s*[\d٠-٩]{4}$/, '');
  const stats = [
    { icon: BookOpen, value: String(posts.length), label: t.articles },
    { icon: CalendarDays, value: latestDate, label: t.latestPublish },
    { icon: Layers, value: String(categories.length), label: t.categories },
  ];

  return (
    <>
      <PageHero {...t.hero} />

      <section className="-mt-10 pb-4">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3 px-5 sm:gap-6 sm:px-7">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-card sm:p-6">
              <Icon className="mx-auto mb-2 h-5 w-5 text-primary" aria-hidden="true" />
              <div className="text-xl font-bold text-foreground sm:text-2xl">{value}</div>
              <p className="text-xs text-muted-foreground sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-wrap px-5 sm:px-7">
          <FeaturedPostCard post={featured} lang={lang} />
        </div>
      </section>

      {rest.length > 0 && (
        <section className="pb-24">
          <div className="mx-auto max-w-wrap px-5 sm:px-7">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t.latest}<span className="text-gradient">{t.latestAccent}</span></h2>
              <div className="hidden flex-wrap gap-2 sm:flex">
                {categories.map((c) => <span key={c} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">{categoryLabel(c, lang)}</span>)}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => <BlogCard key={post.slug} post={post} lang={lang} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={t.cta.title} accent={t.cta.accent} subtitle={t.cta.subtitle} primary={primaryCta(lang)} secondary={{ label: t.cta.sales, href: lhref(lang, '/contact') }} />
    </>
  );
}
