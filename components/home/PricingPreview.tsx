import { PricingPlans } from '../PricingPlans';
import type { Lang } from '@/lib/i18n';

export function PricingPreview({ lang = 'en' }: { lang?: Lang }) {
  return <div className="border-y border-border bg-gradient-light"><PricingPlans lang={lang} /></div>;
}
