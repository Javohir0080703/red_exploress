import React, { useState } from "react";
import { allData } from "../data";
import location from "../assets/svg/locationSvg.svg";
import smc from "../assets/svg/smcSvg.svg";
const DestinationCarts = () => {
  const [active, setActive] = useState(null); // Boshlang'ich qiymat null
  const continents = [...new Set(allData.map((item) => item.continent))];

  return (
    <section className="pt-16 pb-28">
      <div className="containerb">
        <ul className="flex items-center justify-center flex-wrap mb-[372px]">
          {continents.map((continent, index) => {
            return (
              <li
                key={index} // unique bo'lishi uchun index ishlatilmoqda
                onClick={() => {
                  setActive(continent);
                }}
                className={`w-full max-w-[260px] py-[30px] text-center border cursor-pointer  font-bold  text-2xl leading-7 block bg-[#0336FF]  ${
                  active === continent ? " text-white" : "text-#000000 bg-white"
                }`}
              >
                {continent}
              </li>
            );
          })}
        </ul>

        <ul className="grid grid-cols-3 z-10 gap-x-[74px] gap-y-[55px]">
          {allData.map((e, index) => {
            if (active === e.continent) {
              return (
                <li
                  key={index}
                  className="relative shadow-2xl w-full max-w-[350px] bg-white"
                >
                  {/* Image background */}
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      className="w-full h-[300px] "
                      src={e.img}
                      alt="img"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 bg-white shadow-xl -mt-10 z-10">
                    <p className="text-[#FFA500] font-bold text-lg leading-5 mb-2.5">
                      {e.data} - {e.type}
                    </p>
                    <h2 className="font-bold text-2xl leading-7 text-[#000000] mb-6">
                      {e.title.slice(0, 35)}...
                    </h2>
                    <hr className="bg-[#C4C4C4] mb-8" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img src={location} alt="location" />
                        <p className="font-medium text-sm leading-5 text-[#000000]">
                          {e.location}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img src={smc} alt="comment" />
                        <p className="font-medium text-sm leading-5 text-[#000000]">
                          Comment {e.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default DestinationCarts;
