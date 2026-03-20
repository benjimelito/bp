import * as React from "react";
import { cn } from "@/lib/utils";
import { form2Variants, type Form2Variants } from "./variants";

/**
 * Form2
 * 
 * Extracted from source site.
 * Original structure:
 * <form action="https://www.bp.com/en/global/corporate/search-results.html" method="GET" class="nr-navigation__search-outer-wrap">
                    <label for="nr-navigation-search" class="nr-navigat
 * 
 * Observed on: https://www.bp.com, https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html, https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-to-join-adnocs-ruwais-lng-development.html, https://www.bp.com/en/global/corporate/cookie-preferences.html
 * Usage count: 4x
 */
export interface Form2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Form2Variants {}

export const Form2 = React.forwardRef<HTMLDivElement, Form2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(form2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Form2.displayName = "Form2";
