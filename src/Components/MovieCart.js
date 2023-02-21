import React, { useState } from "react";

const MovieCart = ({movies}) => {
  const [hoverIndex, setHoverIndex] = useState("");
  const handleMovieHover = (index) => setHoverIndex(index);
  const handleMovieLeave = () => setHoverIndex(null);
  
  return (
    <div className='movies-container'>
    <div className="movie-section">
      {movies.map((movies, index) => (
        <div key={index} className="movie-cart">
          <img
            src={movies}
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
      ))}
    </div>
    </div>
  );
};

export default MovieCart;
