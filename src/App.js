import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import MovieCart from "./Components/MovieCart";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    {
      name: "you",
      image:
        "https://yt3.googleusercontent.com/99-ihtbZVJQIaGaK6NhPtL8uPhv1giertqEeTIkICWqnnQRPL4-qJ1Zri8VycOeu8HKTomR0rg",
    },
    {
      name: "game of thrones",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/4909/474909-h",
    },
    {
      name: "356 days",
      image:
        "https://www.zikoko.com/wp-content/uploads/zikoko/2022/04/image-86-1024x576.jpg",
    },
    {
      name: "breaking bad",
      image: "https://www.pause-canap.com/media/wysiwyg/serie-breaking-bad.JPG",
    },
    {
      name: "the walking dead",
      image: "https://ntvb.tmsimg.com/assets/p8282918_b_h8_bn.jpg?w=960&h=540",
    },
    {
      name: "the invisible guest",
      image:
        "https://itswynnesworld.files.wordpress.com/2021/06/the-invisible-guest.jpg",
    },
  ]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const moviesUpdate = () => {
    setMovies([...movies, { name, image }]);
    setName("");
    setImage("");
  };

  return (
    <div className="App">
      <NavBar
        name={name}
        setName={setName}
        image={image}
        setImage={setImage}
        moviesUpdate={moviesUpdate}
      />
      <Home />
      <h1 className="movies-title">MOVIES</h1>
      <MovieCart movies={movies} />
    </div>
  );
}

export default App;
