import React from "react";
import logo from "../assets/logo.png";
import { GoHome } from "react-icons/go";
import home from "../assets/home.svg";
import movies from "../assets/movie-projector.png";
import tv from "../assets/tv-show.png";
import calendar from "../assets/calendar.png";
import logout from "../assets/logout.png";

const Sidebar = () => {
  const sideLists = [
    {
      image: home,
      title: "Home",
    },
    {
      image: movies,
      title: "Movies",
    },
    {
      image: tv,
      title: "TV Series",
    },
    {
      image: calendar,
      title: "Upcoming",
    },
    {
      image: logout,
      title: "Log out",
    },
  ];
  return (
    <aside className="shadow shadow-gray-100 border-r-2 border-gray-500 rounded-r-[50px] w-[15%] h-screen py-6">
      <div className="flex items-center justify-center gap-4">
        <img src={logo} alt="logo" />
        <h1 className="text-2xl font-bold">MovieBox</h1>
      </div>
      <div className="flex flex-col justify-between space-y-8 mt-20">
        {sideLists.map((list, i) => (
          <div
            key={i}
            className={
              list.title === "Movies"
                ? "bg-red-100 flex items-center  font-bold gap-4 p-6 border-r-rose-700 border-r-4 text-rose-700"
                : "flex items-center gap-4 p-6 font-bold"
            }
          >
            <img src={list.image} alt={list.title} />
            <span>{list.title}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
