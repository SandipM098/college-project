import React from "react";
import img from "../../assets/image/hero.jpg";

export default function Hero() {
  return (
    <div className="bg-black text-white ">
      <div className="h-screen container flex flex-col justify-center  md:flex-row items-center">
        <div className="w-full md:w-2/4 space-y-5 mt-10">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Find Your Perfect Travel Assists
          </h2>
          <p className="text-lg lg:text-2xl font-medium">
            Over 100+ vehicles available
          </p>
          <p className="text-lg lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat
            qui mollitia, dolores rem temporibus eveniet quasi omnis dicta
            suscipit?
          </p>
          <div className="flex gap-8">
            <button className="bg-blue-600 py-1 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear">Explore More</button>
            <button className="border-2 border-neutral-600 py-1 px-4 rounded-md hover:bg-blue-600 transition duration-200 ease-linear">See Cars</button>
            <button className="border-2 border-neutral-600 py-1 px-4 rounded-md hover:bg-blue-600 transition duration-200 ease-linear">See Bikes</button>
          </div>
        </div>
        <div className="w-full md:w-2/4 mt-4">
          {/* image section */}
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}
