import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";
import logo from "./assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src= {logo} alt="Logo" className="logo-img" />
        <div className="logo-text">
    
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#">Exams</a></li>
        <li><a href="#">Test Series</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li>
          <a href="#" className="login-btn">
            <FaSignInAlt style={{ marginRight: "5px" }} />
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
