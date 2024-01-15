import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./About";
import Services from "./Services";
import Skill from "./Skill";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";


import image from "./assets/images/mypic.png";
function App() {
  const nav = document.querySelector(".navlinks");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 12);
  });

  return (
    <>
      <div>
       <Navbar/>
       <Hero/>
        <About />
        <Services/>
        <Skill/>
        <Projects/>
      </div>
    </>
  );
}

export default App;
