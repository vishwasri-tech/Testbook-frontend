// src/components/Growth.js
import React, { useEffect, useState } from "react";
import "./Growth.css";
import growthImage from "./assets/growth-image.png";
import growth1 from "./assets/growth1.png";
import growth2 from "./assets/growth2.png";
import growth3 from "./assets/growth3.png";
import growth4 from "./assets/growth4.png";

const Growth = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);
    const checkHover = (e) => {
      const isHovering = e.target.closest("a, button, .hover-target");
      setHovering(!!isHovering);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", checkHover);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", checkHover);
    };
  }, []);

  const cursorClasses = [
    "custom-cursor",
    clicked ? "clicked" : "",
    hovering ? "hovering" : "",
    !visible ? "hidden" : "",
  ].join(" ");

  return (
    <>
      {/* Custom Cursor */}
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Growth Section Content */}
      <div className="growth-container">
        <section className="growth-section">
          <div className="growth-image-container">
            <img src={growthImage} alt="Track Your Growth" />
          </div>
          <div className="growth-text-content">
            <h2 className="hover-target">Track Your Growth, Step by Step</h2>
            <p className="hover-target">
              See your progress in real time with clear reports and insights.
            </p>
            <ul className="growth-steps">
              <li className="hover-target"><span>1</span> Attempt tests regularly</li>
              <li className="hover-target"><span>2</span> Get instant results</li>
              <li className="hover-target"><span>3</span> Analyze your performance</li>
              <li className="hover-target"><span>4</span> Track improvement with graphs</li>
              <li className="hover-target"><span>5</span> Stay motivated with milestones</li>
            </ul>
          </div>
        </section>

        <section className="why-choose-section">
          <h3 className="hover-target">Why Choose Our Test Series?</h3>
          <p className="hover-target">
            Designed to make your preparation smarter, faster, and exam-ready.
          </p>

          <div className="features">
            <div className="feature-card hover-target">
              <img src={growth1} alt="Real Exam Simulation" className="icon" />
              <h4>Real Exam Simulation</h4>
              <p>Experience the same format, difficulty, and timing as actual exams.</p>
            </div>
            <div className="feature-card hover-target">
              <img src={growth2} alt="Instant Results" className="icon" />
              <h4>Instant Results</h4>
              <p>Get scores and detailed answers immediately after submission.</p>
            </div>
            <div className="feature-card hover-target">
              <img src={growth3} alt="Expert Questions" className="icon" />
              <h4>Expert Questions</h4>
              <p>Crafted by subject specialists with years of experience.</p>
            </div>
            <div className="feature-card hover-target">
              <img src={growth4} alt="Anytime Anywhere" className="icon" />
              <h4>Anytime, Anywhere</h4>
              <p>Practice on desktop or mobile at your convenience.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Growth;
