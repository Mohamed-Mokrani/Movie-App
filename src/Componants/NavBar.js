import { useState } from "react";

const NavBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [movieSearch, setMovieSearch] = useState("");

  const OClick = () => setShowInput(true);
  const mouseLeave = () => setMovieSearch("") + setShowInput(false);

  return (
    <div className="nav-bar">
      <p className="logo">Movie Time</p>

      <div className="nav-bar-right">
        <div className="search" onClick={OClick} onMouseLeave={mouseLeave}>
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
        <p>
          <i class="fa-solid fa-plus"></i>
        </p>
      </div>
    </div>
  );
};

export default NavBar;
