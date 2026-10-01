import { MAINTENANCE_SCHEDULE } from '@/content/tools/checklist-data';
import type { Lang } from '@/lib/i18n';
import { ChecklistActions } from './DownloadButton';

/** Km-based preventive maintenance table (general examples — follow the manufacturer's schedule). */
export function MaintenanceSchedule({ lang = 'en' }: { lang?: Lang }) {
  const ar = lang === 'ar';
  return (
    <div className="card-app p-6 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">{ar ? 'فترات تقريبية لمركبات النقل الخفيفة — اتبع دائمًا جدول الشركة المصنعة.' : 'Typical intervals for light commercial vehicles — always follow the manufacturer’s schedule.'}</p>
        <ChecklistActions pdf={`/downloads/preventive-maintenance-checklist-${lang}.pdf`} tool="preventive_maintenance_checklist" lang={lang} />
      </div>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[560px] text-sm">
          <caption className="sr-only">{ar ? 'جدول الصيانة الدورية حسب الكيلومترات' : 'Preventive maintenance intervals by kilometre'}</caption>
          <thead className="bg-muted/60 text-foreground">
            <tr>
              <th scope="col" className="px-4 py-3 text-start font-semibold">{ar ? 'البند' : 'Item'}</th>
              <th scope="col" className="px-4 py-3 text-start font-semibold">{ar ? 'الفترة' : 'Interval'}</th>
              <th scope="col" className="px-4 py-3 text-start font-semibold">{ar ? 'ملاحظات' : 'Notes'}</th>
            </tr>
          </thead>
          <tbody>
            {MAINTENANCE_SCHEDULE.map((r) => (
              <tr key={r.item.en} className="border-t border-border align-top">
                <th scope="row" className="px-4 py-3 text-start font-medium text-foreground">{r.item[lang]}</th>
                <td className="whitespace-nowrap px-4 py-3 text-primary">{r.interval[lang]}</td>
                <td className="px-4 py-3 text-ink-700">{r.notes[lang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
