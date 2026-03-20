import * as React from "react";
import { cn } from "@/lib/utils";
import { input2Variants, type Input2Variants } from "./variants";

/**
 * Input2
 * 
 * Extracted from source site.
 * Original structure:
 * <input class="nr-cookie-preferences__input" type="checkbox" data-cookie-type="performance">
 * 
 * Observed on: https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 2x
 */
export interface Input2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input2Variants {}

export const Input2 = React.forwardRef<HTMLDivElement, Input2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input2.displayName = "Input2";
