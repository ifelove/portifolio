import React from "react";
import image2 from "./assets/images/mypic.png";

const About = () => {
  return (
    <section className="about" id="about">
      <img src={image2} alt="" className="about-image" />
      <article>
        <h2>About me</h2>
        <h4>Backend Developer</h4>
        <p>
          I am skilled software Engineer specialized in backend develpoment with
          over 2years experience in the industry as a web developer and 5years
          as Technical support specialist in an Internet of Things sector. My
          passion is building tools that are user-friendly,simple and
          delightful. I was a student at ALX Africa where I spent 1year learning
          te fundamentals of software engineering.I also worked serve as an
          intern in ALX Africa where I specialised as a Backend developer.
          
          Through these experiences.I had the opportunity to work with team and 
          as individual,specialised and cross-functional teams across different
           time zones and develope a working style that leans towards flexibility,clarity and colaboration.

           I am currently looking for a role as a developer.

         
        </p>
      </article>
    </section>
  );
};

export default About;
