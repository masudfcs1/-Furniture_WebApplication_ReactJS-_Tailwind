import React from "react";
import { products } from "../data";
import ProductSlider from "./ProductSlider";

const Products = () => {
  const { title, subtitle } = products;

  return (
    <section className="section ">
      <div className="container mx-auto ">
        <div className=" text-center">
          <h2 className=" title">{title}</h2>
          <p className=" max-w-[639px] mx-auto mb-[50px] lg:mb-[70px] ">
            {subtitle}
          </p>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
