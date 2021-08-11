import * as React from "react";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children?: ReactNode;
  className?: string;
}

/**
 * Subtitle used to label a form. This is to be used in conjunction with FormTitle.
 * @param props
 * @constructor
 */
export const FormSubtitle = (props: Props) => {
  const { children, className } = props;
  return <h2 className={clsx("text-center my-3 text-gray-700", className)}>{children}</h2>;
};
