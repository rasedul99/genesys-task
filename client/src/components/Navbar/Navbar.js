import React from "react";
import { Link } from "react-router-dom";
import search from "../../assets/icon/search.png";
import basket from "../../assets/icon/shop.png";
import user from "../../assets/icon/user.png";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const menuItems = ["HOME", "SHOP", "ABOUT US", "CONTACT US"];
  return (
    <div className="flex justify-between items-center py-5 bg-[#F0F0F0] px-24">
      {/* Menu Items  */}
      <ul className="hidden  md:flex gap-6 w-2/6">
        {menuItems.map((item) => (
          <li className="cursor-pointer ">
            <Link to={item}>{item}</Link>{" "}
          </li>
        ))}
      </ul>
      {/* Logo */}
      <div className="w-2/6">
        <Link to="home" className="">
          <img src={logo} alt="logo" className="w-13 h-[59px]" />
        </Link>
      </div>
      {/* icons */}
      <div>
        <div className="flex gap-4 w-2/6">
          <img src={search} className="w-5 h-5" />
          <img src={user} className="w-5 h-5" />
          <img src={basket} className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
