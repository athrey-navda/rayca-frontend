"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { BiPlus, BiSearch } from "react-icons/bi";
import { MdOutlineVerified } from "react-icons/md";
import Settings from "./UI/Settings";
import ThemeSwitch from "./ThemeSwitcher";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function SettingHome() {
  const { resolvedTheme } = useTheme();
  const [currentNav, setCurrentNav] = useState("Security");

  const navigation = [
    { name: "General", href: "#", current: currentNav === "General" },
    { name: "Security", href: "#", current: currentNav === "Security" },
    { name: "Billing", href: "#", current: currentNav === "Billing" },
    { name: "Notification", href: "#", current: currentNav === "Notification" },
    { name: "Apps", href: "#", current: currentNav === "Apps" },
    { name: "Branding", href: "#", current: currentNav === "Branding" },
    {
      name: "Refer a friend",
      href: "#",
      current: currentNav === "Refer a friend",
    },
    { name: "Sharing", href: "#", current: currentNav === "Sharing" },
  ];

  const handleNavClick = (name) => {
    setCurrentNav(name);
  };

  return (
    <main className="flex min-h-screen">
      <div className="bg-white dark:bg-zinc-900 flex-1">
        <div className="mx-4 max-w-7xl mt-3">
          <div className="ml-4">
            <div className="flex flex-col md:flex-row items-start justify-between text-black dark:text-white">
              <div className="flex items-center mt-2 md:mb-0">
                <div className="">
                  <div className="mx-auto max-w-7xl">
                    <span className="text-2xl font-bold">Mia de Silva</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 ">
                <div className="flex max-w-md gap-x-4 items-center mb-4 md:mb-0 shadow">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative flex items-center w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <BiSearch
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-500"
                      />
                    </span>
                    <input
                      id="search"
                      name="search"
                      type="text"
                      required
                      placeholder="Search"
                      autoComplete="off"
                      className="block w-full pl-10 pr-3 py-1 rounded-md border-0  bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mb-4 md:mb-0">
                  <button
                    type="button"
                    className="relative rounded-md px-3 bg-zinc-800 text-gray-200 dark:text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="flex my-1">
                      <span className="flex items-center justify-center mx-2">
                        <BiPlus aria-hidden="true" className="h-6 w-6" />
                      </span>
                      <span className="text-sm flex items-center justify-center">
                        Invite
                      </span>
                    </span>
                  </button>
                </div>
                <div className="mb-4 md:mb-0">
                  <button
                    type="button"
                    className="relative rounded-md px-3 text-md bg-blue-500 font-bold text-white dark:text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <div className="my-1 text-sm">Upgrade</div>
                  </button>
                </div>
                <Menu as="div" className="relative">
                  <div>
                    <MenuButton className="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <div className="relative">
                        <Image
                          className="h-auto w-6 sm:w-9 md:w-10 rounded-full"
                          src={
                            resolvedTheme === "dark"
                              ? "https://portfolio-rho-swart.vercel.app/images/logo/athrey-high-resolution-logo-white-transparent.png"
                              : "https://portfolio-rho-swart.vercel.app/images/logo/athrey-high-resolution-logo-black-transparent.png"
                          }
                          alt="Logo"
                          width={20}
                          height={20}
                        />
                        <div className="absolute bottom-0 right-2  rounded-full bg-blue-500 flex items-center justify-center">
                          <MdOutlineVerified className="text-white" size={14} />
                        </div>
                      </div>
                    </MenuButton>
                  </div>
                  <MenuItems
                    as="div"
                    className="absolute right-1 mt-2 w-48 origin-top-right rounded-md shadow-lg ring-1 ring-gray-300 ring-opacity-4 transition focus:outline-none"
                  >
                    <MenuItem
                      as="div"
                      className="flex justify-center mx-2 my-2 hover:dark:bg-white hover:text-black hover:dark:text-white hover:bg-black "
                    >
                      <ThemeSwitch className="hover:dark:bg-white hover:text-black hover:dark:text-white hover:bg-black " />
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
            <div className="mx-auto max-w-7xl text-gray-800 dark:text-gray-500 text-sm my-0">
              Manage your details and personal preferences here.
            </div>
          </div>
        </div>

        <main>
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-baseline md:space-x-4">
              <div className="lg:hidden relative mx-auto overflow-hidden flex justify-start">
                <select
                  aria-label="Navigation"
                  onChange={handleNavClick}
                  className="flex appearance-none bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white py-2 px-4 pr-8 rounded-md shadow-sm focus:outline-none focus:bg-white focus:border-gray-500 sm:text-sm"
                >
                  {navigation.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 0 0-.53.22L4.22 8.47a.75.75 0 1 0 1.06 1.06L10 4.81l4.72 4.72a.75.75 0 0 0 1.06-1.06l-5-5a.75.75 0 0 0-.53-.22z"
                    />
                  </svg>
                </div>
              </div>

              <div className="hidden lg:flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current === true
                        ? "bg-white text-black dark:bg-zinc-800 dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    onClick={() => handleNavClick(item.name)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Settings />
          </div>
        </main>
      </div>
    </main>
  );
}
