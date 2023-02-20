import React, { useState } from "react";

const MovieCart = () => {
  const [MovieHover, setMovieHover] = useState(false);

  const MovieOnHover = () => setMovieHover(true);
  const MovieOnLeave = () => setMovieHover(false);
  

  return (
    <div className="movie-cart">
      <img
        src="https://media.ouest-france.fr/v1/pictures/MjAyMTA4YmFiYjFmNzU5ZDRmY2E5YzQ0Zjk3OGE0YWFkNmU0NTI?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=22d9093444c8f8db547d44df193a3639ed40ad059d757c38acf34973748f9cec"
        alt="Movie name"
        onMouseEnter={MovieOnHover} onMouseLeave={MovieOnLeave}
      />
      {MovieHover ? (
        <button className="button-start" onMouseEnter={MovieOnHover}>
          <i class="fa-solid fa-play" ></i>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieCart;