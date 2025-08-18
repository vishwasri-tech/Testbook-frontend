import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CivilServices from "./components/CivilServices";
import ExpertGuidance from "./components/ExpertGuidance";

import TestSeries from "./components/TestSeries";

import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />

      <HeroSection />

     <CivilServices /> 
       <TestSeries />
        <ExpertGuidance />
     


         <ContentSection/>
         <Footer/>

    </div>
  );
}

export default App;
