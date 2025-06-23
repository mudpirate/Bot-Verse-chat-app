import React from "react";
import Navbar from "./Navbar";
import home from "../assets/home.jpg";

function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url(./assets/newbg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-4 sm:p-6 lg:px-10 space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl font-serif sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
              Bots
              <span className="block sm:inline bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
                Verse
              </span>
            </h1>
            <div className="w-16 sm:w-24 lg:w-50 mx-auto lg:mx-0 -mt-5 h-1 bg-gradient-to-r from-pink-600 to-pink-300 rounded-full"></div>
            <ul className="text-base sm:text-lg lg:text-xl text-gray-700 space-y-2 sm:space-y-3 font-medium">
              <li className="flex items-start sm:items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 sm:mt-0 flex-shrink-0"></div>
                <span className="mt-1 font-sans sm:mt-0">
                  Talk to humans. Converse with bots. Welcome to the Verse.
                </span>
              </li>
              <li className="flex items-start sm:items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 sm:mt-0 flex-shrink-0"></div>
                <span className="mt-1 font-sans sm:mt-0">
                  Where conversations feel futuristic.
                </span>
              </li>
              <li className="flex items-start sm:items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 sm:mt-0 flex-shrink-0"></div>
                <span className="mt-1 sm:mt-0">Chat. Play. Evolve.</span>
              </li>
              <li className="flex items-start sm:items-center justify-center lg:justify-start space-x-2 sm:space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 sm:mt-0 flex-shrink-0"></div>
                <span className="mt-1 sm:mt-0">
                  One verse. Infinite dialogues.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-50 border-2 border-black text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:border-pink-300 text-sm sm:text-base">
              Login
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border-2 border-purple-500 text-purple-600 font-bold rounded-xl hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Signup
            </button>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 order-first lg:order-last">
          <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
            <div className="absolute inset-0 bg-pink-200 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl animate-pulse"></div>
            <div className="relative sm:-top-10">
              <img
                src={home}
                className="w-full relative top-3 h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl object-cover border-2 sm:border-4 border-white/30 backdrop-blur-sm transform hover:scale-105 transition-transform duration-500"
                alt="home"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
