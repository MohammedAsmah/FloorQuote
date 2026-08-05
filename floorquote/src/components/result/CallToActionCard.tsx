/**
 * CallToActionCard Component
 * 
 * Primary conversion section with clear CTAs.
 * Drives users to take the next step.
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ArrowRight, RotateCcw } from "lucide-react";
import { colors } from "../../lib/design-system";

interface CallToActionCardProps {
  onGetQuotes: () => void;
  onRestart: () => void;
}

export function CallToActionCard({ onGetQuotes, onRestart }: CallToActionCardProps) {
  return (
    <Card className="p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        {/* Primary CTA */}
        <div className="text-center mb-6">
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: colors.text.primary }}
          >
            Ready for Exact Quotes?
          </h3>
          <p
            className="text-base mb-6"
            style={{ color: colors.text.secondary }}
          >
            Get matched with top-rated Calgary contractors for your project
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={onGetQuotes}
            className="w-full md:w-auto px-8"
          >
            Get Quotes From Calgary Contractors
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>

        {/* Divider */}
        <div
          className="my-6 h-px"
          style={{ backgroundColor: colors.border.default }}
        />

        {/* Secondary CTA */}
        <div className="text-center">
          <Button
            variant="secondary"
            onClick={onRestart}
            className="w-full md:w-auto"
          >
            <RotateCcw size={18} className="mr-2" />
            Start New Estimate
          </Button>
        </div>

        {/* Disclaimer */}
        <div
          className="mt-6 p-4 rounded-lg text-left"
          style={{ backgroundColor: `${colors.background.primary}` }}
        >
          <p className="text-xs leading-relaxed" style={{ color: colors.text.secondary }}>
            <strong style={{ color: colors.text.primary }}>Disclaimer:</strong> This estimate is based on Calgary market pricing and the information you provided. An on-site inspection is required for an exact quote. Final pricing may vary based on actual site conditions, material availability, and contractor pricing.
          </p>
        </div>
      </motion.div>
    </Card>
  );
}
