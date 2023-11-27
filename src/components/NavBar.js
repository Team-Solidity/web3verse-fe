import React from "react";
import logo from "../assets/logo/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="h-20 bg-black fixed w-screen z-50 border-b-2 border-[#bababa5e]">
        <div className="text-white h-full flex items-center justify-center text-4xl">
            <img src={logo} alt="Web2Verse" className="h-10" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
