import React from "react";


const Navbar = ({ animateNav, scrollToContainer }) => {
  const container = React.useRef();
  const nav = container.current;

  /**
   window.addEventListener("scroll", () => {
     nav.classList.toggle("sticky", window.scrollY > 12);
   });
    */

  return (
    <nav className={`${animateNav ? "nav sticky" : "nav"}`} ref={container}>
      <div>
        <span className="logo">HiTech</span>
      </div>


      <ul className="navlinks">
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#about ">
          <li>About</li>
        </a>
        <a href="#skill">
          {" "}
          <li>Skills</li>
        </a>

        <a href="#project">
          <li>Projects</li>
        </a>
        <a href="#project">
          <li>Tools</li>
        </a>
      </ul>

      <a href="#contact">
        <div className="contact">Contact Me</div>
      </a>
    </nav>
  );
};

export default Navbar;
