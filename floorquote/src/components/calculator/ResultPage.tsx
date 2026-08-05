/**
 * ResultPage Component
 * 
 * Comprehensive results page with all conversion-focused components.
 * Integrates header, estimate, recommendation, breakdown, factors, market data, and CTAs.
 */

"use client";

import { motion } from "framer-motion";
import { ResultHeader } from "../result/ResultHeader";
import { EstimateCard } from "../result/EstimateCard";
import { RecommendationCard } from "../result/RecommendationCard";
import { BreakdownCard } from "../result/BreakdownCard";
import { PriceFactorsCard } from "../result/PriceFactorsCard";
import { MarketComparisonCard } from "../result/MarketComparisonCard";
import { CallToActionCard } from "../result/CallToActionCard";
import { colors } from "../../lib/design-system";
import type { CalculatorResult, CalculatorInput } from "../../types/calculator";

interface ResultPageProps {
  result: CalculatorResult;
  input: CalculatorInput;
  onRestart: () => void;
  onGetQuotes: () => void;
}

export function ResultPage({ result, input, onRestart, onGetQuotes }: ResultPageProps) {
  const midPoint = Math.round((result.estimatedLow + result.estimatedHigh) / 2);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-6"
      style={{ backgroundColor: colors.background.primary }}
    >
      <div className="max-w-4xl mx-auto">
        <ResultHeader
          estimatedLow={result.estimatedLow}
          estimatedHigh={result.estimatedHigh}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <EstimateCard
            estimatedLow={result.estimatedLow}
            estimatedHigh={result.estimatedHigh}
            confidence={result.confidence}
          />
          <RecommendationCard
            recommendedSystem={result.recommendedSystem}
            coatingType={input.coatingType}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <BreakdownCard total={midPoint} />
          <PriceFactorsCard input={input} />
        </div>

        <MarketComparisonCard userEstimate={midPoint} />

        <div className="mt-6">
          <CallToActionCard
            onGetQuotes={onGetQuotes}
            onRestart={onRestart}
          />
        </div>
      </div>
    </div>
  );
}
