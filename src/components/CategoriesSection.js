import React, { useState } from "react";
import "./CategoriesSection.css";

import Logo1 from "./assets/Logo1.png";
import Logo2 from "./assets/Logo2.png";
import Logo3 from "./assets/Logo3.png";
import Logo4 from "./assets/Logo4.png";
import Logo5 from "./assets/Logo4.png";
import Logo22 from "./assets/Logo22.png";

const testSeriesData = [
  {
    id: 1,
    category: "Civil Service Exams",
    title: "UPSC CSE",
    example: "Union Public Service Commission Civil Services Exam",
    duration: "2 hours",
    coverage: "History, Polity, Economy, Environment",
    features: "Timed test, instant results, performance analysis",
    ranking: "All-India leaderboard",
    icon: Logo1,
  },
  {
    id: 2,
    category: "Civil Service Exams",
    title: "CAPF",
    example: "Central Armed Police Forces Assistant Commandant",
    duration: "2 hours",
    coverage: "General Studies, Law & Constitution, Current Affairs",
    features: "Sectional timing, detailed feedback",
    ranking: "All-India leaderboard",
    icon: Logo1,
  },
  {
    id: 3,
    category: "State Service Exams",
    title: "TSPSC",
    example: "TSPSC GS Paper I – Chapter-Wise Practice",
    duration: "60 minutes",
    coverage: "State-specific history, geography, polity",
    features: "Topic-wise insights, instant scoring",
    ranking: "State comparison",
    icon: Logo2,
  },
  {
    id: 4,
    category: "State Service Exams",
    title: "APPSC",
    example: "APPSC Group I Prelims Practice",
    duration: "90 minutes",
    coverage: "Andhra Pradesh polity, history, mental ability",
    features: "Past paper style, analytics",
    ranking: "State comparison",
    icon: Logo22,
  },
  {
    id: 5,
    category: "Railway Exams",
    title: "RRB NTPC",
    example: "Non-Technical Popular Categories",
    duration: "90 minutes",
    coverage: "General Awareness, Math, Reasoning",
    features: "Timed test, detailed solutions",
    ranking: "National comparison",
    icon: Logo3,
  },
  {
    id: 6,
    category: "Railway Exams",
    title: "RRB Group D",
    example: "RRB Group D Full-Length Mock",
    duration: "90 minutes",
    coverage: "General Science, Math, Reasoning, GK",
    features: "Full syllabus mock, performance heatmap",
    ranking: "National comparison",
    icon: Logo3,
  },
  {
    id: 7,
    category: "Banking Exams",
    title: "IBPS PO",
    example: "IBPS PO Prelims – Quant & Reasoning Drill",
    duration: "60 minutes",
    coverage: "Quantitative Aptitude, Reasoning",
    features: "Instant results, performance tracking",
    ranking: "All-India leaderboard",
    icon: Logo4,
  },
  {
    id: 8,
    category: "Banking Exams",
    title: "SBI Clerk",
    example: "State Bank Clerk Practice Test",
    duration: "60 minutes",
    coverage: "English, Quant, Reasoning",
    features: "Section-wise timing, review mode",
    ranking: "All-India leaderboard",
    icon: Logo4,
  },
  {
    id: 9,
    category: "Banking Exams",
    title: "IBPS Clerk",
    example: "IBPS Clerk Prelims Drill",
    duration: "45 minutes",
    coverage: "English, Reasoning, Quant",
    features: "Speed drills, accuracy reports",
    ranking: "National comparison",
    icon: Logo4,
  },
  {
    id: 10,
    category: "SSC Exams",
    title: "SSC CGL",
    example: "Staff Selection Commission CGL Tier I Practice",
    duration: "60 minutes",
    coverage: "General Intelligence, Quant, English, GK",
    features: "Topic-wise tests, rank predictor",
    ranking: "All-India leaderboard",
    icon: Logo5,
  },
  {
    id: 11,
    category: "SSC Exams",
    title: "SSC CHSL",
    example: "SSC CHSL Tier I Practice",
    duration: "60 minutes",
    coverage: "English, Reasoning, Quant, GK",
    features: "Adaptive difficulty, instant scoring",
    ranking: "All-India leaderboard",
    icon: Logo5,
  },
];

const categories = [
  "All",
  "Civil Service Exams",
  "State Service Exams",
  "Railway Exams",
  "Banking Exams",
  "SSC Exams",
];

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTests = testSeriesData.filter((test) => {
    const inCategory = activeCategory === "All" || test.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      test.title.toLowerCase().includes(q) ||
      test.example.toLowerCase().includes(q);
    return inCategory && matchesSearch;
  });

  return (
    <div className="categories-wrapper">
      <div className="header-bar">
        <h1 className="title">Test Series by Categories</h1>

        <div className="search-wrap">
          <input
            type="text"
            className="searchBox"
            placeholder="Search Test Series"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="content">
        {/* Left category list */}
        <aside className="sidebar">
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={activeCategory === cat ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Cards area */}
        <section className="cards-frame">
          <div className="cards-inner">
            <div className="cards-row">
              {filteredTests.length > 0 ? (
                filteredTests.map((test) => (
                  <article className="card1" key={test.id}>
                    <div className="card-inner">
                      <div className="card-top">
                        <div className="icon-wrap">
                          <img src={test.icon} className="icon" alt={`${test.title} icon`} />
                        </div>
                        <h3 className="card-title">{test.title}</h3>
                      </div>

                      <p className="example">
                        <strong>Example Test:</strong>
                        <span className="example-text"> {test.example}</span>
                      </p>

                      {/* meta list: no extra bullet span; CSS adds custom bullets */}
                      <ul className="meta-list">
                        <li>
                          <span className="meta-label">Duration:</span>
                          <span className="meta-value">{test.duration}</span>
                        </li>
                        <li>
                          <span className="meta-label">Coverage:</span>
                          <span className="meta-value">{test.coverage}</span>
                        </li>
                        <li>
                          <span className="meta-label">Features:</span>
                          <span className="meta-value">{test.features}</span>
                        </li>
                        <li>
                          <span className="meta-label">Ranking:</span>
                          <span className="meta-value">{test.ranking}</span>
                        </li>
                      </ul>

                      <div className="card-cta">
                        <button className="btn">
                          <span className="btn-text">Take This Test</span>
                          <span className="arrow">→</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <p className="no-results">No test series found.</p>
              )}

              {/* placeholders keep layout visually consistent on large screens */}
              <article className="card placeholder" aria-hidden="true"></article>
              <article className="card placeholder" aria-hidden="true"></article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
