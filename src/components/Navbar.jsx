import React from "react";
import { SiSpyderide } from "react-icons/si";
const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between">
        <div className="mx-2">
          {/*Logo Name*/}
          <a href="/"><SiSpyderide size={45} className="mx-5 text-rose-950" /></a>
          <a href="/" className="font-bold  text-1.8xl text-rose-950">
            RideOrDrive
          </a>
        </div>
        <div className="flex items-center gap-5 font-medium text-xl">
          <a
            href="/"
            className="hover:text-blue-900 transition duration-200 ease-linear">
        Home
          </a>
          <a
            href="/"
            className="hover:text-blue-900 transition duration-200 ease-linear"
          >
            About Us
          </a>
          <a
            href="/"
            className="hover:text-blue-900 transition duration-200 ease-linear"
          >
            Our Cars
          </a>
          <a
            href="/"
            className="hover:text-blue-900 transition duration-200 ease-linear"
          >
            Our Bikes
          </a>
          <a
            href="/"
            className="hover:text-blue-900 transition duration-200 ease-linear"
          >
            Services
          </a>

          <button>Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
