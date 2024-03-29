import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Skills", href: "#", current: false },
  { name: "Experince", href: "#", current: false },
  { name: "Project", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-navColor opacity-70 mt-4  h-24 main-navbar-of-porto"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center  justify-center pt-4">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 
                 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 " aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div
                className="flex  items-center justify-center sm:items-stretch sm:justify-start "
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                }}
              >
                <div className="flex  flex-shrink-0  justify-center">
                  <img
                    className="h-12 w-auto justify-center opacity-100 hover:scale-150  duration-300 "
                    src={require("../../Assets/newKSLogo.png")}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block pannel-for-laptop-screen">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        style={{ textDecoration: "none" }}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          " text-black text-xl  text-black text-lg hover:opacity-100 hover:text-white rounded-md px-9 py-2 text-sm font-medium hover:scale-150  duration-300"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden pannel-for-mobile-screen">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  style={{ textDecoration: "none" }}
                  className={classNames(
                    item.current
                      ? " text-black bg-mobileBackColor"
                      : "text-lime-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-large text-black "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
