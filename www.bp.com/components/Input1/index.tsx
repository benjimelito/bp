import * as React from "react";
import { cn } from "@/lib/utils";
import { input1Variants, type Input1Variants } from "./variants";

/**
 * Input1
 * 
 * Extracted from source site.
 * Original structure:
 * <input id="nr-navigation-search" placeholder="Search" name="q" class="nr-navigation__input" type="text" aria-hidden="true" disabled="disabled">
 * 
 * Observed on: https://www.bp.com, https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 4x
 */
export interface Input1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input1Variants {}

export const Input1 = React.forwardRef<HTMLDivElement, Input1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input1.displayName = "Input1";
