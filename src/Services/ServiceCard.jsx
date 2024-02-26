import React from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer">
      <p>{icon}</p>
      <h1 className="text-blue-900 text-3xl font-bold">{title}</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, amet
        harum aperiam quo vitae accusantium maiores delectus debitis blanditiis
        temporibus in totam commodi sapiente deleniti quibusdam qui!
        Consequatur, deleniti quo!
      </p>
    </div>
  );
};

export default ServiceCard;
