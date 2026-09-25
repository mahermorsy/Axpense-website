'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowUp, Eye, Plus, Save, Trash2 } from 'lucide-react';
import { useAdmin, uid } from '@/lib/admin/store';
import type { AdminPost } from '@/lib/admin/types';
import { Btn, Card, ConfirmDialog, Field, Input, Modal, PageHeader, Select, Textarea, cx } from '@/components/admin/ui';

const CATEGORIES = ['Fleet Management', 'Fleet Maintenance', 'Fleet Expenses', 'Asset Management', 'Product Updates'];
const slugify = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9؀-ۿ]+/g, '-').replace(/(^-|-$)/g, '');

function blank(authorId: string): AdminPost {
  const today = new Date().toISOString().slice(0, 10);
  return { id: uid('P'), slug: '', title: '', excerpt: '', category: CATEGORIES[0], status: 'draft', lang: 'en', publishedAt: '', updatedAt: today, views: 0, authorId, sections: [{ heading: '', body: '' }] };
}

export default function EditPostPage({ params }: { params: { id: string } }) {
  const { posts, me, savePost, deletePost, toast, ready } = useAdmin();
  const router = useRouter();
  const isNew = params.id === 'new';
  const [post, setPost] = useState<AdminPost | null>(null);
  const [slugTouched, setSlugTouched] = useState(!isNew);
  const [preview, setPreview] = useState(false);
  const [del, setDel] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!ready || post) return;
    const found = posts.find((p) => p.id === params.id);
    setPost(isNew ? blank(me?.id ?? 'u1') : found ?? null);
  }, [ready, posts, params.id, isNew, me, post]);

  if (!ready) return null;
  if (!post) return <Card className="p-10 text-center"><p className="font-semibold text-foreground">Article not found</p><Link href="/admin/blog" className="mt-2 inline-block text-sm text-primary hover:underline">Back to articles</Link></Card>;

  const set = (p: Partial<AdminPost>) => setPost({ ...post, ...p });
  const setSection = (i: number, p: Partial<AdminPost['sections'][number]>) => set({ sections: post.sections.map((s, j) => (j === i ? { ...s, ...p } : s)) });
  const moveSection = (i: number, d: -1 | 1) => { const s = [...post.sections]; const j = i + d; if (j < 0 || j >= s.length) return; [s[i], s[j]] = [s[j], s[i]]; set({ sections: s }); };
  const ar = post.lang === 'ar';
  const seoTitle = post.seoTitle || post.title;
  const seoDesc = post.seoDescription || post.excerpt;
  const url = `axpense.net/${ar ? 'ar/' : ''}blog/${post.slug || 'your-article'}`;

  async function save(status?: AdminPost['status']) {
    const next = { ...post!, status: status ?? post!.status };
    const errs: string[] = [];
    if (!next.title.trim()) errs.push('Add a title.');
    if (!next.slug.trim()) errs.push('Add a URL slug.');
    if (posts.some((p) => p.slug === next.slug && p.lang === next.lang && p.id !== next.id)) errs.push('Another article already uses this URL slug.');
    if (next.status === 'published' && !next.excerpt.trim()) errs.push('Add an excerpt before publishing.');
    setErrors(errs);
    if (errs.length) return;
    const today = new Date().toISOString().slice(0, 10);
    const draft = { ...next, updatedAt: today, publishedAt: next.status === 'published' ? next.publishedAt || today : next.publishedAt };
    setSaving(true);
    const saved = await savePost(draft);
    setSaving(false);
    if (!saved) return; // error toast already shown
    setPost(saved);
    toast(saved.status === 'published' ? 'Article published' : 'Draft saved');
    if (isNew || saved.id !== post!.id) router.replace(`/admin/blog/${saved.id}`);
  }

  return (
    <>
      <Link href="/admin/blog" className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" />All articles</Link>
      <PageHeader title={isNew ? 'New article' : 'Edit article'} desc={post.status === 'published' ? 'Published — changes go live when you save.' : 'Draft — not visible on the website.'}
        actions={<>
          <Btn onClick={() => setPreview(true)}><Eye />Preview</Btn>
          <Btn disabled={saving} onClick={() => save('draft')}><Save />Save draft</Btn>
          <Btn variant="primary" disabled={saving} onClick={() => save('published')}>{post.status === 'published' ? 'Update' : 'Publish'}</Btn>
        </>} />

      {errors.length > 0 && <div role="alert" className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{errors.map((e) => <p key={e}>{e}</p>)}</div>}

      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <Card className="space-y-4 p-5">
            <Field label="Title" htmlFor="title">
              <Input id="title" value={post.title} dir={ar ? 'rtl' : undefined} onChange={(e) => set({ title: e.target.value, ...(slugTouched ? {} : { slug: slugify(e.target.value) }) })} placeholder="e.g. How to calculate fleet cost" />
            </Field>
            <Field label="Excerpt" htmlFor="excerpt" hint={`${post.excerpt.length}/160 — shown on the blog list and cards.`}>
              <Textarea id="excerpt" rows={2} maxLength={220} dir={ar ? 'rtl' : undefined} value={post.excerpt} onChange={(e) => set({ excerpt: e.target.value })} />
            </Field>
          </Card>

          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">Content sections</h2>
              <Btn size="sm" onClick={() => set({ sections: [...post.sections, { heading: '', body: '' }] })}><Plus />Add section</Btn>
            </div>
            <ol className="space-y-4">
              {post.sections.map((s, i) => (
                <li key={i} className="rounded-xl border border-border p-4">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Section {i + 1}</span>
                    <div className="flex gap-1">
                      <button type="button" onClick={() => moveSection(i, -1)} disabled={i === 0} aria-label="Move up" className="rounded p-1.5 text-muted-foreground hover:bg-muted disabled:opacity-30"><ArrowUp className="h-4 w-4" /></button>
                      <button type="button" onClick={() => moveSection(i, 1)} disabled={i === post.sections.length - 1} aria-label="Move down" className="rounded p-1.5 text-muted-foreground hover:bg-muted disabled:opacity-30"><ArrowDown className="h-4 w-4" /></button>
                      <button type="button" onClick={() => set({ sections: post.sections.filter((_, j) => j !== i) })} disabled={post.sections.length === 1} aria-label="Remove section" className="rounded p-1.5 text-muted-foreground hover:bg-red-50 hover:text-destructive disabled:opacity-30"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <label htmlFor={`h-${i}`} className="sr-only">Section heading</label>
                  <Input id={`h-${i}`} value={s.heading} dir={ar ? 'rtl' : undefined} onChange={(e) => setSection(i, { heading: e.target.value })} placeholder="Heading (H2)" className="font-semibold" />
                  <label htmlFor={`b-${i}`} className="sr-only">Section text</label>
                  <Textarea id={`b-${i}`} rows={6} value={s.body} dir={ar ? 'rtl' : undefined} onChange={(e) => setSection(i, { body: e.target.value })} placeholder="Write the text. Leave an empty line between paragraphs." className="mt-2 leading-relaxed" />
                </li>
              ))}
            </ol>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="space-y-4 p-5">
            <h2 className="text-base font-semibold text-foreground">Settings</h2>
            <Field label="Status" htmlFor="status"><Select id="status" value={post.status} onChange={(e) => set({ status: e.target.value as AdminPost['status'] })}><option value="draft">Draft</option><option value="published">Published</option></Select></Field>
            <Field label="Language" htmlFor="lang"><Select id="lang" value={post.lang} onChange={(e) => set({ lang: e.target.value as 'en' | 'ar' })}><option value="en">English</option><option value="ar">Arabic</option></Select></Field>
            <Field label="Category" htmlFor="cat"><Select id="cat" value={post.category} onChange={(e) => set({ category: e.target.value })}>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</Select></Field>
            <Field label="URL slug" htmlFor="slug" hint={`/${ar ? 'ar/' : ''}blog/${post.slug || '…'}`}><Input id="slug" value={post.slug} onChange={(e) => { setSlugTouched(true); set({ slug: slugify(e.target.value) }); }} /></Field>
            <Field label="Publish date" htmlFor="pub"><Input id="pub" type="date" value={post.publishedAt} onChange={(e) => set({ publishedAt: e.target.value })} /></Field>
          </Card>

          <Card className="space-y-4 p-5">
            <h2 className="text-base font-semibold text-foreground">Search engine (SEO)</h2>
            <Field label="SEO title" htmlFor="seot" hint={`${seoTitle.length}/60 characters`}><Input id="seot" value={post.seoTitle ?? ''} placeholder={post.title || 'Defaults to the title'} onChange={(e) => set({ seoTitle: e.target.value })} /></Field>
            <Field label="Meta description" htmlFor="seod" hint={`${seoDesc.length}/155 characters`}><Textarea id="seod" rows={3} value={post.seoDescription ?? ''} placeholder={post.excerpt || 'Defaults to the excerpt'} onChange={(e) => set({ seoDescription: e.target.value })} /></Field>
            <div className="rounded-lg border border-border p-3" aria-label="Google result preview">
              <p className="truncate text-xs text-muted-foreground">{url}</p>
              <p className={cx('truncate text-base', seoTitle.length > 60 ? 'text-amber-700' : 'text-[#1a0dab]')}>{seoTitle || 'Article title'} | Axpense</p>
              <p className="line-clamp-2 text-xs text-muted-foreground">{seoDesc || 'Meta description preview.'}</p>
            </div>
          </Card>

          {!isNew && <Btn variant="ghost" className="w-full text-destructive" onClick={() => setDel(true)}><Trash2 />Delete article</Btn>}
        </div>
      </div>

      <Modal open={preview} onClose={() => setPreview(false)} title="Preview" wide>
        <article dir={ar ? 'rtl' : 'ltr'} className={ar ? 'font-arabic' : ''}>
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{post.category}</span>
          <h1 className="mt-3 text-3xl font-bold text-foreground">{post.title || 'Untitled article'}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{post.excerpt}</p>
          {post.sections.map((s, i) => (
            <section key={i} className="mt-6">
              {s.heading && <h2 className="mb-2 text-xl font-bold text-foreground">{s.heading}</h2>}
              {s.body.split(/\n\s*\n/).filter(Boolean).map((p, j) => <p key={j} className="mb-3 leading-7 text-ink-700">{p}</p>)}
            </section>
          ))}
        </article>
      </Modal>
      <ConfirmDialog open={del} onCancel={() => setDel(false)} onConfirm={async () => { await deletePost(post.id); toast('Article deleted'); router.replace('/admin/blog'); }} title="Delete this article?" body={`“${post.title}” will be removed permanently.`} />
    </>
  );
}
