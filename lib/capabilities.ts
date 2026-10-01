/**
 * Capability gate. Copy, FAQs, schema featureList and internal links may only
 * state capabilities marked 'confirmed'. Content that depends on anything else
 * is written but only renders once its flag is switched to 'confirmed'.
 *
 * Change a flag here and rebuild; pages, links, sitemap and schema follow.
 */
export type CapabilityStatus = 'confirmed' | 'unconfirmed' | 'not_available';

export const capabilities = {
  kmPreventiveMaintenance: 'confirmed',
  spareParts: 'confirmed',
  drivers: 'confirmed',
  inspections: 'confirmed',
  depreciation: 'confirmed',
  expenses: 'confirmed',
  workOrders: 'confirmed', // owner 30 Sep: work orders linked to maintenance
  inspectionPhotos: 'unconfirmed',
  inspectionToWorkOrder: 'unconfirmed',
  fuelModule: 'confirmed', // owner 30 Sep: fuel records + analytics on the vehicle profile
  fuelAsExpense: 'confirmed',
  budgets: 'unconfirmed',
  documentExpiryReminders: 'unconfirmed', // licence / registration / insurance
  reports: 'confirmed',
  alerts: 'confirmed', // owner 30 Sep: alerts & notifications (maintenance due / overdue)
  multiCurrency: 'unconfirmed',
  gps: 'unconfirmed',
  routeOptimization: 'unconfirmed',
  ai: 'unconfirmed',
  publicApi: 'unconfirmed',
  mobileApp: 'unconfirmed', // owner 30 Sep: planned (shown as "coming soon" on /pricing)
  whiteLabel: 'unconfirmed',
  sso: 'unconfirmed',
  // Added during implementation — visible in the app sidebar but not yet confirmed by the owner.
  equipmentAssets: 'unconfirmed', // non-vehicle assets (machines, forklifts, tools)
  hourBasedMaintenance: 'unconfirmed', // engine-hour service intervals for equipment
  usersRoles: 'unconfirmed',
  issues: 'unconfirmed', // standalone issue / defect list
} as const satisfies Record<string, CapabilityStatus>;

export type Capability = keyof typeof capabilities;

export function isConfirmed(...caps: (Capability | undefined)[]): boolean {
  return caps.every((c) => !c || capabilities[c] === 'confirmed');
}

/** Filter any list whose items may carry `requires`. */
export function gated<T extends { requires?: Capability | Capability[] }>(items: T[]): T[] {
  return items.filter((i) => isConfirmed(...([] as (Capability | undefined)[]).concat(i.requires ?? [])));
}

export function unconfirmedCapabilities(): Capability[] {
  return (Object.keys(capabilities) as Capability[]).filter((c) => capabilities[c] !== 'confirmed');
}
