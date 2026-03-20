import * as React from "react";
import { cn } from "@/lib/utils";
import { header1Variants, type Header1Variants } from "./variants";

/**
 * Header1
 * 
 * Extracted from source site.
 * Original structure:
 * <header class="nr-header nr-header__home">
            <div class="nr-header__inner-wrap nr-clearfix">
                    

                <div class="nr-header__container">

                    <ul
 * 
 * Observed on: https://www.bp.com
 * Usage count: 1x
 */
export interface Header1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header1Variants {}

export const Header1 = React.forwardRef<HTMLDivElement, Header1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header1.displayName = "Header1";
