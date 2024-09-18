import React from "react";
import ContactMain from "../components/ContactMain";
import ContactForm from "../components/ContactForm";
import Cta from "../components/Cta";
import HomeSwiper from '../components/HomeSwiper'
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <>
      <ContactMain />
      <ContactForm/>
      <HomeSwiper/>
      <Cta/>
      <Footer/>
    </>
  );
};

export default Contact;
