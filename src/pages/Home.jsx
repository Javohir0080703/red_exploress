import React from "react";
import HomeMain from "../components/HomeMain";
import HomeAboutCarts from "../components/HomeAboutCarts";
import HomeCarts from "../components/HomeCarts";
import HomeSwiper from "../components/HomeSwiper";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeMain />
      <div className="containerb flex py-32 justify-between ">
        <HomeAboutCarts />
        <HomeCarts />
      </div>
      <HomeSwiper/>
      <Cta/>
      <Footer/>
    </>
  );
};

export default Home;
