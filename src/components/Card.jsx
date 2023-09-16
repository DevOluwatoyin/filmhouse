import React from "react";
import poster from "../assets/poster.png";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import { BsFillSuitHeartFill } from "react-icons/Bs";

const Card = () => {
  return (
    <div className="space-y-2">
      <div className="relative">
        <BsFillSuitHeartFill className="text-gray-300 absolute right-3" />
        <img src={poster} alt="movie poster" />
      </div>
      <p className="font-bold text-xs text-gray-400">USA, 2016 - Current</p>
      <h4 className="font-bold text-lg text-gray-900">Stranger Things</h4>
      <div className="flex items-center justify-between gap-4 text-xs text-gray-900">
        <div className="flex items-center justify-center gap-2">
          <img src={imdb} alt="imdb logo" />
          <span>86.0/100</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={tomato} alt="tomato" />
          <span>97%</span>
        </div>
      </div>
      <p className="font-bold text-xs text-gray-400">
        Action, Adventure, Horror
      </p>
    </div>
  );
};

export default Card;
