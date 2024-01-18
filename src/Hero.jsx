import React from "react";
import image from "./assets/images/mypic.png";
import cv from "./assets/files/Aweda_Ifeoluwa_Olorundele_CV.doc";

import { FloatButton } from "antd";

const Hero = () => {
  return (
    <>
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
            <a
              href="https://github.com/ifelove"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn btn1">Github</button>
            </a>{" "}
            <a
              href={cv}
              download="Aweda Ifeoluwa CV"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="btn btn2">Download CV</button>
            </a>
          </main>
        </article>
        <img src={image} alt="" className="image" />
      </section>
      <FloatButton.BackTop visibilityHeight={0} className="bk-icon" />
    </>
  );
};

export default Hero;
