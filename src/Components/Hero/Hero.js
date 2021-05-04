import React from "react";
import dahlia from "../../images/dahlia.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__wrapper">
        <div className="hero__items">
          <div className="hero__item__1">
            <h1>HELLO</h1>
          </div>
          <div className="hero__item__2">
            <h2>I'M JOSEPHINE</h2>
          </div>
        </div>
        <div className="hero__item__3">
          <img src={dahlia} alt="dahlia" className="dahlia" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
