import { Link } from "react-router-dom";

type BlogCardInput = {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
};
export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardInput) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex flex-col sm:flex-row justify-around px-4 sm:px-20">
        <div className="w-full sm:w-1/2 border-b-2 border-slate-200 pb-4 pt-2">
          <div className="flex pb-1 items-center">
            {/* Center content vertically */}
            <div className="text-xs">
              <Avatar name={"Max" || "U"} />
            </div>
            <div className="flex flex-col justify-center pl-2 text-gray-700 font-semibold">
              {authorName}.
            </div>
            <div className="flex flex-col justify-center text-gray-400 pl-2">
              {publishedDate}
            </div>
          </div>
          <div className="text-gray-800 text-xl font-bold pb-1 ">{title}</div>
          <div className="text-gray-600">
            {content.length > 100 ? `${content.slice(0, 300)}...` : content}
          </div>
          <div className="text-gray-400 pt-5">{`${Math.ceil(
            content.length / 100
          )} min read `}</div>
        </div>
        {/* <div className="flex justify-center items-center">
        <img
          className="w-full sm:w-1/2 h-auto object-cover" // Make image responsive
          src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Centered Image"
        />
      </div> */}
      </div>
    </Link>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-black rounded-full dark:bg-gray-600">
      <span className="font-medium text-white dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
