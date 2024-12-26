import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import GridPatern from "../../../components/GridPatern";
import Footer from "./Footer";
import MainButton from "../../../components/MainButton";

const MemeCoin = () => {
  return (
    <div className="relative h-[1440px]">
      <h2
        className="absolute top-32 text-[3.75rem] md:text-[6rem] lg:text-[7.5rem] text-center text-white font-extrabold"
        data-aos="zoom-out-down"
      >
        SONIC IS A MEME COIN CRYPTOCURRENCY
      </h2>
      <img
        data-aos="zoom-out-up"
        className="absolute top-40 lg:left-128 md:left-[380px] "
        src="/images/last.png"
        alt="logo"
        width={1000}
        height={1000}
      />
      <div className="absolute top-[850px] px-4 md:px-32 w-full flex items-center justify-between">
        <MainButton className="flex items-center justify-center gap-4 text-black text-[32px]">
          See more <BiRightArrowAlt />
        </MainButton>
        <div
          className="flex items-center justify-center gap-4"
          data-aos="fade-left"
        >
          <img
            className="rounded-full border-4"
            src="/images/logosonic.png"
            alt="logo"
            width={80}
            height={80}
          />
          <h1 className="font-bold text-white text-[32px]">SONIC</h1>
        </div>
      </div>
      <div className="rounded-b-[3rem] overflow-hidden">
        <GridPatern />
      </div>
      <div className="rounded-t-[3rem] overflow-hidden">
        <GridPatern />
      </div>
      <Footer />
    </div>
  );
};

export default MemeCoin;
