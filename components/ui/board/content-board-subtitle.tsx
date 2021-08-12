import * as React from "react";
import clsx from "clsx";

export type ContentBoardSubtitleProps = React.ComponentPropsWithoutRef<"h2">;

/**
 * Subtitle used to label a form. This is to be used in conjunction with FormTitle.
 * @param props
 * @constructor
 */
export const ContentBoardSubtitle = React.forwardRef<HTMLHeadingElement, ContentBoardSubtitleProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <h2 className={clsx("text-center text-gray-700", className)} ref={ref} {...rest}>
        {children}
      </h2>
    );
  }
);

ContentBoardSubtitle.displayName = "ContentBoardSubtitle";
