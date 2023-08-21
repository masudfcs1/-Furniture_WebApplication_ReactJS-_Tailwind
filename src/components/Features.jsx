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
          <div>
            <h2> {title} </h2>
            <p> {subtitle} </p>
            <div>
              {items.map((item, index) => {
                const { icon, title, subtitle } = item;
                return (
                  <div key={index}>
                    <div> {icon} </div>
                    <div>
                      <h4>{title}</h4>
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
