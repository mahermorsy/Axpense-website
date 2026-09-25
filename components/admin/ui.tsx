'use client';

import { useEffect, useRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { AlertTriangle, CheckCircle2, Search, X } from 'lucide-react';
import type { LeadStatus } from '@/lib/admin/types';

export function cx(...c: (string | false | undefined | null)[]) { return c.filter(Boolean).join(' '); }

export function PageHeader({ eyebrow, title, desc, actions }: { eyebrow?: string; title: string; desc?: string; actions?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
        <h1 className="text-2xl font-bold text-foreground lg:text-3xl">{title}</h1>
        {desc && <p className="mt-1 text-sm text-muted-foreground">{desc}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx('rounded-xl border border-border bg-card shadow-sm', className)}>{children}</div>;
}
export function CardHeader({ title, icon, action }: { title: string; icon?: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 px-5 pb-2 pt-5">
      <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">{icon}{title}</h2>
      {action}
    </div>
  );
}

type BtnVariant = 'primary' | 'outline' | 'ghost' | 'danger';
export function Btn({ variant = 'outline', size = 'md', className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: BtnVariant; size?: 'sm' | 'md' }) {
  const v: Record<BtnVariant, string> = {
    primary: 'bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] text-primary-foreground font-semibold shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35',
    outline: 'border border-border bg-card text-foreground font-medium hover:bg-muted',
    ghost: 'text-foreground font-medium hover:bg-muted',
    danger: 'bg-destructive text-destructive-foreground font-semibold hover:bg-destructive/90',
  };
  return (
    <button type="button" {...rest} className={cx('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:size-4', size === 'sm' ? 'h-8 px-3 text-xs' : 'h-10 px-4 text-sm', /\btext-(?!xs|sm|base)/.test(className ?? '') ? v[variant].replace(/\btext-foreground\b/, '') : v[variant], className)}>
      {children}
    </button>
  );
}

export function Field({ label, htmlFor, hint, children }: { label: string; htmlFor: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="label-app">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
export function Input(props: InputHTMLAttributes<HTMLInputElement>) { return <input {...props} className={cx('input-app', props.className)} />; }
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) { return <textarea {...props} className={cx('input-app', props.className)} />; }
export function Select({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) { return <select {...props} className={cx('input-app pe-8', props.className)}>{children}</select>; }

export function SearchInput({ value, onChange, placeholder, id }: { value: string; onChange: (v: string) => void; placeholder: string; id: string }) {
  return (
    <div className="relative w-full sm:w-72">
      <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <input id={id} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="input-app ps-9" />
    </div>
  );
}

const STATUS_STYLE: Record<LeadStatus, string> = {
  new: 'bg-sky-100 text-sky-800',
  contacted: 'bg-muted text-foreground',
  qualified: 'bg-violet-100 text-violet-800',
  demo_booked: 'bg-primary/10 text-primary',
  won: 'bg-green-100 text-green-800',
  lost: 'bg-red-100 text-red-700',
};
const STATUS_LABEL: Record<LeadStatus, string> = { new: 'New', contacted: 'Contacted', qualified: 'Qualified', demo_booked: 'Demo booked', won: 'Won', lost: 'Lost' };
export function LeadStatusBadge({ status }: { status: LeadStatus }) {
  return <span className={cx('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', STATUS_STYLE[status])}>{STATUS_LABEL[status]}</span>;
}
export function Pill({ tone = 'muted', children }: { tone?: 'muted' | 'teal' | 'amber' | 'green' | 'red'; children: ReactNode }) {
  const t = { muted: 'bg-muted text-muted-foreground', teal: 'bg-primary/10 text-primary', amber: 'bg-amber-100 text-amber-800', green: 'bg-green-100 text-green-800', red: 'bg-red-100 text-red-700' }[tone];
  return <span className={cx('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', t)}>{children}</span>;
}

export function EmptyState({ title, desc, action }: { title: string; desc?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-base font-semibold text-foreground">{title}</p>
      {desc && <p className="mt-1 max-w-sm text-sm text-muted-foreground">{desc}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

function useEscape(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [open, onClose]);
}

export function Modal({ open, onClose, title, children, footer, wide }: { open: boolean; onClose: () => void; title: string; children: ReactNode; footer?: ReactNode; wide?: boolean }) {
  useEscape(open, onClose);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (open) ref.current?.querySelector<HTMLElement>('input,textarea,select,button')?.focus(); }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px]" onClick={onClose} />
      <div ref={ref} className={cx('relative flex max-h-[90vh] w-full flex-col rounded-2xl border border-border bg-card shadow-elevated', wide ? 'max-w-3xl' : 'max-w-lg')}>
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"><X className="h-5 w-5" /></button>
        </div>
        <div className="overflow-y-auto px-6 py-5">{children}</div>
        {footer && <div className="flex justify-end gap-2 border-t border-border px-6 py-4">{footer}</div>}
      </div>
    </div>
  );
}

export function Drawer({ open, onClose, title, children, footer }: { open: boolean; onClose: () => void; title: ReactNode; children: ReactNode; footer?: ReactNode }) {
  useEscape(open, onClose);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-foreground/30" onClick={onClose} />
      <aside className="absolute inset-y-0 end-0 flex w-full max-w-xl flex-col border-s border-border bg-card shadow-elevated">
        <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-4">
          <div className="min-w-0">{title}</div>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>
        {footer && <div className="flex justify-end gap-2 border-t border-border px-6 py-4">{footer}</div>}
      </aside>
    </div>
  );
}

export function ConfirmDialog({ open, onCancel, onConfirm, title, body, confirmLabel = 'Delete' }: { open: boolean; onCancel: () => void; onConfirm: () => void; title: string; body: string; confirmLabel?: string }) {
  return (
    <Modal open={open} onClose={onCancel} title={title} footer={<><Btn onClick={onCancel}>Cancel</Btn><Btn variant="danger" onClick={onConfirm}>{confirmLabel}</Btn></>}>
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
        <p className="text-sm text-muted-foreground">{body}</p>
      </div>
    </Modal>
  );
}

export function Toasts({ items }: { items: { id: number; text: string; tone?: 'ok' | 'error' }[] }) {
  return (
    <div className="pointer-events-none fixed bottom-4 end-4 z-[90] flex flex-col gap-2" aria-live="polite">
      {items.map((t) => (
        <div key={t.id} className="pointer-events-auto flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-elevated">
          {t.tone === 'error' ? <AlertTriangle className="h-4 w-4 text-destructive" /> : <CheckCircle2 className="h-4 w-4 text-primary" />}{t.text}
        </div>
      ))}
    </div>
  );
}

export function Avatar({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' }) {
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();
  return <span aria-hidden="true" className={cx('inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-panel-4 font-semibold text-primary-foreground', size === 'sm' ? 'h-7 w-7 text-[11px]' : 'h-9 w-9 text-xs')}>{initials}</span>;
}

export function fmtDate(iso?: string, withTime = false) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', ...(withTime ? { hour: '2-digit', minute: '2-digit' } : {}) });
}
export function timeAgo(iso?: string) {
  if (!iso) return 'Never';
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  if (s < 60) return 'Just now';
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} h ago`;
  if (s < 86400 * 30) return `${Math.floor(s / 86400)} d ago`;
  return fmtDate(iso);
}
