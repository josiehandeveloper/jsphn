import React from "react";
import "./PortfolioItem.css";

function PortfolioItem(props) {
  return (
    <div className="portfolio__item">
      <img
        className="portfolio__item__img"
        alt="Portfolio img"
        src={props.src}
      />
      <div className="portfolio__item__info">
        <h4 className="portfolio__item__title">{props.title}</h4>
        <h4 className="portfolio__item__links">
          <a href={props.live} target="_blank" rel="noreferrer">
            Live Site
          </a>
          <a href={props.client} target="_blank" rel="noreferrer">
            Client
          </a>
          <a href={props.server} target="_blank" rel="noreferrer">
            Server
          </a>
        </h4>
        <h5 className="portfolio__item__text">{props.text}</h5>
        <h5 className="portfolio__item__tech">
          {" "}
          Technologies Used: {props.tech}
        </h5>
      </div>
    </div>
  );
}

export default PortfolioItem;
