import { LuSparkle } from "react-icons/lu";
import { FaReddit } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare, FaArrowRight } from "react-icons/fa";
import { MotionDiv, MotionImg } from "../../../lib/utils";
import { useAtom } from "jotai";
import { tokenDataAtom } from "../../../store";
import MainButton from "../../../components/MainButton";

const HeroSection = () => {
  const [data] = useAtom(tokenDataAtom);

  return (
    <div className="relative h-[1400px] flex flex-col items-center justify-between md:justify-start gap-48 py-24 px-10 bg-[#DCE2E6] rounded-tl-[48px] rounded-tr-[48px]">
      <div className="absolute top-0 rounded-t-[32px] grid2 grid grid-cols-6 grid-rows-2 w-full h-[600px] ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="absolute top-[600px] grid2 grid grid-cols-6 grid-rows-2 w-full h-[800px] ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <MotionDiv
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="w-full flex items-center justify-center lg:gap-10 md:gap-32 px-10"
      >
        <p className="lg:text-[10rem] text-[9rem] font-extrabold whitespace-nowrap">
          WELCOME TO
        </p>

        <p className="hidden md:block lg:text-2xl text-xl text-justify lg:max-w-[600px] max-w-[400px]">
          {data
            ? data.description
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique accusantium eveniet consequatur! Quod cupiditate architecto sit sunt eos harum nostrum iste consequatur velit vero libero aspernatur, vitae officiis ipsum?"}
        </p>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="z-10 w-full md:flex items-center justify-center gap-10 px-10 "
      >
        <div className="shadow-2xl hidden w-[280px] h-[280px] md:flex flex-col items-start pl-8 justify-center md:gap-4 rounded-[32px] bg-[#F1F5F8]/50">
          <div className="flex items-center justify-center gap-8">
            <p className=" text-[32px] font-bold ">NFT</p>
            <FaArrowRight size={15} />
          </div>
          <ul className="text-2xl md:flex flex-col items-start justify-between gap-4">
            <li className="hover:underline">
              <a href="/">ROADMAP</a>
            </li>
            <li className="hover:underline">
              <a href="/">TOKENOMICS</a>
            </li>
            <li className="hover:underline">
              <a href="/">SONICLAB</a>
            </li>
          </ul>
        </div>
        <p className="md:flex-1 text-center md:text-right lg:text-[12rem] text-[9rem] font-extrabold">
          {data ? data.name : "SONIC"}
        </p>
      </MotionDiv>
      <MotionDiv
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        className="w-full flex items-center justify-between gap-10 px-10 z-10"
      >
        <div className="flex flex-col items-start justify-center gap-8">
          <p className="text-2xl text-justify font-regular md:max-w-[460px] lg:max-w-[500px] hidden md:block">
            {data
              ? data.description
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique accusantium eveniet consequatur! Quod cupiditate architecto sit sunt eos"}
          </p>
          <MainButton
            className="!bg-black hover:!bg-slate-900"
            url="https://pump.fun"
            target="_blank"
          >
            Get Started
          </MainButton>
        </div>
        <div className="z-10 flex flex-col items-start justify-center gap-8">
          <div className="max-w-[300px] font-bold md:flex items-center gap-4 hidden">
            <p className="text-4xl">Follow our social media</p>
            <LuSparkle className="animate-rotation" size={60} />
          </div>
          <div className="w-full">
            <ul className="w-full flex items-center justify-between gap-3">
              <li>
                <a href="/">
                  <FaReddit
                    size={60}
                    className="hover:shadow-xl rounded-full transition-all"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <AiFillTwitterCircle
                    size={60}
                    className="hover:shadow-xl rounded-full transition-all"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagramSquare
                    size={60}
                    className="hover:shadow-xl rounded-2xl transition-all"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MotionDiv>
      <MotionDiv className="lg:hidden sm:block absolute z-30 -top-60 md:left-[32rem] w-full flex items-center justify-center animate-floating">
        <MotionImg
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          src="/hero-main.svg"
          alt="hero"
          width={600}
          height={600}
        />
      </MotionDiv>
      <MotionImg
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="w-[50vw] lg:block hidden absolute z-30 top-96 left-[32rem] animate-floating"
        src="/hero-main.svg"
        alt="hero"
      />
    </div>
  );
};

export default HeroSection;
