import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTralier from "movie-trailer";
import requests from "./requests";
import YouTubeVidoes from "./YouTubeVideos"


function Row({ title, fetchUrl, isLargeRow }) {

  const[enterTrailer,setEnterTrailer]=useState(true);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(fetchUrl).then((responce) => {
      responce.json().then((data) => {
        // console.log(data.results);
        setMovies(data.results);
      });
    });
  }, [fetchUrl]);

  const opts = {
    height: "490",
    width: "100%",
    // https://developers.google.com/youtube/player_parameters
    autoPlay: 1,
    control: 1,
  };
  const HandleClick = (val) => {
    setEnterTrailer(true);
    console.log(val?.original_title || val?.original_name || "");
    if (trailerUrl) {
      setTrailerUrl(""); // to empty a string !
    } else {
      movieTralier(val?.original_title || val?.original_name || "")
        .then((url) => {
          console.log(url);
          setTrailerUrl(url);
          // const urlParams = new URLSearchParams(new URL(url).search);

          // urlParams.append('v',);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
      {enterTrailer?(
        <YouTubeVidoes trailerUrl={trailerUrl} fetchUrl={requests.fetchActionMovies} opts={opts}/>
      ):(
        null
      )}
        
        <div className="row__posters">
          {movies.map((val, index) => (
            <>
            <img
              key={index}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? val.poster_path : val.backdrop_path
              }`}
              alt={
                title !== "NETFLIX ORIGINAL"
                  ? val.original_title
                  : val.original_name
              }
              onClick={() => {
                HandleClick(val);
              }}
            />
            </>
          ))}
        </div>
       
      </div>
    </>
  );
}

export default Row;

// harshit--  gupta

//  {trailerUrl?.length > 0 ? (
//           <YouTube videoId={trailerUrl?.split("=")[1]} opts={opts} />
//         ) : null}