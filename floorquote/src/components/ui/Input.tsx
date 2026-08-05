/**
 * Input Component
 * 
 * Premium input component with focus states and validation styling.
 * Supports text, number, and email input types.
 */

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils/cn";
import { colors, borderRadius, shadows } from "../../lib/design-system";

interface InputProps extends Omit<HTMLMotionProps<"input">, "whileFocus"> {
  error?: boolean;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, label, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            style={{ color: colors.text.primary }}
          >
            {label}
          </label>
        )}
        <motion.input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none",
            error ? "border-red-500" : "border-gray-200 focus:border-blue-500",
            className
          )}
          style={{
            borderColor: error ? colors.status.error : colors.border.default,
            borderRadius: borderRadius.lg,
            fontSize: "1rem",
          }}
          whileFocus={{
            boxShadow: error ? "0 0 0 3px rgb(220 38 38 / 0.1)" : shadows.glow,
          }}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
