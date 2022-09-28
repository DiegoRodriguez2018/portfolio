import React, { useState } from "react";
import "../stylesheets/styles.scss";
import NodeGarden from "../components/NodeGarden";
import Helmet from "../components/Helmet";

// Sections
import About from "../components/sections/About";
import Skillset from "../components/sections/Skillset";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";

//components
import NavBar from "../components/NavBar";
import Socials from "../components/Socials";
import LandingPageContent from "../components/LandingPageContent";

export default () => {
  const sections = [
    <section />, // Main Page
    <About />,
    <Skillset />,
    // <Portfolio />,
    <Contact />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex(0);
  };

  return (
    <div>
      <Helmet />
      <NavBar setIndex={setCurrentIndex} />
      <main>
        <NodeGarden />
        {/* Screen to detect when user clicks outside sections */}
        <div className="node-garden-screen" onClick={handleClick}></div>
        {currentIndex === 0 && <LandingPageContent />}
        {sections.length > 0 && sections[currentIndex]}
        <Socials />
      </main>
    </div>
  );
};
