import * as React from "react";
import { cn } from "@/lib/utils";
import { card3Variants, type Card3Variants } from "./variants";

/**
 * Card3
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="nr-cards__content">
                
                    <h3 class="nr-cards__head">
                        
                        
                            Five ways technology is h
 * 
 * Observed on: https://www.bp.com, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html
 * Usage count: 2x
 */
export interface Card3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card3Variants {}

export const Card3 = React.forwardRef<HTMLDivElement, Card3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card3.displayName = "Card3";
