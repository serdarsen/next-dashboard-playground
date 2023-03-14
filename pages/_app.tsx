import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const applyOSColorScheme = () => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    applyOSColorScheme();
  }, []);

  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
};

export default MyApp;
