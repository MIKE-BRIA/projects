// Signup.js

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../store/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const { status, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/login", formData);
    console.log(response);

    navigate("/");
  };

  return (
    <main className="h-screen">
      <div className="max-w-md mx-auto mt-8 bg-white  p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        {/* {status === "loading" && <p className="text-center">Loading...</p>}
        {status === "failed" && (
          <p className="text-center text-red-500">Error: {error}</p>
        )} */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <p className="w-full bg-indigo-300 py-2 mt-3 px-4 text-center border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Link to="/signup">Don&apos;t have account Sign up instead</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
