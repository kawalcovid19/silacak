import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Container } from "~/components/ui/container";

export interface DashboardPageHeaderProps extends ComponentPropsWithoutRef<"div"> {
  pageTitle: string;
}

export const DashboardPageHeader = forwardRef<HTMLDivElement, DashboardPageHeaderProps>(
  ({ className, pageTitle, ...rest }, ref) => {
    return (
      <div
        className={clsx("px-4 sm:px-6 md:px-8 py-6 bg-white shadow-sm", className)}
        ref={ref}
        {...rest}
      >
        <Container>
          <h1 className="text-2xl font-semibold text-gray-900">{pageTitle}</h1>
        </Container>
      </div>
    );
  }
);

DashboardPageHeader.displayName = "DashboardPageHeader";
