import React from "react";
import { features } from "../data";

const Features = () => {
  const { image, title, subtitle, buttonText, items } = features;
  return (
    <section className=" section">
      <div className=" container mx-auto ">
        <div className=" flex flex-col lg:flex-row lg:gap-x-[100px] ">
          <div className=" flex-1 order-1 lg:-order-1">
            <img src={image.type} alt="" />
          </div>
          <div className=" flex-1 flex flex-col justify-end">
            <h2 className=" title "> {title} </h2>
            <p className="subtitle"> {subtitle} </p>
            <div>
              {items.map((item, index) => {
                const { icon, title, subtitle } = item;
                return (
                  <div key={index} className=" flex mb-6 lg:mb-0">
                    <div className=" text-2xl mr-4 lg:text-3xl"> {icon} </div>
                    <div className=" mb-4">
                      <h4 className=" text-base lg:text-xl font-semibold ">
                        {title}
                      </h4>
                      <p>{subtitle} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
