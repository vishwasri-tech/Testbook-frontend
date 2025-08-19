import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";
import "./Navbar.css";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <div className="logo-text"></div>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
         <NavLink
  to="/exams"
  className={({ isActive }) =>
    `nav-link ${isActive ? "active-link" : ""}`
  }
  onClick={closeMenu}
>
  Exams
</NavLink>
        </li>
        <li>
          <NavLink
            to="/test-series"
            className={({ isActive }) =>
               `nav-link ${isActive ? "active-link" : ""}`}
            onClick={closeMenu}
          >
            Test Series
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `nav-link ${isActive ? "active-link" : ""}`}
            onClick={closeMenu}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
               `nav-link ${isActive ? "active-link" : ""}`}
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="login-btn" onClick={closeMenu}>
            <FaSignInAlt style={{ marginRight: "5px" }} />
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
