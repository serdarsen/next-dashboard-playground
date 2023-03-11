import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Dashboard Playground</title>
        <meta
          name="description"
          content="Next.js Dashboard Playground"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Header />
      </main>
    </>
  );
};

export default Home;
