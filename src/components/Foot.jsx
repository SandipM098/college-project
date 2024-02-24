import React from "react";
import { Link } from "react-router-dom";

const Foot = () => {
  return (
    <footer className="mt-14 bg-zinc-900 text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        <div className="w-full md:w-1/4">
          <h3 className="font-semibold text-2xl pb-4">RideOrDrive</h3>
          <p className="mb-2 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            pariatur repudiandae quos porro aspernatur eveniet? Eveniet
            accusantium quisquam quae aliquam atque vitae, inventore repudiandae
            fugit? Debitis rem eaque facere suscipit!
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">
            Pages Links
          </h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/About"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              About Us
            </Link>
            <Link
              to="/Car"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              Our Cars
            </Link>
            {/* <Link
                to="/Bike"
                className="hover:text-blue-900 transition duration-200 ease-linear"
              >
                Our Bikes
              </Link> */}
            <Link
              to="/Service"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              Services
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Used Cars for sale</h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              Toyota Camry
            </Link>
            <Link
              to="/"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              Chevrolet Corvette
            </Link>
            <Link
              to="/"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              Volkswagen Golf
            </Link>
            <Link
              to="/"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              Nissan Rogue
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl pb-4 pt-5 md:pt-0">Learn More</h1>
          <div className="flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              User-friendly
            </Link>
            <Link
              to="/"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              Search and Filters
            </Link>
            <Link
              to="/"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              Secure Payment
            </Link>
            <Link
              to="/"
              className="hover:text-blue-900 transition duration-200 ease-linear"
            >
              Geolocation Services
            </Link>
          </div>
        </div>
      </div>
      |
      <div>
        <p>
          @copyright developed by
          <span>TrickSter</span>
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Foot;
