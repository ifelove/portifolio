import React from 'react'

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <span className="logo">HiTech</span>
      </div>

      <ul className="navlinks">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Skills</li>

        <li>Portfolio</li>
      </ul>
      <div className="contact">Contact Me</div>
    </nav>
  );
}

export default Navbar
