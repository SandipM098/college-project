import React from "react";
import img from "../../assets/image/mission.jpg";

function OurMission() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-4xl text-center">
          Our <span className="text-blue-900">Mission</span>
        </h1>
      </div>
    <div className="flex flex-col justify-center md:flex-row items-center gap-5 mt-8 mx-5">

      <div className="w-full md:w-2/4">
        {/* img section */}
        <img src={img} alt="img" className="rounded-lg" />
      </div>

      <div className="w-full md:w-2/4 space-y-4">
        {/* content section */}
        <h1 className="font-bold text-blue-900 text-lg lg:text-3xl">To create a community where every journey is extraoridinary.</h1> 
        <h2 className="font-semibold text-lg lg:text-2xl ">
          Empower individuals to achieve sustainable mobility solutions and
          inspire a positive impact on the environment.
        </h2>
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
          quisquam?
        </p>
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem
          facilis at vel architecto! Quia accusantium, dignissimos minima
          molestias delectus voluptatem exercitationem deleniti iure sint, illum
          dolore tempora porro doloremque.
        </p>
      </div>
    </div>
    </div>
  );
}

export default OurMission;
