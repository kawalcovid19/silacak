import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Container } from "~/components/ui/container";

export type DashboardPageContentProps = ComponentPropsWithoutRef<"div">;

export const DashboardPageContent = forwardRef<HTMLDivElement, DashboardPageContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div className={clsx("px-4 sm:px-6 md:px-8 pt-4 pb-6", className)} ref={ref} {...rest}>
        <Container>{children}</Container>
      </div>
    );
  }
);

DashboardPageContent.displayName = "DashboardPageHeader";
