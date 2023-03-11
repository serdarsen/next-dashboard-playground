const TopCards = () => {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-5">
      <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 dark:border-slate-600 dark:bg-slate-700 lg:col-span-2">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$7,846</p>
          <p>Daily Revenue</p>
        </div>
        <p className="flex items-center justify-center rounded-lg bg-green-200 p-2 dark:bg-green-800">
          +18%
        </p>
      </div>
      <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 dark:border-slate-600 dark:bg-slate-700 lg:col-span-2">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$1,437,846</p>
          <p>YTD Revenue</p>
        </div>
        <p className="flex items-center justify-center rounded-lg bg-green-200 p-2 dark:bg-green-800">
          +11%
        </p>
      </div>
      <div className="flex w-full justify-between rounded-lg border bg-white p-4 dark:border-slate-600 dark:bg-slate-700">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">11,437</p>
          <p>Customers</p>
        </div>
        <p className="flex items-center justify-center rounded-lg bg-green-200 p-2 dark:bg-green-800">
          +17%
        </p>
      </div>
    </div>
  );
};

export default TopCards;
