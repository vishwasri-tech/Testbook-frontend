import React from "react";
import "./Footer.css";

// Import your local images
import logo from "./assets/logo.png"; 
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import youtube from "./assets/youtube.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-desc">
            Your trusted partner for competitive exam<br></br> preparation with expert 
            guidance, mock tests,<br></br> and performance tracking.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Exams</a></li>
            <li><a href="#">Tests (Custom Series)</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-links">
          <h4>Popular Exams</h4>
          <ul>
            <li><a href="#">Civil Services</a></li>
            <li><a href="#">State Services</a></li>
            <li><a href="#">Banking Exams</a></li>
            <li><a href="#">Railway Exams</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        {/* Social Icons */}
        <div className="footer-social">
          <span><strong>Let’s get social :</strong></span>
          <a href="#" className="social facebook"><img src={facebook} alt="Facebook" /></a>
          <a href="#" className="social instagram"><img src={instagram} alt="Instagram" /></a>
          <a href="#" className="social youtube"><img src={youtube} alt="YouTube" /></a>
          <a href="#" className="social linkedin"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="#" className="social twitter"><img src={twitter} alt="Twitter" /></a>
        </div>

        {/* Copyright + Policies */}
        <div className="footer-legal">
          <p>© 2025 ExamPlatform. All Rights Reserved.</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
