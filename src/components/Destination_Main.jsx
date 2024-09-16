import React from "react";
import Header from "./Header";
import DestinationBg from "../assets/img/DestinationBg.png";
const Destination_Main = () => {
  return (
    <section
    className="pt-9"
      style={{
        backgroundImage: `url(${DestinationBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="flex items-center justify-center h-[422px]">
        <h1 className="text-white font-extrabold text-6xl leading-10 ">Destination</h1>
      </div>
    </section>
  );
};

export default Destination_Main;
