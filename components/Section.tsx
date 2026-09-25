import type { ReactNode } from 'react';

export function Section({ id, alt = false, children }: { id?: string; alt?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={alt ? 'border-y border-border bg-gradient-light py-20 sm:py-24' : 'py-20 sm:py-24'}>
      <div className="mx-auto max-w-wrap px-5 sm:px-7">{children}</div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, description, center = false }: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className="badge-app mb-4">{eyebrow}</span>}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">{title}</h2>
      {description && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}
