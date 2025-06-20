import React, { useContext } from "react";
import Navbar from "./UiElements/Navbar";
import Footer from "./UiElements/Footer";
import ImageStrip from "./ImageStrip";
import IndustrySection from "./IndustrySection";
import FacilitiesSection from "./FacilitiesSection";
import HeroSection from "./HeroSection";
import SchoolSection from "./SchoolSection";
import Tourism from "./Tourism";
import { Theme } from "../Context/Theme";
export default function Home() {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <>
      <div className={isDark ? "bg-neutral-900" : "bg-white"}>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <ImageStrip></ImageStrip>
        <IndustrySection></IndustrySection>
        <FacilitiesSection></FacilitiesSection>
        <SchoolSection></SchoolSection>
        <Tourism></Tourism>
        <Footer></Footer>
      </div>
    </>
  );
}
