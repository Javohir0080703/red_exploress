import React from "react";
import bgImg from "../assets/img/AboutUsImg.png";
import Header from "./Header";
const About_Us_Main = () => {
  return (
    <section
      className="pb-7 pt-9 h-[577px]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="containerb">
        <div className="flex items-center justify-center h-[400px]">
          <h1 className="font-extrabold text-[64px] leading-[78px] text-center text-white">
            About us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About_Us_Main;
