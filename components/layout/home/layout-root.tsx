import { forwardRef, HTMLAttributes } from "react";

import clsx from "clsx";
import { Footer } from "./footer";
import { HomeNavbar } from "./home-navbar";

export type LayoutRootProps = HTMLAttributes<HTMLDivElement>;

export const LayoutRoot = forwardRef<HTMLDivElement, LayoutRootProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        className={clsx("flex flex-col w-full min-h-screen bg-white", className)}
        ref={ref}
        {...rest}
      >
        <HomeNavbar />
        {children}
        <Footer />
      </div>
    );
  }
);

LayoutRoot.displayName = "LayoutRoot";
