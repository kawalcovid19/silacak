import { forwardRef, HTMLAttributes } from "react";

import clsx from "clsx";

export type DashboardRootProps = HTMLAttributes<HTMLDivElement>;

export const DashboardRoot = forwardRef<HTMLDivElement, DashboardRootProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        className={clsx("flex flex-col w-full min-h-screen bg-white", className)}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

DashboardRoot.displayName = "DashboardRoot";
