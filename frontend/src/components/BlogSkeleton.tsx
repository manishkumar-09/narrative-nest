export const BlgoSkeleton = () => {
  return (
    <div role="status" className=" animate-pulse">
      <div className="flex flex-col sm:flex-row justify-around px-4 sm:px-20">
        <div className="w-full sm:w-1/2 border-b-2 border-slate-200 pb-4 pt-2">
          <div className="flex pb-1 items-center">
            {/* Center content vertically */}
            <div className="text-xs flex justify-center items-center">
              <div className="h-5 w-5 mr-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
            </div>
            <div className="flex flex-col justify-center pl-2 text-gray-700 font-semibold">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            </div>
            <div className="flex flex-col justify-center text-gray-400 pl-2">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="text-gray-600">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[430px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[530px] mb-2.5"></div>
          </div>
          <div className="text-gray-400 pt-5">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
