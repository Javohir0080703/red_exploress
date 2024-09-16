import React from "react";
import Header from "./Header";
import bgImg from "../assets/img/ContactMainBg.png";

const ContactMain = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-9"
    >
      <Header />
      <div className="containerb flex items-center justify-center h-[352px]">
      <h1 className="font-extrabold text-[64px] leading-[78px] text-#E5E5E5 text-center">Contact</h1>
      </div>
    </section>
  );
};

export default ContactMain;
