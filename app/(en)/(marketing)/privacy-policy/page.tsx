import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Privacy Policy',
    description: 'How Axpense collects, uses, and protects your data.',
    path: '/privacy-policy',
  }),
  robots: { index: false, follow: true }, // draft template — see banner below
};

export default function Page() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 rounded-lg border border-primary/20 bg-panel-1 p-4 text-sm text-brand-teal-700">
          <strong>Draft template — not yet legally reviewed.</strong> Replace the
          bracketed details with your real information and have this reviewed
          before publishing, per the spec's own requirement not to ship
          placeholder legal content as if it were final.
        </div>
        <h1 className="mb-6 text-3xl font-bold text-ink-900">Privacy Policy</h1>
        <div className="flex flex-col gap-6 text-sm leading-relaxed text-ink-700">
          <p>Last updated: [date]</p>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">1. Information we collect</h2>
            <p>We collect information you provide directly (such as name, company, email, and phone number submitted through our forms) and information collected automatically (such as usage data via analytics tools).</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">2. How we use your information</h2>
            <p>We use collected information to respond to inquiries, provide and improve the Axpense product, and communicate with you about your account or our services.</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">3. Data sharing</h2>
            <p>We do not sell personal information. We may share data with service providers who help us operate our business (e.g. hosting, analytics), under confidentiality obligations. [List actual sub-processors here.]</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">4. Data retention</h2>
            <p>[State your actual retention periods.]</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">5. Your rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data by contacting [contact email].</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">6. Contact</h2>
            <p>Questions about this policy can be sent to [contact email / address].</p>
          </section>
        </div>
      </div>
    </Section>
  );
}
