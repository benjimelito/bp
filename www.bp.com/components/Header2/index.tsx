import * as React from "react";
import { cn } from "@/lib/utils";
import { header2Variants, type Header2Variants } from "./variants";

/**
 * Header2
 * 
 * Extracted from source site.
 * Original structure:
 * <header class="nr-download-manager__file-count" tabindex="0"> 
          My downloads
          <div class="nr-download-manager__count-wrapper">
            <span class="nr-download-manager__counter">
 * 
 * Observed on: https://www.bp.com, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 3x
 */
export interface Header2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header2Variants {}

export const Header2 = React.forwardRef<HTMLDivElement, Header2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header2.displayName = "Header2";
