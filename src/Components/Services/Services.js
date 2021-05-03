import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services__container">
      <div className="services__wrapper">
        <div className="services-left">
          <div className="services-left-bottom"></div>
        </div>
        <div className="services-right">
          <h1>Services</h1>
          <ul>
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
  );
}

export default Services;
