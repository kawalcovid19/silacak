import { Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuAlt2Icon, QuestionMarkCircleIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { Fragment } from "react";
import { useDashboardStore } from "~/lib/layout/dashboard/dashboard-store";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export function DashboardNav() {
  const setSidebarOpen = useDashboardStore(state => state.setSidebarOpen);

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-silacak-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon aria-hidden="true" className="h-6 w-6" />
      </button>
      <div className="flex-1 px-4 flex justify-end">
        <div className="ml-4 flex items-center space-x-6 md:ml-6">
          <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-silacak-500">
            <span className="sr-only">Hubungi Helpdesk</span>
            <QuestionMarkCircleIcon aria-hidden="true" className="h-6 w-6" />
          </button>

          <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-silacak-500">
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-silacak-500">
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userNavigation.map(item => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <a
                        className={clsx(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700"
                        )}
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
