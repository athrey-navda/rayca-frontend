import ThemeSwitch from "./component/ThemeSwitcher";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black">
      <div className="flex justify-center">
        <div className="text-black dark:text-white mx-6">Hello</div>
        <ThemeSwitch />
      </div>
    </main>
  );
}
