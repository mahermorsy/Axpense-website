import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Terms of Service',
    description: 'The terms governing use of Axpense.',
    path: '/terms',
  }),
  robots: { index: false, follow: true }, // draft template — see banner below
};

export default function Page() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 rounded-lg border border-primary/20 bg-panel-1 p-4 text-sm text-brand-teal-700">
          <strong>Draft template — not yet legally reviewed.</strong> Replace the
          bracketed details and have this reviewed before publishing.
        </div>
        <h1 className="mb-6 text-3xl font-bold text-ink-900">Terms of Service</h1>
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-ink-700">
          <p>Last updated: [date]</p>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">1. Acceptance of terms</h2>
            <p>By accessing or using Axpense, you agree to be bound by these terms. If you do not agree, do not use the service.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">2. The service</h2>
            <p>Axpense provides fleet, asset, and maintenance management software as described on this site, subject to the plan you subscribe to.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">3. Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">4. Payment</h2>
            <p>[State billing cycle, refund policy, and what happens on non-payment.]</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">5. Termination</h2>
            <p>[State grounds for termination by either party and data handling after termination.]</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">6. Limitation of liability</h2>
            <p>[This section typically needs a lawyer’s input — do not publish generic boilerplate as-is.]</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">7. Governing law</h2>
            <p>[Specify jurisdiction — e.g. Arab Republic of Egypt.]</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">8. Contact</h2>
            <p>Questions about these terms can be sent to [contact email / address].</p>
          </section>
        </div>
      </div>
    </Section>
  );
}
