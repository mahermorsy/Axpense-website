import { Header } from './Header';
import { Footer } from './Footer';
import type { Lang } from '@/lib/i18n';

export function MarketingChrome({ lang = 'en', children }: { lang?: Lang; children: React.ReactNode }) {
  return <><Header lang={lang} /><main>{children}</main><Footer lang={lang} /></>;
}
