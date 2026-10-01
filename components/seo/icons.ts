import {
  AlertTriangle, BarChart3, Boxes, Building, Calculator, CalendarClock, CheckCircle2, ClipboardCheck, Clock, DollarSign, Factory, FileText,
  Flame, Fuel, Gauge, Globe, HardHat, Languages, Layers, MapPin, Package, Rocket, ShieldCheck, TrendingDown, Truck, Users, Wrench, type LucideIcon,
} from 'lucide-react';
import type { IconName } from '@/lib/seo-page';

export const ICONS: Record<IconName, LucideIcon> = {
  truck: Truck, wrench: Wrench, dollar: DollarSign, clipboard: ClipboardCheck, package: Package, chart: BarChart3, users: Users,
  gauge: Gauge, calendar: CalendarClock, shield: ShieldCheck, trending: TrendingDown, fuel: Fuel, hardhat: HardHat, factory: Factory,
  building: Building, flame: Flame, boxes: Boxes, map: MapPin, globe: Globe, clock: Clock, file: FileText, alert: AlertTriangle,
  check: CheckCircle2, layers: Layers, calculator: Calculator, languages: Languages, rocket: Rocket,
};
