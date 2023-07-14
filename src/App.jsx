import React, { useState } from "react";
import "./App.css";
import Row from "./Row";
import "./Row.css";
import requests from "./requests";
import NavBar from "./NavBar";
import Banner from "./Banner";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

function App() {

  const[token,setToken]=useState(null);


  const logoutEvent=()=>{

    (token ==null)?(
      <SignupScreen token={token} setToken={setToken}/>
    ):(
     setToken(null)
    )
//   }
  }
  console.log(logoutEvent)
  
  
  return (
    <>
      <div className="app">
        {token=== null?(
          <LoginScreen token={token} setToken={setToken} />
        ):(<>
         <NavBar logoutEvent={()=>{logoutEvent()}} />
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
       </> )
        }
       
      </div>
    </>
  );
}

export default App;
