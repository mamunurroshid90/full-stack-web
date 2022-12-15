import React from "react";
import { FaUsersCog, FaLightbulb } from "react-icons/fa";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { RiComputerFill } from "react-icons/ri";

export const Agency = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-20">
      <h1 className="md:text-4xl text-2xl font-bold text-center mb-3">
        MODERN <span className="text-[#18CA18]">DIGITAL</span> AGENCY
      </h1>
      <p className="text-center md:w-[700px] mx-auto text-sm px-3 md:text-lg w-full">
        We Are A Creative Agency Located In Sydney, Australia. It Is A Long
        Established Fact That A Reader Will Be Distracted By The Readable
        Content.
      </p>
      <div className="md:flex justify-between mt-12">
        <div className="px-4">
          <div className="flex items-center">
            <p>
              <FaUsersCog
                className="mr-8 text-[#18CA18]"
                size={40}
              ></FaUsersCog>
            </p>
            <div>
              <h2 className="text-2xl font-semibold mb-1">CREATIVE DESIGNS</h2>
              <p>
                Vivamus congue diam vitae tortor imperdiet congue. <br /> Nullam
                sagittis, tristique diam, ut ullamcorper tellus. Cras porttitor
                massa.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p>
              <FaLightbulb
                className="mr-8 text-[#18CA18]"
                size={40}
              ></FaLightbulb>
            </p>
            <div>
              <h2 className="text-2xl font-semibold mb-1 mt-8">
                CREATIVE DESIGNS
              </h2>
              <p>
                Vivamus congue diam vitae tortor imperdiet congue.
                <br /> Nullam sagittis, tristique diam, ut ullamcorper tellus.
                Cras porttitor massa.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="flex items-center">
            <p>
              <BsPhoneVibrateFill className="mr-8 text-[#18CA18]" size={40} />
            </p>
            <div>
              <h2 className="text-2xl font-semibold mb-1">CREATIVE DESIGNS</h2>
              <p>
                Vivamus congue diam vitae tortor imperdiet congue.
                <br /> Nullam sagittis, tristique diam, ut ullamcorper tellus.
                Cras porttitor massa.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p>
              <RiComputerFill className="mr-8 text-[#18CA18]" size={40} />
            </p>
            <div>
              <h2 className="text-2xl font-semibold mb-1 mt-8">
                CREATIVE DESIGNS
              </h2>
              <p>
                Vivamus congue diam vitae tortor imperdiet congue.
                <br /> Nullam sagittis, tristique diam, ut ullamcorper tellus.
                Cras porttitor massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
