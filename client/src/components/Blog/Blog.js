import React from "react";
import blog1 from "../../assets/Blog/blog1.png";
import blog2 from "../../assets/Blog/blog2.png";
import blog3 from "../../assets/Blog/blog3.png";
import blog4 from "../../assets/Blog/blog4.png";
const Blog = () => {
  return (
    <div className="mx-[177px] my-[100px]">
      <h3 className="text-center mb-12 text-[28px]">OUR BLOG</h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <img src={blog1} className="w-full h-full" />
          <div className="flex flex-col gap-3">
            <p>16 May, 2022</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-3  gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img src={blog2} className="w-full h-full" />
            <div className="flex flex-col gap-3">
              <p>16 May, 2022</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <img src={blog3} className="w-full h-full" />
            <div className="flex flex-col gap-3">
              <p>16 May, 2022</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <img src={blog4} className="w-full h-full" />
            <div className="flex flex-col gap-3">
              <p>16 May, 2022</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
