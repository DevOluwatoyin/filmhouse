import React, { useState } from "react";
import poster from "../assets/poster.png";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import { BsFillSuitHeartFill } from "react-icons/Bs";

const Card = ({title, releaseDate, poster}) => {
  const [active, setActive] = useState(false);

  return (
    <div data-testid="movie-card" className="space-y-2 text-center">
      <div className="relative">
        <BsFillSuitHeartFill
          className={
            active
              ? "absolute right-3 text-2xl top-4 text-purple-800"
              : "text-gray-300 absolute text-2xl right-3 top-4"
          }
          onClick={() => setActive(!active)}
        />
        <img
          src={`https://image.tmdb.org/t/p/w500${poster}`}
          data-testid="movie-poster"
          alt="movie poster"
        />
      </div>
      <h4 data-testid="movie-title" className="font-bold text-lg text-gray-900">
        {title}
      </h4>
      <p
        data-testid="movie-release-date"
        className="font-bold text-sm text-gray-400"
      >
        {releaseDate}
      </p>
    </div>
  );
};

export default Card;
