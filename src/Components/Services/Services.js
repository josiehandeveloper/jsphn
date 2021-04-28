import React from "react";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services-container">
      <h1>Services</h1>

      <div className="group-services">
        <div className="services-item-1">
          <ul>
            <li>
              <h3>Functionality</h3>
              <p>Develop a complete and functional website</p>
            </li>
            <li>
              <h3>Aesthetics</h3>
              <p>
                Focus on great design, making the finished product aesthetically
                pleasing
              </p>
            </li>
            <li>
              <h3>User Experience</h3>
              <p>Incorporate aspects of user interface and user experience</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
