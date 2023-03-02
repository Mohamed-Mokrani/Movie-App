import React from "react";
import movie from "../Storage/movie.mp4";

const Home = () => {
  return (
    <div className="home">
      <video src={movie} autoPlay muted loop />
      <div className="movie">
        <img
          src="https://dx35vtwkllhj9.cloudfront.net/stx/operation-fortune/images/regions/us/tt.png"
          alt="operation fortune"
        />
        <div className="movie-buttons">
          <button>
            <i class="fa-regular fa-circle-play"></i>Play
          </button>
          <button>
            <i class="fa-regular fa-circle-question"></i>More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
