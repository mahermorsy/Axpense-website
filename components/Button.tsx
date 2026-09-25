'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

// Same variants as the Axpense app's shadcn Button:
// primary = teal gradient with teal shadow ("Add Vehicle"),
// outline = bordered ("View Reports"), ghost = text link ("View All").
type Variant = 'primary' | 'outline' | 'ghost' | 'white';
const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-300 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:size-4 [&_svg]:shrink-0';
const styles: Record<Variant, string> = {
  primary: 'bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:brightness-105',
  outline: 'border border-border bg-card text-foreground font-medium hover:bg-muted',
  ghost: 'text-primary font-medium hover:bg-muted',
  white: 'bg-card text-primary shadow-lg hover:bg-panel-1',
};
const sizes = { sm: 'h-9 px-4 text-xs', md: 'h-10 px-5 text-sm', lg: 'h-11 px-5 sm:px-7 text-sm' };

export function Button({ href, variant = 'primary', size = 'md', children, external = false }: { href: string; variant?: Variant; size?: 'sm' | 'md' | 'lg'; children: ReactNode; external?: boolean }) {
  const className = `${base} ${sizes[size]} ${styles[variant]}`;
  const onClick = () => trackEvent('cta_click', { href });
  if (external || href.startsWith('http')) return <a href={href} onClick={onClick} className={className}>{children}</a>;
  return <Link href={href} onClick={onClick} className={className}>{children}</Link>;
}
