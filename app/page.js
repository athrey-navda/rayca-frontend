"use client";
import SettingHome from "./component/SettingHome";
import Sidebar from "./component/SideBar";

const Home = () => {
  return (
    <section className="flex min-h-screen">
      <Sidebar className="w-72 flex-shrink-0" />
      <div className="flex-1 overflow-auto border-4 border-zinc-800 rounded-lg">
        <SettingHome />
      </div>
    </section>
  );
};

export default Home;
