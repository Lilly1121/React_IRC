// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');

  const navToggle = () => {
    setActive((prev) => (prev === 'nav_menu' ? 'navmenu navactive' : 'nav_menu'));

    // Icon Toggler
    setIcon((prev) => (prev === 'nav_toggler' ? 'navtoggler toggle' : 'nav_toggler'));
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
       Vehicle Service
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        
        <li className="nav__item">
          <Link to="/login" className="nav__link">
            Login
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/signup" className="nav__link">
            Signup
          </Link>
        </li>
        {/* Add other links as needed */}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
