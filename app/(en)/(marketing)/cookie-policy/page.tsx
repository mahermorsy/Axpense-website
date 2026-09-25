import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Cookie Policy',
    description: 'How Axpense uses cookies and similar technologies.',
    path: '/cookie-policy',
  }),
  robots: { index: false, follow: true }, // draft template — see banner below
};

export default function Page() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 rounded-lg border border-primary/20 bg-panel-1 p-4 text-sm text-brand-teal-700">
          <strong>Draft template — not yet legally reviewed.</strong> Update once
          your actual analytics/marketing tools (Phase 9) are finalized, since
          the cookie list below depends on what you actually deploy.
        </div>
        <h1 className="mb-6 text-3xl font-bold text-ink-900">Cookie Policy</h1>
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-ink-700">
          <p>Last updated: [date]</p>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">What cookies we use</h2>
            <p>[List actual cookies once GA4/GTM/Meta Pixel/etc. are wired up in Phase 9 — don’t publish a generic list that doesn’t match what’s actually deployed.]</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Managing cookies</h2>
            <p>You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Contact</h2>
            <p>Questions about this policy can be sent to [contact email / address].</p>
          </section>
        </div>
      </div>
    </Section>
  );
}
