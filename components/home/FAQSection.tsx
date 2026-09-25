import { ChevronDown } from 'lucide-react';
import { Section, SectionHead } from '../Section';
import type { Lang } from '@/lib/i18n';

export const HOME_FAQS = {
  en: [
    { q: 'Who is Axpense built for?', a: 'Businesses in Egypt and MENA that manage vehicles, equipment, or other physical assets — logistics, construction, manufacturing, real estate, and more.' },
    { q: 'How do I get started?', a: 'Book a demo. The Axpense team will walk you through the product and set up your account.' },
    { q: 'Does Axpense work in Arabic?', a: 'The Axpense website includes Arabic pages, and the product can be discussed with the team for your language and workflow requirements.' },
    { q: 'How are maintenance reminders triggered?', a: 'Service intervals can be set by kilometres driven or by date, so each vehicle is reminded based on how it is actually used.' },
  ],
  ar: [
    { q: 'لمن صُمم أكسبنس؟', a: 'للشركات في مصر ومنطقة الشرق الأوسط وشمال أفريقيا التي تدير مركبات أو معدات أو أصولًا مادية أخرى — اللوجستيات والمقاولات والتصنيع والعقارات وغيرها.' },
    { q: 'كيف أبدأ؟', a: 'احجز عرضًا تجريبيًا. سيعرض لك فريق أكسبنس المنتج ويجهّز حسابك.' },
    { q: 'هل يعمل أكسبنس باللغة العربية؟', a: 'يتضمن موقع أكسبنس صفحات عربية، ويمكنك مناقشة متطلبات اللغة وسير العمل مع الفريق.' },
    { q: 'كيف تعمل تنبيهات الصيانة؟', a: 'يمكن ضبط فترات الصيانة حسب الكيلومترات المقطوعة أو حسب التاريخ، فتصل التنبيهات لكل مركبة بناءً على استخدامها الفعلي.' },
  ],
};

export function FAQSection({ lang = 'en' }: { lang?: Lang }) {
  return (
    <Section>
      <SectionHead eyebrow={lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'} title={lang === 'ar' ? 'أسئلة متكررة' : 'Common questions'} center />
      <div className="mx-auto flex max-w-2xl flex-col gap-3">
        {HOME_FAQS[lang].map((item) => <FaqItem key={item.q} q={item.q} a={item.a} />)}
      </div>
    </Section>
  );
}

export function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="card-app group p-5 open:border-primary/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
        {q}
        <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 group-open:text-primary" aria-hidden="true" />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
    </details>
  );
}
