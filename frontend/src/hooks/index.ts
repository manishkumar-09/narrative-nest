import axios from "axios";
import { useEffect, useState } from "react";
import { BackendUrl } from "../config";

interface Blog {
  title: string;
  content: string;
  author: { name: string };
  id: string;
}
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState(<Blog[]>[]);

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
export const useBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState(<Blog[]>[]);

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
