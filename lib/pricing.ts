// Plans, prices and features — same as the Axpense app's pricing page.
export type Currency = 'USD' | 'EGP' | 'SAR';
export const CURRENCIES: Currency[] = ['USD', 'EGP', 'SAR'];

export type Plan = {
  id: 'starter' | 'professional' | 'enterprise';
  name: { en: string; ar: string };
  price: Record<Currency, number> | null; // null = custom
  note: { en: string; ar: string };
  features: { en: string; ar: string }[];
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: { en: 'Starter', ar: 'أساسي' },
    price: { USD: 40, EGP: 2000, SAR: 150 },
    note: { en: 'Perfect for small businesses getting started with asset management.', ar: 'مثالي للشركات الصغيرة التي تبدأ في إدارة أصولها.' },
    features: [
      { en: 'Up to 100 assets', ar: 'حتى 100 أصل' },
      { en: '5 team members', ar: '5 أعضاء فريق' },
      { en: 'Basic maintenance tracking', ar: 'متابعة الصيانة الأساسية' },
      { en: 'Email support', ar: 'دعم عبر البريد الإلكتروني' },
      { en: 'Standard reports', ar: 'تقارير قياسية' },
      { en: 'Mobile app access', ar: 'الوصول عبر تطبيق الجوال' },
    ],
  },
  {
    id: 'professional',
    name: { en: 'Professional', ar: 'احترافي' },
    price: { USD: 100, EGP: 5000, SAR: 375 },
    note: { en: 'For growing companies with advanced fleet management needs.', ar: 'للشركات النامية ذات احتياجات إدارة أسطول متقدمة.' },
    popular: true,
    features: [
      { en: 'Up to 500 assets', ar: 'حتى 500 أصل' },
      { en: '25 team members', ar: '25 عضو فريق' },
      { en: 'Advanced maintenance scheduling', ar: 'جدولة صيانة متقدمة' },
      { en: 'Priority support', ar: 'دعم ذو أولوية' },
      { en: 'Custom reports', ar: 'تقارير مخصصة' },
      { en: 'API access', ar: 'الوصول إلى API' },
      { en: 'GPS integration', ar: 'تكامل GPS' },
      { en: 'Depreciation tracking', ar: 'تتبع الإهلاك' },
    ],
  },
  {
    id: 'enterprise',
    name: { en: 'Enterprise', ar: 'مؤسسي' },
    price: null,
    note: { en: 'For large organizations with complex requirements.', ar: 'للمؤسسات الكبيرة ذات المتطلبات المعقدة.' },
    features: [
      { en: 'Unlimited assets', ar: 'أصول غير محدودة' },
      { en: 'Unlimited team members', ar: 'أعضاء فريق غير محدودين' },
      { en: 'Dedicated account manager', ar: 'مدير حساب مخصص' },
      { en: '24/7 phone support', ar: 'دعم هاتفي على مدار الساعة' },
      { en: 'Custom integrations', ar: 'تكاملات مخصصة' },
      { en: 'White-label option', ar: 'خيار العلامة البيضاء' },
      { en: 'Custom domain', ar: 'نطاق مخصص' },
      { en: 'Advanced AI features', ar: 'ميزات ذكاء اصطناعي متقدمة' },
      { en: 'SLA guarantee', ar: 'ضمان مستوى الخدمة (SLA)' },
    ],
  },
];

export function formatPrice(amount: number, currency: Currency, lang: 'en' | 'ar') {
  const n = amount.toLocaleString('en-US');
  if (currency === 'USD') return `$${n}`;
  if (lang === 'ar') return `${n} ${currency === 'EGP' ? 'ج.م' : 'ر.س'}`;
  return `${n} ${currency}`;
}
