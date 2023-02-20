import "./App.css";
import NavBar from "./Componants/NavBar";
import Home from "./Componants/Home";
import MoviesContainer from "./Componants/MoviesContainer";



function App() {
 
  return (
    <div className="App">
      <NavBar />
      <Home />
      <h1 className="movies-title">MOVIES</h1>
      <MoviesContainer/>
      
    </div>
  );
}

export default App;
