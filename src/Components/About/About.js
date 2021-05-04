import React from "react";
import profile from "../../images/profile.png";
import "./About.css";

function About() {
  return (
    <div id="about" className="about">
      <div className="about__container">
        <div className="about__item__1">
          <img src={profile} alt="profile" className="main__img" />
        </div>
        <div className="about__item__2">
          <h2>
            I'm Jo! A full stack developer currently living in Orange County,
            CA.
          </h2>
          <p>
            I've always had a fascination with technology. Building a PC tower a
            couple years ago sparked an interest in software and led me to
            Thinkful. I enjoy being part of the the technical development along
            with design aspects that are interweaved to create the final
            product. I am willing to take on any challenges that will help me
            become a better developer. Outside of coding, I enjoy learning new
            languages and traveling to different countries. Last year, I went on
            a backpacking trip to Thailand. I really want to go back to South
            East Asia and immerse myself in different cultures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
