import React from "react";
import About_Us_Main from "../components/About_Us_Main";
import About_Us_History from "../components/About_Us_History";
import About_Us_Custommers from "../components/About_Us_Custommers";
import About_Custommers from "../components/About_Custommers";
import HomeSwiper from '../components/HomeSwiper'
import Cta from '../components/Cta'
const About_Us = () => {
  return (
    <>
      <About_Us_Main />
      <About_Us_History/>
      <About_Us_Custommers/>
      <About_Custommers/>
      <HomeSwiper/>
      <Cta/>
    </>
  );
};

export default About_Us;
