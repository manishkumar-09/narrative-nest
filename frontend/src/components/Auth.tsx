import { SignupInput } from "@manish_dev/narrative-common";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [userInput, setUserInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-4 dark:bg-gray-800 dark:border-gray-700">
        <div className="text-center pb-5">
          <h5 className=" font-bold text-2xl dark:text-white">
            Create an account
          </h5>
          <div className="text-slate-400">
            {type === "signup"
              ? "Alredy have an account ?"
              : "Don't have an account"}
            <Link
              className="pl-2 underline"
              to={type === "signup" ? "/signin" : "/signup"}
            >
              {type === "signup" ? "Login" : "Sign up"}
            </Link>
          </div>
        </div>

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

        <div className="flex justify-center p-4 dark:bg-gray-800 dark:border-gray-700">
          <button className="bg-black w-full rounded-lg p-2 text-white">
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label
        htmlFor=""
        className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        name="name"
        id="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
