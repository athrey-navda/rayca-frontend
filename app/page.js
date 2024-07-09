"use client";
import { useState } from "react";
import Sidebar from "./component/SideBar";
import Error from "./component/404";
import SettingHome from "./component/SettingHome";

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState("Settings");
  const [initialMainComponent, setInitialMainComponent] = useState("Security");

  const renderComponent = () => {
    switch (currentComponent) {
      case "Home":
        return (
          <div className="flex items-center justify-center h-screen text-2xl text-black dark:text-white">
            Home Component
          </div>
        );
      case "All Files":
        return (
          <div className="flex items-center justify-center h-screen text-2xl text-black dark:text-white">
            All Files Component
          </div>
        );
      case "Private Files":
        return (
          <div className="flex items-center justify-center h-screen text-2xl text-black dark:text-white">
            Private Files Component
          </div>
        );
      case "Shared with me":
        return (
          <div className="flex items-center justify-center h-screen text-2xl text-black dark:text-white">
            Shared with me Component
          </div>
        );
      case "Delete Files":
        return (
          <div className="flex items-center justify-center h-screen text-2xl text-black dark:text-white">
            Delete Files Component
          </div>
        );
      case "Design":
        return (
          <div className="flex items-center justify-center h-screen text-2xl text-black dark:text-white">
            Design Component
          </div>
        );
      case "Notification":
        return (
          <div className="flex items-center justify-center h-screen text-2xl text-black dark:text-white">
            Notification Component
          </div>
        );
      case "Settings":
        return (
          <SettingHome
            initialMainComponent={initialMainComponent}
            setInitialMainComponent={setInitialMainComponent}
          />
        );

      default:
        return <Error />;
    }
  };

  return (
    <section className="flex min-h-screen">
      <Sidebar
        currentComponent={currentComponent}
        setCurrentComponent={setCurrentComponent}
        className="w-72 flex-shrink-0"
      />
      <div className="flex-1 overflow-auto border-4 border-zinc-800 rounded-lg">
        {renderComponent()}
      </div>
    </section>
  );
};

export default Home;
