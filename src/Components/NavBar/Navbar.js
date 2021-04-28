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
        <a href="#home" className="navbar-logo">
          JSPHN
        </a>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fal fa-times" : "fal fa-equals"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-links">
            <a href="#about" className="about">
              ABOUT
            </a>
          </li>
          <li className="nav-links">
            <a href="#services" className="services">
              SERVICES
            </a>
          </li>
          <li className="nav-links">
            <a href="#portfolio" className="portfolio">
              PORTFOLIO
            </a>
          </li>
          <li className="nav-links">
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
