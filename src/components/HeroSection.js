
// import React from "react";
// import "./HeroSection.css";
// import iconExpert from "./assets/icon-expert.png";
// import iconMock from "./assets/icon-mock.png";
// import iconResults from "./assets/icon-results.png";
// import iconTrack from "./assets/icon-track.png";

// const HeroSection = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content-container">
//         <div className="hero-text-content">
//           <h1>Prepare Smarter. <span>Succeed Faster.</span></h1>
//           <p className="subtitle">One platform for all competitive exams and test series</p>

//           <div className="hero-tags">
//             <span>Test</span>
//             <span className="chevron"></span>
//             <span>Improve</span>
//             <span className="chevron"></span>
//             <span>Achieve</span>
//           </div>

//           <button className="get-started-btn">Get Started →</button>
//         </div>
//       </div>

//       <div className="features">
//         <div className="feature-item">
//           <img src={iconExpert} alt="Expert Questions" />
//           <p><strong>Expert Questions</strong></p>
//         </div>
//         <div className="feature-item">
//           <img src={iconMock} alt="Mock Tests" />
//           <p><strong>Mock Tests</strong></p>
//         </div>
//         <div className="feature-item">
//           <img src={iconResults} alt="Quick Results" />
//           <p><strong>Quick Results</strong></p>
//         </div>
//         <div className="feature-item">
//           <img src={iconTrack} alt="Track Progress" />
//           <p><strong>Track Progress</strong></p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;








import React from "react";
import "./HeroSection.css";
import iconExpert from "./assets/icon-expert.png";
import iconMock from "./assets/icon-mock.png";
import iconResults from "./assets/icon-results.png";
import iconTrack from "./assets/icon-track.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content-container">
        <div className="hero-text-content">
          <h1>Prepare Smarter. <span>Succeed Faster.</span></h1>
          <p className="subtitle">One platform for all competitive exams and test series</p>

          <div className="hero-tags">
            <span>Test</span>
            <span className="chevron"></span>
            <span>Improve</span>
            <span className="chevron"></span>
            <span>Achieve</span>
          </div>

          <button className="get-started-btn">Get Started →</button>
        </div>
      </div>

      <div className="features">
        <div className="feature-item">
          <img src={iconExpert} alt="Expert Questions" />
          <p><strong>Expert Questions</strong></p>
        </div>
        <div className="feature-item">
          <img src={iconMock} alt="Mock Tests" />
          <p><strong>Mock Tests</strong></p>
        </div>
        <div className="feature-item">
          <img src={iconResults} alt="Quick Results" />
          <p><strong>Quick Results</strong></p>
        </div>
        <div className="feature-item">
          <img src={iconTrack} alt="Track Progress" />
          <p><strong>Track Progress</strong></p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;