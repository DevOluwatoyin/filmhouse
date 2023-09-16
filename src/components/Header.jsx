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
      <nav className="flex items-center justify-between">
        <div className="">
          <img src={logo} alt="logo" />
          <h1>MovieBox</h1>
        </div>
        <div>
          <input type="text" placeholder="What do you want to watch?" />
          <img src={search} alt="search" />
        </div>
        <div className="">
          <h3>Sign in</h3>
          <img src={menu} alt="menu-icon" />
        </div>
      </nav>
      <div>
        <h2>John Wick 3: Parabellum</h2>
        <div>
          <div>
            <img src={imdb} alt="imdb logo" />
            <span>86.0/100</span>
          </div>
          <div>
            <img src={tomato} alt="tomato" />
            <span>97%</span>
          </div>
        </div>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button>
          <img src={play} alt="play icon" />
          <span>watch trailer</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
