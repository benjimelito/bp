import * as React from "react";
import { cn } from "@/lib/utils";
import { card1Variants, type Card1Variants } from "./variants";

/**
 * Card1
 * 
 * Extracted from source site.
 * Original structure:
 * <div data-component-name="cards" data-component-container="true" class="nr-cards-component nr-component aem-GridColumn aem-GridColumn--default--12" style="margin-bottom: 90.0013px;">
    
    
    
  
 * 
 * Observed on: https://www.bp.com, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html
 * Usage count: 3x
 */
export interface Card1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card1Variants {}

export const Card1 = React.forwardRef<HTMLDivElement, Card1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card1.displayName = "Card1";
