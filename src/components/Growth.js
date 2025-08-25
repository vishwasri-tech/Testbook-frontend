import React from "react";
import "./Growth.css";
import growthImage from "./growth-image.png"; // Replace with your image file path

const Growth = () => {
  return (
    <div className="growth-container">
      <section className="growth-section">
        <div className="growth-image-container">
          <img src={growthImage} alt="Track Your Growth" />
        </div>
        <div className="growth-text-content">
          <h2>Track Your Growth, Step by Step</h2>
          <p>See your progress in real time with clear reports and insights.</p>
          <ul className="growth-steps">
            <li><span>1</span> Attempt tests regularly</li>
            <li><span>2</span> Get instant results</li>
            <li><span>3</span> Analyze your performance</li>
            <li><span>4</span> Track improvement with graphs</li>
            <li><span>5</span> Stay motivated with milestones</li>
          </ul>
        </div>
      </section>

      <section className="why-choose-section">
        <h3>Why Choose Our Test Series?</h3>
        <p>Designed to make your preparation smarter, faster, and exam-ready.</p>

        <div className="features">
          <div className="feature-card">
            <i className="icon">📝</i>
            <h4>Real Exam Simulation</h4>
            <p>Experience the same format, difficulty, and timing as actual exams.</p>
          </div>
          <div className="feature-card highlighted">
            <i className="icon">✅</i>
            <h4>Instant Results</h4>
            <p>Get scores and detailed answers immediately after submission.</p>
          </div>
          <div className="feature-card">
            <i className="icon">❓</i>
            <h4>Expert Questions</h4>
            <p>Crafted by subject specialists with years of experience.</p>
          </div>
          <div className="feature-card">
            <i className="icon">📱</i>
            <h4>Anytime, Anywhere</h4>
            <p>Practice on desktop or mobile at your convenience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Growth;
