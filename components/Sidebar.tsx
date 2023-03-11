import Link from "next/link";
import { RxSketchLogo } from "react-icons/rx";

interface Prop {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Prop) => (
  <div className="flex dark:bg-slate-800 dark:text-gray-300">
    <div className="fixed flex h-screen w-20 flex-col justify-between border-r p-4 dark:border-slate-700">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="inline-block rounded-lg bg-purple-800 p-3 text-white dark:text-gray-300">
            <RxSketchLogo size={20} />
          </div>
        </Link>
      </div>
    </div>
    <main className="ml-20 w-full">{children}</main>
  </div>
);

export default Sidebar;
