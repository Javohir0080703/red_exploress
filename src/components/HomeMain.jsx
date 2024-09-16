import React from "react";
import Header from "./Header";
import bgImg from "../assets/img/HomeMain.png";
import { Link } from "react-router-dom";
import btnIMg from "../assets/img/btnImg.png";
const HomeMain = () => {
  return (
    <section
      className="py-9 "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="containerb mt-[51px]">
        <h2 className="font-bold text-3xl leading-9 text-white  text-center mb-3.5">
          THE COUNTER: <span className="text-#FFA500">70</span> Countries{" "}
          <span className="text-#FFA500">1036</span> Cities
        </h2>
        <h1 className="w-full max-w-[800px] mx-auto font-extrabold text-[64px] leading-[89px] text-center text-white mb-7">
          Leave your mark on all over the world
        </h1>
        <div className="flex items-center justify-center mb-8">
          <Link className="inline-block font-medium leading-7 text-2xl text-center text-white py-7 px-12 bg-#0336FF rounded-lg ">
            Read More
          </Link>
        </div>
        <p className="font-medium text-2xl leading-[48px] text-white text-center">
          Scroll Down to Continue
        </p>
        <div className="flex items-center justify-center">
          <button>
            <img src={btnIMg} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
