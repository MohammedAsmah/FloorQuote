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
  name: string;
  email: string;
  phone: string;
  city: string;
  estimate: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  propertyType: string;
  preferredContactTime: string;
  garageEmpty: boolean;
  additionalNotes: string | null;
  internalNotes: string | null;
  saleValue: number | null;
  soldAt: string | null;
  calculation: LeadCalculation;
};

export type RecentActivityRow = {
  id: string;
  referenceNumber: string;
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
