import * as React from "react";
import { cn } from "@/lib/utils";
import { button2Variants, type Button2Variants } from "./variants";

/**
 * Button2
 * 
 * Extracted from source site.
 * Original structure:
 * <button class="nr-cookie-notification__cta-button nr-cookie-accept nr-btn-primary">Allow all</button>
 * 
 * Observed on: https://www.bp.com, https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 4x
 */
export interface Button2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button2Variants {}

export const Button2 = React.forwardRef<HTMLDivElement, Button2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button2.displayName = "Button2";
