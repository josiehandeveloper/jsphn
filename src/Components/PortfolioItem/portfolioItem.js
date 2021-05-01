import React from "react";
import "./portfolioItem.css";

function PortfolioItem(props) {
  return (
    <div className="portfolio__item__container">
      <li className="portfolio__item">
        <div className="portfolio__item__box" to={props.path}>
          <div className="portfolio__item__wrap" data-category={props.label}>
            <img
              src={props.src}
              className="portfolio__item__img"
              alt="Portfolio img"
            />
          </div>
          <div className="portfolio__item__info">
            <h5 className="portfolio__item__text">{props.text}</h5>
          </div>
        </div>
      </li>
    </div>
  );
}

export default PortfolioItem;
