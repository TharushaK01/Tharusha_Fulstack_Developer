import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.webp";
const Footer = () => {
  return (
    <div className="footer">
      <hr />

      <div className="footer-items">
        <div className="footer-left">
           <a href="/">
          <img src={logo} />
          </a>
          <h2>Tharusha Kavinda</h2>
          <p>Full-Stack Developer</p>
        </div>

        <div className="footer-right">
          <ul className="nav-menu">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="#about-me" className="nav-link">About Me</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
