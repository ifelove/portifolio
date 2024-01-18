import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./About";
import Services from "./Services";
import Skill from "./Skill";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import image from "./assets/images/mypic.png";
function App() {
  const [animateNav, setAnimateNav] = React.useState(false);
  const handleScroll = (e) => {
    const position = window.scrollY;
   //  setSrollPosition(position);
     console.log("scrollY",window.scrollY)
     console.log("position",position)
     if (position > 234){
      setAnimateNav(true)
     }else{ setAnimateNav(false);}


  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <Navbar animateNav={animateNav} />
        <Hero />

        <About />

        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
