import React from "react";

import Logo from "../assets/img/logo.svg";
import { footer } from "../data";

const Footer = () => {
  const { copyright } = footer;
  return (
    <footer className=" section bg-primary text-white">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14 ">
          <a href="#" className=" mb-6 lg:mb-0">
            <img src={Logo} alt="" />
          </a>
          <div className=" flex gap-x-4">
            {footer.social.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" w-12 h-12 text-2xl hover:bg-accent flex items-center justify-center rounded-full transition"
                >
                  <a href="#">{item.icon} </a>
                </div>
              );
            })}
          </div>
        </div>
        <p className=" text-center">&copy; {copyright} </p>
      </div>
    </footer>
  );
};

export default Footer;
