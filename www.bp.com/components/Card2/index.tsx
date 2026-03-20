import * as React from "react";
import { cn } from "@/lib/utils";
import { card2Variants, type Card2Variants } from "./variants";

/**
 * Card2
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="nr-cards__media nr-lazy-size__wrapper">
                <img data-src="/content/dam/bp/business-sites/en/global/corporate/images-jpg-png/news-and-insights/bp-magazine/tech%20powering%20per
 * 
 * Observed on: https://www.bp.com
 * Usage count: 1x
 */
export interface Card2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card2Variants {}

export const Card2 = React.forwardRef<HTMLDivElement, Card2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card2.displayName = "Card2";
