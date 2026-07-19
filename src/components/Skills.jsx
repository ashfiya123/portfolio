import React from "react";
import "./styles/Skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">

      <div className="section-title">
        <h2>My Skills</h2>
        <p>
          Technologies, tools and domains I work with.
        </p>
      </div>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Frontend Development</h3>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>App Development</h3>

          <ul>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Firebase</li>
            <li>Supabase</li>
            <li>API Integration</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>UI/UX Design</h3>

          <ul>
            <li>Figma</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>User Research</li>
            <li>Design Thinking</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Cyber Security</h3>

          <ul>
            <li>VAPT</li>
            <li>Burp Suite</li>
            <li>Nmap</li>
            <li>Information Security</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Programming</h3>

          <ul>
            <li>Python</li>
            <li>C</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Data Analytics</h3>

          <ul>
            <li>Power BI</li>
            <li>Excel</li>
            <li>Data Visualization</li>
          </ul>
        </div>

      </div>

    </section>
  );
};

export default Skills;