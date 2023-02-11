import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/slider/slider1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Styles.css";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
