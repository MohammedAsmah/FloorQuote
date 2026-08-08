import { z } from "zod";

export const CANADIAN_POSTAL_CODE_REGEX = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

export const directQuoteSchema = z.object({
  // Step 1 - Project
  projectType: z.enum(["garage_floor", "other"]),
  projectTypeOther: z.string().optional(),

  // Step 2 - Garage Details
  garageSize: z.enum(["1_car", "2_car", "3_car", "4_plus_car", "not_sure"]),
  squareFeet: z.union([z.number(), z.nan(), z.string()]).transform((val) => {
    if (typeof val === "number") return isNaN(val) ? undefined : val;
    if (typeof val === "string" && val.trim() !== "") {
      const parsed = parseFloat(val);
      return isNaN(parsed) ? undefined : parsed;
    }
    return undefined;
  }).optional(),
  coatingType: z.enum(["epoxy", "polyaspartic", "polyurea", "quartz", "metallic", "not_sure"]),
  floorCondition: z.enum(["good", "minor_cracks", "several_cracks", "significant_damage", "not_sure"]),
  existingCoating: z.enum(["no", "paint", "existing_epoxy", "other", "not_sure"]),
  existingCoatingOther: z.string().optional(),
  moistureIssue: z.enum(["no", "yes", "not_sure"]),

  // Step 3 - Timing
  timeline: z.enum(["asap", "within_1_month", "1_3_months", "3_6_months", "just_researching"]),
  garageAvailability: z.enum(["yes", "no", "not_sure"]),

  // Step 4 - Location
  city: z.string().min(1, "Please enter your city").default("Calgary"),
  postalCode: z
    .string()
    .min(1, "Please enter your postal code")
    .regex(CANADIAN_POSTAL_CODE_REGEX, "Please enter a valid Canadian postal code."),

  // Step 5 - Contact
  name: z.string().min(2, "Please enter your name."),
  email: z.string().min(1, "Please enter your email.").email("Please enter a valid email address."),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number with at least 10 digits.")
    .regex(/^[+]?[\d\s\-()]+$/, "Please enter a valid phone number."),
  preferredContactMethod: z.enum(["phone", "email", "either"]),
  preferredContactTime: z.enum(["morning", "afternoon", "evening", "anytime"]),
  additionalNotes: z.string().max(500, "Notes must be 500 characters or less").optional(),
});

export type DirectQuoteFormData = z.infer<typeof directQuoteSchema>;
