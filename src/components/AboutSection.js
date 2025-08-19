import React from "react";
import "./AboutSection.css";
import AboutCard from "./AboutCard";
import aboutImage from "../assets/About1.png"; // ✅ Make sure the image path and name are correct

const AboutSection = () => {
  return (
    <div
      className="about-section"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <div className="overlay">
        <AboutCard />
      </div>
    </div>
  );
};

export default AboutSection;
