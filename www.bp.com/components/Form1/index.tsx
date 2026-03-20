import * as React from "react";
import { cn } from "@/lib/utils";
import { form1Variants, type Form1Variants } from "./variants";

/**
 * Form1
 * 
 * Extracted from source site.
 * Original structure:
 * <form action="https://www.bp.com/en/global/corporate/search-results.html" method="GET" class="nr-header__search-outer-wrap" autocomplete="off">

                        <div class="nr-header__search">
 * 
 * Observed on: https://www.bp.com, https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 4x
 */
export interface Form1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Form1Variants {}

export const Form1 = React.forwardRef<HTMLDivElement, Form1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(form1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Form1.displayName = "Form1";
