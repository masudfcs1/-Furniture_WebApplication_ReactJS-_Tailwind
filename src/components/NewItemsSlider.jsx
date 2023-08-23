import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles

import { newInStore } from "../data";

const NewItemsSlider = () => {
  return (
    <Swiper>
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide className=" max-w-[275px]" key={index}>
            {" "}
            <div>
              <img src={product.image.type} alt="" />
              <div>{product.name}</div>
            </div>{" "}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
