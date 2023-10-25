import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import './App.css';


function App() { 
  return (
    <>
      <div className="App">
        <NavBar/>
        <Hero/> 
        <About/>
      </div>
    </>
  )
}

export default App
