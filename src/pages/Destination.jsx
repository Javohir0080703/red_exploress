import React from "react";
import Destination_Main from "../components/Destination_Main";
import DestinationPrivacy from "../components/DestinationPrivacy";
import DestinationCarts from "../components/DestinationCarts";

const Destination = () => {
  return (
    <>
      <Destination_Main />
      <DestinationPrivacy/>
      <DestinationCarts/>
    </>
  );
};

export default Destination;
