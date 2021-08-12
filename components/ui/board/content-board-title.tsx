import * as React from "react";
import clsx from "clsx";

export type ContentBoardTitleProps = React.ComponentPropsWithoutRef<"h1">;

/**
 * Title element used to label a form.
 * @param props
 * @constructor
 */
export const ContentBoardTitle = React.forwardRef<HTMLHeadingElement, ContentBoardTitleProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h1
        className={clsx(
          "form-title text-2xl uppercase text-center text-silacak-500 font-medium",
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </h1>
    );
  }
);

ContentBoardTitle.displayName = "ContentBoardTitle";
