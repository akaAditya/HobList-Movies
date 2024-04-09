import React, { useEffect, useState } from "react";
import Movies from "./components/Movies";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch("https://hoblist.com/api/movieList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: "movies",
          genre: "all",
          language: "kannada",
          sort: "voting",
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMovies(data.result);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
      </Routes>
    </>
  );
};

export default App;
