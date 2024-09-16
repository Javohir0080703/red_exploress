import React from "react";
import { allData } from "../data";
import location from "../assets/svg/locationSvg.svg";
import smc from "../assets/svg/smcSvg.svg";
const HomeCarts = () => {
  return (
    <section className="bg-white">
      <div className="w-full max-w-[780px]">
        <ul className="flex items-center flex-wrap gap-y-[55px] gap-x-6 bg-white">
          {allData.map((e, index) => {
            return (
              <li
              key={index}
                className={` ${
                  e.style
                    ? "w-full max-w-[780px] shadow-2xl  "
                    : "w-full max-w-[340px] shadow-2xl"
                }`}
              >
                <img
                  className={` mb-3 ${
                    e.style
                      ? "w-full max-w-[780px] h-[453px]"
                      : "w-full max-w-[340px] h-[271px]"
                  }`}
                  src={e.img}
                  alt="img"
                />
                <div className={`${e.style ? "px-6 pb-8" : "px-3 pb-5"}`}>
                  <p
                    className={`text-#000000 font-medium text-lg leading-8 ${
                      e.style ? "mb-4" : "mb-[25px]"
                    }`}
                  >
                    {e.data} {e.type}
                  </p>
                  <h2
                    className={`${
                      e.style
                        ? "font-semibold  text-3xl leading-10 mb-2"
                        : "hidden"
                    }`}
                  >
                    {e.title}
                  </h2>
                  <h2
                    className={`${
                      e.style === false
                        ? "font-bold  text-2xl leading-10 mb-[54px]"
                        : "hidden"
                    }`}
                  >
                    {e.title.slice(0, 35)}
                  </h2>
                  <p
                    className={`${
                      e.style
                        ? "text-#000000 font-medium text-xl leading-8 mb-9"
                        : "hidden"
                    }`}
                  >
                    {e.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={location} alt="location svg" />
                      <p
                        className={`${
                          e.style ? "text-#000000 text-lg font-medium" : "text-#000000 font-medium text-xs"
                        }`}
                      >
                        Penang, Malaysia{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={location} alt="location svg" />
                      <p
                        className={`${
                          e.style ? "text-#000000 text-lg font-medium" : "text-#000000 font-medium text-xs"
                        }`}
                      >
                        Penang, Malaysia{" "}
                      </p>
                    </div>
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

export default HomeCarts;
