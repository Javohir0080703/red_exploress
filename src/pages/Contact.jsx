import React from "react";
import ContactMain from "../components/ContactMain";
import ContactForm from "../components/ContactForm";
import Cta from "../components/Cta";
import HomeSwiper from '../components/HomeSwiper'
const Contact = () => {
  return (
    <>
      <ContactMain />
      <ContactForm/>
      <HomeSwiper/>
      <Cta/>
    </>
  );
};

export default Contact;
