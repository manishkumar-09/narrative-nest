import axios from "axios";
import { AppBar } from "./AppBar";
import { BackendUrl } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  async function onClickHandler() {
    axios
      .post(
        `${BackendUrl}/api/v1/blog/add-blog`,
        {
          title,
          content,
        },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
      .then((res) => {
        navigate(`/blog/${res.data.id}`);
      });
  }
  return (
    <div>
      <AppBar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="w-full max-w-3xl mt-5">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title ..."
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="w-full max-w-3xl ">
          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-start w-full max-w-3xl mt-5">
          <button
            onClick={onClickHandler}
            type="button"
            className="px-10 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="w-full max-w-3xl mt-5">
      <textarea
        onChange={onChange}
        id="message"
        rows={5}
        placeholder="write your thoughts here..."
        className="block w-full rounded-lg focus:outline-none p-2"
      ></textarea>
    </div>
  );
}
