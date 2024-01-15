import React from 'react'
import reveew from "./assets/images/reveew.png"
import foodlens from "./assets/images/foodlens.png"
import { FaLongArrowAltRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="heading"> Projects</h2>

      <div className="project-container">
        <article className="project-article">
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
                Read more <span><FaLongArrowAltRight/></span>
              </p>{" "}
              <p>API Doc</p>
            </div>
          </div>
        </article>

        <article className="project-article">
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
              <p>Read more  <span><FaLongArrowAltRight/></span></p> <p className="doc">API Doc</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects
