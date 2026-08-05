/**
 * EstimateCard Component
 * 
 * Displays the estimate with confidence badge and key details.
 * Reinforces trust and accuracy perception.
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { CheckCircle, TrendingUp, AlertCircle } from "lucide-react";
import { colors, borderRadius } from "../../lib/design-system";
import type { EstimateConfidence } from "../../types/calculator";

interface EstimateCardProps {
  estimatedLow: number;
  estimatedHigh: number;
  confidence: EstimateConfidence;
}

const confidenceConfig = {
  high: {
    color: colors.status.success,
    label: "High Confidence",
    icon: <CheckCircle size={20} />,
    description: "Your inputs are clear and complete",
  },
  medium: {
    color: colors.status.warning,
    label: "Medium Confidence",
    icon: <TrendingUp size={20} />,
    description: "Some factors may affect final pricing",
  },
  low: {
    color: colors.status.error,
    label: "Low Confidence",
    icon: <AlertCircle size={20} />,
    description: "On-site inspection recommended for accuracy",
  },
};

export function EstimateCard({ estimatedLow, estimatedHigh, confidence }: EstimateCardProps) {
  const config = confidenceConfig[confidence];
  const range = estimatedHigh - estimatedLow;
  const midPoint = Math.round((estimatedLow + estimatedHigh) / 2);

  return (
    <Card className="p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {/* Confidence Badge */}
        <div className="flex items-center justify-between mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              backgroundColor: `${config.color}15`,
              color: config.color,
            }}
          >
            {config.icon}
            <span className="font-semibold">{config.label}</span>
          </div>
          <span
            className="text-sm"
            style={{ color: colors.text.secondary }}
          >
            Range: ${range.toLocaleString()}
          </span>
        </div>

        {/* Price Display */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 rounded-xl" style={{ backgroundColor: `${colors.background.primary}` }}>
            <div className="text-sm mb-1" style={{ color: colors.text.secondary }}>
              Low Estimate
            </div>
            <div className="text-2xl font-bold" style={{ color: colors.text.primary }}>
              ${estimatedLow.toLocaleString()}
            </div>
          </div>
          <div className="text-center p-4 rounded-xl" style={{ backgroundColor: `${colors.accent.blue}10` }}>
            <div className="text-sm mb-1" style={{ color: colors.accent.blue }}>
              Midpoint
            </div>
            <div className="text-2xl font-bold" style={{ color: colors.accent.blue }}>
              ${midPoint.toLocaleString()}
            </div>
          </div>
          <div className="text-center p-4 rounded-xl" style={{ backgroundColor: `${colors.background.primary}` }}>
            <div className="text-sm mb-1" style={{ color: colors.text.secondary }}>
              High Estimate
            </div>
            <div className="text-2xl font-bold" style={{ color: colors.text.primary }}>
              ${estimatedHigh.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Confidence Description */}
        <p className="text-sm" style={{ color: colors.text.secondary }}>
          {config.description}
        </p>
      </motion.div>
    </Card>
  );
}
