import React from "react";
import "./Portfolio.css";
import urbanGif2 from "../../images/UrbanGif/search-macbook.png";
import watchIt1 from "../../images/WatchIt/watchIt1.png";
import grateful1 from "../../images/Grateful/grateful1.png";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="row">
        <div className="column">
          <div className="portfolio-pic">
            <h2>UrbanGifs</h2>
            <img src={urbanGif2} alt="urbanGif2" className="urban_img" />
          </div>
        </div>

        <div className="column">
          <div className="portfolio-info">
            <a
              className="link"
              href="https://josiehandeveloper.github.io/urban-gifs/"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              className="link"
              href="https://github.com/josiehandeveloper/urban-gifs.git"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            <p>
              UrbanGifs is a fun application where users search within the
              UrbanDictionary database and the GIPHY database mashing both
              results onto a search page! I was inspired to create this
              application because I love to use both applications and wanted to
              make it easier and more entertaining to search bar. This
              application is for those who like GIFS and Urban Dictionary, old
              and young users alike will find this search bar as a fun and
              dynamic way to search for words and GIFS.
            </p>
            <h2>Technologies Used:</h2>
            <ul>
              <li>Javascript ES6</li>
              <li>jQuery</li>
              <li>CSS3</li>
              <li>HTML 5</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="portfolio-pic">
              <h2>Watch It</h2>
              <img src={watchIt1} alt="watchIt1" className="watchit_img" />
            </div>
          </div>

          <div className="column">
            <div className="portfolio-info">
              <a
                href="https://watchit-app-seven.vercel.app/"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </a>
              <a
                href="https://github.com/josiehandeveloper/watchit-app"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Client Side
              </a>
              <a
                href="https://github.com/josiehandeveloper/watchit-2-server"
                target="_blank"
                className="link"
                rel="noreferrer"
              >
                Server Side
              </a>
              <p>
                Watch It is an application where users can login, search for
                movies within the Open Movie Database, and create a customized
                movie query. This application is for everyone cinephiles and
                occasional movie viewers alike. With more indoor time I was
                inspired to create this application so users can find new movies
                to watch that might not be available on certain streaming sites.
              </p>
              <h2>Technologies Used:</h2>
              <ul>
                <li>React.js</li>
                <li>CSS3</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="portfolio-pic">
            <h2>Grateful</h2>
            <img src={grateful1} alt="grateful" className="grateful_img" />
          </div>
        </div>

        <div className="column">
          <div className="portfolio-info">
            <a
              href="https://grateful-app.vercel.app/"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              Live Site
            </a>
            <a
              href="https://github.com/josiehandeveloper/grateful-app.git"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              Client Side
            </a>
            <a
              href="https://github.com/josiehandeveloper/grateful-app.git"
              target="_blank"
              className="link"
              rel="noreferrer"
            >
              Server Side
            </a>
            <p>
              Grateful is an application where users can log and practice their
              gratitude. This application is for everyone who wants to practice
              mindfulness. This pandemic has put a mental strain on all of us
              and it's important to recognize the toll it has taken on us and
              promote practices to achieve a better state of mental health.
            </p>
            <h2>Technologies Used:</h2>
            <ul>
              <li>React.js</li>
              <li>CSS3</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
