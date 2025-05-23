import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Header2 from "../components/Header2";

const Authpage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-gradient-to-br from-pink-100 to-pink-200">
      <Header2 />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br p-4">
        <div className="w-full max-w-xl p-6 bg-white rounded-md shadow-md ring-2 ring-gray-200">
          <h2 className="text-3xl font-bold text-center text-[#D42E5D] mb-6">
            {isLogin ? "Sign in to SoulMatch" : "Create Your Account"}
          </h2>

          <div className="space-y-4">
            {isLogin ? <LoginForm /> : <SignUpForm />}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "New to SoulMatch?" : "Already have an account?"}
            </p>
            <button
              onClick={() => setIsLogin((prev) => !prev)}
              className="mt-2 text-[#D42E5D] hover:text-pink-600 font-medium transition-colors duration-300"
            >
              {isLogin ? "Create a new account" : "Sign in to your account"}
            </button>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
              </svg>
              <span>
                {isLogin ? "Sign in with Google" : "Sign up with Google"}
              </span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
              </svg>
              <span>
                {isLogin ? "Sign in with GitHub" : "Sign up with GitHub"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
