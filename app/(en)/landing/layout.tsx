import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Paid-campaign pages: kept out of the index so they don't compete with the
// /features and /en-xx pages that target the same queries organically.
export const metadata: Metadata = { robots: { index: false, follow: true } };

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-sm"><div className="mx-auto flex h-16 max-w-wrap items-center justify-between px-5 sm:px-7"><Link href="/" aria-label="Axpense home"><Image src="/logo.png" alt="Axpense" width={130} height={29} /></Link><Link href="/contact" className="inline-flex h-10 items-center rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground hover:bg-muted">Book a Demo</Link></div></header>
      <main>{children}</main>
      {/* Minimal footer — ad platforms require a visible privacy policy link on landing pages. */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-4 px-5 text-sm text-ink-500 sm:px-7">
          <p>© {new Date().getFullYear()} Axpense. All rights reserved.</p>
          <nav className="flex gap-5" aria-label="Legal">
            <Link href="/privacy-policy" className="hover:text-ink-900">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ink-900">Terms</Link>
            <a href="mailto:info@axpense.net" className="hover:text-ink-900">info@axpense.net</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
