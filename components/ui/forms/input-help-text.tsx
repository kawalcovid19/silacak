import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type InputHelpTextProps = ComponentPropsWithoutRef<"p">;

export const InputHelpText = forwardRef<HTMLParagraphElement, InputHelpTextProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <p className={clsx("text-sm text-gray-500", className)} ref={ref} {...rest}>
        {children}
      </p>
    );
  }
);

InputHelpText.displayName = "InputHelpText";
