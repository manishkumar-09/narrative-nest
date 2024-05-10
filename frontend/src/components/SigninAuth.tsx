import { LabelledInput } from "./LabelInput";
import { AuthHeader } from "./AuthHeader";
import { SignupInput } from "@manish_dev/narrative-common";
import { useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { BackendUrl } from "../config";
import { useNavigate } from "react-router-dom";

export const SigninAuth = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BackendUrl}/api/v1/user/signin`,
        userInput
      );
      if (response.data.token) {
        navigate("/blogs");
      }
    } catch (err) {
      alert("Error occured please try again");
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-4 dark:bg-gray-800 dark:border-gray-700">
        <AuthHeader type={"signin"} />

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
        <Button type={"signin"} onpress={sendRequest} />
      </div>
    </div>
  );
};
