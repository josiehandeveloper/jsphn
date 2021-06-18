import React from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
        <PortfolioItem
          src="images/Glampers/glampers.png"
          title="Glampers"
          live="https://glampers.vercel.app/"
          client="https://github.com/josiehandeveloper/glampers"
          server="https://github.com/josiehandeveloper/glampers-server"
          text="Glampers is an Airbnb inspired app where users can look for their one of a kind stay and add it to their cart"
          tech="React.js, CSS3, Node.js, Express, PostgreSQL, Material-UI"
        />
        <PortfolioItem
          src="images/WatchIt/watchIt1.png"
          title="WatchIt"
          live="https://watchit-app-seven.vercel.app/"
          client="https://github.com/josiehandeveloper/watchit-app.git"
          server="https://github.com/josiehandeveloper/watchit-2-server.git"
          text="Watch It is an application where users can login, search for
                    movies within the Open Movie Database, and create a
                    customized movie query. With more indoor time I was inspired
                    to create this application so users can find new movies to
                    watch that might not be available on certain streaming
                    sites."
          tech="React.js, CSS3, Node.js, Express, PostgreSQL"
        />
        <PortfolioItem
          src="images/UrbanGif/search-macbook.png"
          title="UrbanGif"
          live="https://josiehandeveloper.github.io/urban-gifs/"
          client="https://github.com/josiehandeveloper/urban-gifs.git"
          text="UrbanGifs is a fun application where users search within the
                    UrbanDictionary database and the GIPHY database mashing both
                    results onto a search page! This application is for those
                    who like GIFS and Urban Dictionary, old and young users
                    alike will find this search bar as a fun and dynamic way to
                    search for words and GIFS."
          tech="JavaScript ES6, jQuery, CSS3, HTML 5"
        />
      </div>
      {/* <div className="portfolio__container">
        <PortfolioItem
          src="images/Grateful/grateful.png"
          title="Grateful"
          live="https://grateful-app.vercel.app/"
          client="https://github.com/josiehandeveloper/grateful-app.git"
          server="https://github.com/josiehandeveloper/grateful2-server.git"
          text="Grateful is an application where users can log and practice
                    their gratitude. This application is for everyone who wants
                    to practice mindfulness. This pandemic has put a mental
                    strain on all of us and it's important to recognize the toll
                    it has taken on us and promote practices to achieve a better
                    state of mental health."
          tech="React.js, CSS3, Node.js, Express, PostgreSQL"
        />
      </div> */}
    </div>
  );
}

export default Portfolio;
