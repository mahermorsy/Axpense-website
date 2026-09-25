import { Button } from './Button';
import { Section } from './Section';

/**
 * Placeholder for routes that exist in the sitemap/nav (so no link is
 * broken) but whose real content ships in a later phase — see spec
 * sections 4 (required pages) and 23 (phased process). These pages are
 * marked noindex via each route's metadata so they don't get indexed
 * as thin content before real copy is written.
 */
export function ComingSoon({ title }: { title: string }) {
  return (
    <Section>
      <div className="py-10 text-center">
        <p className="badge-app mb-4">Coming soon</p>
        <h1 className="mb-4 text-3xl font-bold text-ink-900">{title}</h1>
        <p className="mx-auto mb-8 max-w-md text-ink-700">
          This page is being built. In the meantime, book a demo and we&apos;ll
          walk you through it directly.
        </p>
        <Button href="/contact">Book a Demo</Button>
      </div>
    </Section>
  );
}
