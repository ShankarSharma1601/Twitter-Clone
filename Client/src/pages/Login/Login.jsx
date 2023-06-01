import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/features/alertSlice";
import axios from "axios";
import { setUser } from "../../redux/features/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      dispatch(showLoading());
      const res = await axios.post("api/v1/auth/login", { email, password });
      dispatch(hideLoading());
      console.log(res);

      dispatch(setUser(res.data.user));
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      alert("Something Went Wrong");
    }
  };
  return (
    <form className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
      <h2 className="text-3xl font-bold text-center">Sign in</h2>

      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        className="text-xl py-2 rounded-full px-4"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="text-xl py-2 rounded-full px-4"
      />

      <button
        className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
        onClick={handleLogin}
      >
        Sign In
      </button>

      <Link to="/register" className="text-center text-blue-700 underline">
        Don't have an Account?
      </Link>
    </form>
  );
};

export default Login;
