import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next Dashboard Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full"></main>

      <footer className="flex w-full"></footer>
    </div>
  );
};

export default Home;
