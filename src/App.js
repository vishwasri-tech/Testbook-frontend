



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CivilServices from "./components/CivilServices";
import ExpertGuidance from "./components/ExpertGuidance";
import TestSeries from "./components/TestSeries";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ marginTop: "80px" }}>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CivilServices />
                <TestSeries />
                <ExpertGuidance />
                <ContentSection />
                <Footer />
              </>
            }
          />

         
          {/* <Route path="/exams" element={<Exams/>} />
          <Route path="/test-series" element={<TestSeries/>} /> */}
          <Route path="/about" element={<AboutUs/>} />
          {/* <Route path="/contact" element={<Contact Us/>} /> */}
          <Route
            path="/login"
            element={<h2 style={{ textAlign: "center", marginTop: "150px" }}>Login Page</h2>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
