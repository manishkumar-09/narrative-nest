import { ChangeEvent } from "react";

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const LabelledInput = ({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) => {
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
        className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
