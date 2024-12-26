import React from "react";
import MainButton from "../../../components/MainButton";
import { tokenDataAtom } from "../../../store";
import { useAtom } from "jotai";

const Header = () => {
  const [data] = useAtom(tokenDataAtom);

  return (
    <header className="border-b-4 border-gray-400/15 flex justify-between py-6 px-10 mx-auto bg-[#DCE2E6] rounded-bl-[48px] rounded-br-[48px]">
      <div className="flex items-center gap-4" data-aos="zoom-in">
        <img
          className="rounded-full border-2"
          src={data?.image_uri || "/images/logosonic.png"}
          alt="logo"
          width={94}
          height={94}
        />
        <h1 className="font-bold text-3xl">{data?.name || "Sonic"}</h1>
      </div>
      <MainButton url="https://pump.fun" target="_blank">
        Pump.fun
      </MainButton>
    </header>
  );
};

export default Header;
