import { Suspense } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { DemoModalProvider } from './DemoModalProvider';
import type { Lang } from '@/lib/i18n';

export function MarketingChrome({ lang = 'en', children }: { lang?: Lang; children: React.ReactNode }) {
  // The demo modal sits next to the page, not around it: wrapping the page in a
  // component that reads useSearchParams makes Next send the whole page twice and
  // re-render it on the client (slow LCP / high TBT).
  return (
    <>
      <Header lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
      <Suspense fallback={null}>
        <DemoModalProvider lang={lang} />
      </Suspense>
    </>
  );
}
