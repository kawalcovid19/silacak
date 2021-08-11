import * as React from "react";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children?: ReactNode;
  className?: string;
}

/**
 * Title element used to label a form.
 * @param props
 * @constructor
 */
export const FormTitle = (props: Props) => {
  const { children, className } = props;
  return (
    <h1
      className={clsx(
        "form-title text-2xl uppercase text-center text-silacak-500 font-medium",
        className
      )}
    >
      {children}
    </h1>
  );
};
