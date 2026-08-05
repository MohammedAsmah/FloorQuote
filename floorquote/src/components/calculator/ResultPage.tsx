/**
 * ResultPage Component
 * 
 * The most important page in the product.
 * Displays the estimated cost, recommendation, confidence level,
 * cost breakdown, and a large CTA for getting exact quotes.
 */

"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { CheckCircle, TrendingUp, Clock, Shield, Info } from "lucide-react";
import { colors, spacing, typography, borderRadius, shadows } from "../../lib/design-system";
import type { CalculatorResult } from "../../types/calculator";

interface ResultPageProps {
  result: CalculatorResult;
  onRestart: () => void;
  onGetQuotes: () => void;
}

export function ResultPage({ result, onRestart, onGetQuotes }: ResultPageProps) {
  const confidenceConfig = {
    high: {
      color: colors.status.success,
      label: "High Confidence",
      icon: <CheckCircle size={20} />,
    },
    medium: {
      color: colors.status.warning,
      label: "Medium Confidence",
      icon: <TrendingUp size={20} />,
    },
    low: {
      color: colors.status.error,
      label: "Low Confidence",
      icon: <Info size={20} />,
    },
  };

  const config = confidenceConfig[result.confidence];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-6"
      style={{ backgroundColor: colors.background.primary }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Price Card */}
          <Card className="p-8 mb-6">
            <div className="text-center mb-8">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: colors.text.secondary }}
              >
                Your Estimated Cost
              </h2>
              
              <div className="mb-4">
                <motion.div
                  className="text-6xl font-bold"
                  style={{
                    color: colors.accent.teal,
                    fontSize: typography.fontSize["5xl"],
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  ${result.estimatedLow} - ${result.estimatedHigh}
                </motion.div>
              </div>

              <p
                className="text-lg"
                style={{ color: colors.text.secondary }}
              >
                Estimated range for your garage floor coating
              </p>
            </div>

            {/* Confidence Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: `${config.color}15`,
                color: config.color,
              }}
            >
              {config.icon}
              <span className="font-semibold">{config.label}</span>
            </div>

            {/* Recommendation */}
            <div
              className="p-6 rounded-xl mb-6"
              style={{
                backgroundColor: `${colors.accent.blue}08`,
                border: `1px solid ${colors.accent.blue}20`,
              }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: colors.text.primary }}
              >
                Recommended System
              </h3>
              <p style={{ color: colors.text.secondary }}>
                {result.recommendedSystem}
              </p>
            </div>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="lg"
              onClick={onGetQuotes}
              className="w-full mb-4"
            >
              Get Exact Quotes from Local Contractors
            </Button>

            <Button
              variant="secondary"
              onClick={onRestart}
              className="w-full"
            >
              Start Over
            </Button>
          </Card>

          {/* Cost Breakdown */}
          <Card className="p-6 mb-6">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: colors.text.primary }}
            >
              What Influences Your Estimate
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield size={20} style={{ color: colors.accent.blue }} />
                <div>
                  <h4 className="font-semibold" style={{ color: colors.text.primary }}>
                    Coating Type
                  </h4>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>
                    Different materials have different base prices per square foot
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} style={{ color: colors.accent.blue }} />
                <div>
                  <h4 className="font-semibold" style={{ color: colors.text.primary }}>
                    Floor Condition
                  </h4>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>
                    Poor condition requires more preparation work
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp size={20} style={{ color: colors.accent.blue }} />
                <div>
                  <h4 className="font-semibold" style={{ color: colors.text.primary }}>
                    Crack Level
                  </h4>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>
                    More cracks mean more repair work needed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Info size={20} style={{ color: colors.accent.blue }} />
                <div>
                  <h4 className="font-semibold" style={{ color: colors.text.primary }}>
                    Special Features
                  </h4>
                  <p className="text-sm" style={{ color: colors.text.secondary }}>
                    Stem walls, steps, and decorative finishes add to the cost
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Info */}
          <Card className="p-6">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: colors.text.primary }}
            >
              Why This Estimate?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-1" style={{ color: colors.text.primary }}>
                  Expected Lifespan
                </h4>
                <p className="text-sm" style={{ color: colors.text.secondary }}>
                  10-15 years with proper maintenance
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1" style={{ color: colors.text.primary }}>
                  Installation Time
                </h4>
                <p className="text-sm" style={{ color: colors.text.secondary }}>
                  1-3 days depending on conditions
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1" style={{ color: colors.text.primary }}>
                  Warranty
                </h4>
                <p className="text-sm" style={{ color: colors.text.secondary }}>
                  Typically 5-10 years from contractors
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1" style={{ color: colors.text.primary }}>
                  Maintenance
                </h4>
                <p className="text-sm" style={{ color: colors.text.secondary }}>
                  Simple cleaning, no resealing needed
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
