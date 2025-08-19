import React, { useState } from "react";
import "./Exams.css";

// Import your icons (replace with your local images)
import civil from "./assets/civil.png";
import state from "./assets/state.png";
import railway from "./assets/railway.png";
import banking from "./assets/banking.png";
import ssc from "./assets/ssc.png";

import arrow from "./assets/arrow.png";
import AP from "./assets/AP.png"; // Andhra Pradesh icon

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
    "State Service Exams": [ { id: "TSPSC", desc: "Telangana State Public Service Commission ", icon: state },
      { id: "APPSC", desc: "Andhra Pradesh Public Service Commission", icon: AP },],
    "Railway Exams": [ { id: "RRB NTPC", desc: "Non-Technical Popular Categories", icon: railway },
      { id: "RRB Group D", desc: "Group D Recruitment Exam", icon: railway },],
    "Banking Exams": [ { id: "IBPS PO", desc: "Probationary Officer Exam", icon: banking },
      { id: "SBI Clerk", desc: "Junior Associate (Clerical Cadre)", icon: banking },],
    "Ssc Exams": [ { id: "SSC CGL", desc: " Combined Graduate Level", icon: ssc },
      { id: "SSC CHSL", desc: "Combined Higher Secondary Level", icon: ssc },],
  };

  return (
    <div className="exam-container">
      <h2>Choose Your Exam. Start Your Journey.</h2>
      <p>
        Explore all major competitive exams and get structured preparation
        material, test series, and expert guidance.
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
          {subExams[selected] && subExams[selected].length > 0 ? (
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
    </div>
  );
};

export default Exams;
