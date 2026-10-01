'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

function isDemoHref(href: string) {
  return href === '/demo' || href === '/ar/demo';
}

export function openDemoModal(href?: string) {
  window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { href } }));
}

export function DemoCtaLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        if (!isDemoHref(href)) return;
        event.preventDefault();
        openDemoModal(href);
      }}
      className={className}
    >
      {children}
    </Link>
  );
}

export { isDemoHref };
