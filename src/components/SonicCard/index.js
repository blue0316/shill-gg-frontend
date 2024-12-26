import { MotionDiv } from "../../lib/utils";
import { FaCircleArrowUp } from "react-icons/fa6";
import { useAtom } from "jotai";
import { tokenDataAtom } from "../../store";

const SonicCard = () => {
  const [data] = useAtom(tokenDataAtom);

  return (
    <MotionDiv
      data-aos="fade-left"
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="absolute w-[320px] left-[70%] -bottom-24 hidden md:block"
    >
      <div className="bg-[#F2585E] flex items-center justify-center rounded-t-[32px] border-4 border-[#B0B0B0] overflow-hidden">
        <img
          className="hidden w-full object-cover lg:block"
          src={data ? data.image_uri : "/images/blacksonic.png"}
          alt="logo"
          width={300}
          height={300}
        />
        <img
          className="lg:hidden block"
          src={data ? data.image_uri : "/images/blacksonic.png"}
          alt="logo"
          width={260}
          height={300}
        />
      </div>
      <div className="flex flex-col items-start justify-center rounded-b-[32px] border-4 border-[#B0B0B0] bg-[#383838] px-4 py-6">
        <p className="text-white text-2xl">Best offer</p>
        <div className="w-full flex items-start justify-between">
          <p className="text-2xl text-white leading-tight">
            <span className="text-[60px] font-bold text-white">368</span> ETH
          </p>
          <FaCircleArrowUp className="rotate-45" size={60} color="white" />
        </div>
      </div>
    </MotionDiv>
  );
};

export default SonicCard;
