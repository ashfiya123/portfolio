import React from "react";
import "./styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Ashfiya</h2>
      </div>

      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <a href="/resume.pdf" download>
        <button className="resume-btn">
          Resume
        </button>
      </a>
    </header>
  );
};

export default Header;