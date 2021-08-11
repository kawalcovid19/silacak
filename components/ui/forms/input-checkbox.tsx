import * as React from "react";

import clsx from "clsx";

type InputCheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputCheckbox = React.forwardRef<HTMLInputElement, InputCheckboxProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={clsx(
          "focus:ring-silacak-500 h-4 w-4 text-silacak-600 border-gray-300 rounded",
          className
        )}
        ref={ref}
        type="checkbox"
        {...rest}
      />
    );
  }
);

InputCheckbox.displayName = "InputCheckbox";
