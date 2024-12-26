import React, { useRef } from "react";
import { BiRightArrowCircle, BiLeftArrowCircle } from "react-icons/bi";
import MainButton from "../../../components/MainButton";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SelectSonic = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
        <img
          src={"/images/dogecoin.webp"}
          alt="logo"
          width={180}
          height={140}
        />
      </div>
      <div className="absolute top-10 md:top-20 md:z-0  -z-10 right-40 flex items-center justify-center bg-[#E8E4C1] rounded-full w-[240px] h-[240px]">
        <img
          src={"/images/pepecoin.webp"}
          alt="logo"
          width={180}
          height={140}
        />
      </div>
      <div className="flex w-full justify-center">
        <div
          className="md:h-[500px] w-[600px] flex items-center justify-center gap-10"
          data-aos="zoom-out-up"
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation]}
            loop={true}
            onInit={(swiper) => {
              // Assign swiper navigation to refs
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <img
                src={"/images/collection.png"}
                alt="logo"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"/images/collection.png"}
                alt="logo"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"/images/collection.png"}
                alt="logo"
                width={600}
                height={500}
              />
            </SwiperSlide>
            <button
              ref={prevRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-[1000]"
            >
              <BiLeftArrowCircle size={90} color="#CBC9C9" />
            </button>
            <button
              ref={nextRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-[1000]"
            >
              <BiRightArrowCircle size={90} color="#CBC9C9" />
            </button>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SelectSonic;
