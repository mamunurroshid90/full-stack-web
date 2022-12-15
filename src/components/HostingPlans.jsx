import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { ImHome2 } from "react-icons/im";
import { FaDatabase } from "react-icons/fa";
import { GrCalculator } from "react-icons/gr";

export const HostingPlans = () => {
  const plans = [
    {
      id: 1,
      title: "STARTED",
      icon: [<ImHome2 />],
      dollar: "$20 ",
      month: "/ per month",
      features: "Features",
      icon2: [<BsCheckLg />],
      details: [
        "Domain Name",
        "3 Web sites",
        "20 GB SSD",
        "Free CDN",
        "Unmetered Bandwith",
        "Free website builder",
      ],
    },
    {
      id: 2,
      text: "orange",
      bg: "orange",
      title: "PREMIUM",
      icon: [<FaDatabase />],
      dollar: "$83 ",
      month: "/ per month",
      features: "Features",
      icon2: [<BsCheckLg />],
      details: [
        "Domain Name",
        "3 Web sites",
        "20 GB SSD",
        "Free CDN",
        "Unmetered Bandwith",
        "Free website builder",
      ],
    },
    {
      id: 3,
      title: "UNLIMITED",
      icon: [<GrCalculator />],
      dollar: "$123 ",
      month: "/ per month",
      features: "Features",
      icon2: <BsCheckLg />,
      details: [
        "Domain Name",
        "3 Web sites",
        "20 GB SSD",
        "Free CDN",
        "Unmetered Bandwith",
        "Free website builder",
      ],
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto my-24 text-center">
      <h1 className="text-5xl font-bold">
        Our <span className="text-[#51CA18]">Hosting</span> Plans
      </h1>
      <p className="text-lg my-10">All plans also include these benefits:</p>
      <div className="grid md:grid-cols-3 mt-12 gap-7  ">
        {plans.map(
          ({
            id,
            title,
            icon,
            dollar,
            month,
            features,
            icon2,
            details,
            bg,
            text,
          }) => (
            <div className="py-8 shadow-2xl rounded-md" key={id}>
              <h1 className="text-3xl font-medium">{title}</h1>
              <div className="justify-center py-4 flex items-center w-full">
                <span
                  className="text-[#51CA18] text-5xl p-5 border-2 border-green-600  rounded-full"
                  style={{
                    color: text || "#18CA18",
                  }}
                >
                  {icon}
                </span>
              </div>
              <h3>
                <span className="text-2xl font-bold">{dollar}</span>{" "}
                <span className="font-bold text-[#51CA18]">{month}</span>
              </h3>
              <h4
                className="text-2xl font-bold bg-[#18CA18] w-full my-5 py-2 text-white"
                style={{
                  background: bg || "#18CA18",
                }}
              >
                {features}
              </h4>

              <div className="pl-5">
                {details.map((item) => (
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[#51CA18] font-bold"
                      style={{
                        color: text || "#18CA18",
                      }}
                    >
                      {icon2}
                    </span>
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
