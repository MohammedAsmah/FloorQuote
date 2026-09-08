"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Car,
  Check,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Calculator as CalculatorIcon,
  Layers,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Navigation } from "../landing/Navigation";
import { Footer } from "../landing/Footer";
import { Button } from "../ui/Button";
import { colors, shadows } from "../../lib/design-system";

const factors = [
  {
    icon: <Car size={22} style={{ color: colors.accent.blue }} aria-hidden="true" />,
    title: "Garage Size",
    description: "Your garage square footage.",
  },
  {
    icon: <Layers size={22} style={{ color: colors.accent.blue }} aria-hidden="true" />,
    title: "Coating System",
    description: "The flooring system you are interested in.",
  },
  {
    icon: <ClipboardCheck size={22} style={{ color: colors.accent.blue }} aria-hidden="true" />,
    title: "Concrete Condition",
    description: "The current condition of your garage floor.",
  },
  {
    icon: <Wrench size={22} style={{ color: colors.accent.blue }} aria-hidden="true" />,
    title: "Cracks & Repairs",
    description: "Whether preparation or repairs may be required.",
  },
  {
    icon: <Sparkles size={22} style={{ color: colors.accent.blue }} aria-hidden="true" />,
    title: "Finish Options",
    description: "Solid colour or decorative finish preferences.",
  },
  {
    icon: <SlidersHorizontal size={22} style={{ color: colors.accent.blue }} aria-hidden="true" />,
    title: "Project Details",
    description: "Moisture, stem walls and steps.",
  },
];

const steps = [
  {
    title: "Tell Us About Your Garage",
    description: "Share basic information about your garage and project.",
  },
  {
    title: "Choose Your Flooring Options",
    description: "Select the flooring system and options you're considering.",
  },
  {
    title: "Describe Your Floor",
    description: "Tell us about the condition of your concrete and any repairs.",
  },
  {
    title: "Get Your Estimated Range",
    description: "Receive an estimate based on the project details you provide.",
  },
];

const trustItems = ["Calgary market pricing", "No obligation", "Results in minutes"];

const faqs = [
  {
    question: "Is the FloorQuote calculator free to use?",
    answer:
      "Yes. You can use FloorQuote to receive an estimated garage flooring cost range based on your project details. There is no obligation to request a quote.",
  },
  {
    question: "Does the calculator provide a final contractor price?",
    answer:
      "No. The calculator provides an estimated cost range based on the information you provide. Final contractor pricing can vary depending on site conditions, preparation requirements and the specific scope of work.",
  },
  {
    question: "What information do I need for a garage flooring estimate?",
    answer:
      "You'll answer questions about your garage size, preferred coating system, concrete condition, cracks or repairs, finish options and other project details that can affect the estimated cost.",
  },
];

