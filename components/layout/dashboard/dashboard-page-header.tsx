import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Container } from "~/components/ui/container";

export interface DashboardPageHeaderProps extends ComponentPropsWithoutRef<"div"> {
  pageTitle?: string;
  variant?: "default" | "alternate";
}

export const DashboardPageHeader = forwardRef<HTMLDivElement, DashboardPageHeaderProps>(
  ({ className, pageTitle, children, variant = "default", ...rest }, ref) => {
    return (
      <div
        className={clsx(
          "px-4 sm:px-6 md:px-8 pt-6",
          variant === "default" && "bg-white shadow-sm pb-6",
          className
        )}
        ref={ref}
        {...rest}
      >
        <Container>
          {pageTitle && <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>}
          {children}
        </Container>
      </div>
    );
  }
);

DashboardPageHeader.displayName = "DashboardPageHeader";
