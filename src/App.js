import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CivilServices from "./components/CivilServices";
import ExpertGuidance from "./components/ExpertGuidance";
import TestSeries from "./components/TestSeries";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Exams from "./components/Exams";
import PracticeSection from "./components/PracticeSection";
import PopularTestSeries from "./components/PopularTestSeries";

import SignupScreen from "./components/SignupScreen";
import LoginScreen from "./components/LoginScreen";
import ForgotScreen from "./components/ForgotScreen";

function AppLayout() {
  const location = useLocation();

  // Routes where Navbar should be hidden
  const hideNavbarRoutes = ["/signup", "/login", "/forgot-password"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <div style={{ marginTop: shouldShowNavbar ? "80px" : "0px" }}>
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

          {/* Exams Page */}
          <Route path="/exams" element={<Exams />} />

          {/* ✅ Test Series Page → PracticeSection + Footer */}
          <Route
            path="/testseries"
            element={
              <>
                <PracticeSection />
                <PopularTestSeries />
                <Footer />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/forgot-password" element={<ForgotScreen />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
