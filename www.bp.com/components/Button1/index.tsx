import * as React from "react";
import { cn } from "@/lib/utils";
import { button1Variants, type Button1Variants } from "./variants";

/**
 * Button1
 * 
 * Extracted from source site.
 * Original structure:
 * <button id="MainContent" class="nr-visually-hidden">Main Content</button>
 * 
 * Observed on: https://www.bp.com
 * Usage count: 1x
 */
export interface Button1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button1Variants {}

export const Button1 = React.forwardRef<HTMLDivElement, Button1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button1.displayName = "Button1";
