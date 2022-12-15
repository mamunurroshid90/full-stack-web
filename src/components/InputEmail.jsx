import React from "react";

export const InputEmail = () => {
  return (
    <div className="h-44 bg-[#18CA18] flex justify-center items-center">
      <input
        className="pr-16 pl-3 py-3 rounded-full"
        type="email"
        placeholder="Enter your Email"
      />
      <button className="md:px-8 py-3 rounded-full -ml-8 text-white font-semibold bg-[#FFA500]">
        Subscribe
      </button>
    </div>
  );
};
