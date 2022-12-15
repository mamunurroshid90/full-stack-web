import React from "react";
import "./Count.css";

export const Count = () => {
  const carts = [
    {
      id: 1,
      count: 552,
      title: "Happy clients",
    },
    {
      id: 2,
      count: 965,
      title: "Happy clients",
    },
    {
      id: 3,
      count: 785,
      title: "Happy clients",
    },
    {
      id: 4,
      count: 256,
      title: "Happy clients",
    },
  ];
  return (
    <div className="container-2 ">
      <div className="md:flex justify-between` max-w-[1240px] mx-auto ">
        {carts.map(({ id, count, title }) => (
          <div key={id} className="my-6 px-3">
            <div className="bg-[#278C27] opacity-90 mr-8 md:w-72 flex flex-col items-center justify-center h-40 text-center text-white w-full">
              <h1 className="text-4xl font-bold">{count}</h1>
              <p className="text-sm w-auto">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
