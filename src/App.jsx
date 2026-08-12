import React from "react";
import LoginForm from "./components/LoginForm";
import ImageBackground from "./assets/ImageBackground.png";
import Ecobank2 from "./assets/Ecobank2.png";

function App() {
  return (
    <div
      className="flex flex-col min-h-screen w-screen text-white"
      style={{
        backgroundImage: `url(${ImageBackground})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Panel */}
        <div className="flex-1 flex flex-col justify-start px-6 sm:px-12 md:px-16 pt-4 bg-black bg-opacity-50 text-center md:text-left">
          {/* Logo at top-left */}
          <img
            src={Ecobank2}
            alt="Ecobank Logo"
            className="w-28 sm:w-36 md:w-44 mb-4"
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-2">
            Welcome to Ecobank.
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1 md:mb-4">
            Your gateway to seamless banking across Africa.
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8">
            Sign in to your account to access your banking services and manage your finances with ease.
          </p>
<a
  href="https://ecobank.com/personal-banking"
  target="_blank"
  rel="noopener noreferrer"
  className="flex space-x-2 text-decoration: underline  border-red-600 bg-red-600 px-3 py-1.5 rounded-md text-lg font-semibold transition duration-200 ease-in-out hover:bg-red-700 hover:border-red-700 hover:scale-105 hover:shadow-md"
>
  Learn More
</a>

        </div>

        {/* Right Panel */}
        <div className="flex-1 flex justify-center items-center px-6 py-12 bg-black bg-opacity-40">
          <LoginForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-60 text-white py-2">
        <div className="text-center text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Ecobank
        </div>
      </footer>
    </div>
  );
}

export default App;
