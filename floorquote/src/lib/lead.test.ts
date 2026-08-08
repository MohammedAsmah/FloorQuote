import { describe, it, expect } from "vitest";
import {
  contactInfoSchema,
  additionalInfoSchema,
  leadSchema,
} from "./validations/lead";
import { directQuoteSchema } from "./validations/direct-quote";

describe("Lead Validation Schemas", () => {
  describe("Calculator Lead Schemas (PATH A)", () => {
    it("should accept valid contact information", () => {
      const validContact = {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        phone: "(403) 555-0199",
        preferredContactMethod: "email" as const,
      };

      const result = contactInfoSchema.safeParse(validContact);
      expect(result.success).toBe(true);
    });

    it("should reject name shorter than 2 characters", () => {
      const invalid = {
        name: "J",
        email: "jane@example.com",
        phone: "4035550199",
        preferredContactMethod: "phone" as const,
      };

      const result = contactInfoSchema.safeParse(invalid);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Name must be at least 2 characters");
      }
    });

    it("should reject invalid email format", () => {
      const invalid = {
        name: "Jane Doe",
        email: "invalid-email-address",
        phone: "4035550199",
        preferredContactMethod: "email" as const,
      };

      const result = contactInfoSchema.safeParse(invalid);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Invalid email address");
      }
    });

    it("should reject phone number with less than 10 digits", () => {
      const invalid = {
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "12345",
        preferredContactMethod: "text" as const,
      };

      const result = contactInfoSchema.safeParse(invalid);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Phone number must be at least 10 digits");
      }
    });

    it("should validate full calculator lead payload", () => {
      const fullLead = {
        name: "Alex Smith",
        email: "alex@example.com",
        phone: "+14035550123",
        preferredContactMethod: "phone" as const,
        propertyType: "semi_detached" as const,
        garageEmpty: true,
        preferredContactTime: "afternoon" as const,
        additionalNotes: "Call before coming over.",
      };

      const result = leadSchema.safeParse(fullLead);
      expect(result.success).toBe(true);
    });
  });

  describe("Direct Quote Request Schema (PATH B)", () => {
    it("should accept a valid direct quote payload", () => {
      const validDirectQuote = {
        projectType: "garage_floor" as const,
        garageSize: "2_car" as const,
        squareFeet: 440,
        coatingType: "polyaspartic" as const,
        floorCondition: "good" as const,
        existingCoating: "no" as const,
        moistureIssue: "no" as const,
        timeline: "within_1_month" as const,
        garageAvailability: "yes" as const,
        city: "Calgary",
        postalCode: "T2P 1J9",
        name: "Marcus Aurelius",
        email: "marcus@example.com",
        phone: "4035559876",
        preferredContactMethod: "either" as const,
        preferredContactTime: "anytime" as const,
        additionalNotes: "Looking for gray flake finish.",
      };

      const result = directQuoteSchema.safeParse(validDirectQuote);
      expect(result.success).toBe(true);
    });

    it("should accept valid Canadian postal codes with or without space", () => {
      const validCode1 = "T2P 1J9";
      const validCode2 = "T2P1J9";

      const basePayload = {
        projectType: "garage_floor" as const,
        garageSize: "1_car" as const,
        coatingType: "epoxy" as const,
        floorCondition: "good" as const,
        existingCoating: "no" as const,
        moistureIssue: "no" as const,
        timeline: "asap" as const,
        garageAvailability: "yes" as const,
        city: "Calgary",
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "4035551234",
        preferredContactMethod: "email" as const,
        preferredContactTime: "morning" as const,
      };

      expect(directQuoteSchema.safeParse({ ...basePayload, postalCode: validCode1 }).success).toBe(true);
      expect(directQuoteSchema.safeParse({ ...basePayload, postalCode: validCode2 }).success).toBe(true);
    });

    it("should reject an invalid Canadian postal code format", () => {
      const invalidPayload = {
        projectType: "garage_floor" as const,
        garageSize: "2_car" as const,
        coatingType: "epoxy" as const,
        floorCondition: "good" as const,
        existingCoating: "no" as const,
        moistureIssue: "no" as const,
        timeline: "asap" as const,
        garageAvailability: "yes" as const,
        city: "Calgary",
        postalCode: "90210", // Invalid US zip instead of Canadian postal code
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "4035551234",
        preferredContactMethod: "email" as const,
        preferredContactTime: "morning" as const,
      };

      const result = directQuoteSchema.safeParse(invalidPayload);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("valid Canadian postal code");
      }
    });

    it("should reject direct quote missing required contact fields", () => {
      const missingName = {
        projectType: "garage_floor" as const,
        garageSize: "2_car" as const,
        coatingType: "epoxy" as const,
        floorCondition: "good" as const,
        existingCoating: "no" as const,
        moistureIssue: "no" as const,
        timeline: "asap" as const,
        garageAvailability: "yes" as const,
        city: "Calgary",
        postalCode: "T2P 1J9",
        name: "J", // Too short
        email: "jane@example.com",
        phone: "4035551234",
        preferredContactMethod: "email" as const,
        preferredContactTime: "morning" as const,
      };

      const result = directQuoteSchema.safeParse(missingName);
      expect(result.success).toBe(false);
    });
  });
});
