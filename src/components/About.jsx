import React from "react";
import "./styles/About.scss";

const About = () => {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-left">
          <h2>About Me</h2>

          <p>
            I'm Ashfiya, a third-year B.Tech student specializing
            in Artificial Intelligence and Machine Learning.
          </p>

          <p>
            I enjoy building web and mobile applications,
            exploring cybersecurity concepts,
            and creating modern user experiences.
          </p>

          <p>
            My goal is to become a skilled Software Engineer
            and AI Developer capable of solving real-world problems.
          </p>
        </div>

        <div className="about-right">
          <div className="about-card">
            <h3>3+</h3>
            <p>Major Projects</p>
          </div>

          <div className="about-card">
            <h3>Flutter</h3>
            <p>Development</p>
          </div>

          <div className="about-card">
            <h3>Cyber</h3>
            <p>Security</p>
          </div>

          <div className="about-card">
            <h3>AI/ML</h3>
            <p>Student</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;