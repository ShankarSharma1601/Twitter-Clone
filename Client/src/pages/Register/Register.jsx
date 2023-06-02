import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "../../redux/userSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("api/v1/auth/register", {
        username,
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      alert("Register Successful");
      navigate("/login");
    } catch (error) {
      dispatch(loginFailed());
      console.log(error);
      alert("Something Went Wrong");
    }
  };
  return (
    <form className="bg-gray-200 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
      <h2 className="text-3xl font-bold text-center">Register</h2>

      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="text-xl py-2 rounded-full px-4"
      />
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
        onClick={handleRegister}
      >
        Register
      </button>

      <Link to="/login" className="text-center text-blue-700 underline">
        Already have an Account?
      </Link>
    </form>
  );
};

export default Register;
