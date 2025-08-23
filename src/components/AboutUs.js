import React from "react";
import "./AboutUs.css";
import heroImage from "./assets/About1.png";
import missionIcon from "./assets/mission.png";
import visionIcon from "./assets/vision.png";
import valuesIcon from "./assets/values.png";
import girlImage from "./assets/girl.png";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="about-container">
      
      {/* Hero Section */}
      <section

        className="hero1"


        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <h1>Empowering Aspirants for Success</h1>
          <p className="hero-subtitle">
            Your trusted partner for competitive exam preparation and test practice
          </p>
          <p className="hero-description">
            We are dedicated to helping students achieve their dreams of cracking
            competitive exams like Civil Services, State Services, Railways, Banking,
            and SSC with expert-designed test series, mentorship, and real exam
            simulations. We make preparation simple and effective.
          </p>
        </div>
      </section>

      {/* How We Started Section */}
      <section className="how-started">
        <h2>How We Started</h2>
        <p className="subtitle">Every big dream begins with a small step.</p>
        <div className="started-content">
          <p>
            Our journey started with one mission — to make competitive exam
            preparation simple, accessible, and effective for every student.
          </p>
          <p>
            We saw thousands of aspirants struggling without proper guidance,
            spending endless hours searching for the right study material and
            practice tests. Coaching centers were often expensive, location-bound,
            and lacked flexibility.
          </p>
          <p>
            That’s when we decided to build a platform that transforms how
            students prepare — making learning smarter, faster, and more personalized.
          </p>
        </div>

        {/* Mission - Vision - Values Cards */}
        <div className="cards">
          <div className="card">
            <img src={missionIcon} alt="Our Mission" />
            <h3>Our Mission</h3>
            <p>
              Guiding students to success with affordable, quality learning,
              realistic tests, and expert support — anytime, anywhere.
            </p>
          </div>
          <div className="card">
            <img src={visionIcon} alt="Our Vision" />
            <h3>Our Vision</h3>
            <p>
              To be the most trusted partner for competitive exam success, helping
              students learn smarter and achieve their dreams.
            </p>
          </div>
          <div className="card">
            <img src={valuesIcon} alt="Our Values" />
            <h3>Our Values</h3>
            <p>
              Excellence, integrity, innovation, and accessibility — giving every
              learner the right tools and motivation to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="why-container">
          <div className="why-text">
            <h2>Why Choose Us</h2>
            <p className="subtitle">
              We’re here to make your exam preparation journey smoother, faster,
              and more effective — so you can focus on what matters most: your success.
            </p>
            <ul className="benefits">
              <li><strong>Expert Mentors</strong> – Learn from experienced teachers.</li>
              <li><strong>Daily Practice</strong> – Stay sharp with daily questions.</li>
              <li><strong>Real Exam Mocks</strong> – Practice like the actual test.</li>
              <li><strong>Progress Tracking</strong> – See where you stand.</li>
              <li><strong>Affordable Plans</strong> – Quality learning at low cost.</li>
              <li><strong>Lifetime Access</strong> – Study anytime you want.</li>
            </ul>
          </div>

          <div className="why-image">
            <img src={girlImage} alt="Happy student" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
