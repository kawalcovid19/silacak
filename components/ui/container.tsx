import { forwardRef, HTMLAttributes } from "react";

import clsx from "clsx";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={clsx("w-full max-w-7xl mx-auto", className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
