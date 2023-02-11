import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Collection.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import candels from "../../assets/collections/candels.png";
import flower from "../../assets/collections/flower.png";
import lamp from "../../assets/collections/lamp.png";
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
          <img src={flower} />
          <div className="description">
            <h3 className="title">Flower</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={candels} />
          <div className="description">
            <h3 className="title">Flower</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={lamp} />
          <div className="description">
            <h3 className="title">Flower</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={candels} />
          <div className="description">
            <h3 className="title">Flower</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={lamp} />
          <div className="description">
            <h3 className="title">Flower</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={flower} />
          <div className="description">
            <h3 className="title">Flower</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Collection;
