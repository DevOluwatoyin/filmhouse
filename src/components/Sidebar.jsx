import React from "react";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <aside className=" shadow-sm shadow-gray-100 border-r-2 border-gray-500 rounded-r-[50px] w-[15%] h-screen py-6">
      <div className="flex items-center justify-center gap-4">
        <img src={logo} alt="logo" />
        <h1 className="text-2xl font-bold">MovieBox</h1>
      </div>      
    </aside>
  );
};

export default Sidebar;
