import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const BlogDetails = () => {
  const { id } = useParams();
  const { loading, blogs } = useBlog();
  if (loading) {
    return <div>loading ....</div>;
  }
  return <div></div>;
};
