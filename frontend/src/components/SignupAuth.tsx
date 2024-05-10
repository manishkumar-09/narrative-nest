import { LabelledInput } from "./LabelInput";
import { AuthHeader } from "./AuthHeader";
import { SignupInput } from "@manish_dev/narrative-common";
import { useState } from "react";
export const SignupAuth = () => {
  const [userInput, setUserInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-4 dark:bg-gray-800 dark:border-gray-700">
        <AuthHeader type={"signup"} />

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
      </div>
    </div>
  );
};
