'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, Copy, Download, Mail, Phone, Trash2 } from 'lucide-react';
import { useAdmin } from '@/lib/admin/store';
import { LEAD_STATUSES, type Lead, type LeadStatus } from '@/lib/admin/types';
import { Avatar, Btn, Card, ConfirmDialog, Drawer, EmptyState, Field, LeadStatusBadge, PageHeader, SearchInput, Select, Textarea, cx, fmtDate, timeAgo } from '@/components/admin/ui';

const PAGE = 15;

export default function LeadsPage() {
  return <Suspense fallback={null}><Leads /></Suspense>;
}

function Leads() {
  const { leads, users, bulkUpdateLeads, deleteLeads, toast } = useAdmin();
  const params = useSearchParams();
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<string>(params.get('status') ?? 'all');
  const [industry, setIndustry] = useState('all');
  const [country, setCountry] = useState('all');
  const [owner, setOwner] = useState('all');
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [openId, setOpenId] = useState<string | null>(params.get('id'));
  const [confirmDelete, setConfirmDelete] = useState<string[] | null>(null);

  const sales = users.filter((u) => (u.role === 'sales' || u.role === 'admin') && u.status === 'active');
  const industries = useMemo(() => Array.from(new Set(leads.map((l) => l.industry))).sort(), [leads]);
  const countries = useMemo(() => Array.from(new Set(leads.map((l) => l.country))).sort(), [leads]);

  const filtered = leads.filter((l) => {
    if (status !== 'all' && l.status !== status) return false;
    if (industry !== 'all' && l.industry !== industry) return false;
    if (country !== 'all' && l.country !== country) return false;
    if (owner === 'none' && l.ownerId) return false;
    if (owner !== 'all' && owner !== 'none' && l.ownerId !== owner) return false;
    if (q) {
      const s = q.toLowerCase();
      return [l.name, l.company, l.email, l.id, l.phone ?? ''].some((v) => v.toLowerCase().includes(s));
    }
    return true;
  });
  useEffect(() => { setPage(0); setSelected([]); }, [q, status, industry, country, owner]);
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const rows = filtered.slice(page * PAGE, page * PAGE + PAGE);
  const open = leads.find((l) => l.id === openId);
  const allOnPage = rows.length > 0 && rows.every((r) => selected.includes(r.id));
  const ownerName = (id?: string) => users.find((u) => u.id === id)?.name;

  function exportCsv(list: Lead[]) {
    const cols: (keyof Lead)[] = ['id', 'createdAt', 'name', 'company', 'email', 'phone', 'industry', 'country', 'companySize', 'assetCount', 'status', 'sourcePage', 'channel', 'lang', 'message'];
    const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const csv = [cols.join(','), ...list.map((l) => cols.map((c) => esc(l[c])).join(',')), ].join('\n');
    const url = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = `axpense-leads-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
    URL.revokeObjectURL(url);
    toast(`Exported ${list.length} leads`);
  }

  return (
    <>
      <PageHeader eyebrow="Leads management" title="Leads" desc={`${filtered.length} of ${leads.length} leads from the website forms.`}
        actions={<Btn onClick={() => exportCsv(filtered)}><Download />Export CSV</Btn>} />

      <Card>
        <div className="flex flex-col gap-3 border-b border-border p-4 xl:flex-row xl:items-center xl:justify-between">
          <SearchInput id="lead-search" value={q} onChange={setQ} placeholder="Search name, company, email…" />
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <FilterSelect id="f-status" label="Status" value={status} onChange={setStatus} options={[['all', 'All statuses'], ...LEAD_STATUSES.map((s) => [s.id, s.label] as [string, string])]} />
            <FilterSelect id="f-industry" label="Industry" value={industry} onChange={setIndustry} options={[['all', 'All industries'], ...industries.map((i) => [i, i] as [string, string])]} />
            <FilterSelect id="f-country" label="Country" value={country} onChange={setCountry} options={[['all', 'All countries'], ...countries.map((c) => [c, c] as [string, string])]} />
            <FilterSelect id="f-owner" label="Owner" value={owner} onChange={setOwner} options={[['all', 'Any owner'], ['none', 'Unassigned'], ...sales.map((u) => [u.id, u.name] as [string, string])]} />
          </div>
        </div>

        {selected.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 border-b border-border bg-panel-1 px-4 py-2.5 text-sm">
            <span className="font-medium text-foreground">{selected.length} selected</span>
            <label htmlFor="bulk-status" className="sr-only">Set status</label>
            <Select id="bulk-status" value="" onChange={(e) => { const v = e.target.value as LeadStatus; if (!v) return; bulkUpdateLeads(selected, { status: v }); toast(`Updated ${selected.length} leads`); }} className="h-8 w-40 py-0 text-xs">
              <option value="">Set status…</option>{LEAD_STATUSES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
            </Select>
            <label htmlFor="bulk-owner" className="sr-only">Assign</label>
            <Select id="bulk-owner" value="" onChange={(e) => { if (!e.target.value) return; bulkUpdateLeads(selected, { ownerId: e.target.value }); toast(`Assigned ${selected.length} leads`); }} className="h-8 w-40 py-0 text-xs">
              <option value="">Assign to…</option>{sales.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
            </Select>
            <Btn size="sm" onClick={() => exportCsv(leads.filter((l) => selected.includes(l.id)))}><Download />Export</Btn>
            <Btn size="sm" variant="ghost" className="text-destructive" onClick={() => setConfirmDelete(selected)}><Trash2 />Delete</Btn>
          </div>
        )}

        {rows.length === 0 ? <EmptyState title="No leads match these filters" desc="Try clearing a filter or searching for something else." /> : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-sm">
              <thead className="text-left text-xs text-muted-foreground">
                <tr className="border-b border-border">
                  <th className="w-10 px-4 py-3"><input type="checkbox" aria-label="Select all on this page" checked={allOnPage} onChange={() => setSelected(allOnPage ? selected.filter((id) => !rows.some((r) => r.id === id)) : Array.from(new Set([...selected, ...rows.map((r) => r.id)])))} className="h-4 w-4 accent-[hsl(var(--primary))]" /></th>
                  <th className="px-2 py-3 font-medium">Lead</th>
                  <th className="px-2 py-3 font-medium">Industry · Country</th>
                  <th className="px-2 py-3 font-medium">Source</th>
                  <th className="px-2 py-3 font-medium">Status</th>
                  <th className="px-2 py-3 font-medium">Owner</th>
                  <th className="px-4 py-3 text-right font-medium">Received</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((l) => (
                  <tr key={l.id} className={cx('cursor-pointer border-b border-border/60 last:border-0 hover:bg-muted/40', selected.includes(l.id) && 'bg-panel-1/60')} onClick={() => setOpenId(l.id)}>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}><input type="checkbox" aria-label={`Select ${l.name}`} checked={selected.includes(l.id)} onChange={() => setSelected(selected.includes(l.id) ? selected.filter((x) => x !== l.id) : [...selected, l.id])} className="h-4 w-4 accent-[hsl(var(--primary))]" /></td>
                    <td className="px-2 py-3">
                      <button type="button" onClick={(e) => { e.stopPropagation(); setOpenId(l.id); }} className="text-start font-medium text-foreground hover:text-primary">{l.name}</button>
                      <p className="text-xs text-muted-foreground">{l.company}</p>
                    </td>
                    <td className="px-2 py-3"><p className="text-foreground">{l.industry}</p><p className="text-xs text-muted-foreground">{l.country}{l.assetCount ? ` · ${l.assetCount} assets` : ''}</p></td>
                    <td className="px-2 py-3"><p className="font-mono text-xs text-foreground">{l.sourcePage}</p><p className="text-xs text-muted-foreground">{l.channel} · {l.lang.toUpperCase()}</p></td>
                    <td className="px-2 py-3"><LeadStatusBadge status={l.status} /></td>
                    <td className="px-2 py-3 text-foreground">{ownerName(l.ownerId) ?? <span className="text-xs text-amber-700">Unassigned</span>}</td>
                    <td className="px-4 py-3 text-right text-xs text-muted-foreground" title={fmtDate(l.createdAt, true)}>{timeAgo(l.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-border px-4 py-3 text-sm text-muted-foreground">
          <span>Page {page + 1} of {pages}</span>
          <div className="flex gap-2">
            <Btn size="sm" disabled={page === 0} onClick={() => setPage(page - 1)} aria-label="Previous page"><ChevronLeft /></Btn>
            <Btn size="sm" disabled={page >= pages - 1} onClick={() => setPage(page + 1)} aria-label="Next page"><ChevronRight /></Btn>
          </div>
        </div>
      </Card>

      {open && <LeadDrawer lead={open} onClose={() => setOpenId(null)} onDelete={() => setConfirmDelete([open.id])} />}

      <ConfirmDialog open={!!confirmDelete} onCancel={() => setConfirmDelete(null)}
        onConfirm={() => { if (confirmDelete) { deleteLeads(confirmDelete); toast(`Deleted ${confirmDelete.length} lead${confirmDelete.length > 1 ? 's' : ''}`); setSelected([]); setOpenId(null); } setConfirmDelete(null); }}
        title={`Delete ${confirmDelete?.length ?? 0} lead${(confirmDelete?.length ?? 0) > 1 ? 's' : ''}?`} body="This removes the lead and its notes permanently." />
    </>
  );
}

function FilterSelect({ id, label, value, onChange, options }: { id: string; label: string; value: string; onChange: (v: string) => void; options: [string, string][] }) {
  return (
    <>
      <label htmlFor={id} className="sr-only">{label}</label>
      <Select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="h-10 sm:w-40">
        {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </Select>
    </>
  );
}

function LeadDrawer({ lead, onClose, onDelete }: { lead: Lead; onClose: () => void; onDelete: () => void }) {
  const { users, updateLead, addLeadNote, toast } = useAdmin();
  const [note, setNote] = useState('');
  const sales = users.filter((u) => (u.role === 'sales' || u.role === 'admin') && u.status === 'active');
  const copy = async (text: string) => { try { await navigator.clipboard.writeText(text); toast('Copied'); } catch { toast('Copy not available', 'error'); } };

  return (
    <Drawer open onClose={onClose}
      title={<div className="flex items-center gap-3"><Avatar name={lead.name} /><div className="min-w-0"><p className="truncate text-base font-semibold text-foreground">{lead.name}</p><p className="truncate text-sm text-muted-foreground">{lead.company} · {lead.id}</p></div></div>}
      footer={<><Btn variant="ghost" className="me-auto text-destructive" onClick={onDelete}><Trash2 />Delete</Btn><Btn onClick={onClose}>Close</Btn></>}>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Status" htmlFor="d-status">
          <Select id="d-status" value={lead.status} onChange={(e) => { updateLead(lead.id, { status: e.target.value as LeadStatus }); toast('Status updated'); }}>
            {LEAD_STATUSES.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </Select>
        </Field>
        <Field label="Owner" htmlFor="d-owner">
          <Select id="d-owner" value={lead.ownerId ?? ''} onChange={(e) => { updateLead(lead.id, { ownerId: e.target.value || undefined }); toast('Owner updated'); }}>
            <option value="">Unassigned</option>{sales.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
          </Select>
        </Field>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 rounded-xl border border-border p-4 text-sm sm:grid-cols-2">
        <Info label="Email"><span className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" /><span className="truncate">{lead.email}</span><button type="button" onClick={() => copy(lead.email)} aria-label="Copy email" className="text-muted-foreground hover:text-primary"><Copy className="h-3.5 w-3.5" /></button></span></Info>
        <Info label="Phone"><span className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground" />{lead.phone ?? '—'}{lead.phone && <button type="button" onClick={() => copy(lead.phone!)} aria-label="Copy phone" className="text-muted-foreground hover:text-primary"><Copy className="h-3.5 w-3.5" /></button>}</span></Info>
        <Info label="Industry">{lead.industry}</Info>
        <Info label="Country">{lead.country}</Info>
        <Info label="Company size">{lead.companySize ?? '—'}</Info>
        <Info label="Vehicles / assets">{lead.assetCount ?? '—'}</Info>
        <Info label="Source page"><span className="font-mono text-xs">{lead.sourcePage}</span></Info>
        <Info label="Channel · language">{lead.channel} · {lead.lang === 'ar' ? 'Arabic' : 'English'}</Info>
        <Info label="Received">{fmtDate(lead.createdAt, true)}</Info>
      </dl>

      {lead.message && (
        <div className="mt-6">
          <p className="label-app">Message</p>
          <p className="rounded-xl bg-muted/60 p-4 text-sm leading-relaxed text-foreground">{lead.message}</p>
        </div>
      )}

      <div className="mt-6">
        <p className="label-app">Notes & activity</p>
        <ul className="space-y-3">
          {lead.notes.map((n) => (
            <li key={n.id} className="rounded-lg border border-border p-3 text-sm">
              <p className="text-foreground">{n.text}</p>
              <p className="mt-1 text-xs text-muted-foreground">{n.byName ?? users.find((u) => u.id === n.by)?.name ?? 'Team'} · {fmtDate(n.at, true)}</p>
            </li>
          ))}
          {!lead.notes.length && <li className="text-sm text-muted-foreground">No notes yet.</li>}
        </ul>
        <form className="mt-3" onSubmit={(e) => { e.preventDefault(); if (!note.trim()) return; addLeadNote(lead.id, note.trim()); setNote(''); toast('Note added'); }}>
          <label htmlFor="d-note" className="sr-only">Add a note</label>
          <Textarea id="d-note" rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note — e.g. called, demo booked for Tuesday…" />
          <div className="mt-2 flex justify-end"><Btn type="submit" variant="primary" size="sm" disabled={!note.trim()}>Add note</Btn></div>
        </form>
      </div>
    </Drawer>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="min-w-0"><dt className="text-xs text-muted-foreground">{label}</dt><dd className="mt-0.5 text-foreground">{children}</dd></div>;
}
