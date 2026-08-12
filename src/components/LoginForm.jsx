import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Logging in with", username, password, rememberMe);
  };

  return (
    <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
      {/* Header */}
      <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-6 text-center">
        Login to Ecobank
      </h2>
     

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Username */}
        <div className="text-left">
          <label className="block text-gray-200 text-sm mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Password */}
        <div className="text-left">
          <label className="block text-gray-200 text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between text-sm text-gray-300">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2 accent-indigo-500"
            />
            Remember Me
          </label>
          <a href="#" className="hover:underline hover:text-white">
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-black text-white font-bold tracking-wide shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
        >
          Sign In
        </button>
      </form>

      {/* Footer Links */}
      <div className="mt-6 text-sm text-gray-300 text-center">
        Don’t have an account?{" "}
        <a href="#" className="hover:underline hover:text-white font-semibold">
          Create Account
        </a>
      </div>
    </div>
  );
}

export default LoginForm;
