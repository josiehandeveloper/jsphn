import React from "react";
import profile from "../../images/profile.png";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-container">
      <h1>About</h1>
      <div className="group">
        <div className="about-item-1">
          <img src={profile} alt="profile" className="main_img" />
        </div>
        <div className="about-item-2">
          <h2>
            I'm Jo! A full stack developer currently living in Orange County,
            CA.
          </h2>
          <p>
            I've always been interested in techbology work. Building a PC tower
            a couple years ago sparked an interest in software and led me to
            Thinkful. Web development incorporates technical coding skills along
            with design components that are interweaved to create the final
            product. I am willing to take on any challenges that will help me
            become a better developer. Outside of coding, I enjoy learning new
            languages and traveling to different countries. Last year, I went on
            a backpacking trip to Thailand. I really want to go back to South
            East Asia and immerse myself in different cultures.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
