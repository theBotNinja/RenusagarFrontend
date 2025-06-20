import React from "react";
import Navbar from "./UiElements/Navbar";
import Footer from "./UiElements/Footer";
import ImageStrip from "./ImageStrip";
import IndustrySection from "./IndustrySection";
import FacilitiesSection from "./FacilitiesSection";
import HeroSection from "./HeroSection";
import SchoolSection from "./SchoolSection";
import Tourism from "./Tourism";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ImageStrip></ImageStrip>
      <IndustrySection></IndustrySection>
      <FacilitiesSection></FacilitiesSection>
      <SchoolSection></SchoolSection>
      <Tourism></Tourism>
      <Footer></Footer>
    </>
  );
}
