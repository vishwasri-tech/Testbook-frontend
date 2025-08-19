import React from "react";
import "./AboutUs.css";
import aboutImage from "./assets/About1.png";
import missionIcon from "./assets/mission.png";
import visionIcon from "./assets/vision.png";
import valuesIcon from "./assets/values.png";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="overlay">
          <div className="hero-text">
            <h1>Empowering Aspirants for Success</h1>
            <p className="subheading">
              Your trusted partner for competitive exam preparation and test practice
            </p>
            <p className="description">
              We are dedicated to helping students achieve their dreams of cracking competitive exams like Civil Services,
              State Services, Railways, Banking, and SSC. With expert-designed test series, mentorship, and real exam
              simulations, we make preparation simple and effective.
            </p>
          </div>
        </div>
      </section>

      {/* How We Started Section */}
      <section className="how-we-started">
        <div className="text-section">
          <h2>How We Started</h2>
          <p className="subtitle">Every big dream begins with a small step.</p>

          <p className="about-description">
            Our journey started with one mission — to make competitive exam preparation simple, accessible, and effective for every student.
          </p>
          <p className="about-description">
            We saw thousands of aspirants struggling without proper guidance, spending endless hours searching for the right study
            material and practice tests. Coaching centers were often expensive, location-bound, and lacked flexibility.
          </p>
          <p className="about-description">
            That’s when we decided to build a platform that transforms how students prepare — making learning smarter, faster, and more personalized.
          </p>
        </div>

        <div className="card-section">
          <div className="card">
            <img src={missionIcon} alt="Mission" />
            <h3>Our Mission</h3>
            <p>
              Guiding students to success with affordable, quality learning, realistic tests, and expert support — anytime, anywhere.
            </p>
          </div>
          <div className="card">
            <img src={visionIcon} alt="Vision" />
            <h3>Our Vision</h3>
            <p>
              To be the most trusted partner for competitive exam success, helping students learn smarter and achieve their dreams.
            </p>
          </div>
          <div className="card">
            <img src={valuesIcon} alt="Values" />
            <h3>Our Values</h3>
            <p>
              Excellence, integrity, innovation, and accessibility — giving every learner the right tools and motivation to succeed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
