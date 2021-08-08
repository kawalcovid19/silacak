import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type HomePageContentProps = ComponentPropsWithoutRef<"main">;

export const HomePageContent = forwardRef<HTMLElement, HomePageContentProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <main
        className={clsx(
          "flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8",
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </main>
    );
  }
);

HomePageContent.displayName = "HomePageContent";
