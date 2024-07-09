import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeviceItem = ({ device, location, session, country, deviceImage }) => (
  <div className="max-w-7xl py-1 text-black dark:text-white flex border-b-2 border-gray-800 gap-x-4 items-center">
    <div className="flex items-center my-2">
      <div className="bg-gray-800 rounded-lg p-2">
        <Image
          className="w-6 h-6 rounded-full"
          src={deviceImage}
          alt="Device Logo"
          width={40}
          height={40}
        />
      </div>
      <span className="mx-2 text-sm">{device}</span>
    </div>

    <div className="flex-grow"></div>

    <div className="mx-6 flex items-center text-gray-500">
      <div className="flex items-center gap-x-2">
        <Image
          className="w-6 h-6 rounded-full"
          src={country}
          alt="Country Flag"
          width={40}
          height={40}
        />
        <span>{location}</span>
      </div>
    </div>

    <div className="mx-6 text-sm flex items-center text-gray-500 min-w-[100px] justify-end">
      {session}
    </div>

    <div className="mx-6 flex items-center text-gray-500">
      <RiDeleteBin6Line aria-hidden="true" className="h-5 w-5" />
    </div>
  </div>
);

export default DeviceItem;
