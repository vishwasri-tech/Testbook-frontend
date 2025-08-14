import React from "react";
import "./ExpertGuidance.css";

const ExpertGuidance = () => {
  return (
    <section className="expert-container">
      <div className="expert-image"></div>

      <div className="expert-content">
        <h2>Expert Guidance</h2>
        <p>
          Get personal guidance from experienced mentors who understand your goals.
        </p>

        <ul>
          <li>
            <div className="li-heading">
              🎯 <strong>Personalized Study Plan</strong>
            </div>
            <div className="li-description">
              Mentors create a roadmap tailored to your strengths & weaknesses.
            </div>
          </li>
          <li>
            <div className="li-heading">
              🗣 <strong>1-on-1 Guidance</strong>
            </div>
            <div className="li-description">
              Direct interaction with mentors to clarify doubts & boost confidence.
            </div>
          </li>
          <li>
            <div className="li-heading">
              📅 <strong>Regular Progress Reviews</strong>
            </div>
            <div className="li-description">
              Track your improvement with feedback and actionable tips.
            </div>
          </li>
        </ul>

        <div className="tags">
          <span>✅ Supportive</span>
          <span>✅ Expert Faculty</span>
          <span>✅ Proven Results</span>
        </div>

        <button className="mentor-btn">Connect with a Mentor</button>
      </div>
    </section>
  );
};

export default ExpertGuidance;
