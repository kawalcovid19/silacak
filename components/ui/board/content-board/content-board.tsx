import * as React from "react";
import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
  className?: string;
};

/**
 * Display a white content board that can contains any content
 * Note: By default, the board is not padded.
 * @param props
 * @constructor
 */
export const ContentBoard = (props: Props) => {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "content-board mx-auto max-w-2xl w-full bg-white border rounded-md border-gray-300",
        className
      )}
    >
      {children}
    </div>
  );
};
