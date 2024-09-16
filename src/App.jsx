import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact from "./pages/Contact";
import TravelPage from "./pages/TravelPage";
import Destination from "./pages/Destination";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<About_Us />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/tips" element={<TravelPage />} />
      <Route path="/destination" element={<Destination />} />
    </Routes>
  );
};

export default App;
