import React from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import play from "../assets/play.png";

const Header = () => {
  return (
    <div className="header text-white h-[75vh] p-4">
      <nav className="flex items-center justify-between md:max-w-[90%] md:mx-auto">
        <div className="flex items-center justify-center gap-4">
          <img src={logo} alt="logo" />
          <h1 className="text-2xl font-bold">MovieBox</h1>
        </div>
        <div className="flex items-center justify-between gap-4 w-2/5 border border-white px-2 rounded">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="bg-transparent w-11/12 p-2 outline-none placeholder:text-white"
          />
          <img src={search} alt="search" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <h3 className="font-bold">Sign in</h3>
          <img src={menu} alt="menu-icon" />
        </div>
      </nav>
      <div className="mt-24  md:max-w-sm md:ml-16 space-y-4">
        <h2 className="text-5xl font-bold tracking-widest leading-2">
          John Wick 3: Parabellum
        </h2>
        <div className="flex items-center justify-start gap-4 text-xs">
          <div className="flex items-center justify-center gap-2">
            <img src={imdb} alt="imdb logo" />
            <span>86.0/100</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={tomato} alt="tomato" />
            <span>97%</span>
          </div>
        </div>
        <p className="text-sm font-medium">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="flex items-center justify-center gap-3 bg-rose-700 px-4 py-2 rounded-md uppercase">
          <img src={play} alt="play icon" />
          <span>watch trailer</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
