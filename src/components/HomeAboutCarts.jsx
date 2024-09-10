import React, { useRef, useState } from "react";
import aboutimg from "../assets/img/AboutMe.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { allData } from "../data";
import feecbok from "../assets/svg/feecbok.svg";
import insta from "../assets/svg/instagram.svg";
import youtube from "../assets/svg/youtube.svg";
import twitter from "../assets/svg/twitter.svg";
const HomeAboutCarts = () => {
  const [custom_swiper, set_swiper] = useState({});
  const nextSlide = () => {
    custom_swiper.slideNext();
  };
  const prevSlide = () => {
    custom_swiper.slidePrev();
  };
  return (
    <section className="">
      <div className="containerb">
        <div className="w-full max-w-[450px] ">
          {/* About Me */}
          <div className="w-full px-9 py-5 shadow-custom-4 mb-11">
            <h3 className="text-#000000 leading-[51px] text-3xl font-bold mb-2.5 text-center">
              About Me
            </h3>
            <img className="mb-2" src={aboutimg} alt="img" />
            <p className="font-medium text-base leading-5  text-#000000 mb-4 text-left ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in
              vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat
              eget et lorem est arcu. Gravida hendrerit sit blandit semper
              lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget
              suspendisse leo scelerisque sed d.
            </p>
            <div className="flex justify-center">
              <Link
                to="/about_us"
                className="inline-block py-6 px-14 bg-#0336FF rounded-lg text-white font-medium text-base leading-5 text-center"
              >
                Read More
              </Link>
            </div>
          </div>
          {/* Categories */}
          <ul className="w-full pt-4 pb-[72px] px-9  shadow-custom-4 inline-block space-y-5 mb-10">
            <caption className="text-center font-bold text-3xl leading-[51px] block">
              Categories
            </caption>
            <li className="flex items-center justify-between">
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                Europe
              </p>
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                (11)
              </p>
            </li>
            <li className="flex items-center justify-between">
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                Mountains
              </p>
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                (11)
              </p>
            </li>
            <li className="flex items-center justify-between">
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                Traveling Video
              </p>
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                (11)
              </p>
            </li>
            <li className="flex items-center justify-between">
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                Beauty of Seas
              </p>
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                (11)
              </p>
            </li>
            <li className="flex items-center justify-between">
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                Cuisine
              </p>
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                (11)
              </p>
            </li>
            <li className="flex items-center justify-between">
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                Guides for traveler
              </p>
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                (11)
              </p>
            </li>
            <li className="flex items-center justify-between">
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                Other
              </p>
              <p className="font-medium text-2xl leading-10  text-#000000 ">
                (11)
              </p>
            </li>
          </ul>
          <div className="py-8 px-24 shadow-custom-4 text-center font-bold text-3xl leading-[46px] mb-9">
            Popular Post
          </div>
          <div className="w-full mb-11">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper "
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              onInit={(ev) => {
                set_swiper(ev);
              }}
            >
              {allData.map((e) => {
                return (
                  <SwiperSlide
                    className="pt-8 pb-12 px-9"
                    style={{
                      backgroundImage: `linear-gradient(rgba(17, 14, 194, 0.3), rgba(17, 14, 194, 0.3)), url(${e.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <p className="font-medium text-2xl leading-8 text-white mb-20">
                      {e.data} {e.type}
                    </p>
                    <h3 className="text-#FFFEFE font-bold text-3xl  leading-[46px] mb-9">
                      {e.title.slice(0, 35)}
                    </h3>
                    <div className="space-x-5">
                      <button
                        onClick={prevSlide}
                        className="py-4 px-4 bg-white text-#0336FF text-3xl font-bold "
                      >
                        {"<"}
                      </button>
                      <button
                        onClick={nextSlide}
                        className="py-4 px-4 bg-white text-#0336FF text-3xl font-bold "
                      >
                        {">"}
                      </button>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="py-8 px-24 shadow-custom-4 text-center font-bold text-3xl leading-[46px] mb-9">
            Recent Post
          </div>
          <ul className="space-y-11 mb-16">
            {allData.slice(0, 6).map((e) => {
              return (
                <li className="flex items-center gap-2.5">
                  <img
                    className="w-full max-w-[100px] h-[80px]"
                    src={e.img}
                    alt="img"
                  />
                  <div>
                    <p className="text-#0A0909 font-medium text-lg leading-8">
                      {e.data} {e.type}
                    </p>
                    <p className="text-#000000 font-semibold text-2xl leading-8">
                      {e.title.slice(0, 40)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="py-8 px-24 shadow-custom-4 text-center font-bold text-3xl leading-[46px] mb-9">
            Get In Touch{" "}
          </div>
          <ul className="grid grid-cols-2 gap-7 justify-center">
            <li className="py-5 pl-7 bg-#4056AC rounded-lg  w-full max-w-[182px]">
              <a target="_blank"
                className="flex items-center space-x-8"
                href="https://www.facebook.com/?locale=ru_RU"
              >
                <img src={feecbok} alt="feecbok" />
                <div>
                  <p className="font-bold text-base leading-4 text-white">
                    65.5K
                  </p>
                  <p className="font-medium text-base leading-4 text-white">
                    Likes{" "}
                  </p>
                </div>
              </a>
            </li>
            <li className="py-5 pl-7 bg-#60B7FE rounded-lg  w-full max-w-[182px]">
              <a target="_blank"
                className="flex items-center space-x-8"
                href="https://x.com/?lang=ru"
              >
                <img src={twitter} alt="twitter" />
                <div>
                  <p className="font-bold text-base leading-4 text-white">
                    105 k
                  </p>
                  <p className="font-medium text-base leading-4 text-white">
                    Followers
                  </p>
                </div>
              </a>
            </li>
            <li className="py-5 pl-7 bg-#FE2C3C rounded-lg  w-full max-w-[182px]">
              <a target="_blank"
                className="flex items-center space-x-8"
                href="https://www.youtube.com/"
              >
                <img src={youtube} alt="youtube" />
                <div>
                  <p className="font-bold text-base leading-4 text-white">
                    1.5 M
                  </p>
                  <p className="font-medium text-base leading-4 text-white">
                    Subscribers
                  </p>
                </div>
              </a>
            </li>
            <li className="py-5 pl-7 bg-#E14D93 rounded-lg  w-full max-w-[182px]">
              <a target="_blank"
                className="flex items-center space-x-8"
                href="https://www.instagram.com/"
              >
                <img src={insta} alt="feecbok" />
                <div>
                  <p className="font-bold text-base leading-4 text-white">
                    85 k
                  </p>
                  <p className="font-medium text-base leading-4 text-white">
                    Followers
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutCarts;
