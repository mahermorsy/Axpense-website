// needs-native-review: Arabic written by Claude
import type { ChecklistGroup, MaintenanceRow } from '@/lib/seo-page';

export const INSPECTION_GROUPS: ChecklistGroup[] = [
  {
    title: { en: 'Exterior & body', ar: 'الهيكل الخارجي' },
    items: [
      { en: 'No new dents, scratches or body damage', ar: 'لا توجد صدمات أو خدوش أو أضرار جديدة في الهيكل' },
      { en: 'Windscreen and windows clean, no cracks', ar: 'الزجاج الأمامي والنوافذ نظيفة وخالية من الشروخ' },
      { en: 'Mirrors present, clean and correctly adjusted', ar: 'المرايا سليمة ونظيفة ومضبوطة' },
      { en: 'Wipers work and blades are in good condition', ar: 'المساحات تعمل وشفراتها بحالة جيدة' },
      { en: 'Number plates fitted, clean and readable', ar: 'اللوحات مثبتة ونظيفة وواضحة' },
      { en: 'Doors, locks and cargo area close securely', ar: 'الأبواب والأقفال وصندوق الحمولة تُغلق بإحكام' },
    ],
  },
  {
    title: { en: 'Tyres & wheels', ar: 'الإطارات والعجلات' },
    items: [
      { en: 'Tyre pressure correct (check when cold)', ar: 'ضغط الإطارات مضبوط (يُقاس والإطار بارد)' },
      { en: 'Tread depth sufficient and even across the tyre', ar: 'عمق النقشة كافٍ ومتساوٍ على عرض الإطار' },
      { en: 'No cuts, bulges or cracks in the sidewalls', ar: 'لا توجد قطوع أو انتفاخات أو تشققات في جوانب الإطار' },
      { en: 'Wheel nuts present and tight', ar: 'صواميل العجلات موجودة ومحكمة الربط' },
      { en: 'Spare tyre inflated and usable', ar: 'الإطار الاحتياطي منفوخ وصالح للاستخدام' },
    ],
  },
  {
    title: { en: 'Lights & signals', ar: 'الأنوار والإشارات' },
    items: [
      { en: 'Headlights work on low and high beam', ar: 'الأنوار الأمامية تعمل على الوضعين العالي والمنخفض' },
      { en: 'Brake lights work', ar: 'أنوار الفرامل تعمل' },
      { en: 'Indicators and hazard lights work', ar: 'الإشارات الجانبية وأنوار التحذير (الفلاشر) تعمل' },
      { en: 'Tail, reverse and plate lights work', ar: 'الأنوار الخلفية وأنوار الرجوع وإضاءة اللوحة تعمل' },
      { en: 'Horn works', ar: 'آلة التنبيه (الكلاكس) تعمل' },
    ],
  },
  {
    title: { en: 'Fluids & engine bay', ar: 'السوائل وحجرة المحرك' },
    items: [
      { en: 'Engine oil level between min and max', ar: 'مستوى زيت المحرك بين الحدين الأدنى والأقصى' },
      { en: 'Coolant level correct (check only when engine is cool)', ar: 'مستوى سائل التبريد سليم (يُفحص والمحرك بارد فقط)' },
      { en: 'Brake fluid level correct', ar: 'مستوى زيت الفرامل سليم' },
      { en: 'Windscreen washer fluid topped up', ar: 'خزان ماء المساحات ممتلئ' },
      { en: 'No leaks under the vehicle or in the engine bay', ar: 'لا توجد تسريبات أسفل المركبة أو في حجرة المحرك' },
      { en: 'Belts and hoses show no visible cracks or damage', ar: 'السيور والخراطيم خالية من التشققات أو التلف الظاهر' },
      { en: 'Battery terminals clean and secure', ar: 'أطراف البطارية نظيفة ومثبتة' },
    ],
  },
  {
    title: { en: 'Brakes & steering', ar: 'الفرامل والتوجيه' },
    items: [
      { en: 'Brake pedal feels firm, not soft or spongy', ar: 'دواسة الفرامل متماسكة وليست رخوة' },
      { en: 'Vehicle stops straight without pulling or noise', ar: 'المركبة تتوقف باستقامة دون انحراف أو أصوات' },
      { en: 'Parking brake holds the vehicle', ar: 'فرامل اليد تثبّت المركبة' },
      { en: 'Steering responds normally, no excessive play', ar: 'التوجيه يستجيب طبيعيًا دون خلوص زائد' },
      { en: 'No warning lights on the dashboard after start-up', ar: 'لا تظهر لمبات تحذير في لوحة العدادات بعد التشغيل' },
    ],
  },
  {
    title: { en: 'Cab, safety equipment & interior', ar: 'المقصورة ومعدات السلامة' },
    items: [
      { en: 'Seat belts work and are undamaged', ar: 'أحزمة الأمان تعمل وسليمة' },
      { en: 'Fire extinguisher present, charged and in date', ar: 'طفاية الحريق موجودة ومعبأة وسارية الصلاحية' },
      { en: 'First-aid kit present and stocked', ar: 'حقيبة الإسعافات الأولية موجودة ومكتملة' },
      { en: 'Warning triangle on board', ar: 'مثلث التحذير موجود في المركبة' },
      { en: 'Jack and wheel brace on board', ar: 'الرافعة (الكريك) ومفتاح العجل موجودان' },
      { en: 'Air conditioning works', ar: 'التكييف يعمل' },
      { en: 'Cab clean, no loose items near the pedals', ar: 'المقصورة نظيفة ولا توجد أغراض سائبة قرب الدواسات' },
    ],
  },
  {
    title: { en: 'Documents', ar: 'المستندات' },
    items: [
      { en: 'Vehicle licence / registration on board and valid', ar: 'رخصة السيارة / الاستمارة موجودة وسارية' },
      { en: 'Driver’s licence valid for this vehicle class', ar: 'رخصة القيادة سارية ومناسبة لفئة المركبة' },
      { en: 'Insurance document on board and valid', ar: 'وثيقة التأمين موجودة وسارية' },
      { en: 'Odometer reading recorded', ar: 'تسجيل قراءة العداد' },
    ],
  },
];

