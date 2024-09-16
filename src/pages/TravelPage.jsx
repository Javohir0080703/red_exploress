import React from "react";
import TravelMain from "../components/TravelMain";
import TravelPrivacy from "../components/TravelPrivacy";
import TravelCarts from "../components/TravelCarts";

const TravelPage = () => {
  return (
    <>
      <TravelMain />
      <TravelPrivacy/>
      <TravelCarts/>
    </>
  );
};

export default TravelPage;
