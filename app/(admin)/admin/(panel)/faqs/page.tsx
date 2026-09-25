'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUp, ChevronDown, Pencil, Plus, Trash2 } from 'lucide-react';
import { useAdmin, uid } from '@/lib/admin/store';
import { FAQ_PAGES } from '@/lib/admin/seed';
import type { Faq } from '@/lib/admin/types';
import { Btn, Card, ConfirmDialog, EmptyState, Field, Input, Modal, PageHeader, Pill, SearchInput, Select, Textarea, cx } from '@/components/admin/ui';

export default function FaqAdminPage() {
  const { faqs, saveFaq, deleteFaq, moveFaq, toast } = useAdmin();
  const [page, setPage] = useState('home');
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState<Faq | null>(null);
  const [del, setDel] = useState<Faq | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const lang: 'en' | 'ar' = page.startsWith('ar-') ? 'ar' : 'en';
  const counts = (id: string) => faqs.filter((f) => f.page === id).length;
  const rows = faqs
    .filter((f) => (q ? `${f.question} ${f.answer}`.toLowerCase().includes(q.toLowerCase()) : f.page === page))
    .sort((a, b) => a.page.localeCompare(b.page) || a.order - b.order);
  const pageLabel = (id: string) => FAQ_PAGES.find((p) => p.id === id)?.label ?? id;

  function openNew() {
    const order = Math.max(-1, ...faqs.filter((f) => f.page === page).map((f) => f.order)) + 1;
    setEditing({ id: uid('F'), page, lang, question: '', answer: '', published: true, order });
  }

  return (
    <>
      <PageHeader eyebrow="FAQ management" title="FAQs" desc="Questions shown on each page (and in Google's FAQ rich results)." actions={<Btn variant="primary" onClick={openNew}><Plus />Add question</Btn>} />

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <Card className="h-fit p-2">
          <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Pages</p>
          <nav aria-label="FAQ pages" className="flex max-h-[60vh] flex-col overflow-y-auto">
            {FAQ_PAGES.map((p) => (
              <button key={p.id} type="button" onClick={() => { setPage(p.id); setQ(''); }} aria-current={page === p.id && !q ? 'page' : undefined}
                className={cx('flex items-center justify-between rounded-lg px-3 py-2 text-start text-sm', page === p.id && !q ? 'bg-sidebar-accent font-medium text-sidebar-primary' : 'text-foreground hover:bg-muted')}>
                {p.label}<span className="text-xs tabular-nums text-muted-foreground">{counts(p.id)}</span>
              </button>
            ))}
          </nav>
        </Card>

        <Card>
          <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-base font-semibold text-foreground">{q ? 'Search results' : pageLabel(page)}</h2>
            <SearchInput id="faq-search" value={q} onChange={setQ} placeholder="Search all FAQs…" />
          </div>
          {rows.length === 0 ? <EmptyState title={q ? 'No questions match' : 'No questions on this page yet'} action={!q && <Btn onClick={openNew}><Plus />Add the first question</Btn>} /> : (
            <ul className="divide-y divide-border">
              {rows.map((f, i) => {
                const group = rows.filter((x) => x.page === f.page);
                const idx = group.findIndex((x) => x.id === f.id);
                return (
                  <li key={f.id} className="p-4" dir={f.lang === 'ar' ? 'rtl' : undefined}>
                    <div className="flex items-start gap-3">
                      <button type="button" onClick={() => setOpenId(openId === f.id ? null : f.id)} aria-expanded={openId === f.id} className={cx('flex min-w-0 flex-1 items-start gap-2 text-start', f.lang === 'ar' && 'font-arabic')}>
                        <ChevronDown className={cx('mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform', openId === f.id && 'rotate-180')} />
                        <span className="text-sm font-medium text-foreground">{f.question}</span>
                      </button>
                      <div className="flex shrink-0 items-center gap-1" dir="ltr">
                        {q && <Pill>{pageLabel(f.page)}</Pill>}
                        {!f.published && <Pill tone="amber">Hidden</Pill>}
                        {!q && <>
                          <button type="button" onClick={() => moveFaq(f.id, -1)} disabled={idx === 0} aria-label="Move up" className="rounded p-1.5 text-muted-foreground hover:bg-muted disabled:opacity-30"><ArrowUp className="h-4 w-4" /></button>
                          <button type="button" onClick={() => moveFaq(f.id, 1)} disabled={idx === group.length - 1} aria-label="Move down" className="rounded p-1.5 text-muted-foreground hover:bg-muted disabled:opacity-30"><ArrowDown className="h-4 w-4" /></button>
                        </>}
                        <button type="button" onClick={() => setEditing(f)} aria-label="Edit" className="rounded p-1.5 text-muted-foreground hover:bg-muted"><Pencil className="h-4 w-4" /></button>
                        <button type="button" onClick={() => setDel(f)} aria-label="Delete" className="rounded p-1.5 text-muted-foreground hover:bg-red-50 hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                    {openId === f.id && <p className={cx('mt-2 ps-6 text-sm leading-relaxed text-muted-foreground', f.lang === 'ar' && 'font-arabic')}>{f.answer}</p>}
                    <span className="sr-only">{i}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </Card>
      </div>

      {editing && <FaqModal faq={editing} onClose={() => setEditing(null)} onSave={(f) => { saveFaq(f); setEditing(null); toast('Question saved'); }} />}
      <ConfirmDialog open={!!del} onCancel={() => setDel(null)} onConfirm={() => { if (del) { deleteFaq(del.id); toast('Question deleted'); } setDel(null); }} title="Delete this question?" body={del?.question ?? ''} />
    </>
  );
}

function FaqModal({ faq, onClose, onSave }: { faq: Faq; onClose: () => void; onSave: (f: Faq) => void }) {
  const [f, setF] = useState(faq);
  const [err, setErr] = useState('');
  const ar = f.lang === 'ar';
  return (
    <Modal open onClose={onClose} title={faq.question ? 'Edit question' : 'New question'}
      footer={<><Btn onClick={onClose}>Cancel</Btn><Btn variant="primary" onClick={() => { if (!f.question.trim() || !f.answer.trim()) { setErr('Add both a question and an answer.'); return; } onSave({ ...f, question: f.question.trim(), answer: f.answer.trim() }); }}>Save</Btn></>}>
      <div className="space-y-4">
        {err && <p role="alert" className="rounded-lg bg-destructive/10 p-2 text-sm text-destructive">{err}</p>}
        <div className="grid grid-cols-2 gap-4">
          <Field label="Page" htmlFor="fq-page"><Select id="fq-page" value={f.page} onChange={(e) => setF({ ...f, page: e.target.value, lang: e.target.value.startsWith('ar-') ? 'ar' : 'en' })}>{FAQ_PAGES.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}</Select></Field>
          <Field label="Visibility" htmlFor="fq-pub"><Select id="fq-pub" value={f.published ? '1' : '0'} onChange={(e) => setF({ ...f, published: e.target.value === '1' })}><option value="1">Published</option><option value="0">Hidden</option></Select></Field>
        </div>
        <Field label="Question" htmlFor="fq-q"><Input id="fq-q" dir={ar ? 'rtl' : undefined} value={f.question} onChange={(e) => setF({ ...f, question: e.target.value })} /></Field>
        <Field label="Answer" htmlFor="fq-a" hint="Keep it to 1–3 sentences; it's also used for Google rich results."><Textarea id="fq-a" rows={5} dir={ar ? 'rtl' : undefined} value={f.answer} onChange={(e) => setF({ ...f, answer: e.target.value })} /></Field>
      </div>
    </Modal>
  );
}
