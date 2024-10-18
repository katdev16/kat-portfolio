import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css'; // Create a simple CSS file for styling

function App() {
  return (
    <div className="App">
      <header>
        <h1>Katlego Dhlamini - Developer Portfolio</h1>
      </header>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
