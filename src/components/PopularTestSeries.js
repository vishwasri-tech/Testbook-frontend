import React from "react";
import "./PopularTestSeries.css";

import upscLogo from "./assets/Logo1.png";
import tspscLogo from "./assets/Logo2.png";
import rrbLogo from "./assets/Logo3.png";
import ibpsLogo from "./assets/Logo4.png";

const testSeries = [
  {
    id: 1,
    logo: upscLogo,
    title: "UPSC CSE",
    example: "Union Public Service Commission Civil Services Exam",
    duration: "2 hours",
    coverage: "History, Polity, Economy, Environment",
    features: "Timed test, instant results, performance analysis",
    ranking: "All-India leaderboard",
    button: "Take This Test",
  },
  {
    id: 2,
    logo: tspscLogo,
    title: "TSPSC",
    example: "TSPSC GS Paper I – Chapter-Wise Practice",
    duration: "60 minutes",
    coverage: "State-specific history, geography, polity",
    features: "Topic-wise insights, instant scoring",
    ranking: "State comparison",
    button: "Take This Test",
  },
  {
    id: 3,
    logo: rrbLogo,
    title: "RRB NTPC",
    example: "Non-Technical Popular Categories",
    duration: "90 minutes",
    coverage: "General Awareness, Math, Reasoning",
    features: "Timed test, detailed solutions",
    ranking: "National comparison",
    button: "Take This Test",
  },
  {
    id: 4,
    logo: ibpsLogo,
    title: "IBPS PO",
    example: "IBPS PO Prelims – Quant & Reasoning Drill",
    duration: "60 minutes",
    coverage: "Quantitative Aptitude, Reasoning",
    features: "Instant results, performance tracking",
    ranking: "All-India leaderboard",
    button: "Take This Test",
  },
];

const PopularTestSeries = () => {
  return (
    <div className="test-series-section">
      <h2 className="section-title">Popular Test Series</h2>
      <div className="test-series-grid">
        {testSeries.map((test) => (
          <div key={test.id} className="test-card">
            <div className="test-header">
              <img src={test.logo} alt={test.title} className="test-logo" />
              <h3 className="test-title">{test.title}</h3>
            </div>
            <p className="test-example">
              <b>Example Test:</b> {test.example}
            </p>
            <ul className="test-details">
              <li>
                <b>Duration:</b> {test.duration}
              </li>
              <li>
                <b>Coverage:</b> {test.coverage}
              </li>
              <li>
                <b>Features:</b> {test.features}
              </li>
              <li>
                <b>Ranking:</b> {test.ranking}
              </li>
            </ul>
            <button className="take-test-btn">
              {test.button} <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTestSeries;