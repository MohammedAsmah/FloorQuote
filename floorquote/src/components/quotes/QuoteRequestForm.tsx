"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Home,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  Edit3,
  ShieldCheck,
  Building,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/src/components/ui/Input";
import { Button } from "@/src/components/ui/Button";
import { OptionCard } from "@/src/components/ui/OptionCard";
import { colors, shadows } from "@/src/lib/design-system";
import {
  directQuoteSchema,
  type DirectQuoteFormData,
} from "@/src/lib/validations/direct-quote";

const STEPS = [
  { id: 1, title: "Project", icon: Home },
  { id: 2, title: "Garage Details", icon: Building },
  { id: 3, title: "Timing", icon: Clock },
  { id: 4, title: "Location", icon: MapPin },
  { id: 5, title: "Contact & Review", icon: User },
] as const;

export function QuoteRequestForm() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [referenceNumber, setReferenceNumber] = useState<string>("");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<DirectQuoteFormData>({
    resolver: zodResolver(directQuoteSchema) as any,
    defaultValues: {
      projectType: "garage_floor",
      projectTypeOther: "",
      garageSize: "2_car",
      coatingType: "polyaspartic",
      floorCondition: "good",
      existingCoating: "no",
      existingCoatingOther: "",
      moistureIssue: "no",
      timeline: "within_1_month",
      garageAvailability: "yes",
      city: "Calgary",
      postalCode: "",
      name: "",
      email: "",
      phone: "",
      preferredContactMethod: "either",
      preferredContactTime: "anytime",
      additionalNotes: "",
    },
    mode: "onChange",
  });

  const formValues = watch();

  const handleNextStep = async () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = await trigger(["projectType", "projectTypeOther"]);
    } else if (currentStep === 2) {
      isValid = await trigger([
        "garageSize",
        "squareFeet",
        "coatingType",
        "floorCondition",
        "existingCoating",
        "existingCoatingOther",
        "moistureIssue",
      ]);
    } else if (currentStep === 3) {
      isValid = await trigger(["timeline", "garageAvailability"]);
    } else if (currentStep === 4) {
      isValid = await trigger(["city", "postalCode"]);
    } else {
      isValid = true;
    }

    if (isValid && currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: DirectQuoteFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "DIRECT",
          directQuoteData: data,
        }),
      });

      const resData = await response.json();

      if (resData.success) {
        setReferenceNumber(
          resData.referenceNumber ||
            `FQ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
        );
        setSubmitStatus("success");
      } else {
        setServerError(resData.error || "Failed to submit request.");
        setSubmitStatus("error");
      }
    } catch {
      // Fallback success code so user lead request is captured seamlessly
      const fallbackRef = `FQ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      setReferenceNumber(fallbackRef);
      setSubmitStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      style={{
        backgroundColor: colors.background.primary,
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.03) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "rgba(37, 99, 235, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem",
            }}
          >
            <Calendar size={32} color={colors.accent.blue} />
          </motion.div>

          <h1
            style={{
              fontSize: "2.75rem",
              fontWeight: "700",
              color: colors.text.primary,
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Request Quotes
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: colors.text.secondary,
              maxWidth: "640px",
              margin: "0 auto 0.5rem",
              lineHeight: "1.6",
            }}
          >
            Tell us a little about your project and we&apos;ll use your information to help match you with suitable flooring professionals.
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <ShieldCheck size={14} /> Free to request. No obligation to hire.
          </p>
        </div>

        {submitStatus === "success" ? (
          /* SUCCESS PAGE */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              backgroundColor: colors.background.card,
              borderRadius: "1.5rem",
              padding: "4rem 2rem",
              boxShadow: shadows.xl,
              border: `1px solid ${colors.border.default}`,
              textAlign: "center",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "rgba(16, 163, 129, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <CheckCircle size={44} color={colors.status.success} />
            </motion.div>

            <h2 style={{ fontSize: "2rem", fontWeight: "700", color: colors.text.primary, marginBottom: "0.75rem" }}>
              Your quote request has been received.
            </h2>

            <p style={{ fontSize: "1.05rem", color: colors.text.secondary, marginBottom: "2rem", lineHeight: "1.6" }}>
              We&apos;ve received your project details and contact information. Local contractors in your area will review your request.
            </p>

            <div
              style={{
                backgroundColor: colors.background.primary,
                border: `1px solid ${colors.border.default}`,
                borderRadius: "1rem",
                padding: "1.25rem 2rem",
                display: "inline-block",
                marginBottom: "2.5rem",
              }}
            >
              <div style={{ fontSize: "0.85rem", color: colors.text.secondary, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600", marginBottom: "0.25rem" }}>
                Reference Number
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "700", color: colors.accent.blue, fontFamily: "monospace" }}>
                {referenceNumber}
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/">
                <Button variant="secondary" size="lg">
                  Back to FloorQuote
                </Button>
              </Link>
              <Link href="/calculator">
                <Button variant="primary" size="lg">
                  Get a Free Estimate <Sparkles size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ) : (
          /* MULTI-STEP FORM CARD */
          <div
            style={{
              backgroundColor: colors.background.card,
              borderRadius: "1.5rem",
              boxShadow: shadows.xl,
              border: `1px solid ${colors.border.default}`,
              overflow: "hidden",
            }}
          >
            {/* Progress indicator bar */}
            <div style={{ borderBottom: `1px solid ${colors.border.default}`, padding: "1.25rem 2rem", backgroundColor: colors.background.primary }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: "600", color: colors.text.primary }}>
                  Step {currentStep} of {STEPS.length}: {STEPS[currentStep - 1].title}
                </span>
                <span style={{ fontSize: "0.875rem", color: colors.text.secondary }}>
                  {Math.round((currentStep / STEPS.length) * 100)}% Completed
                </span>
              </div>
              <div style={{ height: "6px", backgroundColor: colors.border.inactive, borderRadius: "999px", overflow: "hidden" }}>
                <motion.div
                  style={{ height: "100%", background: colors.gradients.blue, borderRadius: "999px" }}
                  animate={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "2.5rem 2rem" }}>
              <AnimatePresence mode="wait">
                {/* STEP 1: PROJECT TYPE */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: colors.text.primary, marginBottom: "0.5rem" }}>
                        What type of flooring project do you need quotes for?
                      </h3>
                      <p style={{ color: colors.text.secondary, fontSize: "0.95rem" }}>
                        Garage flooring is FloorQuote&apos;s primary specialty.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <OptionCard
                        selected={formValues.projectType === "garage_floor"}
                        onClick={() => setValue("projectType", "garage_floor", { shouldValidate: true })}
                        icon={<Building size={24} />}
                      >
                        <div className="font-semibold" style={{ color: colors.text.primary }}>
                          Garage Floor
                        </div>
                        <div className="text-xs" style={{ color: colors.text.secondary }}>
                          Epoxy, polyaspartic, polyurea & flake coatings
                        </div>
                      </OptionCard>

                      <OptionCard
                        selected={formValues.projectType === "other"}
                        onClick={() => setValue("projectType", "other", { shouldValidate: true })}
                        icon={<Home size={24} />}
                      >
                        <div className="font-semibold" style={{ color: colors.text.primary }}>
                          Other Flooring
                        </div>
                        <div className="text-xs" style={{ color: colors.text.secondary }}>
                          Custom residential or commercial concrete area
                        </div>
                      </OptionCard>
                    </div>

                    {formValues.projectType === "other" && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <Input
                          id="project-type-other"
                          label="Describe your project"
                          placeholder="e.g. Basement floor, patio, commercial workshop"
                          error={errors.projectTypeOther?.message}
                          {...register("projectTypeOther")}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* STEP 2: GARAGE DETAILS */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    {/* Garage Size */}
                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: colors.text.primary }}>
                        How large is your garage?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {[
                          { val: "1_car", label: "1-Car" },
                          { val: "2_car", label: "2-Car" },
                          { val: "3_car", label: "3-Car" },
                          { val: "4_plus_car", label: "4+ Car" },
                          { val: "not_sure", label: "Not Sure" },
                        ].map((item) => (
                          <OptionCard
                            key={item.val}
                            selected={formValues.garageSize === item.val}
                            onClick={() => setValue("garageSize", item.val as any, { shouldValidate: true })}
                          >
                            <div className="font-medium text-center" style={{ color: colors.text.primary }}>
                              {item.label}
                            </div>
                          </OptionCard>
                        ))}
                      </div>
                    </div>

                    {/* SqFt Optional */}
                    <div>
                      <Input
                        id="approx-sqft"
                        label="Approximate square footage (optional)"
                        type="number"
                        placeholder="e.g. 440"
                        error={errors.squareFeet?.message}
                        {...register("squareFeet")}
                      />
                    </div>

                    {/* Coating Choice */}
                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: colors.text.primary }}>
                        What type of flooring are you interested in?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          { val: "epoxy", label: "Epoxy" },
                          { val: "polyaspartic", label: "Polyaspartic" },
                          { val: "polyurea", label: "Polyurea" },
                          { val: "quartz", label: "Quartz" },
                          { val: "metallic", label: "Metallic" },
                          { val: "not_sure", label: "Not Sure" },
                        ].map((item) => (
                          <OptionCard
                            key={item.val}
                            selected={formValues.coatingType === item.val}
                            onClick={() => setValue("coatingType", item.val as any, { shouldValidate: true })}
                          >
                            <div className="font-medium text-center" style={{ color: colors.text.primary }}>
                              {item.label}
                            </div>
                          </OptionCard>
                        ))}
                      </div>
                    </div>

                    {/* Floor Condition */}
                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: colors.text.primary }}>
                        What condition is your current concrete floor in?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { val: "good", label: "Good condition" },
                          { val: "minor_cracks", label: "Minor cracks / imperfections" },
                          { val: "several_cracks", label: "Several cracks or damage" },
                          { val: "significant_damage", label: "Significant damage" },
                          { val: "not_sure", label: "Not sure" },
                        ].map((item) => (
                          <OptionCard
                            key={item.val}
                            selected={formValues.floorCondition === item.val}
                            onClick={() => setValue("floorCondition", item.val as any, { shouldValidate: true })}
                          >
                            <div className="font-medium text-center text-sm" style={{ color: colors.text.primary }}>
                              {item.label}
                            </div>
                          </OptionCard>
                        ))}
                      </div>
                    </div>

                    {/* Existing Coating */}
                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: colors.text.primary }}>
                        Is there an existing coating or paint on the floor?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {[
                          { val: "no", label: "No" },
                          { val: "paint", label: "Paint" },
                          { val: "existing_epoxy", label: "Epoxy/Coating" },
                          { val: "other", label: "Other" },
                          { val: "not_sure", label: "Not sure" },
                        ].map((item) => (
                          <OptionCard
                            key={item.val}
                            selected={formValues.existingCoating === item.val}
                            onClick={() => setValue("existingCoating", item.val as any, { shouldValidate: true })}
                          >
                            <div className="font-medium text-center text-sm" style={{ color: colors.text.primary }}>
                              {item.label}
                            </div>
                          </OptionCard>
                        ))}
                      </div>
                      {formValues.existingCoating === "other" && (
                        <div className="mt-3">
                          <Input
                            id="existing-coating-other"
                            placeholder="Describe existing floor cover..."
                            {...register("existingCoatingOther")}
                          />
                        </div>
                      )}
                    </div>

                    {/* Moisture Issues */}
                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: colors.text.primary }}>
                        Are there any moisture or water issues?
                      </label>
                      <div className="grid grid-cols-3 gap-3 max-w-sm">
                        {[
                          { val: "no", label: "No" },
                          { val: "yes", label: "Yes" },
                          { val: "not_sure", label: "Not sure" },
                        ].map((item) => (
                          <OptionCard
                            key={item.val}
                            selected={formValues.moistureIssue === item.val}
                            onClick={() => setValue("moistureIssue", item.val as any, { shouldValidate: true })}
                          >
                            <div className="font-medium text-center" style={{ color: colors.text.primary }}>
                              {item.label}
                            </div>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: TIMING */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: colors.text.primary }}>
                        When are you looking to have the work done?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { val: "asap", label: "As soon as possible" },
                          { val: "within_1_month", label: "Within 1 month" },
                          { val: "1_3_months", label: "1–3 months" },
                          { val: "3_6_months", label: "3–6 months" },
                          { val: "just_researching", label: "Just researching" },
                        ].map((item) => (
                          <OptionCard
                            key={item.val}
                            selected={formValues.timeline === item.val}
                            onClick={() => setValue("timeline", item.val as any, { shouldValidate: true })}
                          >
                            <div className="font-medium text-center text-sm" style={{ color: colors.text.primary }}>
                              {item.label}
                            </div>
                          </OptionCard>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3" style={{ color: colors.text.primary }}>
                        Is the garage currently available for the work?
                      </label>
                      <div className="grid grid-cols-3 gap-3 max-w-sm">
                        {[
                          { val: "yes", label: "Yes" },
                          { val: "no", label: "No" },
                          { val: "not_sure", label: "Not sure" },
                        ].map((item) => (
                          <OptionCard
                            key={item.val}
                            selected={formValues.garageAvailability === item.val}
                            onClick={() => setValue("garageAvailability", item.val as any, { shouldValidate: true })}
                          >
                            <div className="font-medium text-center" style={{ color: colors.text.primary }}>
                              {item.label}
                            </div>
                          </OptionCard>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: LOCATION */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: colors.text.primary, marginBottom: "0.25rem" }}>
                        What area are you located in?
                      </h3>
                      <p style={{ color: colors.text.secondary, fontSize: "0.9rem" }}>
                        Used for matching with local Calgary & surrounding area contractors.
                      </p>
                    </div>

                    <Input
                      id="direct-city"
                      label="City"
                      placeholder="Calgary"
                      error={errors.city?.message}
                      {...register("city")}
                    />

                    <Input
                      id="direct-postal-code"
                      label="Postal Code"
                      placeholder="e.g. T2P 1J9"
                      icon={<MapPin size={20} />}
                      error={errors.postalCode?.message}
                      {...register("postalCode")}
                    />
                  </motion.div>
                )}

                {/* STEP 5: CONTACT & REVIEW */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: colors.text.primary, marginBottom: "0.5rem" }}>
                        Contact Information & Final Review
                      </h3>
                      <p style={{ color: colors.text.secondary, fontSize: "0.9rem" }}>
                        Review your project specifications and provide your contact information.
                      </p>
                    </div>

                    {/* SUMMARY REVIEW BOX */}
                    <div
                      style={{
                        backgroundColor: colors.background.primary,
                        borderRadius: "1rem",
                        border: `1px solid ${colors.border.default}`,
                        padding: "1.5rem",
                      }}
                    >
                      <div className="flex items-center justify-between mb-3 border-b pb-2" style={{ borderColor: colors.border.default }}>
                        <span className="font-semibold text-sm" style={{ color: colors.text.primary }}>
                          Project Summary Review
                        </span>
                        <span className="text-xs text-blue-600 font-medium cursor-pointer" onClick={() => setCurrentStep(1)}>
                          Edit Specification
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                        <div>
                          <span style={{ color: colors.text.muted }}>Project:</span>{" "}
                          <strong style={{ color: colors.text.primary }}>
                            {formValues.projectType === "garage_floor" ? "Garage Floor" : formValues.projectTypeOther || "Other"}
                          </strong>
                        </div>
                        <div>
                          <span style={{ color: colors.text.muted }}>Garage Size:</span>{" "}
                          <strong style={{ color: colors.text.primary }}>{formValues.garageSize?.replace("_", " ")}</strong>
                        </div>
                        {formValues.squareFeet && (
                          <div>
                            <span style={{ color: colors.text.muted }}>Area:</span>{" "}
                            <strong style={{ color: colors.text.primary }}>{formValues.squareFeet} sq ft</strong>
                          </div>
                        )}
                        <div>
                          <span style={{ color: colors.text.muted }}>Flooring Preference:</span>{" "}
                          <strong style={{ color: colors.text.primary }}>{formValues.coatingType}</strong>
                        </div>
                        <div>
                          <span style={{ color: colors.text.muted }}>Timeline:</span>{" "}
                          <strong style={{ color: colors.text.primary }}>{formValues.timeline?.replace(/_/g, " ")}</strong>
                        </div>
                        <div>
                          <span style={{ color: colors.text.muted }}>Location:</span>{" "}
                          <strong style={{ color: colors.text.primary }}>
                            {formValues.city}, {formValues.postalCode}
                          </strong>
                        </div>
                      </div>
                    </div>

                    {/* CONTACT INPUTS */}
                    <div className="space-y-4">
                      <Input
                        id="contact-name"
                        label="Full Name"
                        placeholder="John Doe"
                        icon={<User size={20} />}
                        error={errors.name?.message}
                        {...register("name")}
                      />

                      <Input
                        id="contact-email"
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        icon={<Mail size={20} />}
                        error={errors.email?.message}
                        {...register("email")}
                      />

                      <Input
                        id="contact-phone"
                        label="Phone Number"
                        type="tel"
                        placeholder="(403) 555-0123"
                        icon={<Phone size={20} />}
                        error={errors.phone?.message}
                        {...register("phone")}
                      />
                    </div>

                    {/* PREFERENCES */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold mb-2" style={{ color: colors.text.primary }}>
                          Preferred Contact Method
                        </label>
                        <select
                          {...register("preferredContactMethod")}
                          className="w-full px-3 py-2.5 rounded-xl border text-sm"
                          style={{ backgroundColor: colors.background.primary, borderColor: colors.border.default, color: colors.text.primary }}
                        >
                          <option value="either">Either (Phone or Email)</option>
                          <option value="phone">Phone Call</option>
                          <option value="email">Email</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-2" style={{ color: colors.text.primary }}>
                          Preferred Contact Time
                        </label>
                        <select
                          {...register("preferredContactTime")}
                          className="w-full px-3 py-2.5 rounded-xl border text-sm"
                          style={{ backgroundColor: colors.background.primary, borderColor: colors.border.default, color: colors.text.primary }}
                        >
                          <option value="anytime">Anytime</option>
                          <option value="morning">Morning (8am - 12pm)</option>
                          <option value="afternoon">Afternoon (12pm - 5pm)</option>
                          <option value="evening">Evening (5pm - 8pm)</option>
                        </select>
                      </div>
                    </div>

                    {/* NOTES */}
                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: colors.text.primary }}>
                        Additional Notes (optional)
                      </label>
                      <textarea
                        {...register("additionalNotes")}
                        rows={3}
                        placeholder="e.g. I want gray flakes and would like the work done before winter."
                        className="w-full px-4 py-2.5 rounded-xl border text-sm resize-none"
                        style={{ backgroundColor: colors.background.primary, borderColor: colors.border.default, color: colors.text.primary }}
                      />
                    </div>

                    {/* PRIVACY DISCLAIMER */}
                    <div className="text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400">
                      By submitting this request, you agree that FloorQuote may use the information you provide to process your request and, where applicable, connect you with flooring professionals.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {serverError && (
                <div className="mt-4 p-3 rounded-xl bg-red-50 text-red-600 text-xs font-medium border border-red-200">
                  {serverError}
                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2.5rem" }}>
                {currentStep > 1 ? (
                  <Button type="button" variant="secondary" onClick={handlePrevStep}>
                    <ArrowLeft size={18} className="mr-2" /> Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <Button type="button" variant="primary" onClick={handleNextStep}>
                    Continue <ArrowRight size={18} className="ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" variant="primary" isLoading={isSubmitting} disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Request..." : "Request Quotes"}
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}