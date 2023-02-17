import "./App.css";
import NavBar from "./Componants/NavBar";
import Home from "./Componants/Home";



function App() {
  
  window.addEventListener("scroll", function(){
    document.getElementsByClassName("nav-bar").classList.toggle("sticky", window.scrollY > 1);
    document.getElementsByClassName("nav-bar").style.backgroundColor="black";
  })
  return (
    <div className="App">
      <NavBar />
      <Home />
      
    </div>
  );
}

export default App;
