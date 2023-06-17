import React, { useEffect, useState } from "react";
import requests from "./requests";
import "./Banner.css";
import  YouTube  from 'react-youtube';
import movieTralier from 'movie-trailer';

function Banner() {
  // const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const[bannerTrailer,setBannerTrailer]=useState("");

  useEffect(() => {
    fetch(requests.fetchTopRated).then((request) => {
      request.json().then((responce) => {
        setMovies(
          responce.results[
            Math.floor(Math.random() * responce.results.length - 2)
          ]
        );
        console.log(
          responce.results[
            Math.floor(Math.random() * responce.results.length - 2)
          ]
        );
      });
    });

    
  
  }, []);



  const Truncate=(str,n)=>{
    return str?.length> n ? str.substr(0 , n - 1)+"...": str;

  }

  const opts={
    autoPlay :1,
    control :1,
    height: "390",
    width: "100%"
  }

  const HandleBanner =(movies)=>{
if(bannerTrailer){
  setBannerTrailer("")
}else{
  movieTralier(movies.original_title || movies.original_name).then((url)=>{
    setBannerTrailer(url);
  })
}
  }

  return (
    <>
      <header
        className="banner"
      
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__container">
          <h1 className="banner__title">
            {movies?.title || movies?.name || movies?.original_title}
          
            </h1>
        </div>
        <div className="banner__buttons">
          <button className="banner__button"
           onClick={(()=>HandleBanner(movies))}
          >Play</button>
          <button className="banner__button"> My List</button>
        </div>
        <h1 className="banner__discription">{movies?.overview}
        {Truncate(movies?.overview,100)}
        </h1>
        <div className="banner-fadeBottom"/>
      </header>
{bannerTrailer.length > 0 ?(<YouTube videoId={bannerTrailer.split("=")[1]} opts={opts}/>): null }
    </>
  );
}

export default Banner;
