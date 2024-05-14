import { AppBar } from "./AppBar";
import { BlogIn } from "../hooks";
import { Avatar } from "./BlogCard";
export const BlogDetails = ({ blog }: { blog: BlogIn }) => {
  return (
    <div>
      <AppBar />
      <div className="grid grid-cols-12 w-full py-20 px-20">
        <div className="col-span-8 p-3">
          <div className="text-3xl font-bold pb-2">{blog.title}</div>
          <div className="text-slate-400 pb-2.5">Posted on May 14, 2024</div>
          <div className="text-slate-600">
            {blog.content +
              "hello this is the random text for the context i just want check it's working or not but i think i need more text to verify the content"}
          </div>
        </div>
        <div className="col-span-4 p-3">
          <div className="text-slate-800 p-1.5">Author</div>
          <div className="w-full flex ">
            <div className="pr-4 flex flex-col justify-center">
              <Avatar name={blog.author.name} />
            </div>
            <div>
              <div className="text-xl font-bold">{blog.author.name}</div>
              <div className="text-slate-400">
                {"Random text for the testing purpose of a"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
