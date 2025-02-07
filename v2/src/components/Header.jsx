import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu visibility

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="nav">
        {/* Logo */}
        <Link to="/">
          <img src="/images/header-logo.png" alt="Header Logo" className="header-image" />
        </Link>

        {/* If isOpen is true, it adds the class 'open' to the className. If isOpen is false, it adds an empty string '', which means no extra class will be applied. */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Navigation List (Links) */}
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/product">Come Train</Link></li>
          <li><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

