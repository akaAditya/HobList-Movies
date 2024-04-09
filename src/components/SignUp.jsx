import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const navigate = useNavigate()

  const registerationHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      phone,
      profession,
    };
    localStorage.setItem("user", JSON.stringify(data));
    navigate('/login')
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <div className="text-xl font-semibold mb-4">Registration Page</div>
      <form onSubmit={registerationHandler}>
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
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-green-500 focus: outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Profession
          </label>
          <select
            name="profession"
            onChange={(e) => setProfession(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-green-500 focus: outline-none"
          >
            <option value="designer">Designer</option>
            <option value="blogger">Blogger</option>
            <option value="broker">Broker</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
      <div>
        <p className="p-4">Already have account? <Link to='/login' className="text-green-600 text-bold hover:text-red-500">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
