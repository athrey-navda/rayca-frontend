import { GoVerified } from "react-icons/go";
import CircularProgressBar from "./circularProgress";
import { Switch } from "@headlessui/react";
import DeviceItem from "./DeviceItem";
import { useState } from "react";

export default function Security() {
  const [enabled, setEnabled] = useState(true);
  const devices = [
    {
      device: "Brave on Mac OS X",
      deviceImage:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png?20200709064642",
      location: "Ninh Binh, Vietnam",
      country:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/510px-Flag_of_Vietnam.svg.png",
      session: "Current Session",
    },
    {
      device: "Mia's MacBook Pro",
      deviceImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Own_apple_logo.svg/966px-Own_apple_logo.svg.png",
      location: "Ninh Binh, Vietnam",
      country:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/510px-Flag_of_Vietnam.svg.png",
      session: "Current Session",
    },
    {
      device: "Brave on Mac OS X",
      deviceImage:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png?20200709064642",
      location: "Mexico City, Mexico",
      country:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1600px-Flag_of_Mexico.svg.png",
      session: "1 month ago",
    },
    {
      device: "Mia's MacBook Pro",
      deviceImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Own_apple_logo.svg/966px-Own_apple_logo.svg.png",
      location: "Mexico City, Mexico",
      country:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1600px-Flag_of_Mexico.svg.png",
      session: "1 month ago",
    },
  ];

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8">
      <div className="mt-6">
        <div className="max-w-7xl mx-auto px-6 text-black dark:text-white flex justify-start bg-white dark:bg-zinc-800 rounded-xl">
          <div>
            <CircularProgressBar percentage={90} />
          </div>
          <div className="flex flex-col mx-4">
            <div className="text-sm font-semibold mt-3">
              Your account security is 90%
            </div>
            <div className="text-sm text-gray-800 dark:text-gray-500">
              Please review your account settings regularly and update your
              password.
            </div>
          </div>
          <div className="flex-grow"></div>
          <div className="flex flex-row mx-4 items-center gap-x-2">
            <div>
              <button
                type="button"
                className="text-sm relative rounded-md px-3 py-1 bg-zinc-800 border border-gray-500 text-gray-200 dark:text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="flex">
                  <span className="text-md">Dismiss</span>
                </span>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="text-sm relative rounded-md px-2 py-1 text-md bg-blue-500 font-bold text-white dark:text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <div className="my-0.5">Review Security</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-black dark:text-white text-sm font-bold">
          Basics
        </div>
        <div className="my-1">
          <div className="max-w-7xl py-4 text-black dark:text-white flex border-y-2 border-gray-800">
            <div className="flex flex-col my-2">
              <div className="text-sm font-semibold mb-1">Password</div>
              <div className="text-xs text-gray-800 dark:text-gray-500">
                Set a password to protect your account
              </div>
            </div>
            <div className="mx-24">
              <div className="flex flex-row mx-4 items-center gap-x-2">
                <div className="text-xs font-semibold">
                  ●●●●●●●●●●●●●●●●●●●●
                </div>
                <div className="text-sm text-emerald-300">
                  <span className="flex my-2">
                    <span className="flex text-xs items-center justify-center mx-2">
                      <GoVerified aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span className="text-xs"> Very secure</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-grow"></div>
            <div className="my-2">
              <button
                type="button"
                className="relative rounded-md px-3 py-1 bg-zinc-800 border border-gray-500 text-gray-200 dark:text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="flex">
                  <span className="text-sm">Edit</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="max-w-7xl py-2 text-black dark:text-white flex border-b-2 border-gray-800">
            <div className="flex flex-col my-2">
              <div className="text-sm font-semibold mb-1">
                Two-step verification
              </div>
              <div className="text-xs text-gray-800 dark:text-gray-500">
                We recommend requiring a verification
                <br /> code in addition to your password
              </div>
            </div>
            <div className="mx-24">
              <div className="flex flex-row mx-4 items-center gap-x-3">
                <div className="text-sm font-semibold my-2">
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                      enabled ? "bg-blue-500" : "bg-blue-900"
                    } relative inline-flex h-[20px] w-[37px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        enabled ? "translate-x-4" : "translate-x-0"
                      } pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
                <div className="text-sm mb-1">Two-step verification</div>
              </div>
            </div>
            <div className="flex-grow"></div>
            <div className="my-2">
              <button
                type="button"
                className="relative rounded-md px-3 py-1 bg-zinc-800 border border-gray-500 text-gray-200 dark:text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="flex">
                  <span className="text-sm">Edit</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6">
        <div className="text-black dark:text-white text-md flex flex-col my-2">
          <div className="text-sm font-semibold mb-1">Browser and devices</div>
          <div className="text-sm text-gray-800 dark:text-gray-500">
            These browsers and devices are currently signed in to your account.
            Remove any unauthorized devices.
          </div>
        </div>
        <div className="my-1 text-sm">
          {devices.map((device, index) => (
            <DeviceItem
              key={index}
              deviceImage={device.deviceImage}
              device={device.device}
              location={device.location}
              country={device.country}
              session={device.session}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
