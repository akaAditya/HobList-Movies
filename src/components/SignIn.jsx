import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Data = localStorage.getItem("user");
  const userData = JSON.parse(Data);

  const username = userData.name;
  const pass = userData.password;

  const loginHandler = (e) => {
    e.preventDefault();
    if (name === username && password === pass) {
      navigate("/movies");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
        <div className="text-xl font-semibold mb-4">User SignIn Page</div>
        <form onSubmit={loginHandler}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-green-500 focus: outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-green-500 focus: outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
        <div>
          <p className="p-4">
            Not have account?
            <Link
              to="/"
              className="text-green-600 text-bold hover:text-red-500"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
