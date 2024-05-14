import axios from "axios";
import { useEffect, useState } from "react";
import { BackendUrl } from "../config";

export interface BlogIn {
  title: string;
  content: string;
  author: { name: string };
  id: string;
}
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogIn[]>([]);

  useEffect(() => {
    axios
      .get(`${BackendUrl}/api/v1/blog/get-blogs`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);
  return { loading, blogs };
};
export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogIn>();

  useEffect(() => {
    axios
      .get(`${BackendUrl}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        console.log(response.data, "8888");
        setLoading(false);
      });
  }, [id]);
  return { loading, blog };
};
