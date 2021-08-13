import * as React from "react";
import clsx from "clsx";

export type ContentBoardProps = React.ComponentPropsWithoutRef<"div">;

/**
 * Display a white content board that can contains any content
 * Note: By default, the board is not padded.
 * @param props
 * @constructor
 */
export const ContentBoard = React.forwardRef<HTMLDivElement, ContentBoardProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        className={clsx(
          "content-board mx-auto max-w-2xl w-full bg-white border rounded-md border-gray-300",
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

ContentBoard.displayName = "ContentBoard";
