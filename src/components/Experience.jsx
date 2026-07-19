import React from "react";
import "./styles/Experience.scss";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>B.Tech - AI & ML</h3>
            <span>2023 - Present</span>
            <p>
              Pursuing Bachelor of Technology in Artificial
              Intelligence and Machine Learning.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Flutter Developer Intern</h3>
            <span>Oct 2025 - Feb 2026</span>
            <p>
              Developed Flutter applications, integrated APIs,
              and worked on real-world projects.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Cyber Security Learning</h3>
            <span>May 2026-July 2026</span>
            <p>
              Working with Burp Suite, Nmap, VAPT,
              Web Security Testing and CTF Challenges.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;