import { cva, type VariantProps } from "class-variance-authority";

/**
 * Nav1 Variants
 * Extracted from: https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 3x
 */
export const nav1Variants = cva(
  // Base styles observed
  "nr-navigation__container nr-navigation__container--sublevel",
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

export type Nav1Variants = VariantProps<typeof nav1Variants>;
