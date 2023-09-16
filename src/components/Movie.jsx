import React from "react";
import Sidebar from "./Sidebar";
import star from "../assets/star.png";
import down from "../assets/expand-arrow.png";
import bottom from "../assets/rectangle-37.png";
import ticket from "../assets/two-tickets.png"
import list from "../assets/list.png"
import { useParams } from "react-router-dom";
const Movie = () => {
  const { id } = useParams();

  return (
    <div className="flex items-center justify-between gap-10">
      <Sidebar />
      <div className="mx-8 w-4/5">
        <video controls>
          <source src="" width={500} height={600} type="video/mp4"></source>
        </video>
        <div>
          <div className="flex justify-between items-center px-2 my-4">
            <p className="font-bold text-2xl flex items-center text-video-100">
              Top Gun: Maverick &bull; 2022 &bull; PG-13 &bull; 2h 10m
              <span className="text-sm text-rose-700 font-medium px-2 py-1 mx-2 border shadow-md rounded-3xl">
                Action
              </span>
              <span className="text-sm text-rose-700 font-medium px-2 py-1 mx-2 border shadow-md rounded-3xl">
                Drama
              </span>
            </p>
            <p className="flex items-center justify-normal">
              <img src={star} alt="star" />
              <span className="text-xl text-rating-100">3.5</span>
              <span className="text-xl text-rating-200"> | 350k</span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-7 ">
            <div className="space-y-6 text-xl w-3/4">
              <p className="text-xl">
                After thirty years, Maverick is still pushing the envelope as a
                top naval aviator, but must confront ghosts of his past when he
                leads TOP GUN's elite graduates on a mission that demands the
                ultimate sacrifice from those chosen to fly it.
              </p>
              <p>
                Director: <span className="text-rose-700">Joseph Kosinski</span>
              </p>
              <p>
                Writers :{" "}
                <span className="text-rose-700">
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </p>
              <p>
                Stars :
                <span className="text-rose-700">
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </p>
              <div className="flex items-center">
                <button className="text-white bg-rose-700 rounded-lg px-4 py-2">
                  Top rated movie #65
                </button>
                <div className="shadow flex justify-between p-2 text-gray-600 w-2/3">
                  Awards 9 nominations
                  <img src={down} alt="down arrow" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-6">
              <button className="flex items-center justify-center gap-2 text-white w-full bg-rose-700 rounded-lg px-4 py-2">
                <img src={ticket} alt="tickets" />
                See Showtimes
              </button>
              <button className="flex items-center justify-center gap-2 w-full border-rose-700 rounded-lg px-4 py-2 bg-rose-light">
                <img src={list} alt="tickets" />
                More watch options
              </button>
              <img src={bottom} alt="more videos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
