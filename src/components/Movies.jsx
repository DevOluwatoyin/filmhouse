import React, { useEffect, useState } from "react";
import Card from "./Card";
import right from "../assets/chevron-right.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Movies = () => {
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTopRated = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTM2NjIwZTU0OTMyOGRmMTZjMTdiNDJmOGYxZDQ4NiIsInN1YiI6IjY0NmMxNjA0MzNhMzc2MDBlNjdiZGFhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KM12ETMbbMgSxRwFS7LjtpHUqPTPTaEK5vDTZ4YLyr4",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.results.slice(0, 10));
      setTopRated(response.data.results.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopRated();
    setLoading(false);
  }, []);
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
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="movies px-4 md:max-w-[90%] md:mx-auto">
          {topRated.map((item, i) => (
            <Card
              key={i}
              id={item.id}
              title={item.title}
              releaseDate={item.release_date}
              poster={item.poster_path}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
