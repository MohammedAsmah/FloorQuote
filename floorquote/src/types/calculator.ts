/**
 * FloorQuote calculator domain types.
 * String literal unions mirror Prisma enums and Zod schemas for end-to-end type safety.
 */

export const GARAGE_SIZES = ["one_car", "two_car", "three_car", "oversized"] as const;
export type GarageSize = (typeof GARAGE_SIZES)[number];

export const COATING_TYPES = [
  "epoxy",
  "polyaspartic",
  "polyurea",
  "metallic",
  "quartz",
  "not_sure",
] as const;
export type CoatingType = (typeof COATING_TYPES)[number];

export const FLOOR_CONDITIONS = ["excellent", "good", "fair", "poor"] as const;
export type FloorCondition = (typeof FLOOR_CONDITIONS)[number];

export const CRACK_LEVELS = ["none", "minor", "several", "major"] as const;
export type CrackLevel = (typeof CRACK_LEVELS)[number];

export const EXISTING_COATINGS = ["none", "paint", "epoxy"] as const;
export type ExistingCoating = (typeof EXISTING_COATINGS)[number];

export const DECORATIVE_FINISHES = [
  "none",
  "standard_flakes",
  "premium_flakes",
] as const;
export type DecorativeFinish = (typeof DECORATIVE_FINISHES)[number];

export const TIMELINES = [
  "asap",
  "within_month",
  "within_three_months",
  "flexible",
] as const;
export type Timeline = (typeof TIMELINES)[number];

export const PREFERRED_CONTACT_METHODS = ["email", "phone", "text"] as const;
export type PreferredContactMethod = (typeof PREFERRED_CONTACT_METHODS)[number];

export type EstimateConfidence = "low" | "medium" | "high";

/** Raw calculator input — validated by Zod before calling calculateEstimate */
export interface CalculatorInput {
  city: string;
  squareFeet: number;
  coatingType: CoatingType;
  floorCondition: FloorCondition;
  crackLevel: CrackLevel;
  existingCoating: ExistingCoating;
  decorativeFinish: DecorativeFinish;
  stemWalls: boolean;
  stepsCount: number;
  moistureIssues: boolean;
  timeline: Timeline;
  /** Optional — used for storage/display; not required by pricing engine */
  garageSize?: GarageSize;
}

/** Calculator output returned to UI and persisted on Calculation records */
export interface CalculatorResult {
  estimatedLow: number;
  estimatedHigh: number;
  recommendedSystem: string;
  confidence: EstimateConfidence;
}

/** Human-readable labels for UI (future steps) */
export const COATING_TYPE_LABELS: Record<CoatingType, string> = {
  epoxy: "Epoxy",
  polyaspartic: "Polyaspartic",
  polyurea: "Polyurea",
  metallic: "Metallic",
  quartz: "Quartz",
  not_sure: "Not sure yet",
};

export const GARAGE_SIZE_LABELS: Record<GarageSize, string> = {
  one_car: "1-car garage",
  two_car: "2-car garage",
  three_car: "3-car garage",
  oversized: "Oversized / custom",
};

/** Typical square footage by garage size — useful for defaults in later UI steps */
export const GARAGE_SIZE_SQUARE_FEET: Record<GarageSize, number> = {
  one_car: 250,
  two_car: 400,
  three_car: 600,
  oversized: 800,
};
