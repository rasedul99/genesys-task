import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import candels from "../../assets/collections/candels.png";
import flower from "../../assets/collections/flower.png";
import lamp from "../../assets/collections/lamp.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Collection.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
const Collection = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="info">
            <img src={flower} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={candels} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lamp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={candels} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lamp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={flower} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Collection;
