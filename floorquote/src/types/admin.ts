export type AdminNavItem = {
  label: string;
  href: string;
  icon: string;
};

export type KpiMetric = {
  label: string;
  value: string | number;
  trend?: string;
  accent?: "blue" | "teal" | "purple" | "amber";
};

export type LeadCalculation = {
  city: string;
  estimatedLow: number;
  estimatedHigh: number;
  coatingType: string;
  floorCondition: string;
  crackLevel: string;
  existingCoating: string;
  decorativeFinish: string;
  stemWalls: boolean;
  stepsCount: number;
  moistureIssues: boolean;
  timeline: string;
  recommendedSystem: string;
};

export type LeadTableRow = {
  id: string;
  referenceNumber: string;
  source: "CALCULATOR" | "DIRECT";
  name: string;
  email: string;
  phone: string;
  city: string;
  postalCode?: string | null;
  estimate: number | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  propertyType?: string | null;
  preferredContactTime: string;
  preferredContactMethod?: string;
  garageEmpty?: boolean | null;
  additionalNotes: string | null;
  internalNotes: string | null;
  saleValue: number | null;
  soldAt: string | null;

  // Direct Quote Fields
  projectType?: string | null;
  projectTypeOther?: string | null;
  garageSizeDirect?: string | null;
  squareFeetDirect?: number | null;
  coatingTypeDirect?: string | null;
  floorConditionDirect?: string | null;
  existingCoatingDirect?: string | null;
  existingCoatingOther?: string | null;
  moistureIssueDirect?: string | null;
  timelineDirect?: string | null;
  garageAvailability?: string | null;

  calculation: LeadCalculation | null;
};

export type RecentActivityRow = {
  id: string;
  referenceNumber: string;
  source?: "CALCULATOR" | "DIRECT";
  name: string;
  phone: string;
  city: string;
  status: string;
  createdAt: Date;
};

export type ContractorRow = {
  id: string;
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  website: string | null;
  cities: string;
  services: string;
  leadPrice: number;
  notes: string | null;
  status: string;
};
