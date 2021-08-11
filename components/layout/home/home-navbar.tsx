import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { homepageNavbarItems } from "~/lib/layout/home/homepage-navbar";

const desktopNavClasses = (isActive?: boolean) => {
  // Current: "border-silacak-500 text-gray-900"
  // Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
  return [
    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
    isActive
      ? "border-silacak-500 text-gray-900"
      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
  ];
};

const mobileNavClasses = (isActive?: boolean) => {
  // Current: "bg-silacak-50 border-silacak-500 text-silacak-700"
  // Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
  return [
    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
    isActive
      ? "bg-silacak-50 border-silacak-500 text-silacak-700"
      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
  ];
};

export function HomeNavbar() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    alt="Kementerian Kesehatan Republik Indonesia"
                    className="block w-auto"
                    height={52}
                    src="/images/kemkes-logo@2x.png"
                    width={115}
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {homepageNavbarItems.map(item => {
                    const isActive = item.exact
                      ? item.href === router.asPath
                      : router.asPath.startsWith(item.href);

                    if (item.external) {
                      return (
                        <a
                          key={item.name}
                          className={clsx(...desktopNavClasses(isActive))}
                          href={item.href}
                          rel="nofollow noopener noreferrer"
                          target="_blank"
                        >
                          {item.name}
                        </a>
                      );
                    }

                    return (
                      <Link key={item.name} href={item.href}>
                        <a className={clsx(...desktopNavClasses(isActive))}>{item.name}</a>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-silacak-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <MenuIcon aria-hidden="true" className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {homepageNavbarItems.map(item => {
                const isActive = item.exact
                  ? item.href === router.asPath
                  : router.asPath.startsWith(item.href);

                if (item.external) {
                  return (
                    <a
                      key={item.name}
                      className={clsx(...mobileNavClasses(isActive))}
                      href={item.href}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link key={item.name} href={item.href}>
                    <a className={clsx(...mobileNavClasses(isActive))}>{item.name}</a>
                  </Link>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
