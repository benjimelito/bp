import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card3 Variants
 * Extracted from: https://www.bp.com, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html
 * Usage count: 2x
 */
export const card3Variants = cva(
  // Base styles observed
  "nr-cards__content",
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

export type Card3Variants = VariantProps<typeof card3Variants>;
