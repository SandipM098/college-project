import React from "react";

const WhyUsCard = ({ icon, title }) => {
  return (
    <div className="text-center p-8 space-y-4 bg-slate-100 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out rounded-md cursor-pointer group">
      <p>{icon}</p>
      <h1 className="text-blue-900 text-3xl font-bold group-hover:text-green-500">
        {title}
      </h1>
      <p className="text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est optio
        perferendis voluptatem recusandae repellat aspernatur eveniet eum, id
        expedita ad aut ea cumque fugiat earum inventore minus excepturi
        delectus obcaecati!
      </p>
    </div>
  );
};

export default WhyUsCard;
