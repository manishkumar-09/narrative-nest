import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <div>
      <AppBar />
      {blogs.map((blog) => {
        return (
          <BlogCard
            id={blog.id}
            authorName={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate={"11 April 2024"}
          />
        );
      })}
    </div>
  );
};
