import React from "react";
import reveew from "./assets/images/reveew.png";
import foodlens from "./assets/images/foodlens.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    AOS.init();
  return (
    <section className="projects" >
      <div className="contact-heading">
        {" "}
        <h2 className="heading" data-aos="fade-right" data-aos-offset="300">
          {" "}
          Projects
        </h2>
      </div>

      <div className="project-container">
        <article className="project-article" data-aos="zoom-in-up">
          <div>
            <img src={reveew} alt="" className="project-image" />
          </div>
          <div className="project-main">
            <h4>Reveew </h4>
            <p className="project-role">Backend Engineer </p>
            <p className="project-desc">
              A unique experience in to how each customer has spent over te past
              yearA unique experience in to how each customer has spent over te
              past yearA unique experience in to how each customer has spent
              over te past yearA unique experience in to how each customer has
              spent over te past year
            </p>

            <div className="project-link">
              <p>
                Read more{" "}
                <span>
                  <a
                    href="https://github.com/Quammy93/REVEEW"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLongArrowAltRight className="readmore-arrow" />
                  </a>
                </span>
              </p>{" "}
              <a
                href="https://reveew.onrender.com/doc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">API Doc</button>
              </a>
            </div>
          </div>
        </article>

        <article className="project-article" data-aos="zoom-in-up">
          <div>
            <img src={foodlens} alt="" className="project-image" />
          </div>
          <div className="project-main">
            <h4>FoodLens </h4>
            <p className="project-role">Backend Engineer </p>
            <p className="project-desc">
              A unique experience in to how each customer has spent over te past
              year A unique experience in to how each customer has spent over te
              past yearA unique experience in to how each customer has spent
              over te past yearA unique experience in to how each customer has
              spent over te past yearA unique
            </p>

            <div className="project-link">
              <p>
                Read more{" "}
                <span>
                  <a
                    href="https://github.com/Elvis-rozy/FoodLENS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <FaLongArrowAltRight className="readmore-arrow" />
                  </a>{" "}
                </span>
              </p>{" "}
              <a
                href="https://food-lenz.onrender.com/doc"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button className="project-btn">API Doc</button>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
