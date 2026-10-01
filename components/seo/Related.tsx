import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { lhref, type Lang } from '@/lib/i18n';
import { links } from '@/content/registry';
import { getPost, blogPath, type BlogPost } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { FaqItem } from '@/components/home/FAQSection';
import { Section, SectionHead } from '@/components/Section';
import type { Faq } from '@/lib/seo-page';

/** Descriptive pill links, generated from data (anchors = page nav labels). */
export function RelatedLinks({ title, paths, lang }: { title: string; paths: string[]; lang: Lang }) {
  const items = links(paths, lang);
  if (!items.length) return null;
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold text-foreground">{title}</h2>
      <ul className="flex flex-wrap gap-3">
        {items.map((l) => (
          <li key={l.path}>
            <Link href={lhref(lang, l.path)} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-sidebar-accent hover:text-primary">
              {l.label}<ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Up to 3 related articles in the current language (falls back to English). */
export function RelatedArticles({ slugs, lang, title }: { slugs: string[]; lang: Lang; title: string }) {
  const posts = slugs.map((s) => getPost(s, lang) ?? getPost(s, 'en')).filter(Boolean).slice(0, 3) as BlogPost[];
  if (!posts.length) return null;
  return (
    <Section alt>
      <SectionHead title={title} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((p) => <BlogCard key={p.slug + p.language} post={p} lang={lang} />)}
      </div>
    </Section>
  );
}

export function FaqList({ faqs, lang, title, eyebrow }: { faqs: Faq[]; lang: Lang; title: string; eyebrow?: string }) {
  if (!faqs.length) return null;
  return (
    <Section>
      <SectionHead eyebrow={eyebrow ?? (lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ')} title={title} center />
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} lang={lang} />)}
      </div>
    </Section>
  );
}

export { blogPath };
