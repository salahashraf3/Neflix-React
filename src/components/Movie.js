import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "../axios";
import "./Movie.css";
// import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

function Movie(props) {
  const [cast, setCast] = useState([]);
  const location = useLocation();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isOpen, setOpen] = useState(false);

  const movie = location.state;

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=9acf0a6d2389dcf15120b2ab4d37cbed`
      );
      // console.log(request);
      setCast(request.data.cast);
      // return request;
    };
    fetchData();
  }, [movie, cast]);
  // console.log(movie);

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.original_title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setOpen(true);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="movie">
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button
              className="banner__button"
              onClick={() => handleClick(movie)}
            >
              Play Trailer
            </button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">{movie?.overview}</h1>
        </div>
        <div className="banner__fadeBottom"></div>
      </header>
      <div className="cast__container">
        <h2>Cast & Crew</h2>
        <div className="cast__list">
          {cast.map((cast) => {
            return (
              <>
                <div className="cast">
                  {cast.profile_path && (
                    <>
                      <img
                        key={cast.id}
                        src={
                          "https://image.tmdb.org/t/p/original/" +
                          cast.profile_path
                        }
                        alt={cast.profile_path}
                      />
                      <p>{cast.name}</p>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="youtube__container">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={trailerUrl}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}

export default Movie;
