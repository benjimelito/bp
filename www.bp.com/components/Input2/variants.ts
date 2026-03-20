import { cva, type VariantProps } from "class-variance-authority";

/**
 * Input2 Variants
 * Extracted from: https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 2x
 */
export const input2Variants = cva(
  // Base styles observed
  "nr-cookie-preferences__input",
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

export type Input2Variants = VariantProps<typeof input2Variants>;
