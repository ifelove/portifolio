import React from 'react'
import image from "./assets/images/mypic.png";

const Hero = () => {
     
  return (
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
  );
}

export default Hero
