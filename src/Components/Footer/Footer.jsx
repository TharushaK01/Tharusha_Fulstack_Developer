import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.webp";
const Footer = () => {
  return (
    <div className="footer">
      <hr />

      <div className="footer-items">
        <div className="footer-left">
          <img src={logo} />
          <h2>Tharusha Kavinda</h2>
          <p>Full-Stack Developer</p>
        </div>

        <div className="footer-right">
          <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
