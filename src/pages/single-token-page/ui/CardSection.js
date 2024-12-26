import React from "react";
import Card from "../../../components/Card";

const CardSection = () => {
  return (
    <div className="py-24 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-10 rounded-[2rem]">
      <Card name={"/images/dogecoin.webp"} className="h-[552px] bg-[#FCDCD1]" />
      <Card name={"/images/pepecoin.webp"} className="h-[552px] bg-[#D9EAF1]" />
      <Card name={"/images/dogscoin.webp"} className="h-[552px] bg-[#E8E4C1]" />
    </div>
  );
};

export default CardSection;
