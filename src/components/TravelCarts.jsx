import React from "react";
import { allData } from "../data";
import star from "../assets/svg/Star.svg";
import Communication from "../assets/svg/Communication.svg";
import Marker from "../assets/svg/Marker.svg";
const TravelCarts = () => {
  return (
    <section className="pt-12 pb-24">
      <div className="containerb">
        <ul className="grid grid-cols-3 gap-20">
          {allData.map((e) => {
            return (
              <li className="w-full max-w-[374px] rounded-xl shadow-2xl pb-7">
                <img
                  className="w-full h-full max-h-[221px] mb-5 rounded-t-xl"
                  src={e.img}
                  alt="img"
                />
                <p className="font-bold text-lg leading-5 tracking-[1.5%] text-#6E7191 mb-3 pl-4">
                  {e.data} {e.type}
                </p>
                <h2 className="pl-4 text-[34px] leading-10 font-extrabold bg-#0336FF pt-2.5 pb-6 mb-5 text-white">
                  {e.title.slice(0, 35)}...
                </h2>
                <div className="pl-1 pr-5 flex items-center justify-between">
                  <div className="font-extrabold text-sm leading-4 text-#14142B flex items-center">
                    <img src={Marker} alt="Marker" />
                    {e.continent}
                  </div>
                  <div className="font-extrabold text-sm leading-4 text-#14142B flex items-center">
                    <img src={Communication} alt="Marker" />
                    {e.comment}
                  </div>
                  <div className="font-extrabold text-sm leading-4 text-#14142B flex items-center">
                    <img src={star} alt="Marker" />
                     {e.bal} of 5 
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TravelCarts;
