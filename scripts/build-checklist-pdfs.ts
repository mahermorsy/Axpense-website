/**
 * Builds the printable checklist PDFs in public/downloads/ from
 * content/tools/checklist-data.ts (EN + AR). Re-run after editing the data:
 *   FONT_DIR=<dir with Inter + IBM Plex Sans Arabic woff2> PLAYWRIGHT_MODULE=<path to playwright> npx tsx scripts/build-checklist-pdfs.ts
 * Needs Playwright + Chromium locally (not a runtime dependency of the site).
 */
import { mkdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { INSPECTION_GROUPS, MAINTENANCE_SCHEDULE } from '../content/tools/checklist-data';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const FONT_DIR = process.env.FONT_DIR || '';
const font = (file: string) => (FONT_DIR ? `url(data:font/woff2;base64,${readFileSync(`${FONT_DIR}/${file}`).toString('base64')}) format('woff2')` : 'local(sans-serif)');
const logo = `data:image/png;base64,${readFileSync('public/logo.png').toString('base64')}`;

type Lang = 'en' | 'ar';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function page(lang: Lang, title: string, sub: string, body: string) {
  const ar = lang === 'ar';
  return `<!doctype html><html lang="${lang}" dir="${ar ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><style>
@font-face{font-family:Inter;font-weight:400;src:${font('inter-latin-400-normal.woff2')}}
@font-face{font-family:Inter;font-weight:600;src:${font('inter-latin-600-normal.woff2')}}
@font-face{font-family:Plex;font-weight:400;src:${font('ibm-plex-sans-arabic-arabic-400-normal.woff2')}}
@font-face{font-family:Plex;font-weight:600;src:${font('ibm-plex-sans-arabic-arabic-600-normal.woff2')}}
*{box-sizing:border-box}body{font-family:${ar ? 'Plex, Inter' : 'Inter, Plex'},sans-serif;color:#0f172a;margin:0;font-size:10.5pt}
header{display:flex;justify-content:space-between;align-items:center;border-bottom:3px solid #2a9d93;padding-bottom:10px;margin-bottom:14px}
header img{height:26px}h1{font-size:18pt;margin:0 0 4px}p.sub{margin:0;color:#475569}
.meta{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:12px 0 16px}.meta div{border:1px solid #cbd5e1;border-radius:6px;padding:6px 8px;color:#64748b;font-size:9pt;height:38px}
.groups{columns:2;column-gap:18px}.group{break-inside:avoid;margin-bottom:12px}.group h2{font-size:11pt;margin:0 0 6px;color:#1f7f77}
.item{display:flex;gap:8px;align-items:flex-start;padding:4px 0;border-bottom:1px dashed #e2e8f0}.box{width:11px;height:11px;border:1.4px solid #334155;border-radius:2px;flex:none;margin-top:3px}
.pf{margin-inline-start:auto;display:flex;gap:6px;color:#64748b;font-size:8.5pt;white-space:nowrap}
table{width:100%;border-collapse:collapse}th,td{border:1px solid #cbd5e1;padding:6px 8px;text-align:start;vertical-align:top}th{background:#eef7f6}td.int{color:#1f7f77;font-weight:600;white-space:nowrap}
footer{margin-top:14px;color:#64748b;font-size:8.5pt;display:flex;justify-content:space-between}
</style></head><body><header><div><h1>${esc(title)}</h1><p class="sub">${esc(sub)}</p></div><img src="${logo}" alt="Axpense"></header>${body}
<footer><span>${ar ? 'أمثلة عامة — اتبع دائمًا تعليمات الشركة المصنعة ولوائح بلدك.' : 'General examples — always follow the manufacturer’s instructions and local regulations.'}</span><span>axpense.net</span></footer></body></html>`;
}

function inspection(lang: Lang) {
  const ar = lang === 'ar';
  const meta = (ar ? ['المركبة / اللوحة', 'السائق', 'التاريخ', 'قراءة العداد (كم)'] : ['Vehicle / plate', 'Driver', 'Date', 'Odometer (km)']).map((m) => `<div>${m}</div>`).join('');
  const groups = INSPECTION_GROUPS.map((g) => `<div class="group"><h2>${esc(g.title[lang])}</h2>${g.items.map((i) => `<div class="item"><span>${esc(i[lang])}</span><span class="pf"><span class="box"></span>${ar ? 'سليم' : 'OK'}<span class="box"></span>${ar ? 'غير مطابق' : 'Fail'}</span></div>`).join('')}</div>`).join('');
  return page(lang, ar ? 'قائمة فحص السيارة' : 'Vehicle inspection checklist', ar ? 'افحص كل بند وسجّل النتيجة. البنود غير المطابقة تُبلَّغ لمسؤول الأسطول قبل تشغيل المركبة.' : 'Check each item and mark the result. Report failed items to the fleet manager before the vehicle is used.', `<div class="meta">${meta}</div><div class="groups">${groups}</div>`);
}

function maintenance(lang: Lang) {
  const ar = lang === 'ar';
  const rows = MAINTENANCE_SCHEDULE.map((r) => `<tr><td>${esc(r.item[lang])}</td><td class="int">${esc(r.interval[lang])}</td><td>${esc(r.notes[lang])}</td><td></td></tr>`).join('');
  return page(lang, ar ? 'جدول الصيانة الدورية للسيارات' : 'Fleet preventive maintenance checklist', ar ? 'فترات تقريبية حسب الكيلومترات لمركبات النقل الخفيفة.' : 'Typical kilometre-based intervals for light commercial vehicles.', `<table><thead><tr><th>${ar ? 'البند' : 'Item'}</th><th>${ar ? 'الفترة' : 'Interval'}</th><th>${ar ? 'ملاحظات' : 'Notes'}</th><th>${ar ? 'آخر صيانة (كم / تاريخ)' : 'Last done (km / date)'}</th></tr></thead><tbody>${rows}</tbody></table>`);
}

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const pg = await browser.newPage();
mkdirSync('public/downloads', { recursive: true });
for (const lang of ['en', 'ar'] as Lang[]) {
  for (const [name, html] of [['vehicle-inspection-checklist', inspection(lang)], ['preventive-maintenance-checklist', maintenance(lang)]] as const) {
    await pg.setContent(html, { waitUntil: 'load' });
    await pg.pdf({ path: `public/downloads/${name}-${lang}.pdf`, format: 'A4', margin: { top: '14mm', bottom: '14mm', left: '12mm', right: '12mm' }, printBackground: true });
    console.log(`public/downloads/${name}-${lang}.pdf`);
  }
}
await browser.close();
