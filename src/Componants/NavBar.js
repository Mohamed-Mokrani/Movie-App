import { useState, useEffect } from "react";

const NavBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [movieSearch, setMovieSearch] = useState("");
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState("transparent");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setNavBarBackgroundColor(scrollPosition > 0 ? "black" : "transparent");
  };

  const handleInputClick = () => setShowInput(true);

  const handleInputMouseLeave = () => {
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
        <div className="search" onClick={handleInputClick} onMouseLeave={handleInputMouseLeave}>
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
