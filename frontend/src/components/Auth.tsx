export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-4 dark:bg-gray-800 dark:border-gray-700">
        <div className="text-center pb-5">
          <h5 className=" font-bold text-xl dark:text-white">
            Sign in to our platform
          </h5>
          <div>Alredy have an account? login</div>
        </div>
        {/* name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Full name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="flex justify-center p-4 dark:bg-gray-800 dark:border-gray-700">
          <button className="bg-black w-full rounded-lg p-2 text-white">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};
