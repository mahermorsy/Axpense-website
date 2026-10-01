import type { ToolPage } from '@/lib/seo-page';
import { FLEET_COST_CALCULATOR } from './tools/fleet-cost-calculator';
import { VEHICLE_INSPECTION_CHECKLIST } from './tools/vehicle-inspection-checklist';
import { PREVENTIVE_MAINTENANCE_CHECKLIST } from './tools/preventive-maintenance-checklist';

// Free tools under /resources (EN + AR twins).
export const TOOLS: ToolPage[] = [FLEET_COST_CALCULATOR, VEHICLE_INSPECTION_CHECKLIST, PREVENTIVE_MAINTENANCE_CHECKLIST];
export const getTool = (path: string) => TOOLS.find((t) => t.path === path);
