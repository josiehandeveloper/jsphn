import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="contact" className="footer-container">
      <div className="footer-wrap">
        <a
          className="link"
          href="mailto:jsphnhan@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-envelope-square"></i>
        </a>
        <a
          className="link"
          href="https://github.com/josiehandeveloper"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/josephine-han/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="link"
          href="https://drive.google.com/file/d/1Br5xE3K_qKIy4SWjb3htBzk6jWtUuZpJ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <i className="far fa-file-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
