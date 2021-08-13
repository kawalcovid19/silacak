import * as React from "react";

import clsx from "clsx";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isGroupItem?: boolean;
  hasTrailingIcon?: boolean;
}

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, type = "text", isGroupItem, hasTrailingIcon, ...rest }, ref) => {
    return (
      <input
        className={clsx(
          isGroupItem ? "first:rounded-l-md last:rounded-r-md" : "shadow-sm rounded-md",
          hasTrailingIcon && "pr-10",
          "focus:ring-silacak-500 focus:border-silacak-500 block w-full text-sm border-gray-300",
          className
        )}
        ref={ref}
        type={type}
        {...rest}
      />
    );
  }
);

InputText.displayName = "InputText";
