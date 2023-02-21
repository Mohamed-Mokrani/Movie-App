import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import MovieCart from "./Components/MovieCart";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    "https://yt3.googleusercontent.com/99-ihtbZVJQIaGaK6NhPtL8uPhv1giertqEeTIkICWqnnQRPL4-qJ1Zri8VycOeu8HKTomR0rg",
    "https://c4.wallpaperflare.com/wallpaper/1022/503/670/fifty-shades-of-grey-poster-monochrome-wallpaper-preview.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0a/SEX_EDUCATION_4_SEASON.jpg",
    "https://ntvb.tmsimg.com/assets/p8282918_b_h8_bn.jpg?w=960&h=540",
    "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4909/474909-h",
    "https://media.ouest-france.fr/v1/pictures/MjAyMTA4YmFiYjFmNzU5ZDRmY2E5YzQ0Zjk3OGE0YWFkNmU0NTI?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=22d9093444c8f8db547d44df193a3639ed40ad059d757c38acf34973748f9cec",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EFE48951F051DD05D7CDFC3DB047CB668B91D62466260724C98DB86616D489B9/scale?width=1200&aspectRatio=1.78&format=jpeg",
  ]);
  const [newMovieImage, setNewMovieImage] = useState("");
  const [newMovieName,setNewMovieName]=useState("");

  const moviesUpdate = () => {
    setMovies([...movies, newMovieImage]);
    setNewMovieImage("");
    setNewMovieName("");
  };

  return (
    <div className="App">
      <NavBar newMovieImage={newMovieImage}
        newMovieName={newMovieName}
        setNewMovieName={setNewMovieName}
        setNewMovieImage={setNewMovieImage}
        moviesUpdate={moviesUpdate}/>
      <Home />
      <h1 className="movies-title">MOVIES</h1>
      <MovieCart
        movies={movies}
      />
    </div>
  );
}

export default App;
