// src/components/CivilServices.js
import React, { useState, useEffect } from "react";
import "./CivilServices.css";

// Import images from assets
import slide1 from "./assets/slide1.png";
import slide2 from "./assets/slide2.png";
import slide3 from "./assets/slide3.png";
import slide4 from "./assets/slide4.png";
import slide5 from "./assets/slide5.png";

const slides = [
  { id: 1, btn: "Explore Civil Services", img: slide1 },
  { id: 2, btn: "Explore State Services", img: slide2 },
  { id: 3, btn: "Explore Banking", img: slide3 },
  { id: 4, btn: "Explore Railways", img: slide4 },
  { id: 5, btn: "Explore SSC", img: slide5 },
];

const CivilServices = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // auto slide every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <div className="carousel-image">
          <img
            src={slides[current].img}
            alt={`slide-${slides[current].id}`}
            className={`slide-img slide-${slides[current].id}`}
          />
          <button className="explore-btn">{slides[current].btn}</button>
        </div>
      </div>

      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${current === idx ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CivilServices;
