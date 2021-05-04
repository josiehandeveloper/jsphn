import React from "react";
import "./Services.css";

function Services() {
  return (
    <div id="services" className="services">
      <div className="services__container">
        <div className="services__left__pic"></div>
        <div className="services__right">
          <div className="services__right__content">
            <h1>Services</h1>
            <ul className="services__list">
              <li>
                <h3>Functionality</h3>
                <p>Develop a complete and functional website</p>
              </li>
              <li>
                <h3>Aesthetics</h3>
                <p>Focus on great design</p>
              </li>
              <li>
                <h3>User Experience</h3>
                <p>Incorporate aspects of user interface and user experience</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
