'use client';

import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';
import type { Lang } from '@/lib/i18n';

const T = {
  en: {
    industries: ['Logistics & Transportation', 'Construction', 'Manufacturing', 'Real Estate', 'Healthcare', 'Travel & Hospitality', 'Energy & Utilities', 'Other'],
    sizes: ['1–10 employees', '11–50 employees', '51–200 employees', '201–1,000 employees', '1,000+ employees'],
    name: 'Name', company: 'Company', email: 'Work Email', phone: 'Phone (with country code)', size: 'Company Size', sizePh: 'Select company size',
    assets: 'Number of Vehicles / Assets', industry: 'Industry', industryPh: 'Select an industry', message: 'What do you want to manage?',
    sending: 'Sending…', submit: 'Submit', or: 'Or email', thanks: 'Thank you. Your request has been submitted.', follow: 'The Axpense team will follow up using the details you provided.',
    errors: {} as Record<string, string>, fallback: 'Unable to submit the form right now.',
  },
  ar: {
    industries: ['الخدمات اللوجستية والنقل', 'المقاولات', 'الصناعة والتصنيع', 'العقارات', 'الرعاية الصحية', 'السياحة والضيافة', 'الطاقة والمرافق', 'أخرى'],
    sizes: ['١–١٠ موظفين', '١١–٥٠ موظفًا', '٥١–٢٠٠ موظف', '٢٠١–١٠٠٠ موظف', 'أكثر من ١٠٠٠ موظف'],
    name: 'الاسم', company: 'الشركة', email: 'البريد الإلكتروني للعمل', phone: 'رقم الهاتف (مع كود الدولة)', size: 'حجم الشركة', sizePh: 'اختر حجم الشركة',
    assets: 'عدد المركبات / الأصول', industry: 'القطاع', industryPh: 'اختر القطاع', message: 'ماذا تريد أن تدير؟',
    sending: 'جارٍ الإرسال…', submit: 'إرسال', or: 'أو راسلنا عبر', thanks: 'شكرًا لك. تم إرسال طلبك بنجاح.', follow: 'سيتواصل معك فريق أكسبنس باستخدام البيانات التي أرسلتها.',
    // Server error codes → Arabic messages (the API returns English text).
    errors: {
      missing: 'يرجى إدخال الاسم والشركة والبريد الإلكتروني.',
      invalid_email: 'يرجى إدخال بريد إلكتروني صحيح للعمل.',
      too_long: 'أحد الحقول أطول من المسموح.',
      rate_limited: 'عدد كبير من المحاولات. حاول لاحقًا أو راسلنا على info@axpense.net.',
      not_configured: 'استقبال الطلبات غير مفعّل حاليًا. يرجى مراسلتنا على info@axpense.net.',
    } as Record<string, string>,
    fallback: 'تعذر إرسال الطلب حاليًا. حاول مرة أخرى.',
  },
};

export function LeadForm({ lang = 'en' }: { lang?: Lang }) {
  const t = T[lang];
  const formName = lang === 'ar' ? 'lead_ar' : 'lead';
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const started = useRef(false);
  const pathname = usePathname();

  function handleFirstFocus() {
    if (started.current) return;
    started.current = true;
    trackEvent('form_start', { form: formName, page: pathname });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setState('sending');
    setError('');
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...data, page: pathname, referrer: document.referrer || undefined, utmSource: new URLSearchParams(window.location.search).get('utm_source') || undefined, lang }) });
      const result = await response.json();
      if (!response.ok) throw new Error(t.errors[result.code] || (lang === 'en' ? result.error : '') || t.fallback);
      setState('success');
      trackEvent('generate_lead', { form: formName, industry: data.industry, page: pathname });
      form.reset();
    } catch (err) {
      setState('error');
      setError(err instanceof Error && err.message ? err.message : t.fallback);
    }
  }

  if (state === 'success') return <div role="status" className="rounded-lg border border-primary/20 bg-panel-1 p-8 text-center"><p className="text-lg font-semibold text-ink-900">{t.thanks}</p><p className="mt-2 text-sm text-ink-700">{t.follow}</p></div>;

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstFocus} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Honeypot — hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <Field label={t.name} name="name" autoComplete="name" required />
      <Field label={t.company} name="company" autoComplete="organization" required />
      <Field label={t.email} name="email" type="email" autoComplete="email" required ltr />
      <Field label={t.phone} name="phone" type="tel" autoComplete="tel" placeholder="+20 / +966 / +971 …" ltr />
      <div>
        <label htmlFor="companySize" className="label-app">{t.size}</label>
        <select id="companySize" name="companySize" className="input-app" defaultValue="">
          <option value="">{t.sizePh}</option>{t.sizes.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <Field label={t.assets} name="assetCount" type="number" min="0" />
      <div className="sm:col-span-2">
        <label htmlFor="industry" className="label-app">{t.industry}</label>
        <select id="industry" name="industry" className="input-app" defaultValue="">
          <option value="">{t.industryPh}</option>{t.industries.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="label-app">{t.message}</label>
        <textarea id="message" name="message" rows={4} maxLength={2000} className="input-app" />
      </div>
      {state === 'error' && <p role="alert" className="sm:col-span-2 rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
      <button type="submit" disabled={state === 'sending'} className="sm:col-span-2 inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-[hsl(176_40%_42%)] px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 disabled:cursor-not-allowed disabled:opacity-60">{state === 'sending' ? t.sending : t.submit}</button>
      <p className="sm:col-span-2 text-xs text-ink-500">{t.or} <a className="font-medium text-primary hover:underline" href="mailto:info@axpense.net">info@axpense.net</a>.</p>
    </form>
  );
}

function Field({ label, name, type = 'text', required = false, placeholder, min, autoComplete, ltr = false }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; min?: string; autoComplete?: string; ltr?: boolean }) {
  return <div><label htmlFor={name} className="label-app">{label}{required && <span className="text-primary"> *</span>}</label><input id={name} type={type} name={name} required={required} placeholder={placeholder} min={min} autoComplete={autoComplete} maxLength={200} dir={ltr ? 'ltr' : undefined} className="input-app" /></div>;
}
