import { Avatar } from "./BlogCard";

export const AppBar = () => {
  return (
    <div className="border border-bg-slate-500 flex justify-between px-10 py-2">
      <div className="">logo</div>
      <Avatar name="Max" />
    </div>
  );
};
