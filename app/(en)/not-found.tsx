import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { MarketingChrome } from '@/components/MarketingChrome';

export default function NotFound() {
  return (
    <MarketingChrome>
    <Section>
      <div className="py-10 text-center">
        <p className="badge-app mb-4">404</p>
        <h1 className="mb-4 text-3xl font-bold text-ink-900">Page not found</h1>
        <p className="mx-auto mb-8 max-w-md text-ink-700">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button href="/">Back to homepage</Button>
      </div>
    </Section>
    </MarketingChrome>
  );
}
