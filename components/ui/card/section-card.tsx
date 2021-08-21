import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type SectionCardProps = ComponentPropsWithoutRef<"div">;

export const SectionCard = forwardRef<HTMLDivElement, SectionCardProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        className={clsx(
          "bg-white border border-gray-300 -mx-4 sm:-mx-6 md:mx-0 md:rounded-md p-4",
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

SectionCard.displayName = "SectionCard";
