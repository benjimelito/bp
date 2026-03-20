import * as React from "react";
import { cn } from "@/lib/utils";
import { table1Variants, type Table1Variants } from "./variants";

/**
 * Table1
 * 
 * Extracted from source site.
 * Original structure:
 * <table width="100%" cellspacing="0" cellpadding="20" border="1">
<tbody><tr><th style="text-align: left; width: 719px;" valign="middle"><span style="font-size: 13.0px;letter-spacing: normal;">Fuels &a
 * 
 * Observed on: https://www.bp.com/en/global/bp-europa-se/about-bp-europa-se.html
 * Usage count: 1x
 */
export interface Table1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Table1Variants {}

export const Table1 = React.forwardRef<HTMLDivElement, Table1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(table1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Table1.displayName = "Table1";
