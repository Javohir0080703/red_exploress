import React from "react";
import bgImg from '../assets/img/TravelTipspexels.png'
import Header from "./Header";
const TravelMain = () => {
  return (
    <section
    className="pt-9"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <Header/>
      <div className="flex items-center justify-center h-[420px]">
        <h1 className="font-extrabold text-[64px] leading-[76px] text-white">Travel Tips</h1>
      </div>
    </section>
  );
};

export default TravelMain;
