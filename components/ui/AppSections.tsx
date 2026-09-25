import Link from 'next/link';
import { ArrowRight, CheckCircle2, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

// Building blocks copied from the Axpense app's marketing pages
// (/features, /pricing, /about) so the website matches them 1:1.

export function Pill({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ${className}`}>{children}</span>;
}

/** "Everything You Need for <gradient>Asset Excellence</gradient>" hero */
export function PageHero({ badge, title, accent, subtitle }: { badge: string; title: string; accent?: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-hero py-20">
      <div className="mx-auto max-w-wrap px-5 text-center sm:px-7">
        <Pill className="mb-6">{badge}</Pill>
        <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">{title}{accent && <> <span className="text-gradient">{accent}</span></>}</h1>
        {subtitle && <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">{subtitle}</p>}
      </div>
    </section>
  );
}

/** Centered section heading with optional pill and gradient accent words */
export function CenteredHead({ badge, title, accent, subtitle }: { badge?: string; title: string; accent?: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && <Pill className="mb-4">{badge}</Pill>}
      <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">{title}{accent && <> <span className="text-gradient">{accent}</span></>}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

const TILE_GRADIENTS = [
  'from-primary to-panel-4',
  'from-panel-2 to-panel-3',
  'from-panel-3 to-primary',
  'from-primary to-panel-2',
  'from-panel-4 to-primary',
  'from-panel-2 to-panel-4',
];

/** Feature/value card: 48px gradient icon tile, lifts on hover */
export function AppFeatureCard({ icon: Icon, title, desc, index = 0, href, solid = false }: { icon: LucideIcon; title: string; desc: string; index?: number; href?: string; solid?: boolean }) {
  const tile = solid ? 'bg-gradient-primary' : `bg-gradient-to-br ${TILE_GRADIENTS[index % TILE_GRADIENTS.length]}`;
  const body = (
    <>
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${tile} transition-transform duration-300 group-hover:scale-110`}>
        <Icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </>
  );
  const cls = 'group block rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated';
  return href ? <Link href={href} className={cls}>{body}</Link> : <article className={cls}>{body}</article>;
}

/** Big card with 56px icon, title, description and dot list ("Deep Dive") */
export function DeepDiveCard({ icon: Icon, title, desc, points }: { icon: LucideIcon; title: string; desc: string; points: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-card p-8">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary"><Icon className="h-7 w-7 text-primary-foreground" aria-hidden="true" /></div>
      <h3 className="mb-3 text-2xl font-bold text-foreground">{title}</h3>
      <p className="mb-6 text-muted-foreground">{desc}</p>
      <ul className="space-y-3">
        {points.map((p) => <li key={p} className="flex items-center gap-3 text-sm text-foreground"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{p}</li>)}
      </ul>
    </div>
  );
}

/** "Ready to Transform Your Asset Management?" band */
export function CtaBand({ title, accent, subtitle, primary, secondary, checks }: { title: string; accent: string; subtitle: string; primary: { label: string; href: string }; secondary?: { label: string; href: string }; checks?: string[] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24">
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.10),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-7">
        <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">{title} <span className="text-gradient">{accent}</span></h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">{subtitle}</p>
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={primary.href} className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] px-10 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 sm:w-auto">
            {primary.label}<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" aria-hidden="true" />
          </Link>
          {secondary && (
            <Link href={secondary.href} className="inline-flex h-14 w-full items-center justify-center rounded-xl border-2 border-primary/50 bg-transparent px-10 text-lg font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10 sm:w-auto">{secondary.label}</Link>
          )}
        </div>
        {checks && (
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {checks.map((c) => <div key={c} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />{c}</div>)}
          </div>
        )}
      </div>
    </section>
  );
}
