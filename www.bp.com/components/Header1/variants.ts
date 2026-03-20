import { cva, type VariantProps } from "class-variance-authority";

/**
 * Header1 Variants
 * Extracted from: https://www.bp.com
 * Usage count: 1x
 */
export const header1Variants = cva(
  // Base styles observed
  "nr-header nr-header__home",
  {
    variants: {
      variant: {
        default: "",
        // Add more variants based on observed patterns
      },
      size: {
        default: "",
        // Add size variants if detected
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type Header1Variants = VariantProps<typeof header1Variants>;
