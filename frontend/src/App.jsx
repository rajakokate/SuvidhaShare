import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Solutions from "./components/Solutions";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Solutions />
      <SignUp/>
    
    </div>
  );
};

export default App;
