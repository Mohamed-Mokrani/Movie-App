import { useState, useEffect } from "react";

const NavBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [movieSearch, setMovieSearch] = useState("");
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("");
  const [addMovie, setAddMovie] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setNavBarBackgroundColor(scrollPosition > 0 ? "black" : "");
  };

  const addMovieClick = () => setAddMovie(true);
  const cancelMovie = () => setAddMovie(false);
  const inputClick = () => setShowInput(true);
  const inputMouseLeave = () => {
    setMovieSearch("");
    setShowInput(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav-bar" style={{ backgroundColor: navBarBackgroundColor }}>
      <p className="logo">Movie Time</p>

      <div className="nav-bar-right">
        <div
          className="search"
          onMouseEnter={inputClick}
          onMouseLeave={inputMouseLeave}
        >
          <button className="search-button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          {showInput ? (
            <input
              className="search-input"
              type="text"
              placeholder="Search for a Movie?"
              onChange={(e) => setMovieSearch(e.target.value)}
            />
          ) : (
            ""
          )}
        </div>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact</p>
        <p>Partners</p>
        <p onMouseEnter={addMovieClick}>
          <i class="fa-solid fa-plus"></i>
        </p>
        {addMovie ? (
          <div class="add-movie" onMouseLeave={cancelMovie}>
            <form className="form">
              <div>
                <input type="text" placeholder="Put the movie's NAME" />
                <i class="fa-solid fa-heading addmovie-logo"></i>
              </div>
              <div>
                <input type="text" placeholder="Put the movie's IMAGE" />
                <i class="fa-solid fa-image addmovie-logo"></i>
              </div>
              <input type="range" />
              <div className="add-movies-buttons">
                <button type="button">
                  {""}
                  <i class="fa-solid fa-plus"></i> Add movie
                </button>
                <button type="reset">
                  <i class="fa-solid fa-xmark"></i>Reset
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavBar;