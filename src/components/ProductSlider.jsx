import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";
//
import { Navigation, Pagination } from "swiper/modules";
//
import { products } from "../data";
//
//
import { HiPlus } from "react-icons/hi";

const ProductSlider = () => {
  const { pages } = products;

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      className="productSlider min-h-[1300px] "
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] ">
              {page.productList.map((product, index) => {
                const { image, name, price, oldPrice } = product;
                return (
                  <div className=" w-full max-w-[290px] h-[380px]" key={index}>
                    <div className=" border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px] relative transition">
                      <img src={image.type} alt="" />
                      <div className=" absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-300 transition ">
                        <HiPlus className=" text-xl text-primary" />
                      </div>
                    </div>
                    <div className=" font-semibold lg:text-xl">{name} </div>
                    <div className=" flex items-center gap-x-4">
                      <div>${price} </div>
                      <div className=" text-[15px] text-grey line-through">
                        ${oldPrice}{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}{" "}
    </Swiper>
  );
};

export default ProductSlider;
