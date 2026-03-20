import * as React from "react";
import { cn } from "@/lib/utils";
import { footer1Variants, type Footer1Variants } from "./variants";

/**
 * Footer1
 * 
 * Extracted from source site.
 * Original structure:
 * <footer class="nr-footer nr-row disclaimer-is-hidden" role="contentinfo">
            <div class="nr-footer__wrapper">
                <div class="nr-footer__content">
                    <div class="
 * 
 * Observed on: https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html
 * Usage count: 1x
 */
export interface Footer1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Footer1Variants {}

export const Footer1 = React.forwardRef<HTMLDivElement, Footer1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(footer1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Footer1.displayName = "Footer1";
