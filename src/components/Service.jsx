import React from "react";
import { FaMagic } from "react-icons/fa";

export const Service = () => {
  const services = [
    {
      id: 1,
      icon: [<FaMagic />],
      title: "MARKETING",
      details:
        "Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.",
    },
    {
      id: 2,
      icon: [<FaMagic />],
      title: "MARKETING",
      details:
        "Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.",
    },
    {
      id: 3,
      icon: [<FaMagic />],
      title: "MARKETING",
      details:
        "Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.",
    },
    {
      id: 4,
      icon: [<FaMagic />],
      title: "MARKETING",
      details:
        "Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.",
    },
    {
      id: 5,
      icon: [<FaMagic />],
      title: "MARKETING",
      details:
        "Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.",
    },
    {
      id: 6,
      icon: [<FaMagic />],
      title: "MARKETING",
      details:
        "Vivamus congue diam vitae tortor imperdiet congue. Nullam sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor massa.",
    },
  ];
  return (
    <div className="bg-[#F1E8E8]">
      <div className="max-w-[1240px] mx-auto py-14">
        <div className="my-12 text-center">
          <h1 className="text-5xl font-bold">
            Our <span className="text-[#27e627] underline">Service</span>
          </h1>
          <p className="text-lg text-center mt-8">
            We Are A Creative Agency Located In Sydney, Australia. It Is A Long{" "}
            <br />
            Established Fact That A Reader Will Be Distracted By The Readable
            Content
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-7 ">
          {services.map(({ id, icon, title, details }) => (
            <div
              key={id}
              className="flex items-center justify-center bg-[#EBE3E3] rounded-lg hover:scale-105 duration-500 p-7"
            >
              <p className="text-4xl text-[#27e627] mx-10">{icon}</p>
              <div>
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p>{details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
