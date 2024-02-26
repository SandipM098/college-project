import React from "react";
import img from '../assets/image/Vision.jpg'
export default function Vision() {
  return (
    <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-16">
      {/* img section */}
      <div className="w-full md:w-2/5">
        <img src={img} alt="img" className="rounded-lg" />
      </div>

      <div className="w-full md:w-2/4 space-y-4 ">
        {/* content section */}
        <h1 className="text-4xl font-bold">Our Vision</h1>
        <h2 className=" font-semibold text-lg lg:text-2.5xl">
          Empower individuals to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.
        </h2>
        <p className="text-sm lg:text-base "> 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, nemo!
        </p>
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          architecto distinctio maiores reprehenderit sapiente consequuntur
          totam rerum laboriosam aut itaque iste fuga quam nobis error fugit
          modi repudiandae facilis aliquid!
        </p>
      </div>
    </div>
  );
}
