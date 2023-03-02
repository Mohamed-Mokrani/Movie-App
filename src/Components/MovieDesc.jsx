import React from "react";
import { Link } from "react-router-dom";
import movie from "../Storage/movie.mp4";

const MovieDesc = () => {
  return (
    <div className="Movie-desc">
      <video src={movie} autoPlay muted loop />
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        minus, sit enim ea voluptates ullam officia, voluptatum quae laboriosam
        animi natus voluptate hic dolores? Nam animi unde suscipit dicta
        repellendus!
      </p>
      <Link to="/app">
      <button> x </button>
      </Link>
    </div>
  );
};

export default MovieDesc;
