import React from "react";

export const WorkPlace = () => {
  const workPlace = [
    {
      id: 1,
      image: "/images/wp1.jpg",
    },
    {
      id: 2,
      image: "/images/wp2.jpeg",
    },
    {
      id: 3,
      image: "/images/wp3.jpeg",
    },
    {
      id: 4,
      image: "/images/wp4.jpg",
    },
    {
      id: 5,
      image: "/images/wp5.jpg",
    },
    {
      id: 6,
      image: "/images/wp6.jpg",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto my-24">
      <div className="text-center my-20">
        <h1 className="text-5xl font-bold">
          Our <span className="text-[#18CA18]">Work Place</span>
        </h1>
        <p className="text-lg font-normal mt-8">
          A full stack web developer is a person who can develop both client and
          server software
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 ">
        {workPlace.map(({ id, image }) => (
          <div key={id} className="hover:scale-105 duration-300">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
