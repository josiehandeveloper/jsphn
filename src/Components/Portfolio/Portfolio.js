import React from "react";
import "./Portfolio.css";
import PortfolioItem from "../PortfolioItem/portfolioItem.js";
import urbanGif from "../../images/UrbanGif/search-macbook.png";
import watchIt from "../../images/WatchIt/watchIt1.png";
import grateful from "../../images/Grateful/grateful1.png";

function Portfolio() {
  return (
    <div className="portfolio__container">
      <h1>Portfolio</h1>
      <ul className="portfolio__items">
        <PortfolioItem src={urbanGif} label="UrbanGif" path="/portfolio" />
        <PortfolioItem src={watchIt} label="WatchIt" path="/portfolio" />
        <PortfolioItem src={grateful} label="Grateful" path="/portfolio" />
      </ul>
    </div>
  );
}

export default Portfolio;
