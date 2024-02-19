import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./About";
import Services from "./Services";
import Skill from "./Skill";
import Hero from "./Hero";

import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdMenu } from "react-icons/io";

import image from "./assets/images/mypic.png";
function App() {
  const container = React.useRef();
  const nav = container.current;

  const [animateNav, setAnimateNav] = React.useState(false);
  const handleScroll = (e) => {
    const position = window.scrollY;
    //  setSrollPosition(position);
    console.log("scrollY", window.scrollY);
    console.log("position", position);
    if (position > 13) {
      setAnimateNav(true);
    } else {
      setAnimateNav(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="app">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        className="new"
      />
      <div id="home">
        <nav className={`${animateNav ? "nav sticky" : "nav"}`} ref={container}>
          <div>
            <span className="logo">HiTech</span>
          </div>

          <ul className="navlinks">
            <Link to="home" offset={-100}>
              <li>Home</li>
            </Link>
            <Link to="about " offset={-250}>
              <li>About</li>
            </Link>
            <Link to="skill" offset={-200}>
              {" "}
              <li>Skills</li>
            </Link>

            <Link to="project" offset={-150}>
              <li>Projects</li>
            </Link>
          </ul>
          <Link to="contact" offset={-150}>
            <div className="contact">Contact Me</div>
          </Link>
          <IoMdMenu className="menu" />
        </nav>
        <div id="hero">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>
        <div id="skill">
          <Skill />
        </div>

        <div id="project">
          {" "}
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div></div>

        <Footer />
      </div>
    </section>
  );
}

export default App;
