/**
 * ProgressBar Component
 * 
 * Sticky progress bar showing current step in the calculator.
 * Features smooth animations and step counter.
 */

import { motion } from "framer-motion";
import { colors, borderRadius } from "../../lib/design-system";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-sm font-medium"
            style={{ color: colors.text.secondary }}
          >
            Question {current} of {total}
          </span>
          <span
            className="text-sm font-semibold"
            style={{ color: colors.accent.blue }}
          >
            {Math.round(progress)}%
          </span>
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: colors.progress.inactive, borderRadius: borderRadius.lg }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              backgroundColor: colors.progress.active,
              borderRadius: borderRadius.lg,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
