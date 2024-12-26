import React from "react";
import { LuSparkle } from "react-icons/lu";
import { BiRightArrowAlt } from "react-icons/bi";
import MainButton from "../../../components/MainButton";
import { useAtom } from "jotai";
import { tokenDataAtom } from "../../../store";

const SonicLab = () => {
  const [data] = useAtom(tokenDataAtom);

  return (
    <div className="my-24 px-16 lg:px-10 " data-aos="fade-up">
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center justify-center gap-4">
          <LuSparkle size={60} className="animate-rotation" />
          <h2 className="uppercase leading-3 text-[3rem] md:text-[4.5rem] font-extrabold">
            {data ? data.name : "SONIC"}LAB
          </h2>
        </div>
        <MainButton
          className="flex items-center justify-center text-[32px] gap-4"
          url="https://pump.fun"
          target="_blank"
        >
          See more <BiRightArrowAlt />{" "}
        </MainButton>
      </div>
      <div className="flex items-center justify-between px-10 gap-4 py-12 border-t-4 border-[#C9C7C7]">
        <p className="text-[22px] md:text-[28px] text-justify max-w-[24rem] md:max-w-[40rem] font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          quisquam dolorum praesentium.
        </p>
        <h2 className="leading-6 text-[3rem] md:text-[4,5rem] font-extrabold">
          STAKING
        </h2>
      </div>
      <div className="flex items-center justify-between px-10 gap-4 py-12 border-t-4 border-[#C9C7C7]">
        <p className="text-[22px] md:text-[28px] text-justify max-w-[24rem] md:max-w-[40rem] font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          quisquam dolorum praesentium.
        </p>
        <h2 className="leading-6 text-[3rem] md:text-[4,5rem] font-extrabold">
          BRIDGE
        </h2>
      </div>
      <div className="flex items-center justify-between px-10 gap-4 py-12 border-t-4 border-[#C9C7C7]">
        <p className="text-[22px] md:text-[28px] text-justify max-w-[24rem] md:max-w-[40rem] font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          quisquam dolorum praesentium.
        </p>
        <h2 className="leading-6 text-[3rem] md:text-[4,5rem] font-extrabold">
          DEX
        </h2>
      </div>
    </div>
  );
};

export default SonicLab;
