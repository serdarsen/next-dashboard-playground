import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";
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
      <main className="min-h-screen bg-gray-100 dark:bg-slate-800">
        <Header />
        <TopCards />
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
};

export default Home;
