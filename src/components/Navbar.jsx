import React, { useState } from "react";
import { SiSpyderide } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className="fixed w-full z-10 bg-black text-white py-2">
      <nav className="flex justify-between">
        <div className="mx-2">
          {/*Logo Name*/}
          <a href="/">
            <SiSpyderide size={45} className="mx-5 text-blue-600" />
          </a>
          <a href="/" className="font-bold  text-1.8xl text-blue-600">
            RideOrDrive
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4 font-medium text-xl mx-1">
          <a
            href="/"
            className="hover:text-blue-900 transition duration-200 ease-linear"
          >
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

          <button className="hidden lg:flex border-2 border-neutral-600 text-lg rounded-lg bg-gray-600 text-cyan-500 px-2 transition duration-200 hover:bg-blue-50 ease-linear">
            Sign In
          </button>
        </div>
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>
      {/* responsive */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-black text-white left-0 top-19 font-semibold text-1.9xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        <a
          href="/"
          className="hover:text-blue-900 transition duration-200 ease-linear"
        >
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

        <button className="hidden lg:flex border-2 border-neutral-600 text-lg rounded-lg bg-gray-600 text-cyan-500 px-2 transition duration-200 hover:bg-blue-50 ease-linear">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
