import React, { useState } from "react";

const MovieCart = () => {
  const [hoverIndex, setHoverIndex] = useState("");
  const [movies, setMovies] = useState([
    "https://yt3.googleusercontent.com/99-ihtbZVJQIaGaK6NhPtL8uPhv1giertqEeTIkICWqnnQRPL4-qJ1Zri8VycOeu8HKTomR0rg",
    "https://c4.wallpaperflare.com/wallpaper/1022/503/670/fifty-shades-of-grey-poster-monochrome-wallpaper-preview.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/SEX_EDUCATION_4_SEASON.jpg",
    "https://ntvb.tmsimg.com/assets/p8282918_b_h8_bn.jpg?w=960&h=540",
    "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4909/474909-h",
    "https://media.ouest-france.fr/v1/pictures/MjAyMTA4YmFiYjFmNzU5ZDRmY2E5YzQ0Zjk3OGE0YWFkNmU0NTI?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=22d9093444c8f8db547d44df193a3639ed40ad059d757c38acf34973748f9cec",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EFE48951F051DD05D7CDFC3DB047CB668B91D62466260724C98DB86616D489B9/scale?width=1200&aspectRatio=1.78&format=jpeg",
  ]);

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
