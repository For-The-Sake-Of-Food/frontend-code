import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";
import './App.css';


function App() { 
  return (
    <>
      <div className="App">
        <NavBar/>
        <Hero/>
        <Blog/>
        <About/>
      </div>
    </>
  )
}

export default App
