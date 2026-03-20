import { cva, type VariantProps } from "class-variance-authority";

/**
 * Input1 Variants
 * Extracted from: https://www.bp.com, https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 4x
 */
export const input1Variants = cva(
  // Base styles observed
  "nr-navigation__input",
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

export type Input1Variants = VariantProps<typeof input1Variants>;
