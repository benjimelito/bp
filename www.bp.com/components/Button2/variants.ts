import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button2 Variants
 * Extracted from: https://www.bp.com, https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 4x
 */
export const button2Variants = cva(
  // Base styles observed
  "nr-cookie-notification__cta-button nr-cookie-accept nr-btn-primary",
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

export type Button2Variants = VariantProps<typeof button2Variants>;
