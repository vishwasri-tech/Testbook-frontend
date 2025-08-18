import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CivilServices from "./components/CivilServices";
import ExpertGuidance from "./components/ExpertGuidance";
import TestSeries from "./components/TestSeries";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />

     <CivilServices /> 
       <TestSeries />
        <ExpertGuidance />
     

    </div>
  );
}

export default App;
