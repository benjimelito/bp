import * as React from "react";
import { cn } from "@/lib/utils";
import { button3Variants, type Button3Variants } from "./variants";

/**
 * Button3
 * 
 * Extracted from source site.
 * Original structure:
 * <button type="submit" class="nr-header__search-btn">
                                        <i class="nr-icon-search-2 nr-header__icon"></i>
                                        <span class="nr-vi
 * 
 * Observed on: https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 3x
 */
export interface Button3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button3Variants {}

export const Button3 = React.forwardRef<HTMLDivElement, Button3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button3.displayName = "Button3";
