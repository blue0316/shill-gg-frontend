import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const Card = ({ name, className }) => {
  return (
    <div
      className=" lg:w-[250px] lg:h-[500px] md:w-[180px] md:h-[400px] bg-black rounded-2xl flex flex-col items-center justify-center"
      data-aos="flip-left"
    >
      <div
        className={`w-full flex items-center justify-center rounded-2xl border-2 border-[#2D2C2B] ${className}`}
      >
        <img src={name} alt="logo" width={220} height={220} />
      </div>
      <div className="hidden w-full md:flex flex-col items-start justify-center p-5 rounded-t-2xl bg-white border-2 border-[#2D2C2B]">
        <h2 className="flex-1 lg:text-xl text-sm font-extrabold">
          SONIC LAUNCH PARTY
        </h2>
        <p className="lg:text-xs text-[10px] text-justify">
          The meme coin that is faster than the speed of light inspired by the
          classic video game character.
        </p>
      </div>
      <div className="w-full flex flex-col items-start justify-center px-5 py-2 rounded-b-2xl border-2 border-[#2D2C2B] bg-[#383838] ">
        <p className="text-white text-lg">Best offer</p>
        <div className="w-full flex items-start justify-between">
          <p className="text-xs text-white">
            <span className="text-4xl font-bold text-white">368</span> ETH
          </p>
          <FaCircleArrowUp className="rotate-45" size={40} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Card;
