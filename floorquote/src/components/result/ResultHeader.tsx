/**
 * ResultHeader Component
 * 
 * Top section of the results page with success message and animated estimate.
 * Creates immediate visual impact with large typography and smooth animations.
 */

"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { colors, typography } from "../../lib/design-system";
import { AnimatedNumber } from "./AnimatedNumber";

interface ResultHeaderProps {
  estimatedLow: number;
  estimatedHigh: number;
}

export function ResultHeader({ estimatedLow, estimatedHigh }: ResultHeaderProps) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Success Icon */}
      <motion.div
        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
        style={{ backgroundColor: `${colors.status.success}15` }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <CheckCircle size={32} style={{ color: colors.status.success }} />
      </motion.div>

      {/* Heading */}
      <h1
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{ color: colors.text.primary, fontSize: typography.fontSize["4xl"] }}
      >
        Your Garage Floor Estimate
      </h1>

      {/* Animated Price Range */}
      <div className="mb-4">
        <motion.div
          className="text-5xl md:text-7xl font-bold"
          style={{
            color: colors.accent.teal,
            fontSize: typography.fontSize["5xl"],
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <AnimatedNumber value={estimatedLow} prefix="$" suffix=" CAD" /> –{" "}
          <AnimatedNumber value={estimatedHigh} prefix="$" suffix=" CAD" />
        </motion.div>
      </div>

      {/* Subtitle */}
      <p
        className="text-lg"
        style={{ color: colors.text.secondary }}
      >
        Estimated range for your garage floor coating project
      </p>
    </motion.div>
  );
}
