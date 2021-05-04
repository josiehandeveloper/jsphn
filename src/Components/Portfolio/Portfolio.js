import React from "react";
import "./Portfolio.css";
import PortfolioItem from "../../Components/PortfolioItem/PortfolioItem";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
        <div className="portfolio__wrapper">
          <ul className="portfolio__items">
            <PortfolioItem
              src="images/UrbanGif/search-macbook.png"
              text="UrbanGifs is a fun application where users search within the UrbanDictionary database and the GIPHY database mashing both results onto a search page! This application is for those who like GIFS and Urban Dictionary, old and young users alike will find this search bar as a fun and dynamic way to search for words and GIFS."
              title="UrbanGif"
            />
            <PortfolioItem
              src="images/WatchIt/watchIt1.png"
              text="Watch It is an application where users can login, search for movies within the Open Movie Database, and create a customized movie query. With more indoor time I was inspired to create this application so users can find new movies to watch that might not be available on certain streaming sites."
              title="WatchIt"
            />
            <PortfolioItem
              src="images/Grateful/grateful1.png"
              text="Grateful is an application where users can log and practice their gratitude. This application is for everyone who wants to practice mindfulness. This pandemic has put a mental strain on all of us and it's important to recognize the toll it has taken on us and promote practices to achieve a better state of mental health."
              title="Grateful"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
