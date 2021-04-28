import React from "react";
import dahlia from "../../images/dahlia.jpg";
import scroll from "../../images/scroll.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-item-1">
          <h1>HELLO</h1>
          <h2>I'M JOSEPHINE</h2>
        </div>
        <div className="hero-items">
          <div className="hero-item-2">
            <img
              src={scroll}
              alt="scroll"
              className="scroll"
              width="50px"
              height="200px"
            />
          </div>
          <div className="hero-item-3">
            <img src={dahlia} alt="dahlia" className="dahlia" width="500px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
