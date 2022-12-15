import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";

export const Team = () => {
  const teams = [
    {
      id: 1,
      image: "/images/person1.jpg",
      socialIcon: [
        <FaInstagramSquare />,
        <FaFacebookSquare />,
        <FaLinkedin />,
        <FaYoutubeSquare />,
      ],
      bgColor: "bg-white",
      name: "DANIEL SMITH",
      title: "Manager",
    },
    {
      id: 2,
      image: "/images/person2.jpg",
      socialIcon: [
        <FaInstagramSquare />,
        <FaFacebookSquare />,
        <FaLinkedin />,
        <FaYoutubeSquare />,
      ],
      name: "DANIEL SMITH",
      title: "Manager",
    },
    {
      id: 3,
      image: "/images/person3.jpg",
      socialIcon: [
        <FaInstagramSquare />,
        <FaFacebookSquare />,
        <FaLinkedin />,
        <FaYoutubeSquare />,
      ],
      name: "DANIEL SMITH",
      title: "Manager",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto my-20 text-center">
      <h1 className="text-5xl font-bold">
        Our <span className="text-[#06A506]">Team</span>
      </h1>
      <p className="text-lg my-10 w-2/4 mx-auto">
        We Are A Creative Agency Located In Sydney, Australia. It Is A Long
        Established Fact That A Reader Will Be Distracted By The Readable
        Content.
      </p>
      <div className="md:flex justify-between">
        {teams.map(({ id, image, socialIcon, name, title }) => (
          <div key={id} className="relative">
            <img
              className="md:w-[370px] w-full h-[400px] object-cover  rounded"
              src={image}
              alt=""
            />
            <div className="absolute bottom-36 items-center w-full">
              <p className="flex justify-center text-4xl gap-5 text-[#b5f7b5]">
                {socialIcon}
              </p>
            </div>
            <div className="absolute bottom-0 text-white flex flex-col py-5 bg-[#06A506] w-full items-center">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <h6 className="text-lg">{title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
