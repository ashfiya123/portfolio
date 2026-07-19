import React from "react";
import "./styles/Hero.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h3>Hello, I'm</h3>

        <h1>Ashfiya Sheikh</h1>

        <h2>AI & ML Student</h2>

        <p>
          Passionate AI & ML student with experience in Flutter Development,
          React.js, UI/UX Design, Cyber Security, and Data Analytics.
          I enjoy building innovative applications and solving real-world
          problems through technology.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/ashfiya123"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/ashfiya-76a626283"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="/resume.pdf" download>
            <button className="outline">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;