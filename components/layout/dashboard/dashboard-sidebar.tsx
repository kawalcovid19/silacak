import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef } from "react";
import { useDashboardStore } from "~/lib/layout/dashboard/dashboard-store";
import { sidebarMenu } from "~/lib/layout/dashboard/sidebar-data";

export function DashboardSidebar() {
  const router = useRouter();
  const { sidebarOpen, setSidebarOpen } = useDashboardStore(state => state);
  const initialFocusItem = useRef(null);

  useEffect(() => {
    const handleBeforeHistoryChange = () => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    router.events.on("beforeHistoryChange", handleBeforeHistoryChange);

    return () => {
      router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
    };
  }, [router.events, sidebarOpen, setSidebarOpen]);

  return (
    <>
      <Transition.Root as={Fragment} show={sidebarOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          initialFocus={initialFocusItem}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4 text-white">
                <Image
                  alt="Kementerian Kesehatan Republik Indonesia"
                  className="h-8 w-auto"
                  height={32}
                  src="/images/kemenkes-app-icon@2x.png"
                  width={32}
                />
                <h1 className="ml-4 text-xl font-semibold">Silacak 3.0</h1>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {sidebarMenu.map(item => {
                    const isActive = item.exact
                      ? item.href === router.asPath
                      : router.asPath.startsWith(item.href);

                    return (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={clsx(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                          ref={isActive ? initialFocusItem : null}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={clsx(
                              isActive
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                          />
                          {item.name}
                        </a>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div aria-hidden="true" className="flex-shrink-0 w-14">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 text-white">
              <Image
                alt="Kementerian Kesehatan Republik Indonesia"
                height={32}
                src="/images/kemenkes-app-icon@2x.png"
                width={32}
              />
              <h1 className="ml-4 text-xl font-semibold">Silacak 3.0</h1>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
                {sidebarMenu.map(item => {
                  const isActive = item.exact
                    ? item.href === router.asPath
                    : router.asPath.startsWith(item.href);

                  return (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={clsx(
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={clsx(
                            isActive ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                        />
                        {item.name}
                      </a>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
