import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const Card = ({ name, className }) => {
  return (
    <div
      className=" lg:w-[400px] lg:h-[1000px] md:w-[360px] md:h-[800px] bg-black rounded-[2rem] flex flex-col items-center justify-center"
      data-aos="flip-left"
    >
      <div
        className={`w-full flex items-center justify-center rounded-[2rem] border-4 border-[#2D2C2B] ${className}`}
      >
        <img src={name} alt="logo" width={360} height={360} />
      </div>
      <div className="hidden w-full md:flex flex-col items-start justify-center px-10 py-8 rounded-t-[2rem] bg-white border-4 border-[#2D2C2B]">
        <h2 className="flex-1 lg:text-[2.5rem] text-[28px] font-extrabold">
          SONIC LAUNCH PARTY
        </h2>
        <p className="lg:text-[24px] text-[20px] text-justify">
          The meme coin that is faster than the speed of light inspired by the
          classic video game character.
        </p>
      </div>
      <div className="w-full flex flex-col items-start justify-center px-10 py-8 rounded-b-[2rem] border-2 border-[#2D2C2B] bg-[#383838]">
        <p className="text-white text-[36px] leading-none">Best offer</p>
        <div className="w-full flex items-start justify-between">
          <p className="text-[24px] text-white leading-none">
            <span className="text-[72px] font-bold text-white">368</span> ETH
          </p>
          <FaCircleArrowUp className="rotate-45" size={64} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Card;
