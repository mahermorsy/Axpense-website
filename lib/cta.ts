/**
 * Primary call-to-action + app links.
 *
 * - NEXT_PUBLIC_APP_URL: where existing customers log in (default: the live app).
 * - NEXT_PUBLIC_SIGNUP_URL: optional self-serve sign-up URL. When set, the
 *   pricing "Start Free Trial" buttons go there; otherwise they open the demo form.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.axpense.net/login';
const SIGNUP_URL = process.env.NEXT_PUBLIC_SIGNUP_URL;

export const PRIMARY_CTA = { label: 'Book a Demo', href: '/demo' };
export const PRIMARY_CTA_AR = { label: 'احجز عرضًا تجريبيًا', href: '/ar/demo' };

export const TRIAL_CTA = { label: 'Start Free Trial', href: SIGNUP_URL || '/demo' };
export const TRIAL_CTA_AR = { label: 'ابدأ التجربة المجانية', href: SIGNUP_URL || '/ar/demo' };

export const LOGIN = { label: 'Sign In', labelAr: 'تسجيل الدخول', href: APP_URL };

export const SOCIAL = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/axpense' },
  { name: 'Facebook', href: 'https://www.facebook.com/Axpense.net' },
] as const;

export const primaryCta = (lang: 'en' | 'ar') => (lang === 'ar' ? PRIMARY_CTA_AR : PRIMARY_CTA);
export const trialCta = (lang: 'en' | 'ar') => (lang === 'ar' ? TRIAL_CTA_AR : TRIAL_CTA);
export const loginLabel = (lang: 'en' | 'ar') => (lang === 'ar' ? LOGIN.labelAr : LOGIN.label);
