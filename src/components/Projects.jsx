import React from "react";
import "./styles/Projects.scss";

const projects = [
  {
    title: "Kisan Mitra",
    description:
      "Flutter-based application helping farmers with crop guidance, weather updates, market prices, AI-powered recommendations, and government schemes.",
    tech: "Flutter • Firebase Auth • Supabase • API Integration",
    github: "https://github.com/ashfiya123",
  },

  {
    title: "Cyber Quest",
    description:
      "A CTF platform built using Django featuring cybersecurity challenges, authentication, score tracking, levels, and badges.",
    tech: "Django • Python • HTML • CSS",
    github: "https://github.com/ashfiya123",
  },

  {
    title: "ScanCart",
    description:
      "QR-code based shopping application that scans products, displays details, manages cart items, and calculates totals.",
    tech: "Flutter • Firebase",
    github: "https://github.com/ashfiya123",
  },

  {
    title: "MysteryVerse",
    description:
      "Interactive mystery-solving web game with clues, puzzles, storytelling, and engaging gameplay mechanics.",
    tech: "HTML • CSS • JavaScript",
    github: "https://github.com/ashfiya123",
  },

  {
    title: "Portfolio App",
    description:
      "Professional portfolio management application with authentication, project approval workflow, and admin dashboard.",
    tech: "Flutter • Firebase Auth • Supabase",
    github: "https://github.com/ashfiya123",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-title">
        <h2>Featured Projects</h2>
        <p>Some of the projects I have built and worked on.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <h3>{project.title}</h3>
            </div>

            <div className="project-content">
              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;