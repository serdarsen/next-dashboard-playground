import Sidebar from "@/components/Sidebar";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
};

export default MyApp;
