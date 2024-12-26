import React, { useEffect } from "react";
import Header from "./ui/Header";
import HeroSection from "./ui/HeroSection";
import Banner from "./ui/Banner";
import WhatisSonic from "./ui/WhatisSonic";
import CardSection from "./ui/CardSection";
import SelectSonic from "./ui/SelectSonic";
import SonicLab from "./ui/SonicLab";
import MemeCoin from "./ui/MemeCoin";
import { useLocation } from "react-router-dom";
import { useSetAtom } from "jotai";
import { tokenDataAtom } from "../../store";

const SingleTokenPage = () => {
  const location = useLocation();
  const setData = useSetAtom(tokenDataAtom);

  useEffect(() => {
    if (location.state && location.state.data) {
      setData(location.state.data);
    }
  }, [location.state, setData]);

  return (
    <main className="text-black bg-white p-0">
      <div className="overflow-hidden">
        <Header />
        <HeroSection />
        <Banner />
        <WhatisSonic />
        {/* <CardSection /> */}
        <SelectSonic />
        <SonicLab />
        <Banner />
        <MemeCoin />
      </div>
    </main>
  );
};

export default SingleTokenPage;
