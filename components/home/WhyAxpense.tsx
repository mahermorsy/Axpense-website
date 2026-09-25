import Image from 'next/image';
import { AlertTriangle, CheckCircle2, Gauge, Wallet } from 'lucide-react';
import type { Lang } from '@/lib/i18n';

const POINTS_EN = [
  "Service reminders based on each vehicle's real kilometres",
  'Work orders and spare parts tracked from purchase to install',
  'Every fuel, repair and toll expense linked to its vehicle',
  'Asset depreciation ready for your finance team',
  'Alerts before licenses, insurance and services expire',
];
const POINTS_AR = [
  'تنبيهات صيانة حسب الكيلومترات الفعلية لكل مركبة',
  'أوامر الشغل وقطع الغيار من الشراء حتى التركيب',
  'كل مصروف وقود وإصلاح ورسوم طرق مرتبط بمركبته',
  'إهلاك الأصول جاهز لفريق الحسابات',
  'تنبيهات قبل انتهاء الرخص والتأمين ومواعيد الصيانة',
];

// Example readings taken from the Axpense product demo data.
const ROWS_EN = [
  { icon: Gauge, label: 'Volvo FH16 460 · next service', value: '3,080 km' },
  { icon: AlertTriangle, label: 'Toyota Hiace · preventive service', value: 'Overdue 35 days', warn: true },
  { icon: Wallet, label: 'Open work orders · committed', value: 'EGP 55,890' },
];
const ROWS_AR = [
  { icon: Gauge, label: 'فولفو FH16 460 · الصيانة القادمة', value: '3,080 كم' },
  { icon: AlertTriangle, label: 'تويوتا هايس · صيانة وقائية', value: 'متأخرة 35 يومًا', warn: true },
  { icon: Wallet, label: 'أوامر الشغل المفتوحة · التكلفة', value: '55,890 ج.م' },
];

export function WhyAxpense({ lang = 'en' }: { lang?: Lang }) {
  const ar = lang === 'ar';
  const points = ar ? POINTS_AR : POINTS_EN;
  const rows = ar ? ROWS_AR : ROWS_EN;
  return (
    <section className="relative overflow-hidden border-t border-border py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">{ar ? 'لماذا أكسبنس' : 'Why Axpense'}</span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            {ar ? <>كل ما يحتاجه فريق الأسطول <span className="text-gradient">في مكان واحد</span></> : <>Everything your fleet team needs, <span className="text-gradient">in one place</span></>}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {ar ? 'استبدل جداول إكسل وقوائم الفحص الورقية ومجموعات واتساب بنظام واحد يستخدمه فريقك بالكامل.' : 'Replace the spreadsheets, paper checklists and WhatsApp groups with one system your whole team uses.'}
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />{p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative pb-24 sm:pb-16">
          <div aria-hidden="true" className="absolute -inset-6 rounded-[36px] bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
            <Image
              src="/screens/vehicles.webp"
              alt={ar ? 'شاشة المركبات في أكسبنس: عداد الكيلومترات والمسافة المتبقية حتى الصيانة لكل مركبة' : 'Axpense vehicles screen: odometer and kilometres left until service for every vehicle'}
              width={1920}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 640px"
              className="h-auto w-full"
            />
          </div>
          {/* Floating readout card */}
          <div className="absolute -bottom-2 start-4 end-4 rounded-3xl border border-border bg-card p-4 shadow-elevated sm:end-auto sm:w-[420px] sm:p-6 lg:-start-10">
            <div className="flex flex-col gap-3">
              {rows.map(({ icon: Icon, label, value, warn }) => (
                <div key={label} className="flex items-center justify-between gap-4 rounded-2xl bg-muted/60 px-4 py-3.5">
                  <span className="flex items-center gap-3 text-sm text-foreground"><Icon className={`h-5 w-5 shrink-0 ${warn ? 'text-destructive' : 'text-primary'}`} aria-hidden="true" />{label}</span>
                  <span className={`whitespace-nowrap text-sm font-semibold ${warn ? 'text-destructive' : 'text-primary'}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
