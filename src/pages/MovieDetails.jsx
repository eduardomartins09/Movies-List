import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsCalendar2DateFill,
} from "react-icons/bs";

const API_KEY = `7bcc916b835fb16aa7c22a673eda7f1f`;

import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  function formatCurrency(number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  const formatDate = (date) => {
    return date.split("-").reverse().join("/");
  };

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    getMovies(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <div className="container">
          <div className="img-container">
            <img src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt={movie.title} />
          </div>
          <div className="details">
            <p className="tagline">{movie.title}</p>
            <div className="info">
              <h3>
                <BsWallet2 /> Budget:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp /> Revenue:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
              <h3>
                <BsCalendar2DateFill /> Release Data:
              </h3> 
              <p>{formatDate(movie.release_date)}</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit /> Runtime:
              </h3>
              <p>{movie.runtime} minutes</p>
            </div>
            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill /> Overview:
              </h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
