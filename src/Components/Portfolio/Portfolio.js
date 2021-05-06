import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
        <div className="portfolio__wrapper">
          <ul className="portfolio__items">
            <li className="portfolio__item">
              <div className="portfolio__item__box">
                <div className="portfolio__item__pic-wrap">
                  <img
                    className="portfolio__item__img"
                    alt="Portfolio img"
                    src="images/UrbanGif/search-macbook.png"
                  />
                </div>
                <div className="portfolio__item__info">
                  <h4 className="portfolio__item__title">UrbanGif</h4>
                  <h4 className="portfolio__item__links">
                    <a
                      href="https://josiehandeveloper.github.io/urban-gifs/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                    <a
                      href="https://github.com/josiehandeveloper/urban-gifs.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </h4>
                  <h5 className="portfolio__item__text">
                    UrbanGifs is a fun application where users search within the
                    UrbanDictionary database and the GIPHY database mashing both
                    results onto a search page! This application is for those
                    who like GIFS and Urban Dictionary, old and young users
                    alike will find this search bar as a fun and dynamic way to
                    search for words and GIFS.
                  </h5>
                  <ul className="portfolio__item__tech">
                    {" "}
                    <h3>Technologies Used:</h3>
                    <li>JavaScript ES6</li>
                    <li>jQuery</li>
                    <li>CSS3</li>
                    <li>HTML 5</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="portfolio__item">
              <div className="portfolio__item__box">
                <div className="portfolio__item__pic-wrap">
                  <img
                    className="portfolio__item__img"
                    alt="Portfolio img"
                    src="images/WatchIt/watchIt1.png"
                  />
                </div>
                <div className="portfolio__item__info">
                  <h4 className="portfolio__item__title">WatchIt</h4>
                  <h4 className="portfolio__item__links">
                    <a
                      href="https://watchit-app-seven.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                    <a
                      href="https://github.com/josiehandeveloper/watchit-app.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Side
                    </a>
                    <a
                      href="https://github.com/josiehandeveloper/watchit-2-server.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Side
                    </a>
                  </h4>
                  <h5 className="portfolio__item__text">
                    Watch It is an application where users can login, search for
                    movies within the Open Movie Database, and create a
                    customized movie query. With more indoor time I was inspired
                    to create this application so users can find new movies to
                    watch that might not be available on certain streaming
                    sites.
                  </h5>
                  <ul className="portfolio__item__tech">
                    {" "}
                    <h3>Technologies Used:</h3>
                    <li>React.js</li>
                    <li>CSS3</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="portfolio__items">
            <li className="portfolio__item">
              <div className="portfolio__item__box">
                <div className="portfolio__item__pic-wrap">
                  <img
                    className="portfolio__item__img"
                    alt="Portfolio img"
                    src="images/Grateful/grateful1.png"
                  />
                </div>
                <div className="portfolio__item__info">
                  <h4 className="portfolio__item__title">Grateful</h4>
                  <h4 className="portfolio__item__links">
                    <a
                      href="https://grateful-app.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                    <a
                      href="https://github.com/josiehandeveloper/grateful-app.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Side
                    </a>
                    <a
                      href="https://github.com/josiehandeveloper/grateful2-server.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Side
                    </a>
                  </h4>
                  <h5 className="portfolio__item__text">
                    Grateful is an application where users can log and practice
                    their gratitude. This application is for everyone who wants
                    to practice mindfulness. This pandemic has put a mental
                    strain on all of us and it's important to recognize the toll
                    it has taken on us and promote practices to achieve a better
                    state of mental health.
                  </h5>
                  <ul className="portfolio__item__tech">
                    {" "}
                    <h3>Technologies Used:</h3>
                    <li>React.js</li>
                    <li>CSS3</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="portfolio__item">
              <div className="portfolio__item__box">
                <div className="portfolio__item__pic-wrap">
                  <img
                    className="portfolio__item__img"
                    alt="Portfolio img"
                    src="images/EnfantFleur/enfantfleur.png"
                  />
                </div>
                <div className="portfolio__item__info">
                  <h4 className="portfolio__item__title">Enfant Fleur</h4>
                  <h4 className="portfolio__item__links">
                    <a
                      href="https://enfantfleur.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                  </h4>
                  <h5 className="portfolio__item__text">
                    Enfant Fleur is an ecommerce store specializing in CBD
                    products. I focused a lot on the aesthetics, using animation
                    and a minimalistic layout to catch the attention of
                    consumers.
                  </h5>
                  <ul className="portfolio__item__tech">
                    {" "}
                    <h3>Technologies Used:</h3>
                    <li>WordPress</li>
                    <li>Elementor Pro</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
