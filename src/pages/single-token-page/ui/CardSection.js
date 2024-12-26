import React from "react";
import Card from "../../../components/Card";

const CardSection = () => {
  return (
    <div className="py-12 flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-8 rounded-2xl">
      <Card name={"/images/card2.png"} className="h-[276px] bg-[#FCDCD1]" />
      <Card name={"/images/card3.png"} className="h-[276px] bg-[#D9EAF1]" />
      <Card name={"/images/card1.png"} className="h-[276px] bg-[#E8E4C1]" />
    </div>
  );
};

export default CardSection;
