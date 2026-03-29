import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.webp'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className='navbar'>
      <a href="/" className="nav-logo-link">
        <img className='nav-logo' src={logo} alt='nav-logo' />
      </a>
      {/* <!-- Hamburger Icon (hidden on desktop) --> */}
      <div class="nav-hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {/* <li onClick={() => {
          closeMenu();
          window.location.href = '/';
          className="nav-link"
        }}>
          Home
        </li> */}
        <li>
          <a
            href="/"
            onClick={closeMenu}
            className="nav-link"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about-me"
            onClick={closeMenu}
            className="nav-link"
          >
            About Me
          </a>
        </li>

        <li>
          <a href ="#services"
        onClick={closeMenu}
        className="nav-link"
        >
          Services
          </a> 
          </li>

        <li>
          <a 
          href='#portfolio'
          onClick={closeMenu}
          className="nav-link"
          >Portfolio
            </a>
            </li>
        <li>
          <a 
          href='#contact'
          className="nav-connect" 
          onClick={closeMenu}
          >Connect
          </a></li>
      </ul>
      <div>
        <a
        href='https://www.linkedin.com/in/tharusha-fullstackdeveloper'
      className="nav-connect"
      target="_blank"
      >Connect With Me
      </a>
      </div>
    </div>
  )
}

export default Navbar