import React from "react";
import Navbar from "./components/Navbar"; // path must be correct
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews"; 

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
       <AboutUs />
       <Services/>
       <Clients />
       <Reviews/>
       <Pricing />
        <Contact />
        <Footer/>
    </div>
  );
}

export default App;
