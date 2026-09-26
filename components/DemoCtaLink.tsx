'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

function isDemoHref(href: string) {
  return href === '/demo' || href === '/ar/demo';
}

export function openDemoModal() {
  window.dispatchEvent(new CustomEvent('open-demo-modal'));
}

export function DemoCtaLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        if (!isDemoHref(href)) return;
        event.preventDefault();
        openDemoModal();
      }}
      className={className}
    >
      {children}
    </Link>
  );
}

export { isDemoHref };
