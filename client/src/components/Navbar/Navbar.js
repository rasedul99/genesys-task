import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import search from "../../assets/icon/search.png";
import basket from "../../assets/icon/shop.png";
import userIcon from "../../assets/icon/user.png";
import logo from "../../assets/logo/logo.png";
import auth from "../../firebase.init";

const Navbar = () => {
  const menuItems = ["HOME", "SHOP", "ABOUT US", "CONTACT US"];
  const [show, setShow] = useState(true);
  const [user] = useAuthState(auth);
  const handleHambarger = () => {
    setShow(!show);
  };
  console.log(user);
  return (
    <div className="bg-[#F0F0F0]">
      <div className="flex justify-between items-center py-5  px-24 ">
        {/* Menu Items  */}
        <ul className="hidden  md:flex gap-6 ">
          {menuItems.map((item) => (
            <li className="cursor-pointer">
              <Link to={item}>{item}</Link>{" "}
            </li>
          ))}
        </ul>
        {/* Logo */}
        <div className="md:w-1/3">
          <Link to="home">
            <img src={logo} alt="logo" className="w-13 h-[59px]" />
          </Link>
        </div>
        {/* icons */}
        <div className="flex gap-4">
          <img src={search} className="w-5 h-5" />
          <Link to="/login">
            <img src={userIcon} className="w-5 h-5" />
          </Link>
          <img src={basket} className="w-5 h-5" />
        </div>
        <div onClick={handleHambarger} className="md:hidden">
          {show ? <div className="">X</div> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* mobile screen */}

      {show && (
        <div className="flex flex-row  md:hidden justify-center  text-center h-screen">
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
