import React from "react";
import custommers1 from "../assets/img/custommers1.png";
import custommers2 from "../assets/img/custommers2.png";
import custommers3 from "../assets/img/custommers3.png";
import custommers4 from "../assets/img/custommers4.png";
const About_Us_Custommers = () => {
  return (
    <section className="bg-#EDEDED py-12 ">
      <div className="containerb">
        <ul className="flex items-center justify-between">
          <li>
            <img
              className="w-full max-w-[205px]"
              src={custommers1}
              alt="custommers1"
            />
          </li>
          <li>
            <img
              className="w-full max-w-[205px]"
              src={custommers2}
              alt="custommers1"
            />
          </li>
          <li>
            <img
              className="w-full max-w-[205px]"
              src={custommers3}
              alt="custommers1"
            />
          </li>
          <li>
            <img
              className="w-full max-w-[205px]"
              src={custommers4}
              alt="custommers1"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About_Us_Custommers;
