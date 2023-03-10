import Link from "next/link";
import { RxSketchLogo } from "react-icons/rx";

interface Prop {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Prop) => (
  <div className="flex">
    <div className="fixed flex h-screen w-20 flex-col justify-between border-r-[1px] bg-white p-4">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div>
            <RxSketchLogo size={20} />
          </div>
        </Link>
      </div>
    </div>
    <main className="ml-20 w-full">{children}</main>
  </div>
);

export default Sidebar;
