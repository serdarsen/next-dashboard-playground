import data from "@/mock/database.json";
import { Order } from "@/typings";
import { FaShoppingBag } from "react-icons/fa";

const RecentOrders = () => {
  return (
    <div className="scrollbar relative col-span-1 m-auto h-[50vh] w-full overflow-y-scroll rounded-lg border bg-white p-4 dark:border-slate-600 dark:bg-slate-700 lg:h-[70vh]">
      <h1>Recent Orders</h1>
      <ul>
        {data.map(({ id, name, total, date }: Order) => (
          <li
            key={id}
            className="my-3 flex cursor-pointer items-center rounded-lg bg-gray-50 p-2 hover:bg-gray-100 dark:border-slate-500 dark:bg-slate-600 dark:hover:bg-slate-500/50">
            <div className="rounded-lg bg-purple-100 p-3 dark:bg-purple-800/40">
              <FaShoppingBag className="text-purple-800 dark:text-purple-400" />
            </div>
            <div className="pl-4">
              <p className="font-bold text-gray-800 dark:text-gray-300">
                ${total}
              </p>
              <p className="text-sm text-gray-400">{name?.first}</p>
            </div>
            <p className="absolute right-6 text-sm text-gray-800 dark:text-gray-300 md:hidden lg:flex">
              {date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
