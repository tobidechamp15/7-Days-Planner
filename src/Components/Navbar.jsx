import React from "react";
import logo from "../assets/logo.svg";
import userAvatar from "../assets/userAvatar.svg";
import notificationIcon from "../assets/notification.svg";
import searchIcon from "../assets/searchIcon.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-[60px] bg-[#004E96]">
      <img src={logo} className="" />
      <div className="flex gap-4 items-center justify-center">
        <img src={searchIcon} className="hidden md:flex" />
        <img src={notificationIcon} className="hidden md:flex" />
        <div className="flex gap-2 items-center justify-center ">
          <span className="text-white border rounded-[18px] p-2 hidden md:block text-[12px]">
            Oluwaseun
          </span>
          <img src={userAvatar} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