const estimateSteps = [
  {
    icon: ClipboardList,
    title: "Project details",
    description: "Your garage, coating, condition and repairs",
  },
  {
    icon: CalculatorIcon,
    title: "Instant calculation",
    description: "Calgary-focused pricing applied to your details",
  },
  {
    icon: BarChart3,
    title: "Estimated cost range",
    description: "A low to high range for your project",
  },
];

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const cardContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function CalculatorLanding() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ background: colors.gradients.background, minHeight: "100vh" }}
      >
        <Navigation />

            <main>
              {/* Hero */}
              <section className="px-6 pt-32 pb-16 lg:pt-40 lg:pb-24">
                <div
                  className="mx-auto grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16"
                  style={{ maxWidth: "1280px" }}
                >
                  <motion.div variants={heroContainer} initial="hidden" animate="show">
                    <motion.span
                      variants={fadeUp}
                      className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide"
                      style={{
                        backgroundColor: `${colors.accent.blue}10`,
                        color: colors.accent.blue,
                      }}
                    >
                      Free Calgary Estimate
                    </motion.span>

                    <motion.h1
                      variants={fadeUp}
                      className="mt-5 text-4xl font-bold md:text-5xl"
                      style={{ color: colors.text.primary, letterSpacing: "-0.02em" }}
                    >
                      Garage Flooring Cost Calculator
                    </motion.h1>

                    <motion.p
                      variants={fadeUp}
                      className="mt-5 max-w-xl text-lg md:text-xl"
                      style={{ color: colors.text.secondary, lineHeight: "1.6" }}
                    >
                      Get a free estimate for your Calgary garage flooring project. Answer a few
                      questions about your garage size, coating system, concrete condition, cracks,
                      finishes and project details to receive an estimated cost range.
                    </motion.p>

                    <motion.div variants={fadeUp} className="mt-8">
                      <Link href="/calculator/start">
                        <Button
                          variant="gradient"
                          size="lg"
                          className="px-8"
                        >
                          Start My Free Estimate
                          <ArrowRight size={20} className="ml-2" />
                        </Button>
                      </Link>
                      <p className="mt-4 text-sm" style={{ color: colors.text.muted }}>
                        No phone call required to see your estimate.
                      </p>
                    </motion.div>

                    <motion.ul
                      variants={fadeUp}
                      className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3"
                    >
                      {trustItems.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center gap-2 text-sm font-medium"
                          style={{ color: colors.text.secondary }}
                        >
                          <span
                            className="inline-flex h-6 w-6 items-center justify-center rounded-full"
                            style={{ backgroundColor: `${colors.status.success}15` }}
                          >
                            <Check
                              size={14}
                              style={{ color: colors.status.success }}
                              strokeWidth={3}
                              aria-hidden="true"
                            />
                          </span>
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Product visual */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="relative mx-auto w-full max-w-md lg:max-w-none"
                  >
                    <div
                      className="relative rounded-3xl p-6 sm:p-8"
                      style={{
                        backgroundColor: colors.background.card,
                        border: `1px solid ${colors.border.default}`,
                        boxShadow: shadows.xl,
                      }}
                    >
                      <p
                        className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: colors.text.muted }}
                      >
                        How your estimate is built
                      </p>
                      <div className="mt-6 space-y-6">
                        {estimateSteps.map((item, index) => (
                          <div key={item.title} className="relative flex items-start gap-4">
                            {index < estimateSteps.length - 1 && (
                              <span
                                aria-hidden="true"
                                className="absolute left-7 top-12 bottom-[-1.5rem] w-px"
                                style={{ backgroundColor: colors.border.default }}
                              />
                            )}
                            <span
                              className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                              style={{ backgroundColor: `${colors.accent.blue}10` }}
                            >
                              <item.icon size={24} style={{ color: colors.accent.blue }} aria-hidden="true" />
                            </span>
                            <div className="flex-1 pt-1">
                              <p className="text-base font-semibold" style={{ color: colors.text.primary }}>
                                {item.title}
                              </p>
                              <p className="mt-0.5 text-sm" style={{ color: colors.text.secondary }}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Estimate range visualizer (illustrative, no numbers) */}
                      <div
                        className="mt-6 rounded-2xl px-5 py-4"
                        style={{ backgroundColor: `${colors.accent.blue}08` }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium" style={{ color: colors.text.secondary }}>
                            Low
                          </span>
                          <span className="text-xs font-medium" style={{ color: colors.text.secondary }}>
                            High
                          </span>
                        </div>
                        <div
                          aria-hidden="true"
                          className="relative mt-2 h-2.5 rounded-full"
                          style={{ backgroundColor: colors.border.default }}
                        >
                          <div
                            className="absolute inset-y-0 left-[12%] right-[15%] rounded-full"
                            style={{ background: colors.gradients.blue }}
                          />
                          <span
                            className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white"
                            style={{ backgroundColor: colors.accent.blue, boxShadow: shadows.md }}
                          />
                        </div>
                        <p className="mt-2 text-xs" style={{ color: colors.text.muted }}>
                          Your estimated range for this project
                        </p>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                      className="absolute -bottom-5 -right-3 hidden items-center gap-2 rounded-2xl px-4 py-3 sm:flex"
                      style={{
                        backgroundColor: colors.background.card,
                        border: `1px solid ${colors.border.default}`,
                        boxShadow: shadows.lg,
                      }}
                    >
                      <MapPin size={16} style={{ color: colors.accent.blue }} aria-hidden="true" />
                      <span className="text-sm font-medium" style={{ color: colors.text.primary }}>
                        Based on Calgary pricing
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* Factors */}
              <section className="px-6 py-16 lg:py-24">
                <motion.div
                  className="mx-auto text-center"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={heroContainer}
                >
                  <motion.h2
                    variants={fadeUp}
                    className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl"
                    style={{ color: colors.text.primary, letterSpacing: "-0.02em" }}
                  >
                    Your Estimate Is Based on Your Project Details
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="mx-auto mt-4 max-w-2xl text-lg"
                    style={{ color: colors.text.secondary }}
                  >
                    The calculator considers the details that can affect the cost of a garage
                    floor coating project.
                  </motion.p>
                </motion.div>

                <motion.div
                  className="mx-auto mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6"
                  style={{ maxWidth: "1080px" }}
                  variants={cardContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {factors.map((factor) => (
                    <motion.div
                      key={factor.title}
                      variants={cardItem}
                      whileHover={{
                        y: -4,
                        boxShadow: shadows.lg,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                      className="h-full rounded-2xl border p-5 sm:p-6"
                      style={{
                        backgroundColor: colors.background.card,
                        borderColor: colors.border.default,
                        boxShadow: shadows.sm,
                      }}
                    >
                      <div
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12"
                        style={{ backgroundColor: `${colors.accent.blue}10` }}
                        aria-hidden="true"
                      >
                        {factor.icon}
                      </div>
                      <h3
                        className="mt-4 text-base font-semibold sm:text-lg"
                        style={{ color: colors.text.primary }}
                      >
                        {factor.title}
                      </h3>
                      <p className="mt-1 text-sm" style={{ color: colors.text.secondary }}>
                        {factor.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </section>

              {/* How it works */}
              <section className="px-6 py-16 lg:py-24">
                <motion.div
                  className="mx-auto text-center"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={heroContainer}
                >
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl font-bold md:text-4xl"
                    style={{ color: colors.text.primary, letterSpacing: "-0.02em" }}
                  >
                    How It Works
                  </motion.h2>
                </motion.div>

                <motion.ol
                  className="relative mx-auto mt-10 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-4 lg:gap-8"
                  style={{ maxWidth: "1080px" }}
                  variants={cardContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-6 top-3 bottom-3 w-px sm:left-7 lg:hidden"
                    style={{ backgroundColor: colors.border.default }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute left-0 right-0 top-7 hidden border-t lg:block"
                    style={{ borderColor: colors.border.default }}
                  />
                  {steps.map((step, index) => (
                    <motion.li
                      key={step.title}
                      variants={cardItem}
                      className="relative flex items-start gap-5 lg:flex-col lg:items-start lg:gap-4"
                    >
                      <span
                        className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold sm:h-14 sm:w-14 sm:text-xl"
                        style={{
                          background: colors.gradients.blue,
                          color: colors.text.inverse,
                          boxShadow: shadows.glowBlue,
                        }}
                      >
                        {index + 1}
                      </span>
                      <div className="lg:pt-1">
                        <h3 className="text-lg font-semibold" style={{ color: colors.text.primary }}>
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm" style={{ color: colors.text.secondary }}>
                          {step.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ol>
              </section>

              {/* How FloorQuote estimates costs */}
              <section className="px-6 py-16 lg:py-24">
                <motion.div
                  variants={heroContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  className="mx-auto max-w-3xl text-center"
                >
                  <motion.h2
                    variants={fadeUp}
                    className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl"
                    style={{ color: colors.text.primary, letterSpacing: "-0.02em" }}
                  >
                    How FloorQuote Estimates Garage Flooring Costs
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="mx-auto mt-5 max-w-2xl text-lg"
                    style={{ color: colors.text.secondary, lineHeight: "1.6" }}
                  >
                    FloorQuote estimates garage flooring costs using details from your specific
                    project instead of relying on one generic price per square foot. Your estimate
                    considers factors such as garage size, coating system, concrete condition,
                    repairs, finish options and project complexity.
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    className="mx-auto mt-4 max-w-2xl text-lg"
                    style={{ color: colors.text.secondary, lineHeight: "1.6" }}
                  >
                    Every garage is different, so the result is designed to provide an estimated
                    cost range based on the information you provide. Final contractor pricing can
                    vary depending on site conditions and the specific scope of work.
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    className="mx-auto mt-6 max-w-2xl text-lg"
                    style={{ color: colors.text.secondary, lineHeight: "1.6" }}
                  >
                    Want to learn more about what can affect professional garage flooring prices?
                    Explore our{" "}
                    <Link
                      href="/calgary-garage-flooring-cost"
                      className="font-semibold underline underline-offset-2"
                      style={{ color: colors.accent.blue }}
                    >
                      Calgary garage flooring cost guide
                    </Link>
                    .
                  </motion.p>
                </motion.div>
              </section>

              {/* FAQ */}
              <section className="px-6 py-16 lg:py-24">
                <motion.div
                  className="mx-auto text-center"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={heroContainer}
                >
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl font-bold md:text-4xl"
                    style={{ color: colors.text.primary, letterSpacing: "-0.02em" }}
                  >
                    Frequently Asked Questions
                  </motion.h2>
                </motion.div>

                <motion.div
                  className="calgary-faq mx-auto mt-10 lg:mt-12"
                  style={{ maxWidth: "820px" }}
                  variants={cardContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {faqs.map((faq) => (
                    <motion.div key={faq.question} variants={cardItem}>
                      <details>
                        <summary>
                          <span
                            className="mr-4"
                            style={{
                              flex: 1,
                              fontSize: "1.125rem",
                              fontWeight: 600,
                              color: colors.text.primary,
                            }}
                          >
                            {faq.question}
                          </span>
                          <ChevronDown
                            size={20}
                            className="faq-chevron"
                            style={{ color: colors.text.secondary }}
                          />
                        </summary>
                        <div className="calgary-faq-answer">
                          <p
                            style={{
                              fontSize: "1rem",
                              lineHeight: 1.6,
                              color: colors.text.secondary,
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    </motion.div>
                  ))}
                </motion.div>
              </section>

              {/* Final CTA */}
              <section className="px-6 pb-24 pt-8 lg:pb-32">
                <motion.div
                  className="mx-auto max-w-3xl rounded-3xl px-6 py-14 text-center sm:px-12"
                  style={{
                    backgroundColor: colors.background.card,
                    border: `1px solid ${colors.border.default}`,
                    boxShadow: shadows.xl,
                  }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <h2
                    className="text-3xl font-bold md:text-4xl"
                    style={{ color: colors.text.primary, letterSpacing: "-0.02em" }}
                  >
                    Ready to Estimate Your Garage Flooring Cost?
                  </h2>
                  <p
                    className="mx-auto mt-4 max-w-xl text-lg"
                    style={{ color: colors.text.secondary, lineHeight: "1.6" }}
                  >
                    Answer a few questions about your project and get an estimated cost range
                    based on your garage and flooring preferences.
                  </p>
                  <div className="mt-8">
                    <Link href="/calculator/start">
                      <Button
                        variant="gradient"
                        size="lg"
                        className="px-8"
                      >
                        Start My Free Estimate
                        <ArrowRight size={20} className="ml-2" />
                      </Button>
                    </Link>
                    <p className="mt-4 text-sm" style={{ color: colors.text.muted }}>
                      No phone call required to see your estimate.
                    </p>
                    <p className="mt-6 text-sm" style={{ color: colors.text.secondary }}>
                      Not sure which flooring system fits your project?{" "}
                      <Link
                        href="/epoxy-vs-polyaspartic-garage-floor-calgary"
                        className="font-semibold underline underline-offset-2"
                        style={{ color: colors.accent.blue }}
                      >
                        Compare epoxy and polyaspartic garage floors
                      </Link>
                      .
                    </p>
                  </div>
                </motion.div>
              </section>
            </main>

            <Footer />
          </motion.div>
    </MotionConfig>
  );
}