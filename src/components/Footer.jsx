import React from "react";
import logo from "../assets/svg/LogoFooter.svg";
import logo2 from "../assets/svg/footerLogo2.svg";
import { Link } from "react-router-dom";
import feecbok from "../assets/svg/feecbok.svg";
import insta from "../assets/svg/instagram.svg";
import youtube from "../assets/svg/youtube.svg";
import twitter from "../assets/svg/twitter.svg";
function Footer() {
  return (
    <section className="pt-14 ">
      <div className="w-full max-w-[1020px] mx-auto px-5 mb-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="" src={logo} alt="logo" />
          </Link>
          <nav>
            <ul className="flex items-center space-x-[180px]">
              <li>
                <Link className="font-bold text-base leading-4 text-#000000 ">
                  Body
                </Link>
              </li>
              <li>
                <Link className="font-bold text-base leading-4 text-#000000 ">
                  Travel
                </Link>
              </li>
              <li>
                <Link className="font-bold text-base leading-4 text-#000000 ">
                  Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-#000000/[67.57%]">
        <div className="w-full max-w-[1020px] mx-auto px-5 pt-10 pb-24 flex  justify-between space-x-[51px]">
          <div className="w-full max-w-[330px]">
            <p className="text-base leading-7 text-#EEEEEE">
              We are location independent bloggers, digital influencers, small
              group tour organizers and world travelers with a serious passion
              for the sun, the sea and adventure. <br /> <br /> Eight years and
              60-something countries later and we are still on the road.
            </p>
          </div>
          <ul className="flex space-x-[55px]">
            <li className="space-y-5 w-full max-w-[191px]">
              <p className="text-base leading-7 text-#EEEEEE ">
                Add: 221B John hope Street, Lekki, Lagos, Nigeria.
              </p>
              <p className="text-base leading-7 text-#EEEEEE ">
                T: +234 706 507 8544
              </p>
              <p className="text-base leading-7 text-#EEEEEE ">
                E: info@redexplorers.com
              </p>
              <a
                target="_blank"
                href="redexplorers.com"
                className="text-base leading-7 text-#EEEEEE "
              >
                W: www. redexplorers.com
              </a>
            </li>
            <li className="space-y-5">
              <Link
                to="/my_list"
                className="text-base leading-7 text-#EEEEEE block "
              >
                My List
              </Link>
              <Link
                to="/my_requests"
                className="text-base leading-7 text-#EEEEEE block "
              >
                My Requests
              </Link>
              <Link
                to="/my_credits"
                className="text-base leading-7 text-#EEEEEE block "
              >
                My Credits
              </Link>
              <Link
                to="/my_info"
                className="text-base leading-7 text-#EEEEEE block "
              >
                My Info
              </Link>
              <Link
                to="/my_list"
                className="text-base leading-7 text-#EEEEEE block "
              >
                Contact
              </Link>
            </li>
            <li className="space-y-5">
              <Link
                to="/travel"
                className="text-base leading-7 text-#EEEEEE block "
              >
                Travel
              </Link>
              <Link
                to="/why_travel"
                className="text-base leading-7 text-#EEEEEE block "
              >
                Why Travel
              </Link>
              <Link
                to="/become_a_traveler"
                className="text-base leading-7 text-#EEEEEE block "
              >
                Become a Traveler
              </Link>
              <Link
                to="/how_its_works"
                className="text-base leading-7 text-#EEEEEE block "
              >
                How Its Works
              </Link>
              <Link
                to="/traveling_faqs"
                className="text-base leading-7 text-#EEEEEE block "
              >
                Traveling FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-#000000/[67.57%] border-t border-#EEEEEE pt-7 pb-24">
        <div className="w-full max-w-[1020px] mx-auto px-5 flex space-x-[82px]">
          <Link to="/">
            <img src={logo2} alt="logo2" />
          </Link>
          <div className="flex items-center space-x-4">
            <a className="" href="https://www.facebook.com/">
              <img className="w-[21px] h-[20px]" src={feecbok} alt="feecbok" />
            </a>
            <a className="" href="https://x.com/">
              <img className="w-[21px] h-[17px]" src={twitter} alt="twitter" />
            </a>
            <a className="" href="https://www.instagram.com/">
              <img className="w-[21px] h-[17px]" src={insta} alt="instagram" />
            </a>
            <a className="" href="https://www.youtube.com/">
              <img className="w-[21px] h-[17px]" src={youtube} alt="youtube" />
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-#EEEEEE text-base ">© 2021 RedExplorers. All rights reserved   </p>
            <Link to="/terms" className="text-#EEEEEE text-base"> |   Terms   |</Link>
            <Link to="/privacy" className="text-#EEEEEE text-base">   Privacy   |</Link>
            <Link to="/site_map" className="text-#EEEEEE text-base">    Site Map   </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
