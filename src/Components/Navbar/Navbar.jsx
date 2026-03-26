import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../assets/logo.webp'

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
        <img className='nav-logo' src={logo} alt='nav-logo'/>
         {/* <!-- Hamburger Icon (hidden on desktop) --> */}
  <div class="nav-hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li onClick={closeMenu}>Home</li>
            <li onClick={closeMenu}>About Me</li>
            <li onClick={closeMenu}>Services</li>
            <li onClick={closeMenu}>Portfolio</li>
             <li className="nav-connect" onClick={closeMenu}>Connect</li>
            {/* <li>Contact</li> */}
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar