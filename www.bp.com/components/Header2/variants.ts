import { cva, type VariantProps } from "class-variance-authority";

/**
 * Header2 Variants
 * Extracted from: https://www.bp.com, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 3x
 */
export const header2Variants = cva(
  // Base styles observed
  "nr-download-manager__file-count",
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

export type Header2Variants = VariantProps<typeof header2Variants>;
