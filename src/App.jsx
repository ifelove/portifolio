import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./About";

import image from "./assets/images/mypic.png";
function App() {
  const nav = document.querySelector(".navlinks");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 12);
  });

  return (
    <>
      <div>
        <nav className="nav">
          <div>
            <span className="logo">HiTech</span>
          </div>

          <ul className="navlinks">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>

            <li>Portfolio</li>
          </ul>
          <div className="contact">Contact Me</div>
        </nav>
        <section className="hero">
          <article className="main-article">
            <h4>Hi,Its me </h4>
            <h1 className="my-name">Aweda Ifeoluwa</h1>
            <h1 className="my-role">And I am a Backend Engineer</h1>
            <p className="role-desc">
              I am software enginner with 3years experience.Expertise is web
              development and many more{" "}
            </p>
            <div className="social-link">3 4 4</div>
            <main className="main-btn">
              <button className="btn btn1">Github</button>
              <button className="btn btn2">Download CV</button>
            </main>
          </article>
          <img src={image} alt="" className="image" />
        </section>
        <About />
      </div>
    </>
  );
}

export default App;
