import React from "react";
import TravelMain from "../components/TravelMain";
import TravelPrivacy from "../components/TravelPrivacy";
import TravelCarts from "../components/TravelCarts";
import Footer from "../components/Footer";

const TravelPage = () => {
  return (
    <>
      <TravelMain />
      <TravelPrivacy/>
      <TravelCarts/>
      <Footer/>
    </>
  );
};

export default TravelPage;
