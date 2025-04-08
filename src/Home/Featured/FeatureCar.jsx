import React from "react";

const FeatureCar = ({ id, name, img, price }) => {
  console.log("Image URL:", img);
  return (
    <div
      className="border-2 border-zinc-900 bg-slate-100 text-black rounded-xl mb-6 mx-3 
                    cursor-pointer transform hover:scale-105 transition-all duration-500 ease-in-out 
                    shadow-lg hover:shadow-2xl"
    >
      <div className="overflow-hidden">
        <img
          key={id}
          src={img}
          alt={name}
          className="rounded-t-xl h-48 w-full object-cover transform hover:scale-110 
                    transition-transform duration-700 ease-out"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-5 gap-3">
        <h1 className="font-bold text-xl text-blue-900 tracking-wide">
          {name}
        </h1>
        <h2 className="font-medium text-lg text-gray-700">
          Starting at <span className="text-green-600 font-bold">${price}</span>
        </h2>
      </div>
    </div>
  );
};

export default FeatureCar;
