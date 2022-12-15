import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className=" bg-gray-200">
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="md:flex justify-between pl-4">
          <div className="md:w-[700px]">
            <h1 className="text-3xl font-bold mb-3">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              tempora accusamus. Labore veniam nesciunt deserunt saepe libero
              repellendus, maxime ipsa architecto ut velit eligendi excepturi,
              ab delectus beatae fuga accusamus?
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-3">Quick Links</h1>
            <ul className="font-medium">
              <li>Home</li>
              <li>About</li>
              <li>Pages</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 text-3xl pl-4">
          <FaInstagramSquare />
          <FaFacebookSquare />
          <FaLinkedin />
          <FaYoutubeSquare />
        </div>
      </div>
    </div>
  );
};
