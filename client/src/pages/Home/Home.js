import React from "react";
import banner from "../../assets/banner/banner.png";
import Blog from "../../components/Blog/Blog";

import Collection from "../../components/Collection/Collection";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="my-[100px] px-[100px]">
        <h3 className="mb-12">OUR COLLECTION</h3>
        <Collection />
      </div>
      <div className="relative">
        <img src={banner} className="w-full h-full object-contain" />
        <div className="flex flex-col gap-12 w-[378px] text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <h3 className="font-semibold text-[44px]">20% OFF</h3>
          <p>And extra 50% off sale styles code FORCE20</p>
          <button className="border border-solid border-white py-3 px-[56px] w-[189px] mx-auto">
            VIEW ALL
          </button>
        </div>
      </div>

      {/* Blog area */}
      <Blog />
    </div>
  );
};

export default Home;
