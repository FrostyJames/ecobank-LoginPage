import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("logging in with", username, password);
  };

  return (
    <div className="bg-white bg-opacity-10 p-6 sm:p-8 rounded-xl shadow-lg text-center w-full max-w-sm sm:max-w-md md:max-w-lg">
      <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Login here</h2>
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full px-3 sm:px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 sm:px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full py-2 sm:py-3 rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
