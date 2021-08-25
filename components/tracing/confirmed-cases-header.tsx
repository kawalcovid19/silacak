import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Container } from "~/components/ui/container";

export type ConfirmedCasesHeaderProps = ComponentPropsWithoutRef<"div">;

export const ConfirmedCasesHeader = forwardRef<HTMLDivElement, ConfirmedCasesHeaderProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        className={clsx("px-4 sm:px-6 md:px-8 py-6 bg-white shadow-sm", className)}
        ref={ref}
        {...rest}
      >
        <Container>{children}</Container>
      </div>
    );
  }
);

ConfirmedCasesHeader.displayName = "ConfirmedCaseHeader";
