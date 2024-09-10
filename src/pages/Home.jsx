import React from "react";
import HomeMain from "../components/HomeMain";
import HomeAboutCarts from "../components/HomeAboutCarts";
import HomeCarts from "../components/HomeCarts";

const Home = () => {
  return (
    <>
      <HomeMain />
      <div className="containerb flex py-32 justify-between">
        <HomeAboutCarts />
        <HomeCarts />
      </div>
    </>
  );
};

export default Home;
