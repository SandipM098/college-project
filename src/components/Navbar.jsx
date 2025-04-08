import React, { useState } from "react";
import { SiSpyderide } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg py-3 backdrop-blur-md">
      <nav className="flex items-center justify-between px-4 md:px-8 ml-5">
        {/* Combined Logo Icon + Text in one Link */}
        <Link
          to="/"
          className="flex items-center gap-2 font-extrabold text-2xl text-blue-300 tracking-wider hover:scale-105 transition-transform duration-300"
        >
          <SiSpyderide size={40} className="text-blue-500" />
          RideOrDrive
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-lg">
          {["/", "/About", "/Car", "/Service"].map((path, i) => {
            const labels = ["Home", "About Us", "Our Cars", "Services"];
            return (
              <Link
                key={i}
                to={path}
                className="text-gray-300 hover:text-indigo-400 hover:scale-105 transition-all duration-300"
              >
                {labels[i]}
              </Link>
            );
          })}
          <Link to="/SignIn">
            <button className="mt-4 border bg-blue-600 text-white border-blue-600 rounded-full py-2 px-6 hover:bg-indigo-400 hover:text-white transition-all duration-300">
              Sign In
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          {menu ? (
            <AiOutlineClose
              size={25}
              onClick={handleChange}
              className="text-gray-300 hover:text-indigo-400 transition duration-300"
            />
          ) : (
            <RiMenuUnfoldFill
              size={25}
              onClick={handleChange}
              className="text-gray-300 hover:text-indigo-400 transition duration-300"
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed top-0 left-0 w-3/4 h-screen bg-gray-900 bg-opacity-95 backdrop-blur-md flex flex-col pt-24 gap-10 text-center text-xl transition-transform duration-500 ease-in-out shadow-2xl`}
      >
        <Link
          to="/"
          onClick={handleChange}
          className="text-gray-300 hover:text-indigo-400 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/About"
          onClick={handleChange}
          className="text-gray-300 hover:text-indigo-400 transition duration-300"
        >
          About Us
        </Link>
        <Link
          to="/Car"
          onClick={handleChange}
          className="text-gray-300 hover:text-indigo-400 transition duration-300"
        >
          Our Cars
        </Link>
        <Link
          to="/Service"
          onClick={handleChange}
          className="text-gray-300 hover:text-indigo-400 transition duration-300"
        >
          Services
        </Link>
        <Link to="/SignIn" onClick={handleChange}>
          <button className="mt-4 border bg-blue-600 text-white border-blue-600 rounded-full py-2 px-8 hover:bg-indigo-400 hover:text-white transition-all duration-300">
            Sign In
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;