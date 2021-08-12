import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface DashboardPageHeaderProps extends ComponentPropsWithoutRef<"div"> {
  pageTitle: string;
}

export const DashboardPageHeader = forwardRef<HTMLDivElement, DashboardPageHeaderProps>(
  ({ className, pageTitle, ...rest }, ref) => {
    return (
      <div
        className={clsx("max-w-7xl mx-auto px-4 sm:px-6 md:px-8", className)}
        ref={ref}
        {...rest}
      >
        <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
      </div>
    );
  }
);

DashboardPageHeader.displayName = "DashboardPageHeader";
