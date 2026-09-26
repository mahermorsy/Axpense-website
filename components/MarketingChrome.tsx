import { Suspense } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { DemoModalProvider } from './DemoModalProvider';
import type { Lang } from '@/lib/i18n';

export function MarketingChrome({ lang = 'en', children }: { lang?: Lang; children: React.ReactNode }) {
  const chrome = (
    <>
      <Header lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
    </>
  );

  return (
    <Suspense fallback={chrome}>
      <DemoModalProvider lang={lang}>{chrome}</DemoModalProvider>
    </Suspense>
  );
}