export const MAINTENANCE_SCHEDULE: MaintenanceRow[] = [
  {
    item: { en: 'Engine oil & oil filter', ar: 'زيت المحرك وفلتر الزيت' },
    interval: { en: 'Every 5,000–10,000 km', ar: 'كل 5,000–10,000 كم' },
    notes: { en: 'Shorter end for mineral oil, heat, dust or stop-start driving.', ar: 'الحد الأقصر للزيت المعدني أو الحرارة أو الأتربة أو القيادة المتقطعة.' },
  },
  {
    item: { en: 'Air filter', ar: 'فلتر الهواء' },
    interval: { en: 'Inspect every 10,000 km; replace every 20,000–30,000 km', ar: 'فحص كل 10,000 كم؛ تغيير كل 20,000–30,000 كم' },
    notes: { en: 'Check more often in dusty or desert conditions.', ar: 'يُفحص أكثر في الأجواء المتربة والصحراوية.' },
  },
  {
    item: { en: 'Cabin (AC) filter', ar: 'فلتر المكيف' },
    interval: { en: 'Every 15,000–20,000 km', ar: 'كل 15,000–20,000 كم' },
    notes: { en: 'Replace sooner if airflow drops or there is a smell.', ar: 'يُغيَّر مبكرًا إذا ضعف تدفق الهواء أو ظهرت رائحة.' },
  },
  {
    item: { en: 'Fuel filter', ar: 'فلتر الوقود' },
    interval: { en: 'Every 20,000–40,000 km', ar: 'كل 20,000–40,000 كم' },
    notes: { en: 'Diesel vehicles often need it more often.', ar: 'مركبات الديزل تحتاجه غالبًا على فترات أقصر.' },
  },
  {
    item: { en: 'Tyre rotation', ar: 'تبديل أماكن الإطارات' },
    interval: { en: 'Every 10,000 km', ar: 'كل 10,000 كم' },
    notes: { en: 'Check pressure and tread at the same time.', ar: 'مع فحص الضغط وعمق النقشة في الوقت نفسه.' },
  },
  {
    item: { en: 'Wheel alignment & balancing', ar: 'ضبط الزوايا وترصيص العجلات' },
    interval: { en: 'Every 10,000–20,000 km', ar: 'كل 10,000–20,000 كم' },
    notes: { en: 'Also after hitting a pothole or kerb, or if tyres wear unevenly.', ar: 'وأيضًا بعد الاصطدام بحفرة أو رصيف أو عند التآكل غير المنتظم للإطارات.' },
  },
  {
    item: { en: 'Brake pads & discs inspection', ar: 'فحص تيل وأقراص الفرامل' },
    interval: { en: 'Every 10,000 km', ar: 'كل 10,000 كم' },
    notes: { en: 'Replace pads by wear, not by distance alone.', ar: 'يُغيَّر التيل حسب التآكل لا حسب المسافة وحدها.' },
  },
  {
    item: { en: 'Brake fluid', ar: 'زيت الفرامل' },
    interval: { en: 'Replace every 40,000 km or 2 years', ar: 'تغيير كل 40,000 كم أو كل سنتين' },
    notes: { en: 'Brake fluid absorbs moisture over time.', ar: 'يمتص زيت الفرامل الرطوبة مع الوقت.' },
  },
  {
    item: { en: 'Coolant', ar: 'سائل التبريد' },
    interval: { en: 'Check level every service; replace every 40,000–60,000 km', ar: 'فحص المستوى مع كل صيانة؛ تغيير كل 40,000–60,000 كم' },
    notes: { en: 'Critical in hot climates; use the specified coolant type.', ar: 'بالغ الأهمية في المناخ الحار؛ استخدم النوع المحدد.' },
  },
  {
    item: { en: 'Transmission fluid', ar: 'زيت ناقل الحركة' },
    interval: { en: 'Every 40,000–80,000 km', ar: 'كل 40,000–80,000 كم' },
    notes: { en: 'Varies widely between manual and automatic gearboxes.', ar: 'يختلف كثيرًا بين ناقل الحركة اليدوي والأوتوماتيكي.' },
  },
  {
    item: { en: 'Spark plugs (petrol engines)', ar: 'البواجي (محركات البنزين)' },
    interval: { en: 'Every 30,000–60,000 km', ar: 'كل 30,000–60,000 كم' },
    notes: { en: 'Iridium or platinum plugs usually last longer.', ar: 'بواجي الإيريديوم أو البلاتين تدوم أطول عادة.' },
  },
  {
    item: { en: 'Battery check', ar: 'فحص البطارية' },
    interval: { en: 'Every 10,000 km', ar: 'كل 10,000 كم' },
    notes: { en: 'Heat shortens battery life; test before summer.', ar: 'الحرارة تقصّر عمر البطارية؛ افحصها قبل الصيف.' },
  },
  {
    item: { en: 'Drive belts', ar: 'السيور' },
    interval: { en: 'Inspect every 20,000 km', ar: 'فحص كل 20,000 كم' },
    notes: { en: 'Timing belts have their own replacement interval in the manual.', ar: 'لسير الكاتينة موعد تغيير خاص في دليل الشركة المصنعة.' },
  },
  {
    item: { en: 'Suspension & steering check', ar: 'فحص نظام التعليق والتوجيه' },
    interval: { en: 'Every 20,000 km', ar: 'كل 20,000 كم' },
    notes: { en: 'Shock absorbers, bushes, ball joints and tie-rod ends.', ar: 'المساعدين والجلب والمقصات وأطراف الدركسيون.' },
  },
  {
    item: { en: 'AC service', ar: 'صيانة التكييف' },
    interval: { en: 'Every 20,000–30,000 km or before summer', ar: 'كل 20,000–30,000 كم أو قبل الصيف' },
    notes: { en: 'Check gas pressure, condenser and fan.', ar: 'فحص ضغط الفريون والمكثف والمروحة.' },
  },
];
