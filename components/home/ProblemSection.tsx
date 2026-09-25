import { AlertTriangle, FileSpreadsheet, FileWarning, MessageSquare, Receipt, Wallet } from 'lucide-react';
import { Section } from '../Section';
import type { Lang } from '@/lib/i18n';

const ICONS = [FileSpreadsheet, MessageSquare, FileWarning, Receipt, AlertTriangle, Wallet];

const T = {
  en: {
    badge: 'The problem',
    title: 'Managing vehicles and assets shouldn’t require spreadsheets',
    desc: 'Axpense brings fleet, equipment, maintenance, spare parts and expense data into one system — so your team stops chasing information and starts acting on it.',
    items: ['Excel spreadsheets that fall out of date', 'WhatsApp messages instead of records', 'Paper inspection forms that get lost', 'Invoices and receipts scattered across email', 'Maintenance that gets missed until something breaks', 'Expenses no one can add up until month-end'],
  },
  ar: {
    badge: 'المشكلة',
    title: 'إدارة المركبات والأصول لا يجب أن تعتمد على جداول إكسل',
    desc: 'يجمع أكسبنس بيانات الأسطول والمعدات والصيانة وقطع الغيار والمصروفات في نظام واحد — ليتوقف فريقك عن البحث عن المعلومة ويبدأ في التصرف بناءً عليها.',
    items: ['جداول إكسل تفقد تحديثها باستمرار', 'رسائل واتساب بدلًا من سجلات موثقة', 'استمارات فحص ورقية تُفقد بسهولة', 'فواتير وإيصالات متناثرة عبر البريد الإلكتروني', 'صيانة تُهمل حتى يتعطل شيء ما', 'مصروفات لا يمكن حصرها إلا في نهاية الشهر'],
  },
};

export function ProblemSection({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="badge-app mb-4">{t.badge}</span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">{t.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t.desc}</p>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {t.items.map((text, i) => {
            const Icon = ICONS[i];
            return (
              <li key={text} className="card-app flex items-center gap-3 p-4 text-sm text-foreground">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive"><Icon className="h-4 w-4" aria-hidden="true" /></span>
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
