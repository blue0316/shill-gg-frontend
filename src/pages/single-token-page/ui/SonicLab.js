import React from "react";
import { LuSparkle } from "react-icons/lu";
import { BiRightArrowAlt } from "react-icons/bi";
import MainButton from "../../../components/MainButton";

const SonicLab = () => {
  return (
    <div className="my-12 px-8 lg:px-5 " data-aos="fade-up">
      <div className="flex items-center justify-between  py-4">
        <div className="flex items-center justify-center gap-2">
          <LuSparkle size={30} />
          <h2 className="leading-3 text-2xl md:text-4xl font-extrabold">
            SONICLAB
          </h2>
        </div>
        <MainButton className="flex items-center justify-center gap-2">
          See more <BiRightArrowAlt />{" "}
        </MainButton>
      </div>
      <div className="flex items-center justify-between px-5 gap-2 py-6 border-t-2 border-[#C9C7C7]">
        <p className="text-[11px] md:text-sm text-justify max-w-48 md:max-w-80 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          quisquam dolorum praesentium.
        </p>
        <h2 className="leading-3 text-2xl md:text-4xl font-extrabold">
          STAKING
        </h2>
      </div>
      <div className="flex items-center justify-between px-5 gap-2 py-6 border-t-2 border-[#C9C7C7]">
        <p className="text-[11px] md:text-sm text-justify max-w-48 md:max-w-80 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          quisquam dolorum praesentium.
        </p>
        <h2 className="leading-3 text-2xl md:text-4xl font-extrabold">
          BRIDGE
        </h2>
      </div>
      <div className="flex items-center justify-between px-5 gap-2 py-6 border-t-2 border-[#C9C7C7]">
        <p className="text-[11px] md:text-sm text-justify max-w-48 md:max-w-80 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          quisquam dolorum praesentium.
        </p>
        <h2 className="leading-3 text-2xl md:text-4xl font-extrabold">DEX</h2>
      </div>
    </div>
  );
};

export default SonicLab;
