/**
 * Card Component
 * 
 * Premium card component with soft shadows and elegant borders.
 * Used for content containers and option selections.
 */

import { motion } from "framer-motion";
import { cn } from "../../lib/utils/cn";
import { colors, borderRadius, shadows } from "../../lib/design-system";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = false, selected = false, onClick }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white rounded-2xl border transition-all duration-200",
        selected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200",
        hover && !onClick && "hover:shadow-lg",
        onClick && "cursor-pointer hover:shadow-lg hover:-translate-y-1",
        className
      )}
      style={{
        borderColor: selected ? colors.accent.blue : colors.border.default,
        backgroundColor: selected ? `${colors.accent.blue}08` : colors.background.card,
        borderRadius: borderRadius.xl,
        boxShadow: shadows.md,
      }}
      whileHover={onClick ? { y: -4, transition: { duration: 0.2 } } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
