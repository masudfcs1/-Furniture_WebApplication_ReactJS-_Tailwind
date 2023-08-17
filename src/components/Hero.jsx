import React from "react";
import { hero } from "../data";

export default function Hero() {
  const { title, subtitle, buttonText } = hero;

  return (
    <section className=" h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28 ">
      <div className=" container mx-auto text-center">
        <h1> {title} </h1>
      </div>
    </section>
  );
}
