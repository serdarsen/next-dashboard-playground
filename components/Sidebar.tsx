import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {
  RxDashboard,
  RxPerson,
  RxSketchLogo,
} from "react-icons/rx";

interface Prop {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Prop) => (
  <div className="flex dark:bg-slate-800 dark:text-gray-300">
    <div className="fixed flex h-screen w-20 flex-col justify-between border-r border-gray-200 p-4 dark:border-slate-700">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="inline-block rounded-lg bg-purple-800 p-3 text-white dark:text-gray-300">
            <RxSketchLogo size={20} />
          </div>
        </Link>
        <span className="w-full border-b border-gray-200 p-2 dark:border-slate-600"></span>
        <Link href="/">
          <div className="my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600">
            <RxDashboard size={20} />
          </div>
        </Link>
        <Link href="/customer">
          <div className="my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600">
            <RxPerson size={20} />
          </div>
        </Link>
        <Link href="/orders">
          <div className="my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600">
            <HiOutlineShoppingBag size={20} />
          </div>
        </Link>
        <Link href="/">
          <div className="my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600">
            <FiSettings size={20} />
          </div>
        </Link>
      </div>
    </div>
    <main className="ml-20 w-full">{children}</main>
  </div>
);

export default Sidebar;
