import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface SectionCardHeaderProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  title: string;
}

export const SectionCardHeader = forwardRef<HTMLDivElement, SectionCardHeaderProps>(
  ({ className, title, ...rest }, ref) => {
    return (
      <div className={clsx("relative", className)} ref={ref} {...rest}>
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border border-gray-300" />
        </div>
        <div className="relative flex flex-row items-center justify-start">
          <span className="pr-4 bg-white text-md font-medium text-gray-700 uppercase">{title}</span>
        </div>
      </div>
    );
  }
);

SectionCardHeader.displayName = "SectionCardHeader";
