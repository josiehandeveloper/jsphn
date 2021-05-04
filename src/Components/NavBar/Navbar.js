import React, { Component } from "react";
import "../NavBar/Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <a href="#home" className="navbar__logo">
          JSPHN
        </a>
        <div className="menu__icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fal fa-times" : "fal fa-equals"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav__menu active" : "nav__menu"}>
          <li className="nav__links">
            <a href="#about" className="about-link">
              ABOUT
            </a>
          </li>
          <li className="nav__links">
            <a href="#services" className="services-link">
              SERVICES
            </a>
          </li>
          <li className="nav__links">
            <a href="#portfolio" className="portfolio-link">
              PORTFOLIO
            </a>
          </li>
          <li className="nav__links">
            <a href="#contact" className="contact">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
