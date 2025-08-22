




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import CivilServices from "./components/CivilServices";
// import ExpertGuidance from "./components/ExpertGuidance";
// import TestSeries from "./components/TestSeries";
// import ContentSection from "./components/ContentSection";
// import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";
// import Exams from "./components/Exams";
// import SignupScreen from "./components/SignupScreen";


// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <div style={{ marginTop: "80px" }}>
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroSection />
//                 <CivilServices />
//                 <TestSeries />
//                 <ExpertGuidance />
//                 <ContentSection />
//                 <Footer />
//               </>
//             }
//           />

         
//            <Route path="/exams" element={<Exams/>} />
//           {/* <Route path="/test-series" element={<TestSeries/>} />  */}
//           <Route path="/about" element={<AboutUs/>} />
//           {/* <Route path="/contact" element={<Contact Us/>} /> */}
//           <Route
//             path="/login"
//             element={<h2 style={{ textAlign: "center", marginTop: "150px" }}>Login Page</h2>}
//           />
//             <Route path="/signup" element={<SignupScreen />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;











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

// import PracticeSection from "./components/PracticeSection"; // 👈 new import

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
                {/* <PracticeSection /> 👈 Added here */}
                <ExpertGuidance />
                <ContentSection />
                <Footer />
              </>
            }
          />

          <Route path="/exams" element={<Exams />} />
          <Route path="/about" element={<AboutUs />} />

          <Route
            path="/login"
            element={
              <h2 style={{ textAlign: "center", marginTop: "150px" }}>
                Login Page
              </h2>
            }
          />
          <Route path="/login"
            element={<LoginScreen/>}
          />
          <Route path="/signup" element={<SignupScreen />} />
          <Route
            path="/forgot-password"
            element={<ForgotScreen/>}/>
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
