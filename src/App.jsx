import React from "react";
import LoginForm from "./components/LoginForm";
import ImageBackground from "./assets/ImageBackground.png";
import Ecobank2 from "./assets/Ecobank2.png";

function App() {
  return (
    <div
      className="flex flex-col md:flex-row h-screen w-screen text-white"
      style={{
        backgroundImage: `url(${ImageBackground})`,
        backgroundSize: "100% 100%",   // stretch to fill both width and height
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Left Panel */}
      <div className="flex-1 flex flex-col justify-start px-6 sm:px-12 md:px-16 pt-4 bg-black bg-opacity-50 text-center md:text-left">
        {/* Logo at top-left */}
        <img
          src={Ecobank2}
          alt="Ecobank Logo"
          className="w-28 sm:w-36 md:w-44 mb-4"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Welcome!
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8">
          Sign in to your account to access your banking services and manage your finances with ease.
        </p>
        <a
          href="https://ecobank.com/personal-banking"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-bold hover:bg-red-700"
        >
          Learn More
        </a>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex justify-center items-center px-6 py-12 bg-black bg-opacity-40">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
