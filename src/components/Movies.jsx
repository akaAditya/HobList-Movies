import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

const Movies = ({ movies }) => {
  const [info, setInfo] = useState(false);
  const infoHandler = () => {
    setInfo(!info);
  };
  return (
    <div className="flex flex-col gap-5 relative">
      <div className="bg-blue-500 w-full h-16 text-center pt-5">
        <span
          onClick={infoHandler}
          className="text-white font-bold text-lg cursor-pointer hover:text-green-300"
        >
          Company Info
        </span>
      </div>
      {!info && (
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
            >
              <div className="flex">
                <div className="p-2 flex justify-center flex-col gap-5">
                  <p className="text-6xl text-slate-800">
                    <TiArrowSortedUp />
                  </p>
                  <p className="text-gray-600 mb-2 text-center">
                    {movie.totalVoted}
                  </p>
                  <p className="text-6xl text-slate-800">
                    <TiArrowSortedDown />
                  </p>
                  <p className="text-gray-600 text-center">Votes</p>
                </div>
                <img
                  className="w-1/3 h-auto object-cover rounded-lg"
                  src={movie.poster}
                  alt={movie.name}
                />
                <div className="p-4 flex-1">
                  <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Genre:</span> {movie.genre}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Director:</span>{" "}
                    {movie.director}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Starring:</span>{" "}
                    {movie.stars}
                  </p>
                  <p className="text-gray-600 mb-2">
                    {`${movie.runTime === null ? [] : movie.runTime} min | ${
                      movie.language
                    } | ${new Date(
                      movie.releasedDate * 1000
                    ).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                    })}`}
                  </p>
                  <p className="text-blue-500 mb-2">
                    {`${movie.pageViews} views | voted by ${movie.totalVoted} People`}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                  Watch a Trailer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {info && (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col mb-4 mt-20 p-6">
          <h1 className="text-xl font-semibold mb-2">
            Company:
            <span className="text-gray-600 ml-2">
              Geeksynergy Technologies Pvt Ltd
            </span>
          </h1>
          <h1 className="text-xl font-semibold mb-2">
            Address:
            <span className="text-gray-600 ml-2">
              Sanjayanagar, Bengaluru-56
            </span>
          </h1>
          <h1 className="text-xl font-semibold mb-2">
            Phone: <span className="text-gray-600 ml-2">XXXXXXXXX09</span>
          </h1>
          <h1 className="text-xl font-semibold mb-2">
            Email: <span className="text-gray-600 ml-2">XXXXXX@gmail.com</span>
          </h1>
          <button
            className="bg-red-600 text-white rounded-lg w-1/3 mt-4 hover:bg-red-700"
            onClick={() => setInfo(!info)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Movies;
