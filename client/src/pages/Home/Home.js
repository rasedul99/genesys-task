import React from "react";
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
    </div>
  );
};

export default Home;
