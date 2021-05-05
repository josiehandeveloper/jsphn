import React from "react";

function PortfolioItem(props) {
  return (
    <>
      <li className="portfolio__item">
        <div className="portfolio__item__link">
          <div className="portfolio__item__pic-wrap">
            <img
              className="portfolio__item__img"
              alt="Portfolio img"
              src={props.src}
            />
          </div>
          <div className="portfolio__item__info">
            <h4 className="portfolio__item__title">{props.title}</h4>
            <h4 className="portfolio__item__links">
              {props.live}
              {props.code}
            </h4>
            <h5 className="portfolio__item__text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default PortfolioItem;
