/**
 * OptionCard Component
 * 
 * Premium selectable card component for radio-like selections.
 * Features animated check icon, hover effects, and selected states.
 */

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils/cn";
import { colors, borderRadius, shadows } from "../../lib/design-system";

interface OptionCardProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export function OptionCard({ children, selected = false, onClick, icon, className }: OptionCardProps) {
  return (
    <motion.div
      className={cn(
        "relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200",
        selected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg",
        className
      )}
      style={{
        borderColor: selected ? colors.accent.blue : colors.border.default,
        backgroundColor: selected ? `${colors.accent.blue}08` : colors.background.card,
        borderRadius: borderRadius.xl,
      }}
      onClick={onClick}
      whileHover={!selected ? { y: -2, transition: { duration: 0.2 } } : undefined}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div
            className="flex-shrink-0 p-3 rounded-xl"
            style={{
              backgroundColor: selected ? `${colors.accent.blue}15` : `${colors.text.primary}05`,
            }}
          >
            {icon}
          </div>
        )}
        <div className="flex-1">{children}</div>
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.accent.blue }}
              >
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
