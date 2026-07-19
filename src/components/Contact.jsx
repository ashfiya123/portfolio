import React from "react";
import "./styles/Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-card">
        <h3>Phone Number</h3>
        <a href="tel:7455048206">
          7455048206
        </a>

        <h3>Email</h3>
        <a
          href="mailto:asfiyashekh30@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          asfiyashekh30@gmail.com
        </a>

        <h3>LinkedIn</h3>
        <a
          href="https://linkedin.com/in/ashfiya-76a626283"
          target="_blank"
          rel="noreferrer"
        >
          View LinkedIn Profile
        </a>

        <h3>GitHub</h3>
        <a
          href="https://github.com/ashfiya123"
          target="_blank"
          rel="noreferrer"
        >
          github.com/ashfiya123
        </a>
      </div>
    </section>
  );
};

export default Contact;