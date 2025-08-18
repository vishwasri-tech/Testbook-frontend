import React, { useState } from "react";
import "./ContentSection.css";

// Import your local images
import examIcon from "./assets/exam.png";
import timeIcon from "./assets/time.png";
import successIcon from "./assets/success.png";
import dateIcon from "./assets/date.png";

const contents = [
  {
    id: 1,
    icon: examIcon,
    title: "Exam Tips",
    desc: "Top strategies to crack competitive exams with confidence.",
  },
  {
    id: 2,
    icon: timeIcon,
    title: "Time Management",
    desc: "Daily study routines for maximum productivity.",
  },
  {
    id: 3,
    icon: successIcon,
    title: "Success Stories",
    desc: "Motivating journeys of students who achieved top ranks.",
  },
  {
    id: 4,
    icon: dateIcon,
    title: "Important Dates",
    desc: "Upcoming exam schedules and key deadlines.",
  },
];

const ContentSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="content-section">
      <h2 className="section-title">
        Follow Our Content – Stay Informed, Stay Ahead
      </h2>
      <p className="section-subtitle">
        Get valuable updates, tips, and stories to boost your preparation.
      </p>

      <div className="card-container">
        {contents.map((item) => (
          <div
            key={item.id}
            className={`content-card ${selected === item.id ? "active" : ""}`}
            onClick={() => setSelected(item.id)} // ✅ works on mobile tap
          >
            <img src={item.icon} alt={item.title} className="icon" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
