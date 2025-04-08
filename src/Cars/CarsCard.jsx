import React from "react";

const CarsCard = ({ id, img, name, price }) => {
  return (
    <div
      key={id}
      className="border-2 border-zinc-900 bg-slate-100 text-black rounded-xl cursor-pointer transform hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={img}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-70"
        />
      </div>
      <div className="p-5 space-y-3">
        <h1 className="font-bold text-xl text-blue-900">{name}</h1>
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl">${price}</h3>
          <button className="bg-zinc-900 text-white text-base md:text-lg px-4 py-1.5 rounded-md hover:bg-blue-900 transition-all duration-200 ease-linear">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
