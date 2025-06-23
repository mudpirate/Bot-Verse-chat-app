import React from "react";
import logo from "../assets/logo123.jpg";
import home from "../assets/home.jpg";

function Navbar() {
  return (
    <>
      <header className="h-17 shadow-xl">
        <div className="flex justify-between relative items-start py-4">
          <div className="logo relative top-0 left-4 w-10 h-12 ">
            <img src={logo} className="rounded-xl" alt="logo" />
          </div>
          <div className="menu hidden md:block">
            <ul className="flex justify-between relative left-10 gap-8">
              <li className="text-black text-2xl hover:text-pink-600 transition-colors cursor-pointer font-serif">
                Home
              </li>
              <li className="text-black text-2xl hover:text-pink-600 transition-colors cursor-pointer font-serif">
                Features
              </li>
              <li className="text-black text-2xl hover:text-pink-600 transition-colors cursor-pointer font-serif">
                Pricing
              </li>
            </ul>
          </div>
          <div className="buttons relative right-8 gap-2 flex">
            <button className="px-4 py-2 border-2 bg-pink-200 border-black rounded-2xl text-black hover:text-pink-600 transition-colors font-serif">
              Login
            </button>
            <button className="px-4 py-2 bg-pink-300 text-black rounded-2xl hover:from-pink-500 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 font-medium">
              Signup
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
