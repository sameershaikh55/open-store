import React, { useState } from "react";
import Faq from "../components/Faq";
import GetPaid from "../components/GetPaid";
import GoodHands from "../components/GoodHands";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import OurApproach from "../components/OurApproach";
import StackUp from "../components/StackUp";
import Sidebar from "../components/Sidebar";
import Testimonials from "../components/Testimonials";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />
      <div className="upper_section_mobile">
        <Header ClickEvent={OnClick} />
        <Hero />
        <Offers />
      </div>
      <div id="about" className="middle_section">
        <GoodHands />
        <OurApproach />
      </div>
      <GetPaid />
      <div className="pb-5 pb-md-0 upper_section_mobile">
        <StackUp />
      </div>
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
