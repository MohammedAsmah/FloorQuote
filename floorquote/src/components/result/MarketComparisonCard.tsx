/**
 * MarketComparisonCard Component
 * 
 * Displays Calgary market information for comparison.
 * Helps users understand their estimate in context.
 */

"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { TrendingUp, Calendar, Shield, DollarSign } from "lucide-react";
import { colors } from "../../lib/design-system";

interface MarketComparisonCardProps {
  userEstimate: number;
}

export function MarketComparisonCard({ userEstimate }: MarketComparisonCardProps) {
  // Calgary market data (typical ranges)
  const marketData = {
    typicalRange: "$2,500 - $8,000",
    averageCost: "$4,500",
    typicalDuration: "1-3 days",
    warranty: "5-10 years",
  };

  const isBelowAverage = userEstimate < 4500;
  const isAboveAverage = userEstimate > 4500;

  return (
    <Card className="p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3
          className="text-xl font-bold mb-6"
          style={{ color: colors.text.primary }}
        >
          Calgary Market Information
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg" style={{ backgroundColor: `${colors.background.primary}` }}>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={18} style={{ color: colors.accent.blue }} />
              <span className="text-xs" style={{ color: colors.text.secondary }}>
                Typical Range
              </span>
            </div>
            <div className="text-lg font-bold" style={{ color: colors.text.primary }}>
              {marketData.typicalRange}
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ backgroundColor: `${colors.background.primary}` }}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} style={{ color: colors.accent.blue }} />
              <span className="text-xs" style={{ color: colors.text.secondary }}>
                Average Cost
              </span>
            </div>
            <div className="text-lg font-bold" style={{ color: colors.text.primary }}>
              {marketData.averageCost}
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ backgroundColor: `${colors.background.primary}` }}>
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={18} style={{ color: colors.accent.blue }} />
              <span className="text-xs" style={{ color: colors.text.secondary }}>
                Typical Duration
              </span>
            </div>
            <div className="text-lg font-bold" style={{ color: colors.text.primary }}>
              {marketData.typicalDuration}
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ backgroundColor: `${colors.background.primary}` }}>
            <div className="flex items-center gap-2 mb-2">
              <Shield size={18} style={{ color: colors.accent.blue }} />
              <span className="text-xs" style={{ color: colors.text.secondary }}>
                Warranty
              </span>
            </div>
            <div className="text-lg font-bold" style={{ color: colors.text.primary }}>
              {marketData.warranty}
            </div>
          </div>
        </div>

        {/* Comparison Note */}
        <div
          className="p-4 rounded-lg"
          style={{
            backgroundColor: isBelowAverage ? `${colors.status.success}10` : 
                           isAboveAverage ? `${colors.status.warning}10` : 
                           `${colors.accent.blue}10`,
          }}
        >
          <p className="text-sm" style={{ color: colors.text.secondary }}>
            {isBelowAverage 
              ? "Your estimate is below the Calgary average, which may indicate favorable conditions or efficient material choices."
              : isAboveAverage
              ? "Your estimate is above the Calgary average, likely due to premium materials, extensive repairs, or special features."
              : "Your estimate is in line with Calgary market averages for similar projects."
            }
          </p>
        </div>
      </motion.div>
    </Card>
  );
}
