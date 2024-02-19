import React from "react";
import image from "./assets/images/mypic.png";
import AOS from "aos";
import "aos/dist/aos.css";
import cv from "./assets/files/Aweda_Ifeoluwa_Olorundele_CV.doc";
import Typed from "typed.js";

import { FloatButton } from "antd";

const Hero = () => {
  AOS.init()
 const el = React.useRef(null);

 React.useEffect(() => {
   const typed = new Typed(el.current, {
     strings: ["Software Engineer"],
     typeSpeed: 200,
     backSpeed:200,
     backDelay:1000,
     loop:true,
   });

   return () => {
     // Destroy Typed instance during cleanup to stop animation
     typed.destroy();
   };
 }, []);


  return (
    <>
      <article className="main-hero">
      
        <section className="hero">
          <article className="main-article" data-aos="fade-up">
            <h4>Hi,Its me </h4>
            <h1 className="my-name">Aweda Ifeoluwa</h1>
            <h1 className="my-role">
              I am a <span ref={el}></span>
            </h1>
            <p className="role-desc">
              I am software enginner with 3years experience.Expertise is web
              development and many more{" "}
            </p>
         
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
          {/* <img src={image} alt="" className="image" /> */}
        </section>
        <FloatButton.BackTop visibilityHeight={0} className="bk-icon" />
      </article>
    </>
  );
};

export default Hero;
