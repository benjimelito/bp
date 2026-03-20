import { cva, type VariantProps } from "class-variance-authority";

/**
 * Footer1 Variants
 * Extracted from: https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html
 * Usage count: 1x
 */
export const footer1Variants = cva(
  // Base styles observed
  "nr-footer nr-row disclaimer-is-hidden",
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

export type Footer1Variants = VariantProps<typeof footer1Variants>;
