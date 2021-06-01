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
          href="https://docs.google.com/document/d/1aSMDBButRYQEdWI7NGBPORGpolytGyysqtswP2vPVoQ/export?format=pdf"
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
