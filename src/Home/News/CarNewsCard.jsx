import React from "react";

function CarNewsCard({ img, desc }) {
  return (
    <div className="mx-4 mb-8 group cursor-pointer">
      <div
        className="relative border-2 rounded-xl overflow-hidden 
                      bg-white transform transition-all duration-500 hover:-translate-y-1 
                      hover:shadow-xl"
      >
        <div className="overflow-hidden">
          <img
            src={img}
            alt={desc}
            className="w-full h-56 object-cover transition-transform duration-700 
                      group-hover:scale-105"
          />
        </div>
        <div
          className="p-5 bg-gradient-to-t from-gray-900 to-transparent absolute bottom-0 
                       w-full text-white"
        >
          <h3
            className="font-semibold text-lg leading-tight transition-all duration-300 
                        group-hover:text-blue-300"
          >
            {desc}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CarNewsCard;
