import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const AppBar = () => {
  return (
    <div className="border border-bg-slate-500 flex justify-between px-10 py-2">
      <div className="">Generic</div>

      <div className="flex">
        <div className="">
          <Link to={"/publish"}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5"
            >
              New
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <Avatar name="Max" />
        </div>
      </div>
    </div>
  );
};
