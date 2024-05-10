import { SignupInput } from "@manish_dev/narrative-common";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackendUrl } from "../config";
import { AuthHeader } from "./AuthHeader";
import { LabelledInput } from "./LabelInput";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BackendUrl}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        userInput
      );
      alert("sign success");
      navigate("/signin");
    } catch (err) {
      alert("Error occured please try again");
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-4 dark:bg-gray-800 dark:border-gray-700">
        <AuthHeader type={type} />

        {type === "signup" && (
          <LabelledInput
            label={"Full name"}
            placeholder={"Full name"}
            onChange={(e) => {
              setUserInput((c) => ({
                ...c,
                name: e.target.value,
              }));
            }}
          />
        )}

        <LabelledInput
          label={"Email"}
          placeholder={"Enter email"}
          onChange={(e) => {
            setUserInput((c) => ({
              ...c,
              email: e.target.value,
            }));
          }}
        />
        <LabelledInput
          label={"Password"}
          type={"password"}
          placeholder={"password"}
          onChange={(e) => {
            setUserInput((c) => ({
              ...c,
              password: e.target.value,
            }));
          }}
        />

        <div className="flex justify-center dark:bg-gray-800 dark:border-gray-700 ">
          <button
            onClick={sendRequest}
            className="bg-black w-full p-2.5  rounded-lg  text-white"
          >
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};
