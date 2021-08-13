import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type DashboardMainProps = ComponentPropsWithoutRef<"main">;

export const DashboardMain = forwardRef<HTMLElement, DashboardMainProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <main
        className={clsx("flex-1 relative overflow-y-auto focus:outline-none", className)}
        ref={ref}
        {...rest}
      >
        <div>{children}</div>
      </main>
    );
  }
);

DashboardMain.displayName = "DashboardContent";
