import React from "react";
import { Link } from "react-router-dom";

const Foot = () => {
  return (
    <footer className="mt-14 bg-zinc-900 text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5 gap-10">
        {/* Brand Section */}
        <div className="w-full md:w-1/4">
          <h3 className="font-bold text-2xl pb-4 text-blue-400">RideOrDrive</h3>
          <p className="mb-2 text-sm leading-relaxed text-gray-300">
            RideOrDrive connects car enthusiasts and sellers in one seamless
            platform. Explore our curated collection of cars, enjoy smooth
            services, and find your perfect ride—all in one place.
          </p>
        </div>

        {/* Page Links */}
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Pages Links
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/About"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              About Us
            </Link>
            <Link
              to="/Car"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              Our Cars
            </Link>
            <Link
              to="/Service"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              Services
            </Link>
          </div>
        </div>

        {/* Used Cars */}
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Used Cars for Sale
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              Toyota Camry
            </Link>
            <Link
              to="/"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              Chevrolet Corvette
            </Link>
            <Link
              to="/"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              Volkswagen Golf
            </Link>
            <Link
              to="/"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              Nissan Rogue
            </Link>
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Learn More
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              User-friendly
            </Link>
            <Link
              to="/"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              Search & Filters
            </Link>
            <Link
              to="/"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              Secure Payment
            </Link>
            <Link
              to="/"
              className="hover:translate-x-2 hover:text-blue-400 transition duration-200"
            >
              Geolocation Services
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-4">
        <p className="text-center py-4 text-sm text-gray-400">
          © {new Date().getFullYear()} developed by
          <span className="text-blue-500 font-semibold mx-1">TrickSter</span> |
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Foot;
