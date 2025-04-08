import React, { useState } from "react";
import img from "../assets/image/login.webp";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl w-full mx-4 my-8 rounded-2xl shadow-2xl overflow-hidden bg-gray-800">
        {/* Image Section */}
        <div className="hidden lg:block">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 opacity-80"
            src={img}
            alt="Login illustration"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center p-8 sm:p-12 bg-gray-800">
          <form
            className="w-full max-w-md mx-auto space-y-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-4xl font-extrabold text-center text-indigo-400 tracking-tight">
              BRAND
            </h2>
            <p className="text-center text-gray-400 text-sm">
              Sign in to your account
            </p>

            {/* Username Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300"
              type="submit"
            >
              Sign In
            </button>

            {/* Remember Me & Link */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  className="mr-2 h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded bg-gray-900"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                  Remember Me
                </span>
              </label>
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200"
              >
                Create an account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
