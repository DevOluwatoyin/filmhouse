import React from "react";
import Card from "./Card";
import right from "../assets/chevron-right.svg";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div>
      <div className="flex justify-between items px-4 md:max-w-[90%] md:mx-auto mt-14 mb-8">
        <h2 className="font-extrabold text-4xl ">Featured Movie</h2>
        <Link
          to="/movie"
          className="text-rose-700 flex items-center justify-center gap-5"
        >
          <span>See more</span>
          <img src={right} alt="right arrow" />
        </Link>
      </div>
      <div className="px-4 md:max-w-[90%] md:mx-auto">
        <Card />
      </div>
    </div>
  );
};

export default Movies;
