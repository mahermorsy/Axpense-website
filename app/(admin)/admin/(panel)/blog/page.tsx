'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ExternalLink, Eye, Pencil, Plus, Trash2 } from 'lucide-react';
import { useAdmin } from '@/lib/admin/store';
import { Btn, Card, ConfirmDialog, EmptyState, PageHeader, Pill, SearchInput, Select, cx, fmtDate } from '@/components/admin/ui';

export default function BlogAdminPage() {
  const { posts, users, deletePost, toast } = useAdmin();
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('all');
  const [lang, setLang] = useState('all');
  const [del, setDel] = useState<string | null>(null);

  const rows = posts
    .filter((p) => (status === 'all' || p.status === status) && (lang === 'all' || p.lang === lang))
    .filter((p) => !q || `${p.title} ${p.slug} ${p.category}`.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));
  const target = posts.find((p) => p.id === del);

  return (
    <>
      <PageHeader eyebrow="Blog articles management" title="Blog articles" desc={`${posts.filter((p) => p.status === 'published').length} published · ${posts.filter((p) => p.status === 'draft').length} drafts`}
        actions={<Link href="/admin/blog/new" className="inline-flex h-10 items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] px-4 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 hover:shadow-lg"><Plus className="h-4 w-4" />New article</Link>} />
      <Card>
        <div className="flex flex-col gap-3 border-b border-border p-4 md:flex-row md:items-center md:justify-between">
          <SearchInput id="post-search" value={q} onChange={setQ} placeholder="Search title, slug, category…" />
          <div className="flex gap-2">
            <label htmlFor="p-status" className="sr-only">Status</label>
            <Select id="p-status" value={status} onChange={(e) => setStatus(e.target.value)} className="h-10 w-36"><option value="all">All statuses</option><option value="published">Published</option><option value="draft">Draft</option></Select>
            <label htmlFor="p-lang" className="sr-only">Language</label>
            <Select id="p-lang" value={lang} onChange={(e) => setLang(e.target.value)} className="h-10 w-36"><option value="all">All languages</option><option value="en">English</option><option value="ar">Arabic</option></Select>
          </div>
        </div>
        {rows.length === 0 ? <EmptyState title="No articles found" action={<Link href="/admin/blog/new" className="text-sm font-medium text-primary hover:underline">Write the first one</Link>} /> : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="text-left text-xs text-muted-foreground"><tr className="border-b border-border">
                <th className="px-4 py-3 font-medium">Article</th><th className="px-2 py-3 font-medium">Category</th><th className="px-2 py-3 font-medium">Status</th><th className="px-2 py-3 text-right font-medium">Views</th><th className="px-2 py-3 font-medium">Updated</th><th className="px-4 py-3 text-right font-medium"><span className="sr-only">Actions</span></th>
              </tr></thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id} className="border-b border-border/60 last:border-0 hover:bg-muted/40">
                    <td className="max-w-[360px] px-4 py-3">
                      <Link href={`/admin/blog/${p.id}`} className={cx('block truncate font-medium text-foreground hover:text-primary', p.lang === 'ar' && 'font-arabic')} dir={p.lang === 'ar' ? 'rtl' : undefined}>{p.title}</Link>
                      <p className="truncate font-mono text-xs text-muted-foreground">/{p.lang === 'ar' ? 'ar/' : ''}blog/{p.slug} · {p.lang.toUpperCase()} · {users.find((u) => u.id === p.authorId)?.name ?? '—'}</p>
                    </td>
                    <td className="px-2 py-3 text-foreground">{p.category}</td>
                    <td className="px-2 py-3">{p.status === 'published' ? <Pill tone="green">Published</Pill> : <Pill tone="amber">Draft</Pill>}</td>
                    <td className="px-2 py-3 text-right tabular-nums text-foreground">{p.views.toLocaleString('en-US')}</td>
                    <td className="px-2 py-3 text-xs text-muted-foreground">{fmtDate(p.updatedAt)}</td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-1">
                        {p.status === 'published' && p.lang === 'en' && <a href={`/blog/${p.slug}`} target="_blank" rel="noopener noreferrer" aria-label="View on website" className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"><ExternalLink className="h-4 w-4" /></a>}
                        <Link href={`/admin/blog/${p.id}`} aria-label={`Edit ${p.title}`} className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"><Pencil className="h-4 w-4" /></Link>
                        <button type="button" onClick={() => setDel(p.id)} aria-label={`Delete ${p.title}`} className="rounded-md p-2 text-muted-foreground hover:bg-red-50 hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Eye className="h-3.5 w-3.5" />Views are sample numbers in demo mode.</p>
      <ConfirmDialog open={!!del} onCancel={() => setDel(null)} onConfirm={() => { if (del) { deletePost(del); toast('Article deleted'); } setDel(null); }} title="Delete this article?" body={`“${target?.title ?? ''}” will be removed permanently.`} />
    </>
  );
}
