import React from "react";
import { Link } from "react-router-dom";

function PortfolioItem(props) {
  return (
    <>
      <li className="portfolio__item">
        <Link className="portfolio__item__link" to={props.path}>
          <div className="portfolio__item__pic-wrap">
            <img
              className="portfolio__item__img"
              alt="Portfolio img"
              src={props.src}
            />
          </div>
          <div className="portfolio__item__info">
            <h4 className="portfolio__item__title">{props.title}</h4>
            <h5 className="portfolio__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PortfolioItem;
