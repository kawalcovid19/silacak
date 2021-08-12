import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type DashboardPageContentProps = ComponentPropsWithoutRef<"div">;

export const DashboardPageContent = forwardRef<HTMLDivElement, DashboardPageContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        className={clsx("max-w-7xl mx-auto px-4 sm:px-6 md:px-8", className)}
        ref={ref}
        {...rest}
      >
        <div className="py-4">{children}</div>
      </div>
    );
  }
);

DashboardPageContent.displayName = "DashboardPageHeader";
