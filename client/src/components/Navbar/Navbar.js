import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import search from "../../assets/icon/search.png";
import basket from "../../assets/icon/shop.png";
import user from "../../assets/icon/user.png";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const menuItems = ["HOME", "SHOP", "ABOUT US", "CONTACT US"];
  const [show, setShow] = useState(false);
  const handleHambarger = () => {
    setShow(!show);
  };
  return (
    <div className="bg-[#F0F0F0]">
      <div className="flex justify-between items-center py-5  px-24">
        {/* Menu Items  */}
        <ul className="hidden  md:flex gap-6 md:w-2/6">
          {menuItems.map((item) => (
            <li className="cursor-pointer ">
              <Link to={item}>{item}</Link>{" "}
            </li>
          ))}
        </ul>
        {/* Logo */}
        <div className="md:w-2/6">
          <Link to="home" className="">
            <img src={logo} alt="logo" className="w-13 h-[59px]" />
          </Link>
        </div>
        {/* icons */}
        <div>
          <div className="hidden  md:flex gap-4 md:w-2/6">
            <img src={search} className="w-5 h-5" />
            <img src={user} className="w-5 h-5" />
            <img src={basket} className="w-5 h-5" />
          </div>
          <div onClick={handleHambarger} className="md:hidden">
            {show ? <div className="">X</div> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>

      {/* mobile screen */}

      {show && (
        <div className="flex flex-row md:hidden justify-center  text-center h-screen">
          <div className="flex flex-col">
            <ul>
              {menuItems.map((item) => (
                <li className="py-5">
                  <Link to={item}>{item}</Link>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
