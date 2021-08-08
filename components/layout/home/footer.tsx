import { forwardRef, HTMLAttributes } from "react";

import clsx from "clsx";
import { Container } from "../../ui/container";

export type FooterProps = Omit<HTMLAttributes<HTMLElement>, "children">;

export const Footer = forwardRef<HTMLElement, FooterProps>(({ className, ...rest }, ref) => {
  return (
    <footer
      className={clsx("bg-gray-100 px-4 sm:px-6 lg:px-8 py-4", className)}
      ref={ref}
      {...rest}
    >
      <Container className="flex flex-col-reverse items-center space-y-4 space-y-reverse md:flex-row md:justify-between md:space-y-0">
        <div className="text-gray-700 text-center text-sm">
          <p>Copyright &copy; 2021 Silacak v3.0 | Kementerian Kesehatan Republik Indonesia.</p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between space-x-4 text-gray-700 text-center text-sm">
          <p>Silacak v3.0</p>
          <ul className="flex flex-row items-center space-x-4">
            <li>
              <a className="text-silacak-500 underline hover:text-silacak-600">Hubungi Kami</a>
            </li>
            <li>
              <a
                className="text-silacak-500 underline hover:text-silacak-600"
                href="https://storyset.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Ilustrasi Storyset
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
});

Footer.displayName = "Footer";
