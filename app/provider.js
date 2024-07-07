"use client";

import dynamic from "next/dynamic";

const ThemeProvider = dynamic(
  () => import("next-themes").then((module) => module.ThemeProvider),
  { ssr: false }
);

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
