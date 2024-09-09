import React from "react";
import aboutimg from "../assets/img/AboutMe.png";
import { Link } from "react-router-dom";
const HomeAboutCarts = () => {
  return (
    <section className="py-32">
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
          <ul className="w-full pt-4 pb-[72px] px-9  shadow-custom-4 inline-block">
            <caption className="text-center font-bold text-3xl leading-[51px] block">
              Categories
            </caption>
            <li>
              <p className="font-medium text-2xl leading-10  text-#000000 ">Europe</p>
              <p className="font-medium text-2xl leading-10  text-#000000 ">(11)</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutCarts;
