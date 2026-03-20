import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card1 Variants
 * Extracted from: https://www.bp.com, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html
 * Usage count: 3x
 */
export const card1Variants = cva(
  // Base styles observed
  "nr-cards-component nr-component aem-GridColumn aem-GridColumn--default--12",
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

export type Card1Variants = VariantProps<typeof card1Variants>;
