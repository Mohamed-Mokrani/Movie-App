const NavBar = () => {
  return (
    <div className="nav-bar">
      <p className="logo">Movie Time</p>

      <div className="nav-bar-right">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for a movie ?"
          />
          <button className="search-button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact</p>
        <p>Partners</p>
      </div>
    </div>
  );
};

export default NavBar;
