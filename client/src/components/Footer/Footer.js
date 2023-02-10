import React from "react";
import { Link } from "react-router-dom";
import americanExpress from "../../assets/icon/american-express.png";
import amex from "../../assets/icon/amex.png";
import facebook from "../../assets/icon/facebook.png";
import instagram from "../../assets/icon/instagram.png";
import paypal from "../../assets/icon/paypal.png";
import twitter from "../../assets/icon/twitter.png";
import visa from "../../assets/icon/visa.png";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  const menuItems = [
    "HOME",
    "Gift Card",
    "Seasonal",
    "Kid & Nursery",
    "Pet",
    "Gift Registry",
  ];
  const customerCare = [
    "Contact Us",
    "Shipping Policy",
    "Returns Policy",
    "Privacy Policy",
  ];
  const aboutUs = ["Our Story", "Terms Of Service", "Articles"];
  return (
    <div className="bg-[#F0F0F0] pt-[95px] pl-[98px] pr-[117px] pb-[49px]">
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="flex flex-col gap-12 ">
            <img src={logo} alt="logo" className="w-[111px] h-[126px]" />
            <p className="">
              By completing this form you're signing up to receive our emails
              and can unsubscribe at any time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Menu */}
            <div className="flex flex-col gap-7">
              <h3 className="font-semibold text-base">MENU</h3>
              <ul className="flex flex-col gap-7">
                {menuItems.map((item) => (
                  <li className="cursor-pointer gap-7 text-[15px]">
                    <Link to={item}>{item}</Link>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* Customer Care  */}
            <div className="flex flex-col gap-7">
              <h3 className="font-semibold text-base">CUTOMER CARE</h3>
              <ul className="flex flex-col gap-7">
                {customerCare.map((item) => (
                  <li className="cursor-pointer gap-7 text-[15px]">
                    <Link to={item}>{item}</Link>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* About us */}
            <div className="flex flex-col gap-7">
              <h3 className="font-semibold text-base">ABOUT US</h3>
              <ul className="flex flex-col gap-7">
                {aboutUs.map((item) => (
                  <li className="cursor-pointer gap-7 text-[15px]">
                    <Link to={item}>{item}</Link>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base ">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p className="my-6">
              Signup for our newsletter to stay up to date on sales and events.
            </p>
            <div className="border border-black  flex justify-between">
              <input
                type="email"
                placeholder="Email"
                className="border-0 outline-0 bg-transparent py-4 px-5"
              />
              <input
                type="submit"
                value="Join"
                className="bg-[#2D2929] px-[38px] py-3 text-white"
              />
            </div>
            <p className="mt-4">
              By completing this form you're signing up to receive our emails
              and can unsubscribe at any time
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-between border-solid border-[#989795] border-b pb-6">
            <div className="flex flex-row gap-2">
              <img src={facebook} />
              <img src={twitter} />
              <img src={instagram} />
            </div>
            <div className="flex flex-row gap-2">
              <img src={visa} />
              <img src={amex} />
              <img src={paypal} />
              <img src={americanExpress} />
            </div>
          </div>
          <p className="text-[15px] text-center mt-[14px]">
            © Copyright 2022 by Cole & Son. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
