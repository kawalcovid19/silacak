import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface SectionCardProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  label: string;
  value: string;
}

export const CaseInformationItem = forwardRef<HTMLDivElement, SectionCardProps>(
  ({ className, label, value, ...rest }, ref) => {
    return (
      <div className={clsx("flex flex-col", className)} ref={ref} {...rest}>
        <span className="text-sm text-gray-600">{label}</span>
        <p className="font-semibold text-gray-900">{value}</p>
      </div>
    );
  }
);

CaseInformationItem.displayName = "CaseInformationItem";
