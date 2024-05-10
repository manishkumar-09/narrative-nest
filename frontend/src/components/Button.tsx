import axios from "axios";
import { BackendUrl } from "../config";

export const Button = ({ sendRequest, type }) => {
  return (
    <div className="flex justify-center dark:bg-gray-800 dark:border-gray-700 ">
      <button
        onClick={sendRequest}
        className="bg-black w-full p-2.5  rounded-lg  text-white"
      >
        {type === "signup" ? "Sign up" : "Sign in"}
      </button>
    </div>
  );
};
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
