import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
      <h2 className="text-3xl font-bold text-center">Sign in</h2>

      <input
        type="email"
        placeholder="email"
        className="text-xl py-2 rounded-full px-4"
      />
      <input
        type="password"
        placeholder="password"
        className="text-xl py-2 rounded-full px-4"
      />

      <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white">
        Sign In
      </button>

      <Link to="/register" className="text-center text-blue-700 underline">
        Don't have an Account?
      </Link>
    </form>
  );
};

export default Login;
