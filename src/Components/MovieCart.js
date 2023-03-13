import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieCart = ({movies,movieSearch}) => {
  const [hoverIndex, setHoverIndex] = useState("");
  const handleMovieHover = (index) => setHoverIndex(index);
  const handleMovieLeave = () => setHoverIndex(null);
  
  return (
    <div className='movies-container'>
    <div className="movie-section">
      
      {movies

      .filter(
        (el)=>el.name.toLowerCase().includes(movieSearch.toLowerCase())
      )
      
      .map((movies, index) => (
        <Link to ="/MovieDesc" className="movie-hover">
        <div key={index} className="movie-cart">
          <img
            src={movies.image}
            alt="Movie name"
            onMouseEnter={() => handleMovieHover(index)}
            onMouseLeave={handleMovieLeave}
          />
          {hoverIndex === index && (
            <button className="button-start" onMouseEnter={() => handleMovieHover(index)}>
              <i className="fa-solid fa-play"></i>
            </button>
          )}
        </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default MovieCart;