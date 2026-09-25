import {
  BarChart3, BookOpen, Building, Calculator, ClipboardCheck, ClipboardList, DollarSign, Factory, Fuel, Gauge, HardHat,
  HeartPulse, Hotel, Layers, LineChart, Package, Truck, Wrench, Zap, CalendarClock, Car, type LucideIcon,
} from 'lucide-react';

type Tone = 'teal' | 'green' | 'amber' | 'navy';

// One icon + tile colour per route, so every listing card looks like the app's stat cards.
const MAP: Record<string, [LucideIcon, Tone]> = {
  'fleet-management': [Truck, 'green'],
  'fleet-maintenance': [Wrench, 'amber'],
  'vehicle-management': [Car, 'green'],
  'expense-management': [DollarSign, 'teal'],
  'fuel-management': [Fuel, 'amber'],
  'inspection-management': [ClipboardCheck, 'teal'],
  'work-orders': [ClipboardList, 'navy'],
  'preventive-maintenance': [CalendarClock, 'amber'],
  'asset-management': [Package, 'teal'],
  'reports-analytics': [BarChart3, 'navy'],
  logistics: [Truck, 'green'],
  transportation: [Truck, 'green'],
  construction: [HardHat, 'amber'],
  manufacturing: [Factory, 'navy'],
  'real-estate': [Building, 'teal'],
  healthcare: [HeartPulse, 'teal'],
  'travel-hospitality': [Hotel, 'teal'],
  'energy-utilities': [Zap, 'amber'],
  'fleet-cost-management': [LineChart, 'teal'],
  'fleet-maintenance-management': [Gauge, 'amber'],
  'asset-lifecycle-management': [Layers, 'teal'],
  'equipment-cost-management': [DollarSign, 'navy'],
  'fleet-cost-calculator': [Calculator, 'teal'],
  blog: [BookOpen, 'navy'],
};

export function iconFor(href: string): { icon: LucideIcon; tone: Tone } {
  const key = href.split('/').filter(Boolean).pop() ?? '';
  const [icon, tone] = MAP[key] ?? [Layers, 'teal'];
  return { icon, tone };
}
