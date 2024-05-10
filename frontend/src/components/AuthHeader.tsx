import { Link } from "react-router-dom";

export const AuthHeader = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="text-center pb-5">
      <h5 className=" font-bold text-2xl dark:text-white">Create an account</h5>
      <div className="text-slate-400">
        {type === "signup"
          ? "Already have an account ?"
          : "Don't have an account"}
        <Link
          className="pl-2 underline"
          to={type === "signup" ? "/signin" : "/signup"}
        >
          {type === "signup" ? "Login" : "Sign up"}
        </Link>
      </div>
    </div>
  );
};
