import React from "react";
import "./PracticeSection.css";
import girlImg from "./assets/girl1.png"; // replace with your actual image

const PracticeSection = () => {
  return (
    <section className="practice-section">
      {/* Left Content */}
      <div className="practice-text">
        <h1>Your Success Starts with Practice</h1>
        <p>
          Attempt structured test series <br />
          Designed by experts for guaranteed improvement.
        </p>
        <span className="tagline">Practice • Perform • Succeed</span>
      </div>

      {/* Right Content */}
      <div className="practice-image">
        <img src={girlImg} alt="Student with laptop" className="girl1-img" />
      </div>
    </section>
  );
};

export default PracticeSection;