import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiDeleteBin6Line, RiHomeSmile2Line } from "react-icons/ri";
import { TbUsersPlus } from "react-icons/tb";
import { MdArrowForwardIos, MdOutlineSettings } from "react-icons/md";
import { PiFolderLock, PiNotificationBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { BsFolder } from "react-icons/bs";
import { BiPieChart } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";

export default function Sidebar() {
  const menus = [
    { name: "Home", link: "/", icon: RiHomeSmile2Line },
    { name: "All Files", link: "/", icon: BsFolder },
    { name: "Private Files", link: "/", icon: PiFolderLock },
    {
      name: "Shared with me",
      link: "/",
      icon: TbUsersPlus,
    },
    { name: "Delete Files", link: "/", icon: RiDeleteBin6Line },
    { name: "Design", link: "/", icon: BiPieChart },
    { name: "Notification", link: "/", icon: PiNotificationBold, alert: 8 },
    { name: "Settings", link: "/", icon: MdOutlineSettings },
  ];
  const [open, setOpen] = useState(true);
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div
      className={`bg-white dark:bg-zinc-800 min-h-screen flex flex-col ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div>
        <div className="py-3 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="sr-only">Untitled UI</span>
              <Image
                className="h-auto w-12 rounded"
                src={
                  resolvedTheme === "dark"
                    ? "https://portfolio-rho-swart.vercel.app/images/logo/athrey-high-resolution-logo-white-transparent.png"
                    : "https://portfolio-rho-swart.vercel.app/images/logo/athrey-high-resolution-logo-black-transparent.png"
                }
                alt="Logo"
                width={60}
                height={60}
              />
              <span className="font-bold ml-1">Untitled UI</span>
            </a>
          </div>

          <div className="ml-2 flex items-center">
            <span className="text-sm">v4.0</span>
            <button className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-2 relative">
          {menus?.map((menu, i) => (
            <Link
              href={`${menu?.link}`}
              key={i}
              className={`group flex items-center justify-between text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div className="flex items-center gap-3.5">
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <div
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </div>
                <div
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.name}
                </div>
              </div>
              {menu?.alert && (
                <div className="flex items-center">
                  <div className="flex w-5 h-5 bg-blue-500 rounded-full justify-center items-center">
                    {menu?.alert}
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-between my-4 text-black dark:text-gray-400 font-bold">
        <div className="uppercase text-xs">File Browser</div>
        <div>
          <CiMenuKebab className="h-3" />
        </div>
      </div>
      <div className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
        <div className="flex items-center">
          <MdArrowForwardIos className="h-3 mr-1" />
          <span className="ml-2">Folders</span>
        </div>
      </div>

      <div className="mt-auto mb-4">
        <div className="bg-zinc-700 p-4 rounded-xl">
          <div className="flex justify-between mb-3">
            <div className="text-sm">Storage</div>
            <div className="underline underline-offset-1 text-sm">Upgrade</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
            <div
              className="bg-gray-200 h-2.5 rounded-full"
              style={{ width: "92%" }}
            ></div>
          </div>
          <div className="uppercase text-xs text-black dark:text-gray-400 mt-2">
            9.2GB of 10 GB used
          </div>
        </div>
      </div>
    </div>
  );
}
