export const Button = ({
  type,
  onpress,
}: {
  type: "signup" | "signin";
  onpress: () => void;
}) => {
  return (
    <div className="flex justify-center dark:bg-gray-800 dark:border-gray-700 ">
      <button
        onClick={onpress}
        className="bg-black w-full p-2.5  rounded-lg  text-white"
      >
        {type === "signup" ? "Sign up" : "Sign in"}
      </button>
    </div>
  );
};
