import { cva, type VariantProps } from "class-variance-authority";

/**
 * Table1 Variants
 * Extracted from: https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html
 * Usage count: 1x
 */
export const table1Variants = cva(
  // Base styles observed
  "",
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

export type Table1Variants = VariantProps<typeof table1Variants>;
