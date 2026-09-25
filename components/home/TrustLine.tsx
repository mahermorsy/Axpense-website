import { CheckCircle2 } from 'lucide-react';
import type { Lang } from '@/lib/i18n';

export const TRUST_EN = ['Arabic & English', 'Free onboarding', 'Live in one day'];
export const TRUST_AR = ['العربية والإنجليزية', 'تهيئة مجانية', 'تشغيل خلال يوم واحد'];

export function TrustLine({ lang = 'en', items, tone = 'default', className = '' }: { lang?: Lang; items?: string[]; tone?: 'default' | 'onDark'; className?: string }) {
  const list = items ?? (lang === 'ar' ? TRUST_AR : TRUST_EN);
  return (
    <ul className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm ${tone === 'onDark' ? 'text-white/85' : 'text-muted-foreground'} ${className}`}>
      {list.map((t) => (
        <li key={t} className="flex items-center gap-2">
          <CheckCircle2 className={`h-4 w-4 ${tone === 'onDark' ? 'text-white' : 'text-primary'}`} aria-hidden="true" />{t}
        </li>
      ))}
    </ul>
  );
}
