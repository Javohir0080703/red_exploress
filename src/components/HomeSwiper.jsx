import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { swipperData } from "../data";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeSwiper = () => {
  return (
    <section className="pb-[83px] bg-white">
      <div>
        <div className="relative">
          <Swiper
            className="mySwiper bg-white"
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 6.7,
                spaceBetween: 0,
              },
            }}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
          >
            {swipperData.map((e, index) => {
              return (
                <SwiperSlide key={index}>
                  <img className="w-[260px] h-[296px]" src={e.img} alt="img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <a href="https://www.instagram.com/" target="_blank" className="py-4 px-4  text-white  text-2xl leading-6 text-center rounded-lg  bg-#0336FF inline-block absolute top-[126px] left-[630px] z-20">
            Follow @ instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSwiper;
