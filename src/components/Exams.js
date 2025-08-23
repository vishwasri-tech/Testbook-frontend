import React, { useState } from "react";
import "./Exams.css";

import bannerImage from "./assets/banner-image.png"; // Optional: keep or remove
import bannerBackground from "./assets/banner-background.png"; // Background image
import civil from "./assets/civil.png";
import state from "./assets/state.png";
import railway from "./assets/railway.png";
import banking from "./assets/banking.png";
import ssc from "./assets/ssc.png";
import AP from "./assets/AP.png";
import arrow from "./assets/arrow.png";
import Footer from "./Footer";

const Exams = () => {
  const [selected, setSelected] = useState("Civil Service Exams");

  const categories = [
    { id: "Civil Service Exams", icon: civil },
    { id: "State Service Exams", icon: state },
    { id: "Railway Exams", icon: railway },
    { id: "Banking Exams", icon: banking },
    { id: "Ssc Exams", icon: ssc },
  ];

  const subExams = {
    "Civil Service Exams": [
      { id: "UPSC CSE", desc: "Union Public Service Commission Civil Services Exam", icon: civil },
      { id: "CAPF", desc: "Central Armed Police Forces", icon: civil },
    ],
    "State Service Exams": [
      { id: "TSPSC", desc: "Telangana State Public Service Commission", icon: state },
      { id: "APPSC", desc: "Andhra Pradesh Public Service Commission", icon: AP },
    ],
    "Railway Exams": [
      { id: "RRB NTPC", desc: "Non-Technical Popular Categories", icon: railway },
      { id: "RRB Group D", desc: "Group D Recruitment Exam", icon: railway },
    ],
    "Banking Exams": [
      { id: "IBPS PO", desc: "Probationary Officer Exam", icon: banking },
      { id: "SBI Clerk", desc: "Junior Associate (Clerical Cadre)", icon: banking },
    ],
    "Ssc Exams": [
      { id: "SSC CGL", desc: "Combined Graduate Level", icon: ssc },
      { id: "SSC CHSL", desc: "Combined Higher Secondary Level", icon: ssc },
    ],
  };

  return (
    <div className="home-container">
      {/* ----------- Exams Section ----------- */}
      <div className="exam-container">
        <h2>Choose Your Exam. Start Your Journey.</h2>
        <p>
          Explore all major competitive exams and get structured preparation material,
          test series, and expert guidance.
        </p>

        <div className="exam-box">
          {/* Left Column */}
          <ul className="exam-categories">
            {categories.map((cat) => (
              <li
                key={cat.id}
                className={selected === cat.id ? "active" : ""}
                onClick={() => setSelected(cat.id)}
              >
                <img src={cat.icon} alt={cat.id} className="cat-icon" />
                {cat.id}
              </li>
            ))}
          </ul>

          {/* Right Column */}
          <div className="exam-subcategories">
            {subExams[selected]?.length > 0 ? (
              subExams[selected].map((exam) => (
                <div key={exam.id} className="subexam">
                  <img src={exam.icon} alt={exam.id} className="sub-icon" />
                  <div>
                    <strong>{exam.id}</strong> – {exam.desc}
                  </div>
                  <img src={arrow} alt=">" className="arrow-icon" />
                </div>
              ))
            ) : (
              <p className="placeholder">No sub-exams available.</p>
            )}
          </div>
        </div>

        {/* ----------- About Section ----------- */}
        <div className="about-section">
          <h2>About the Exams</h2>
          <p>
            Our platform brings all major competitive exams under one roof. Each category is
            carefully structured to provide the latest exam patterns, syllabus-based questions,
            and expert-designed test series. Whether you’re preparing for Civil Services to serve
            the nation, aiming for State Services, or targeting jobs in Railways, Banking, or SSC,
            we ensure that your preparation is effective, smart, and result-driven.
          </p>

          <ul className="about-list">
            <li>
              <span className="about-icon">📖</span>
              <span><strong>Updated Syllabus Coverage</strong> – Always aligned with the latest exam patterns.</span>
            </li>
            <li>
              <span className="about-icon">📝</span>
              <span><strong>Mock Tests & Previous Papers</strong> – Practice like real exams.</span>
            </li>
            <li>
              <span className="about-icon">📊</span>
              <span><strong>Performance Analysis</strong> – Track strengths and weak areas.</span>
            </li>
            <li>
              <span className="about-icon">🎯</span>
              <span><strong>Exam-Wise Guidance</strong> – Tailored strategies for each category.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ----------- Banner Section ----------- */}
      <div
        className="banner-container"
        style={{ backgroundImage: `url(${bannerBackground})` }}
      >
        <div className="banner-text">
          <h2>Take the Next Step</h2>
          <p>Pick your exam, practice with expert tests, and achieve your dream career.</p>
          <p className="subtext">
            Success in competitive exams doesn't come from luck, it comes from practice.
            Let's begin today.
          </p>
          <button className="start-btn">Start Preparation</button>
        </div>

        {/* Optional: Keep image if needed */}
        <div className="banner-image">
          <img src={bannerImage} alt="Start Preparation" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Exams;