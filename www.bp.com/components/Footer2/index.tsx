import * as React from "react";
import { cn } from "@/lib/utils";
import { footer2Variants, type Footer2Variants } from "./variants";

/**
 * Footer2
 * 
 * Extracted from source site.
 * Original structure:
 * <footer class="nr-download-manager__btn-section">
            <button class="nr-download-manager__btn-download"> Download as zip <i class="nr-icon nr-icon-arrow-down"></i></button>
            <button
 * 
 * Observed on: https://www.bp.com, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 3x
 */
export interface Footer2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Footer2Variants {}

export const Footer2 = React.forwardRef<HTMLDivElement, Footer2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(footer2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Footer2.displayName = "Footer2";
