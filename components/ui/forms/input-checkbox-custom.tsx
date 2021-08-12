import * as React from "react";
import clsx from "clsx";

type InputCheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputCheckboxCustom = React.forwardRef<HTMLInputElement, InputCheckboxProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <label>
        <input className={clsx("peer sr-only")} type="radio" {...rest} ref={ref} />
        <div
          className={clsx(
            "text-center border text-silacak-500 p-3 rounded inline-block peer-checked:bg-silacak-500 peer-checked:text-white ",
            className
          )}
        >
          {children}
        </div>
      </label>
    );
  }
);

InputCheckboxCustom.displayName = "InputCheckboxCustom";
