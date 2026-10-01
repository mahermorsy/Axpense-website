import type { SeoPage } from '@/lib/seo-page';
import { VEHICLE_MANAGEMENT } from './features/vehicle-management';
import { PREVENTIVE_MAINTENANCE } from './features/preventive-maintenance';
import { WORK_ORDERS } from './features/work-orders';
import { INSPECTION_MANAGEMENT } from './features/inspection-management';
import { SPARE_PARTS } from './features/spare-parts';
import { DRIVERS } from './features/drivers';
import { EXPENSE_MANAGEMENT } from './features/expense-management';
import { ASSET_MANAGEMENT } from './features/asset-management';
import { REPORTS_ANALYTICS } from './features/reports-analytics';
import { FUEL_MANAGEMENT } from './features/fuel-management';

export const FEATURE_PAGES: SeoPage[] = [VEHICLE_MANAGEMENT, PREVENTIVE_MAINTENANCE, WORK_ORDERS, INSPECTION_MANAGEMENT, SPARE_PARTS, DRIVERS, EXPENSE_MANAGEMENT, ASSET_MANAGEMENT, REPORTS_ANALYTICS, FUEL_MANAGEMENT];
