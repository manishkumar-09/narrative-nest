import { BlogDetails } from "../components/BlogDetail";
import { BlgoSkeleton } from "../components/BlogSkeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <div className="flex flex-col">
        <BlgoSkeleton />
        <BlgoSkeleton />
        <BlgoSkeleton />
      </div>
    );
  }
  return <BlogDetails key={id} blog={blog} />;
};
