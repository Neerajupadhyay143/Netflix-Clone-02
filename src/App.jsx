import React from "react";
import "./App.css";
import Row from "./Row";
import "./Row.css";
import requests from "./requests";
import NavBar from "./NavBar";
import Banner from "./Banner";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <Banner />
        <Row
          title="NETFLIX ORIGINAL"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title=" Trending Now" fetchUrl={requests.fetchTreanding} />
        <Row title=" Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title=" Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title=" Comady Movies" fetchUrl={requests.fetchComadyMovies} />
        <Row title=" Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
}

export default App;
