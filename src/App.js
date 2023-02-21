import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

import MovieCart from "./Components/MovieCart";



function App() {
 
  return (
    <div className="App">
      <NavBar />
      <Home />
      <h1 className="movies-title">MOVIES</h1>
      <MovieCart/>
      
    </div>
  );
}

export default App;
