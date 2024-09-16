import React from "react";
import Logo from "../assets/svg/Logo.svg";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="bg-transparent">
      <div className="containerb flex items-center justify-between ">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center  space-x-[66px]">
            <li>
              <Link
                className={`text-#FFA500 font-medium text-base leading-14px p-2 ${
                  pathname === "/" ? "bg-#0336FF text-white rounded-lg px-8 " : ""
                } `}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`text-#FFA500 font-medium text-base leading-14px p-2 ${
                  pathname === "/about_us" ? "bg-#0336FF text-white rounded-lg px-8 " : ""
                } `}
                to="/about_us"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className={`text-#FFA500 font-medium text-base leading-14px p-2 ${
                  pathname === "/destination" ? "bg-#0336FF text-white rounded-lg px-8 " : ""
                } `}
                to="/destination"
              >
                Destination
              </Link>
            </li>
            <li>
              <Link
                className={`text-#FFA500 font-medium text-base leading-14px p-2 ${
                  pathname === "/tips" ? "bg-#0336FF text-white rounded-lg px-8 " : ""
                } `}
                to="/tips"
              >
                Tips
              </Link>
            </li>
            <li>
              <Link
                className={`text-#FFA500 font-medium text-base leading-14px p-2 ${
                  pathname === "/contact" ? "bg-#0336FF text-white rounded-lg px-8 " : ""
                } `}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
