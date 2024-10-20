import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css'; // Create a simple CSS file for styling
import profileImage from './images/profile.jpeg'; 

function App() {
  return (
    <div className="App">
      <header>
        <h1>Katlego - Developer Portfolio</h1>
        <img src={profileImage} alt="Katlego" style={{ width: '150px', borderRadius: '50%' }} />
      </header>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
