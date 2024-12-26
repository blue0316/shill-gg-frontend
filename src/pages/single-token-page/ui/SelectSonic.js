import React from "react";
import { BiRightArrowCircle, BiLeftArrowCircle } from "react-icons/bi";
import MainButton from "../../../components/MainButton";

const SelectSonic = () => {
  return (
    <div
      className="relative mt-20 mx-auto flex flex-col items-center justify-center md:gap-[4.5rem] gap-24"
      data-aos="zoom-in-up"
    >
      <h2 className="max-w-[1152px] text-center text-[6rem] md:text-[7.5rem] font-extrabold leading-tight">
        WHAT KIND ARE YOU BEST?
      </h2>
      <p className="text-center text-[28px] max-w-[84rem]">
        Sonic bots is a collection of 10,000 NFTs based off the sonics
        characters, happy to announce that 9.999 will be released soon.
      </p>
      <MainButton className="absolute top-[16rem] text-[32px] border-white border-4">
        Comming Soon
      </MainButton>
      <div className="absolute top-0 left-32 md:z-0 -z-40 flex items-center justify-center bg-[#D1E8F1] rounded-full w-[240px] h-[240px]">
        <img src={"/images/dogecoin.webp"} alt="logo" width={180} height={140} />
      </div>
      <div className="absolute top-10 md:top-20 md:z-0  -z-10 right-40 flex items-center justify-center bg-[#E8E4C1] rounded-full w-[240px] h-[240px]">
        <img src={"/images/pepecoin.webp"} alt="logo" width={180} height={140} />
      </div>
      <div
        className="md:h-[500px]  flex items-center justify-center gap-10"
        data-aos="zoom-out-up"
      >
        <BiLeftArrowCircle size={60} color="#CBC9C9" />
        <img
          src={"/images/collection.png"}
          alt="logo"
          width={500}
          height={500}
        />
        <BiRightArrowCircle size={60} color="#CBC9C9" />
      </div>
    </div>
  );
};

export default SelectSonic;
