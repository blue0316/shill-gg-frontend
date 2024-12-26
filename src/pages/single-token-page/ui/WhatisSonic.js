import React from "react";
import { GiCondorEmblem } from "react-icons/gi";
import { GiConcentrationOrb } from "react-icons/gi";
import { SiIcons8 } from "react-icons/si";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { FaFonticonsFi } from "react-icons/fa";
import { MotionDiv, MotionP } from "../../../lib/utils";
import SonicCard from "../../../components/SonicCard";
import MainButton from "../../../components/MainButton";
import { useAtom } from "jotai";
import { tokenDataAtom } from "../../../store";

const WhatisSonic = () => {
  const [data] = useAtom(tokenDataAtom);

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center px-20 py-10"
      data-aos="fade-up"
    >
      <article className="relative w-full flex flex-col items-start justify-center rounded-t-[2rem] p-16 bg-[#3B3F3E]">
        <div>
          <MotionP
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-white lg:text-[80px] text-[80px] font-extrabold tracking-tighter"
          >
            WHAT IS '{data ? data.name : "SONIC"}'?
          </MotionP>
          <MotionP
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="text-white text-[28px] text-justify max-w-[600px] min-h-60 pb-8"
          >
            {data
              ? data.description
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis perferendis labore cupiditate aspernatur, dolores quidem asperiores! Incidunt porro voluptates repellendus."}
          </MotionP>
        </div>
        <div className="absolute -bottom-14">
          <MainButton className="border-4 text--[#B0B0B0] bg-[#383838] border-[#B0B0B0]">
            See all details
          </MainButton>
        </div>
        <SonicCard />
      </article>
      <MotionDiv
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="w-full flex items-start justify-center gap-6 md:gap-16 rounded-b-[32px] px-12 py-12 lg:py-16 bg-[#F1575D]"
      >
        <FaFonticonsFi size={90} color="white" />
        <GiCondorEmblem size={90} color="white" />
        <SiIcons8 size={90} color="white" />
        <GiConcentrationOrb size={90} color="white" />
        <PiContactlessPaymentFill size={90} color="white" />
        <FaFonticonsFi size={90} color="white" />
        <GiCondorEmblem size={90} color="white" />
        <SiIcons8 size={90} color="white" />
        <GiConcentrationOrb size={90} color="white" />
        <PiContactlessPaymentFill size={90} color="white" />
      </MotionDiv>
    </div>
  );
};

export default WhatisSonic;
