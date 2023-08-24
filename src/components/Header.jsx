import React, { useState, useEffect } from "react";

import Logo from "../assets/img/logo.svg";
import { navigation } from "../data";
import { CgMenuRight, CgClose } from "react-icons/cg";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setbg] = useState(false);
  const [mobileNav, setmobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setbg(true) : setbg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? " bg-primary py-4 lg:py-6 " : " bg-none"
      } fixed left-0 w-full py-8 z-10 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className=" flex justify-between items-center">
          <a href="#">
            <img className=" h-6 lg:h-8" src={Logo} alt="" />
          </a>

          <div
            onClick={() => setmobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className=" hidden md:flex">
            <ul className=" md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li
                    key={index}
                    className=" text-white text-2xl capitalize  cursor-pointer hover:text-gray-300"
                  >
                    <a
                      href={item.href}
                      className="capitalize text-white hover:border-b transition-all"
                    ></a>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${
              mobileNav ? " left-0" : " -left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
