import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const BannerItem = ({ icon, name }) => {
  return (
    <div
      data-aos="fade-right"
      className="banner-item px-4 h-[100px] border-t-4 border-b-4 border-dashed border-[#3B3F3E] flex items-center justify-center gap-4"
    >
      {icon ? (
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <img src={icon} width={60} height={60} alt="Coin Logo" />
        </div>
      ) : (
        <FaCircleArrowUp size={60} color="#F4555B" className="rotate-45" />
      )}
      <p className="text-[3rem] font-extrabold text-slate-900 whitespace-nowrap tracking-tighter">
        {name ? name : "MEME COIN"}
      </p>
    </div>
  );
};

export default BannerItem;
